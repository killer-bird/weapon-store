import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProfile = createAsyncThunk(
    "profile/fetchProfile",
    async function () {
        const data = await axios.get("/profile")
        return data
    }
)


export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        card: 0,
        money: 0,
        loader: false
    },
    reducers: {

    },
    extraReducers: {
        [fetchProfile.pending]: (state, action) =>{
            state.loader = true;
        },
        [fetchProfile.fulfilled] : (state, action) => { 
            state.loader = false
            state.card = action.payload.data.card
            state.money = action.payload.data.money
        },

    }
})

const { reducer } = profileSlice;

export default reducer