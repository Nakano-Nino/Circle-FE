export type UserType = {
  id: number;
  full_name: string;
  profile_description?: string;
  username: string;
  photo_profile?: string;
  bio: string;
};

export type UserRegisterType = {
  full_name: string;
  username: string;
  email: string;
  password: string;
}

export type UserLoginType = {
  username: string;
  password: string;
}