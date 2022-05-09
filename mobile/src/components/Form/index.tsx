import React, { useState } from "react";
import { TouchableOpacity, View, TextInput, Image, Text } from "react-native";

import { FeedbackType } from "../../components/Widget";
import { ScreenshotButton } from "../../components/ScreenshotButton";
import { Button } from "../../components/Button";

import { theme } from "../../theme";
import { styles } from "./styles";
import { feedbackTypes } from "../../utils/feedbackTypes";

import { ArrowLeft } from "phosphor-react-native";
import { captureScreen } from 'react-native-view-shot';


interface Props {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [ screenshot, setScreenshot ] = useState<null | string>(null);


  function handleScreenshot(){
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    })
    .then(uri => { 
      console.log(uri)
      setScreenshot(uri)
    })
    .catch(err => console.error('Oops, snapshot failed', err));
    }
  
    function handleScreenshotRemove() { 
      setScreenshot(null);
    }

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
          onTakeShot={handleScreenshot}
          onRemovedShot={handleScreenshotRemove}
          screenshot={screenshot}
        />
        <Button isLoading={false}/>
      </View>
    </View>
  );
}
