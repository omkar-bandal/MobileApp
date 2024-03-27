import axios from 'axios';
import axiosInstance from '../library/axiosInstance';
import {iLoginError, iLoginRequest, iLoginResponse} from '../interfaces/iLogin';

const login = async (
  formData: iLoginRequest | void,
): Promise<iLoginResponse> => {
  try {
    const response = await axiosInstance.post('/auth/login', formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorResponse: iLoginError = error.response?.data || {
        message: 'Unknown error',
      };
      throw new Error(errorResponse.message);
    } else {
      throw new Error('Unknown error occurred');
    }
  }
};
export default login;
