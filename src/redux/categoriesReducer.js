import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async function () {
        const data = await axios.get("/categories")
        return data
    }
)


export const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        loader: false
    },
    reducers: {

    },
    extraReducers: {
        [fetchCategories.pending]: (state, action) =>{
            state.loader = true;
        },
        [fetchCategories.fulfilled] : (state, action) => { 
            state.loader = false
            state.categories = action.payload.data
        },

    }
})

const { reducer } = categoriesSlice;

export default reducer