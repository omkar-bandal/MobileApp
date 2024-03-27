import {NativeStackScreenProps} from '@react-navigation/native-stack';

type StackScreenParam = {
  Signup: undefined;
  Register: undefined;
  Login: undefined;
  Home: undefined;
};
export default StackScreenParam;

export type SignupProp = NativeStackScreenProps<StackScreenParam, 'Signup'>;
export type RegisterProp = NativeStackScreenProps<StackScreenParam, 'Register'>;
export type LoginProp = NativeStackScreenProps<StackScreenParam, 'Login'>;
export type HomeProp = NativeStackScreenProps<StackScreenParam, 'Home'>;
