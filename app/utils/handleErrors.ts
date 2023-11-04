import {showErrorMsg} from './toast';

export const handleAuthenticationErrors = (e: any) => {
  if (e.code === 'auth/email-already-in-use') {
    showErrorMsg('That email address is already in use!');
  }

  if (e.code === 'auth/invalid-email') {
    showErrorMsg('That email address is invalid!');
  }

  showErrorMsg('Something went wrong, please try again!');
};
