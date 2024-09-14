import axios, { type AxiosError } from "axios";
import { makeAutoObservable } from "mobx";

import { API_URL } from "config";

import type { AuthResponse, User } from "types/auth";

import { returnTypedError } from "utils";

import { login, logout, registration, resendActivationLink } from "services";

// todo: rewrite to function
export default class Store {
  user = {} as User;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: User) {
    this.user = user;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login(email: string, password: string) {
    try {
      const response = await login(email, password);

      localStorage.setItem("token", response.data.accessToken);

      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      const typedError = returnTypedError(error as AxiosError);
      console.error(typedError.response?.data?.message || "Unexpected error");
    }
  }

  async registration(email: string, password: string) {
    try {
      const response = await registration(email, password);

      localStorage.setItem("token", response.data.accessToken);

      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.error(error.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await logout();

      localStorage.removeItem("token");

      this.setAuth(false);
      this.setUser({} as User);
    } catch (error) {
      console.error(error.response?.data?.message);
    }
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true
      });

      localStorage.setItem("token", response.data.accessToken);

      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.error(error.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

  async resendActivationLink(email: string) {
    try {
      await resendActivationLink(email);
    } catch (error) {
      console.log(error.message);
    }
  }
}
