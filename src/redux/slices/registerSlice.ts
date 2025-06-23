import {createSlice} from "@reduxjs/toolkit";

type RegState = {
    regUser: string
}

const initialState: RegState = {
    regUser: "",
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        registerAction: (state, action) => {
            state.regUser = action.payload;
        }
    }
})

export const {registerAction} = registerSlice.actions;
export const registerReducer = registerSlice.reducer;