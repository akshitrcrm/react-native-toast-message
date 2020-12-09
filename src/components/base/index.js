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
    <View style={baseStyle}
    testID="toast_view">
      <View style={styles.iconContainer}
      testID="icon_container_view">
        {icon ? (
          <Icon style={styles.icon} source={icon} />
        ) : (
          <View style={styles.icon} testID={"icon_view"}/>
        )}
      </View>

      <View style={styles.contentContainer}
      testID="toast_content_container">
        <View style={styles.body}
        testID="toast_body">
          {text1 !== undefined && (
            <View testID="toast_title_view">
              <Text style={styles.text1} numberOfLines={1}
              testID="toast_title">
                {text1}
              </Text>
            </View>
          )}
          {text2 !== undefined && (
            <View testID="toast_desc_view">
              <Text style={styles.text2} numberOfLines={2}
              testID="toast_desc">
                {text2}
              </Text>
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.closeButtonContainer} onPress={onClose}
      testID="toast_close_button">
        <Icon style={styles.closeIcon} source={icons.close} />
      </TouchableOpacity>
    </View>
  );
};

BaseToast.HEIGHT = HEIGHT;

export default BaseToast;
