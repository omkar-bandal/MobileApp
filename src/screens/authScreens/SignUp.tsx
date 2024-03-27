import React from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import FooterText from '../../components/FooterText';
import formStyles from '../../styles/formStyle';
// import {
//   iSignupRequest,
//   iSignupResponse,
//   iSignupError,
// } from '../../interfaces/iSignup';
// import {useMutation} from '@tanstack/react-query';
// import signup from '../../services/sSignup';
import {SignupProp} from '../../interfaces/iStackScreenParam';
import useAuthActions from '../../hooks/useAuthActions';
import {useAppSelector} from '../../hooks/useRTK';

const SignUp = ({navigation}: SignupProp) => {
  const signupState = useAppSelector(state => state.sSignup);
  const {setSignupData} = useAuthActions();
  // const mutation = useMutation<
  //   iSignupResponse,
  //   iSignupError,
  //   iSignupRequest,
  //   void
  // >({
  //   mutationFn: signup,
  // });
  const handleChange = (name: string, value: string) => {
    setSignupData({...signupState, [name]: value});
  };
  const handleSignup = () => {
    if (signupState) {
      console.log('Signup Credentials: ', signupState);
      // mutation.mutate(signupState);
      navigation.navigate('Register');
    }
  };
  return (
    <KeyboardAvoidingView>
      <View style={formStyles.container}>
        <ScrollView contentContainerStyle={formStyles.srollcontainer}>
          <Text style={formStyles.title}>Create Your Account</Text>
          <Input
            label="Email"
            defaultValue={signupState?.email}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            onChangeText={(value: string) => handleChange('email', value)}
          />
          <Input
            label="Password"
            defaultValue={signupState?.password}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            secureTextEntry={true}
            onChangeText={(value: string) => handleChange('password', value)}
          />
          <Input
            label="Confirm Password"
            defaultValue={signupState?.passwordConfirm}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            secureTextEntry={true}
            onChangeText={(value: string) =>
              handleChange('passwordConfirm', value)
            }
          />
          <SubmitButton btnName="SignUp" onPress={handleSignup} />
          <FooterText
            endText="Already have an account?"
            linkText="Login"
            toScreen="/Login"
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default SignUp;
