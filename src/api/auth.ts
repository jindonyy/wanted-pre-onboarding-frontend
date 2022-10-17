import { FETCH_OPTION, requestAPI } from '@/api/core';

export type UserAuth = {
  email: string;
  password: string;
};

export const fetchSignUpAuth = async (userAuth: UserAuth) => {
  const token = await requestAPI(`/auth/signUp`, FETCH_OPTION.POST<UserAuth>(userAuth));
  return token;
};

export const fetchSignInAuth = async (userAuth: UserAuth) => {
  const token = await requestAPI(`/auth/signIn`, FETCH_OPTION.POST<UserAuth>(userAuth));
  return token;
};
