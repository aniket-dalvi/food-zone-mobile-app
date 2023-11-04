import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Button, Input, Label} from '../components';
import {showSuccessMsg} from '../utils/toast';
import {handleAuthenticationErrors} from '../utils/handleErrors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TNativeStackNavigationParams} from '../types/navigation';

type TProps = NativeStackScreenProps<TNativeStackNavigationParams, 'Register'>;

const Register: React.FC<TProps> = props => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const onRegister = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);

      showSuccessMsg('Welcome to FoodZone!');
      props.navigation.navigate('Home');
    } catch (e: any) {
      handleAuthenticationErrors(e);
    }
  };

  return (
    <View style={styles.container}>
      <Label
        style={styles.message}
        type="medium"
        labelText="Register yourself to order delicious food."
      />

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

      <Input
        placeholder="Confirm password"
        secureTextEntry={true}
        text={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Button btnText="Register" onPress={onRegister} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  message: {
    marginVertical: 20,
    fontWeight: '500',
  },
});
