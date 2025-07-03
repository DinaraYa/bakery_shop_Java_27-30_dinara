
import {updateProfile, signOut, signInWithEmailAndPassword,
    signInWithPopup, GoogleAuthProvider,
    createUserWithEmailAndPassword } from 'firebase/auth';
import type {LoginData, RegisterData} from "../utils/shop-types.ts";
import {auth} from "../configurations/firebase-config.ts";



const logInWithEmail = async (data: LoginData) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    console.log(auth.currentUser);
    return data.email
}

const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(auth.currentUser);
    return Promise.resolve(user.email)
}

export const login = async (data: LoginData) => {
    return data.email === "GOOGLE" ? loginWithGoogle() : logInWithEmail(data)
}

export const registerWithEmailAndPassword = async (data: LoginData) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
    return data.email;
}

export const exit = async () => {
    signOut(auth);
}

export const updateUserProfile = async (data: RegisterData) => {
    const user = auth.currentUser;
    if (user)
        await updateProfile(user, {displayName: data.firstName})
}