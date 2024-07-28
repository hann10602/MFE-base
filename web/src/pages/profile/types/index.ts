export type TSideBarMenuItem = {
  label: string;
  code: string;
  path: string;
};

export type TBasicInformation = {
  fullName: string;
  username: string;
  gender: string;
  email: string;
  phoneNum: string;
  dateOfBirth: string;
};

export type TChangePassword = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type TCartItem = {
  isCheck?: boolean;
  id: number;
  name: string;
  price: number;
  newPrice?: number;
  quantity: number;
  thumbnail: string;
};
