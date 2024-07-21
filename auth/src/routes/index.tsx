import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../components/layouts";
import { ForgotPasswordPage } from "../pages/forgot-password";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <AuthLayout>
        <RegisterPage />
      </AuthLayout>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <AuthLayout>
        <ForgotPasswordPage />
      </AuthLayout>
    ),
  },
]);
