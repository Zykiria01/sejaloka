
import Cookies from "js-cookie";
import { signOut } from "firebase/auth"
import { auth } from "../configs/firebase"
import Swal from "sweetalert2";

export class AuthService {
    isAuthorized() {
        if (this.getToken() || this.getRefreshToken()) return true;
        return false;
    }

    getToken() {
        const token = Cookies.get("idToken") || Cookies.get("oauthAccessToken");
        return token;
    }

    getRefreshToken() {
        return Cookies.get("refreshToken");
    }

    storeCredentialsToCookie({idToken, refreshToken }) {
        const expires = new Date();
        expires.setSeconds(expires.getSeconds() + 10);
        if (idToken) Cookies.set("idToken", idToken, { expires });
        Cookies.set("refreshToken", refreshToken);

    }

    clearCredentialsFromCookie() {
        Cookies.remove("idToken");
        Cookies.remove("refreshToken");
    }
    async logOut() {
        try {
            await signOut(auth);
            this.clearCredentialsFromCookie();
            await Swal.fire({
                title: "Anda Ingin Keluar?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
              }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire({
                    title: "Berhasil Keluar!",
                    icon: "success"
                  });
                  window.location.href = "/landingPage"
                }
              });
              
        } catch (err) {
            await Swal.fire({
                icon: "error",
                title: "Log out Gagal",
                text: "Anda gagal keluar dari akun Anda!",
              });
        }
        
    }
}

