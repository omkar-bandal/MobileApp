export interface iLoginRequest {
  email: string;
  password: string;
}
export interface iLoginResponse {
  status: string;
  access_token: string;
  refresh_token: string;
}
export interface iLoginError {
  message: string;
}
