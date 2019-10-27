import React from 'react';
import {View, TextInput, Text} from 'react-native';

const Input = ({label, placeholder, value, onChangeText, secureTextEntry}) => {
  const {inputStyle, labelStyle, containerStyle, autoCorrect} = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={autoCorrect}
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}></TextInput>
    </View>
  );
};

const styles = {
  inputStyle: {
    fontSize: 18,
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export {Input};
