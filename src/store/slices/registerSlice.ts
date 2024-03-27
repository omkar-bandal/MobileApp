import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {iRegisterRequest} from '../../interfaces/iRegister';

export interface RegisterState extends iRegisterRequest {
  fullName: string;
  nickname: string;
  dataOfBirth: string;
  email: string;
  mobileNumber: string;
  gender: string;
  image: string;
}
const initialState: RegisterState = {
  fullName: '',
  nickname: '',
  dataOfBirth: '',
  email: '',
  mobileNumber: '',
  gender: '',
  image: '',
};

export const registerSlice = createSlice({
  name: 'sRegister',
  initialState,
  reducers: {
    setRegisterData: (state, action: PayloadAction<RegisterState>) => {
      state.fullName = action.payload.fullName;
      state.nickname = action.payload.nickname;
      state.dataOfBirth = action.payload.dataOfBirth;
      state.email = action.payload.email;
      state.mobileNumber = action.payload.mobileNumber;
      state.gender = action.payload.gender;
      state.image = action.payload.image;
    },
  },
});

export const {setRegisterData} = registerSlice.actions;

export const RegisterActions = {setRegisterData};

export default registerSlice.reducer;
