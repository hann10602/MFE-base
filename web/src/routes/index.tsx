import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layouts";
import { LandingPage } from "../pages/landing-page";
import { PolicyPage } from "../pages/policy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <LandingPage />
      </MainLayout>
    ),
  },
  {
    path: "/policy",
    element: (
      <MainLayout>
        <PolicyPage />
      </MainLayout>
    ),
  },
]);
