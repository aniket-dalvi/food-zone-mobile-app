import React from 'react';
import {Text} from 'react-native';
import {ILabelProps} from '../types/component';
import {useTheme} from '@react-navigation/native';
import {textSize} from '../constants/sizes';

const Label: React.FC<ILabelProps> = props => {
  const {colors} = useTheme();
  const {labelText, style: textStyle, type = 'medium'} = props;

  return (
    <Text
      {...props}
      style={[
        {
          fontSize: textSize[type],
          color: colors.primary,
        },
        textStyle,
      ]}>
      {labelText}
    </Text>
  );
};

export default Label;
