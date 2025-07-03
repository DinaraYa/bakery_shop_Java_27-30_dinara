import {createSlice} from "@reduxjs/toolkit";
import {ProductType} from "../../utils/shop-types.ts";



type productsState ={
    currProd: ProductType[]
}

const initialState: productsState ={currProd: []}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        prodsUpd: (state, action) => {
            state.currProd = action.payload;
        }
    }
})


export const {prodsUpd} = productSlice.actions;
export const prodsReducer = productSlice.reducer;