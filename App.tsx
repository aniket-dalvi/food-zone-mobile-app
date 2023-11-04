import React, {StrictMode} from 'react';

import Routes from './app/routes';
import Toast from 'react-native-toast-message';

function App() {
  return (
    <StrictMode>
      <Routes />
      <Toast />
    </StrictMode>
  );
}

export default App;
