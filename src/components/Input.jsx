import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import inputStyles from '../styles/inputStyles';
const Input = ({label, ...props}) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={inputStyles.inputContainerStyle}>
      <View
        style={
          isFocus
            ? [inputStyles.inputBoxStyle, inputStyles.onFocusStyle]
            : [inputStyles.inputBoxStyle, inputStyles.offFocusStyle]
        }>
        <TextInput
          {...props}
          style={inputStyles.inputStyle}
          placeholder={label}
          placeholderTextColor="#BDBDBD"
          onFocus={() => setIsFocus(!isFocus)}
          onBlur={() => {
            setIsFocus(!isFocus);
          }}
        />
      </View>
    </View>
  );
};

export default Input;
