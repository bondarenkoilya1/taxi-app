import type { User } from "types/auth";

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};
