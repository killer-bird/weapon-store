import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const fetchWeapon = createAsyncThunk(
    "weapon/fetchWeapon",
    async function () {
        const data = await axios.get("/weapon")
        return data
    }
)


export const weaponSlice = createSlice({
    name: "weapon",
    initialState: {
        weapon: {},
        loader: false
    },
    extraReducers : {
        [fetchWeapon.pending] : (state, action) => {
            state.loader = true;
        },
        [fetchWeapon.fulfilled] : (state, action) => {
            state.loader = false;
            state.weapon = action.payload.data
        }
    }
})

export const getWeaponList = (state, id) => {

    let weaponList = []

    if(id === '0') {
        for ( let type of Object.values(state.weapon.weapon)) {
            
            for ( let item of Object.values(type)) {
                if(!item.wear)
                    weaponList.push(item)
            }
        }        
    } else {
        if(id in state.weapon.weapon) {
            for ( let item of Object.values(state.weapon.weapon[id])) {
                weaponList.push(item)
            } 
        }
    }
    
    
    return weaponList;
}

export const getWeaponItem = (state, id) => {
    if (id) {
        let filterWeapon = []
        for ( let type of Object.values(state.weapon.weapon)) {
            if (filterWeapon.length)
                break
            filterWeapon = Object.values(type).filter(item => item.id === Number(id))
            
        }
        return filterWeapon[0]
    }
}

const { reducer } = weaponSlice;

export default reducer