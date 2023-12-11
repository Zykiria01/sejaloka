import { Outlet } from "react-router-dom";
import { authService } from "../configs/auth/auth";
import LandingPage from "../pages/landingPage/Index";
import { Unauthorized } from "../pages/authorized/Unauthorized";


export function PrivateRoute() {
    if (authService.isAuthorized())
    return (
        <>
            <Outlet/>
        </>

    );

    return <LandingPage/>
}