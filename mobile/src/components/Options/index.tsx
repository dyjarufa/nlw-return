import React from 'react';
import { Text, View } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';

import { styles } from './styles';

import {FeedbackType} from '../Widget'

interface OptionsProps {
  onfeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({onfeedbackTypeChanged}: OptionsProps) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>
        Leave your feedback
      </Text>

        <View style={styles.options}>
          {
            Object
            .entries(feedbackTypes)
            .map(([key, value]) => (
              <Option 
                key={key}
                title={value.title}
                image={value.image}
                onPress={() => onfeedbackTypeChanged(key as FeedbackType)}
              />
              ))        
            }
        </View>
      <Copyright />
    </View>
  );
}