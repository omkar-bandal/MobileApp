import {configureStore} from '@reduxjs/toolkit';
import SignupReducer from './slices/signupSlice';
import RegisterReducer from './slices/registerSlice';
import LoginReducer from './slices/loginSlice';

export const store = configureStore({
  reducer: {
    sLogin: LoginReducer,
    sSignup: SignupReducer,
    sRegister: RegisterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
