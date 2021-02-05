import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Icon from '../icon';
import { icons } from '../../assets';
import styles, { HEIGHT } from './styles';

const BaseToast = (props) => {
  const { color, icon, text1, text2, onClose } = props;

  const baseStyle = [
    styles.base,
    styles.borderLeft,
    { borderLeftColor: color }
  ];

  return (
    <View style={baseStyle}>
      <View style={styles.iconContainer}>
        {icon ? (
          <Icon style={styles.icon} source={icon} />
        ) : (
          <View style={styles.icon}
          />
        )}
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.body}>
          {text1 !== undefined && (
            <View>
              <Text style={styles.text1} numberOfLines={1}
              testID="toast_title"
              accessibilityLabel={"toast_title"}
              accessible={true}>
                {text1}
              </Text>
            </View>
          )}
          {text2 !== undefined && (
            <View>
              <Text style={styles.text2} numberOfLines={2}
              testID="toast_desc"
              accessibilityLabel={"toast_desc"}
              accessible={true}>
                {text2}
              </Text>
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.closeButtonContainer} onPress={onClose}
      testID="toast_close_button" accessibilityLabel={"toast_close_button"}>
        <Icon style={styles.closeIcon} source={icons.close} />
      </TouchableOpacity>
    </View>
  );
};

BaseToast.HEIGHT = HEIGHT;

export default BaseToast;
