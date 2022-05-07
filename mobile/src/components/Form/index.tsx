import { ArrowLeft } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity, View, TextInput, Image, Text } from "react-native";

import { FeedbackType } from "../../components/Widget";
import { ScreenshotButton } from "../../components/ScreenshotButton";
import { Button } from "../../components/Button";

import { theme } from "../../theme";
import { styles } from "./styles";
import { feedbackTypes } from "../../utils/feedbackTypes";

interface Props {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
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
      />
      
      <View style={styles.footer}>
        <ScreenshotButton 
          onTakeShot={() => {}}
          onRemovedShot={() => {}}
          screenshot="http://github.com/dyjarufa.png"
        />
        <Button isLoading={false}/>
      </View>
    </View>
  );
}
