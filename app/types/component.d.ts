import {
  InputModeOptions,
  TextInputProps,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface IButtonProps {
  btnText: string;
  btnStyle?: ViewStyle;
  btnTextStyle?: TextStyle;
  onPress: () => void;
}

export interface InputProps extends TextInputProps {
  text: string;
  placeholder: string;
  inputStyle?: ViewStyle;
  inputMode?: InputModeOptions;
  onChangeText: (text: string) => void;
}

export interface ILabelProps extends TextProps {
  labelText: string;
  type?: 'small' | 'medium' | 'large';
}
