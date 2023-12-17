import { Outlet } from "react-router-dom";
import { authService } from "../configs/auth/auth";
import { Unauthorized } from "../pages/authorized/Unauthorized";


export function Private() {
    if (authService.isAuthorized())
    return (
        <>
            <Outlet/>
        </>

    );

    return <Unauthorized/>
}