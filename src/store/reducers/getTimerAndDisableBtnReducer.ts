import { createSlice } from "@reduxjs/toolkit";

type DefaultCheckedStateType = {
    isTimeToDisable: boolean
}

export enum ARG {true,false}

type DefaultArg = {
    payload: ARG,
    type: string
}

const initialState :DefaultCheckedStateType = {
    isTimeToDisable: false,
}


export const timerAndDisableBtnSlice = createSlice({
    name: "termsAndConditionsInput",
    initialState,
    reducers: {
            timerAndDisableBtn(state, arg:DefaultArg) {
                if (arg.payload === ARG.true) {
                    state.isTimeToDisable = true
                } else if (arg.payload  === ARG.false) {
                    state.isTimeToDisable = false
                }
            },
        },
})

export default timerAndDisableBtnSlice.reducer