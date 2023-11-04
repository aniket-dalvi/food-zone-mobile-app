import Toast from 'react-native-toast-message';

export const showSuccessMsg = (message: string) =>
  Toast.show({
    type: 'success',
    text1: message,
  });

export const showErrorMsg = (message: string) =>
  Toast.show({
    type: 'error',
    text1: message,
  });
