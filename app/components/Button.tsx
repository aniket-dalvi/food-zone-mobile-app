import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IButtonProps} from '../types/component';
import {appSize} from '../constants/sizes';
import {useTheme} from '@react-navigation/native';

const Button: React.FC<IButtonProps> = props => {
  const {colors} = useTheme();
  const {btnText, btnStyle, btnTextStyle, onPress} = props;

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors.primary}, btnStyle]}
      {...{onPress}}>
      <Text style={[styles.buttonText, {color: colors.text}, btnTextStyle]}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: appSize.inputHeight,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
  },
  buttonText: {
    fontSize: appSize.inputFontSize,
    fontWeight: 'bold',
  },
});
