import React from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import FooterText from '../../components/FooterText';
import formStyles from '../../styles/formStyle';
// import {
//   iLoginResponse,
//   iLoginError,
//   iLoginRequest,
// } from '../../interfaces/iLogin';
// import {useMutation} from '@tanstack/react-query';
// import login from '../../services/sLogin';
import {LoginProp} from '../../interfaces/iStackScreenParam';
import {useAppSelector} from '../../hooks/useRTK';
import useAuthActions from '../../hooks/useAuthActions';

const Login = ({navigation}: LoginProp) => {
  const loginState = useAppSelector(state => state.sLogin);
  const {setLoginData} = useAuthActions();
  // const mutation = useMutation<
  //   iLoginResponse,
  //   iLoginError,
  //   iLoginRequest,
  //   void
  // >({
  //   mutationFn: login,
  // });

  const handleChange = (name: string, value: string) => {
    setLoginData({...loginState, [name]: value});
  };
  const handleLogin = () => {
    if (loginState) {
      console.log('Login Credentials: ', loginState);
      // mutation.mutate(loginState);
      navigation.navigate('Home');
    }
  };
  return (
    <KeyboardAvoidingView>
      <View style={formStyles.container}>
        <ScrollView contentContainerStyle={formStyles.srollcontainer}>
          <Text style={formStyles.title}>Login To Your Account</Text>
          <Input
            label="Email"
            defaultValue={loginState?.email}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            onChangeText={(value: string) => handleChange('email', value)}
          />
          <Input
            label="Password"
            defaultValue={loginState?.password}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            secureTextEntry={true}
            onChangeText={(value: string) => handleChange('password', value)}
          />
          <SubmitButton btnName="Login" onPress={handleLogin} />
          <FooterText
            endText="Not have an account?"
            linkText="Sign Up"
            toScreen="/Signup"
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
