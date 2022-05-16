import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { FeedbackType } from "../../components/Widget";
import { ScreenshotButton } from "../../components/ScreenshotButton";
import { Button } from "../../components/Button";

import { theme } from "../../theme";
import { styles } from "./styles";
import { feedbackTypes } from "../../utils/feedbackTypes";

import { ArrowLeft } from "phosphor-react-native";
import { captureScreen } from "react-native-view-shot";

import { api } from "../../libs/api";
import * as FileSystem from 'expo-file-system';

interface Props {
  feedbackType: FeedbackType;
  onFeedbacCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({
  feedbackType,
  onFeedbacCanceled,
  onFeedbackSent,
}: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [screenshot, setScreenshot] = useState<null | string>(null);

  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const [ comment, setComment] = useState('');

  function handleScreenshot() {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    })
      .then((uri) => {
        console.log(uri);
        setScreenshot(uri);
      })
      .catch((err) => console.error("Oops, snapshot failed", err));
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  async function handleSendFeedback() {
    if (isSendingFeedback) {
      return;
    }

    const screenShotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' });

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/jpeg;base64, ${screenShotBase64}`,
        comment
      })

      onFeedbackSent();
    } catch (error) {
      console.log(error);
      setIsSendingFeedback(false);
    }
    setIsSendingFeedback(true);
  }

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onFeedbacCanceled}>
            <ArrowLeft
              size={24}
              weight="bold"
              color={theme.colors.text_secondary}
            />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Image source={feedbackTypeInfo.image} style={styles.image} />
            <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
          </View>
        </View>

        <TextInput
          multiline
          style={styles.input}
          placeholder="Something is not going well? We want to fix it. Tell us in detail what's going on!"
          placeholderTextColor={theme.colors.text_secondary}
          autoCorrect={false}
          onChangeText={setComment}
        />

        <View style={styles.footer}>
          <ScreenshotButton
            onTakeShot={handleScreenshot}
            onRemovedShot={handleScreenshotRemove}
            screenshot={screenshot}
          />
          <Button onPress={handleSendFeedback} isLoading={isSendingFeedback} />
        </View>
      </View>
    
  );
}
