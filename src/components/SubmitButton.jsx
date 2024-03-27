import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import btnStyles from '../styles/buttonStyle';

const SubmitButton = ({btnName, ...props}) => {
  return (
    <View style={btnStyles.btnContainerStyle}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={btnStyles.btnStyle}
        {...props}>
        <Text style={btnStyles.btnTextStyle}>{btnName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubmitButton;
