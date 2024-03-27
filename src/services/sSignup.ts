import axios from 'axios';
import axiosInstance from '../library/axiosInstance';
import {
  iSignupError,
  iSignupResponse,
  iSignupRequest,
} from '../interfaces/iSignup';

const signup = async (formData: iSignupRequest): Promise<iSignupResponse> => {
  try {
    const response = await axiosInstance.post('/auth/signup', formData);
    console.log(response.data.data.user);
    return response.data.data.user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorResponse: iSignupError = error.response?.data || {
        message: 'Unknown error',
      };
      throw new Error(errorResponse.message);
    } else {
      throw new Error('Unknown error occurred');
    }
  }
};
export default signup;
