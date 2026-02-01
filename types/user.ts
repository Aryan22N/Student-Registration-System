export interface User {
  uid: string;
  email: string;
  name?: string;
  role?: "admin" | "student";
}
