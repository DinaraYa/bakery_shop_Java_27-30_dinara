import {createSlice} from "@reduxjs/toolkit";


type AuthState = {
    authUser: string | null,
    displayName: string | null
}

const initialState: AuthState = {
    authUser: null,
    displayName: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.authUser = action.payload;
        },
        logoutAction: (state) => {
            state.authUser = null;
        }
    }
})

export const {loginAction, logoutAction} = authSlice.actions;
export const authReducer = authSlice.reducer;