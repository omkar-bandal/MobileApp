import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'http://ec2-13-232-214-55.ap-south-1.compute.amazonaws.com:3000/api/',
});

export default axiosInstance;
