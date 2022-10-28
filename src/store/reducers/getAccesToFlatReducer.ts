import { createSlice } from "@reduxjs/toolkit";

type DefaultAccessToFlatType = {
    isShowFlat: boolean
}

const initialState :DefaultAccessToFlatType = {
    isShowFlat: false,
}


export const accessToFlatSlice = createSlice({
    name: "accessToFlat",
    initialState,
    reducers: {
            accessToFalt(state, payload) {
                if (payload.payload === true) {
                    state.isShowFlat = true
                } else if (payload.payload  === false) {
                    state.isShowFlat = false
                }
            },
        },
})

export default accessToFlatSlice.reducer