export interface iRegisterRequest {
  fullName: string;
  nickname: string;
  dataOfBirth: string;
  email: string;
  mobileNumber: string;
  gender: string;
  image: string;
}
export interface iRegisterResponse {
  fullName: string;
  nickname: string;
  dataOfBirth: string;
  email: string;
  mobileNumber: string;
  gender: string;
  image: string;
}
export interface iRegisterError {
  message: string;
}
