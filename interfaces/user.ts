// export interface User {
//   $id: string;
//   name: string;
//   email: string;
//   emailVerification: boolean;
//   phone: string;
//   phoneVerification: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

export interface RegisterProps {
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
}