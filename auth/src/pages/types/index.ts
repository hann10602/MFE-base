export type TLoginForm = {
  username: string;
  password: string;
  remember: boolean;
};

export type TRegisterForm = {
  username: string;
  password: string;
  confirmPassword: string;
};

export type TForgotPasswordForm = {
  email: string;
};
