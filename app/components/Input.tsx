import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {appSize} from '../constants/sizes';
import {InputProps} from '../types/component';
import {useTheme} from '@react-navigation/native';

const Input: React.FC<InputProps> = props => {
  const {colors} = useTheme();
  const {text, inputStyle} = props;

  return (
    <TextInput
      {...props}
      autoCapitalize="none"
      style={[
        styles.input,
        {borderColor: colors.border, color: colors.primary},
        inputStyle,
      ]}
      value={text}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: appSize.inputHeight,
    width: '100%',
    fontSize: appSize.inputFontSize,
    borderRadius: 8,
    margin: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
  },
});
