"use client";

import AppRoutes from "./routes/AppRoutes.jsx";
import { AuthProvider } from "./admin/context/AuthContext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}