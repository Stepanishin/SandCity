import { createSlice } from "@reduxjs/toolkit";

type DefaultAccessToFlatType = {
    isChange: boolean
}

const initialState :DefaultAccessToFlatType = {
    isChange: false,
}


export const changeStateSlice = createSlice({
    name: "changeState",
    initialState,
    reducers: {
            changeState(state) {
               state.isChange = !state.isChange
            },
        },
})

export default changeStateSlice.reducer