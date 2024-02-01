export interface User {
  readonly id: string;
  first_name: string;
  last_name: string;
  email: string;
  code: number;
  password: string;
  verified: boolean;
  readonly created_at: string;
  readonly updated_at: string;
}

export interface SignUpForm
  extends Omit<User, "code" | "verified" | "id" | "created_at" | "updated_at"> {
  password_2: string;
}

export interface SignUpResponse {
  valid?: boolean;
  exists?: boolean;
  created?: boolean;
  status?: "error" | "success";
}
export interface SignInForm
  extends Omit<
    User,
    | "code"
    | "verified"
    | "id"
    | "created_at"
    | "updated_at"
    | "first_name"
    | "last_name"
  > {}
export interface SignInResponse {
  password?: boolean;
  email?: boolean;
  login?: boolean;
  user?: User;
  status?: "error" | "success";
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

export interface SignInForm {
  email: string;
  password: string;
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
