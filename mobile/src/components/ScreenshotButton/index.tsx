import { Camera, Trash } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemovedShot: () => void;
}

export function ScreenshotButton({
  screenshot,
  onRemovedShot,
  onTakeShot,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemovedShot : onTakeShot}
    >
      {screenshot ? (
        <View>
          <Image style={styles.image} source={{ uri: screenshot }} />

          <Trash
            size={22}
            color={theme.colors.text_secondary}
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_primary} weight="bold" />
      )}
    </TouchableOpacity>
  );
}
