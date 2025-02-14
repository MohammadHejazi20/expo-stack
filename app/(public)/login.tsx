import React, { useState } from 'react';
import { Alert, SafeAreaView } from 'react-native';

import LoginForm from '~/components/LoginForm';
import useAuthStore from '~/store/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuthStore();

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter a username and password');
    } else {
      login(email, password);
    }
  };

  return (
    <SafeAreaView className="flex flex-1 flex-col justify-center bg-white px-6">
      <LoginForm
        dom={{
          scrollEnabled: false,
        }}
        onChangeEmail={(email) => setEmail(email)}
        onChangePassword={(password) => setPassword(password)}
        email={email}
        password={password}
        onLogin={() => {
          // handleLogin();
          Alert.alert('Login', 'Login button pressed, but not implemented yet');
        }}
      />
    </SafeAreaView>
  );
}
