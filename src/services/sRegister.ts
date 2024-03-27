import axios from 'axios';
import axiosInstance from '../library/axiosInstance';
import {
  iRegisterError,
  iRegisterRequest,
  iRegisterResponse,
} from '../interfaces/iRegister';

const register = async (
  formData: iRegisterRequest,
): Promise<iRegisterResponse> => {
  try {
    const response = await axiosInstance.post('/auth/register', formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorResponse: iRegisterError = error.response?.data || {
        message: 'Unknown error',
      };
      throw new Error(errorResponse.message);
    } else {
      throw new Error('Unknown error occurred');
    }
  }
};
export default register;
