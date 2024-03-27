import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {iLoginRequest} from '../../interfaces/iLogin';

export interface LoginState extends iLoginRequest {}

const initialState: LoginState = {
  email: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'sLogin',
  initialState,
  reducers: {
    setLoginData: (state, action: PayloadAction<LoginState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const {setLoginData} = loginSlice.actions;

export const LoginActions = {setLoginData};

export default loginSlice.reducer;
