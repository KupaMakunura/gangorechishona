export interface User {
  readonly id: string;
  first_name: string;
  last_name: string;
  email: string;
  code?: number;
  password?: string;
  password_2?: string;
  gender: string;
  verified: boolean;
  news_letter: boolean;
  is_superuser: boolean;
}

export interface Course {
  readonly id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  picture: string;
  currency: string;
  readonly created_at: string;
  readonly updated_at: string;
}

export interface Transaction {
  readonly id: string;
  user: User | string;
  course: Course | string;
  amount: number;
  method: string;
  currency: string;
  readonly created_at: string;
  readonly updated_at: string;
}

export interface Enrollment {
  readonly id: string;
  user: string;
  course: Course | string;
  date: string;
  readonly created_at: string;
  readonly updated_at: string;
}

export interface NewsLetter {
  readonly id: string;
  title: string;
  news: string;
}

export interface LoginProps {
  email?: string;
  password?: string;
}

export interface BackendQueryParams {
  search?: string;
}

export interface Email {
  name: string;
  email: string;
  message: string;
  subject: string;
}
