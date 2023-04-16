import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    origin: null,
    destination: null,
    ambuOrigin: null
}

export const navSlice = createSlice({
    name:"nav",
    initialState,
    reducers:{
        setOrigin: (state,action) =>{
            state.origin = action.payload
        },
        setDestination: (state,action) =>{
            state.destination = action.payload
        },
        setAmbuOrigin: (state,action) =>{
            state.ambuOrigin = action.payload
        },
    }
})

 export const {setOrigin, setDestination, setAmbuOrigin} = navSlice.actions

 export const selectOrigin = (state) => state.nav.origin
 export const selectDestination = (state) => state.nav.destination
 export const selectAmbuOrigin = (state) => state.nav.ambuOrigin

 export default navSlice.reducer