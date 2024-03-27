import React from 'react';
import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
// import {
//   iRegisterRequest,
//   iRegisterResponse,
//   iRegisterError,
// } from '../../interfaces/iRegister';
// import {useMutation} from '@tanstack/react-query';
// import register from '../../services/sRegister';
import {RegisterProp} from '../../interfaces/iStackScreenParam';
import formStyles from '../../styles/formStyle';
import {Avatar} from '@rneui/themed';
import {useAppSelector} from '../../hooks/useRTK';
import useAuthActions from '../../hooks/useAuthActions';

const Register = ({navigation}: RegisterProp) => {
  const registerState = useAppSelector(state => state.sRegister);
  const {setRegisterData} = useAuthActions();

  // const mutation = useMutation<
  //   iRegisterResponse,
  //   iRegisterError,
  //   iRegisterRequest,
  //   void
  // >({mutationFn: register});

  const handleChange = (name: string, value: string) => {
    setRegisterData({...registerState, [name]: value});
  };

  const handleRegister = () => {
    if (registerState) {
      console.log('Register Data: ', registerState);
      // mutation.mutate(registerState);
      navigation.navigate('Login');
    }
  };
  return (
    <KeyboardAvoidingView>
      <View style={formStyles.container}>
        <ScrollView contentContainerStyle={formStyles.srollcontainer}>
          <Text style={formStyles.registerTitle}>Fill Your Profile</Text>
          <Avatar
            size={150}
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/men/35.jpg'}}
            containerStyle={formStyles.profile}
          />
          <Input
            label="Full Name"
            defaultValue={registerState?.fullName}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            onChangeText={(value: string) => handleChange('fullName', value)}
          />
          <Input
            label="Nikname"
            defaultValue={registerState?.nickname}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            onChangeText={(value: string) => handleChange('nikname', value)}
          />
          <Input
            label="Birth Date"
            defaultValue={registerState?.dataOfBirth}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            onChangeText={(value: string) => handleChange('dataOfBirth', value)}
          />
          <Input
            label="Email"
            defaultValue={registerState?.email}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            onChangeText={(value: string) => handleChange('email', value)}
          />
          <Input
            label="Mobile Number"
            defaultValue={registerState?.mobileNumber}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            onChangeText={(value: string) =>
              handleChange('mobileNumber', value)
            }
          />
          <Input
            label="Gender"
            defaultValue={registerState?.gender}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            onChangeText={(value: string) => handleChange('gender', value)}
          />
          <SubmitButton btnName="Register" onPress={handleRegister} />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
