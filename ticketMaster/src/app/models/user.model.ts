export interface User {
  id: number;
  email: string;
  name: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserRegistration {
  name: string;
  email: string;
  password: string;
}

export interface UserResponse {
  message: string;
  user: User;
}
