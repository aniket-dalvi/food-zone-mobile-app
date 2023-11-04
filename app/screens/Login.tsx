import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Button, Input, Label} from '../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TNativeStackNavigationParams} from '../types/navigation';
import {showSuccessMsg} from '../utils/toast';
import {handleAuthenticationErrors} from '../utils/handleErrors';

type TProps = NativeStackScreenProps<TNativeStackNavigationParams, 'Login'>;

const Login: React.FC<TProps> = props => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onAuthStateChanged = async (user: any) => {
    if (user) {
      const result = await user.getIdToken();
      console.log(result);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  const onLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);

      showSuccessMsg('Welcome to FoodZone!');
      props.navigation.navigate('Home');
    } catch (e: any) {
      handleAuthenticationErrors(e);
    }
  };

  return (
    <View style={styles.container}>
      <Label style={styles.logoText} labelText="FoodZone" />

      <Input
        placeholder="Enter email"
        inputMode="email"
        text={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="Enter password"
        secureTextEntry={true}
        text={password}
        onChangeText={setPassword}
      />

      <Button btnText="Login" onPress={onLogin} />

      <Label
        type="medium"
        onPress={() => props.navigation.navigate('Register')}
        labelText="Not a user?"
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});
