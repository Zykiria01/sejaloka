import { Navigate, Outlet } from "react-router-dom";
import { authService } from "../configs/auth/auth";

export function ProtectedRoute() {
    if (!authService.isAuthorized()) return <Outlet/>;
    return <Navigate to="/" />;
}