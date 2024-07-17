import { AxiosResponse } from "axios";

import type { AuthResponse } from "types/auth";

import { $api } from "http";

export const registration = async (
  email: string,
  password: string
): Promise<AxiosResponse<AuthResponse>> => {
  return $api.post<AuthResponse>("/registration", { email, password });
};

export const login = async (
  email: string,
  password: string
): Promise<AxiosResponse<AuthResponse>> => {
  return $api.post<AuthResponse>("/login", { email, password });
};

export const logout = async (): Promise<void> => {
  return $api.post("/logout");
};

export const resendActivationLink = async (email: string): Promise<string> => {
  try {
    const response = await $api.post("/resend-activation", { email });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to resend activation email");
  }
};
