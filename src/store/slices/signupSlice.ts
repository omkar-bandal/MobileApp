import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {iSignupRequest} from '../../interfaces/iSignup';

export interface SignupState extends iSignupRequest {
  email: string;
  password: string;
  passwordConfirm: string;
}

const initialState: SignupState = {
  email: '',
  password: '',
  passwordConfirm: '',
};

export const signupSlice = createSlice({
  name: 'sSignup',
  initialState,
  reducers: {
    setSignupData: (state, action: PayloadAction<SignupState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.passwordConfirm = action.payload.passwordConfirm;
    },
  },
});

export const {setSignupData} = signupSlice.actions;

export const SignupActions = {setSignupData};

export default signupSlice.reducer;
