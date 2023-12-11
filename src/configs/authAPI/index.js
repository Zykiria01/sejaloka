import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { googleProvider, auth, facebookProvider } from "../firebase";
import { authService } from "../../configs/auth/auth.js";

export const APIAuth = {
  signInWithCredentials: async ({ email, password }) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const { idToken, refreshToken } = result._tokenResponse;
      authService.storeCredentialsToCookie({ idToken, refreshToken });
    } catch (err) {
      throw new Error(err);
    }
  },

  signUpWithCredentials: async ({ email, password }) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const { idToken, refreshToken } = result._tokenResponse;
      authService.storeCredentialsToCookie({ idToken, refreshToken });
    } catch (err) {
      throw new Error(err);
    }
  },

  signInWithGoogleOAuth: async () => {
    try {
        console.log("result");
        const result = await signInWithPopup(auth, googleProvider);
        const { oauthAccessToken, refreshToken } = result._tokenResponse;
        authService.storeCredentialsToCookie({ oauthAccessToken, refreshToken });
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
    },

    signInWithFacebookAuth: async () => {
        try {
            console.log("disini")
            const result = await signInWithPopup(auth, facebookProvider )
            const { oauthAccessToken, refreshToken } = result._tokenResponse;
            authService.storeCredentialsToCookie({ oauthAccessToken, refreshToken });
        } catch (err) {
            console.error(err);
            throw new Error(err);
        }
    }
};