export interface iSignupRequest {
  email: string;
  password: string;
  passwordConfirm: string;
}
export interface iSignupResponse {
  email: string;
  id: string;
}

export interface iSignupError {
  message: string;
}
