import { createSlice } from "@reduxjs/toolkit";

type DefaultSolForWhatType = {
    SolForWhat: string | boolean
}

// export enum SolForWhatARG {SolForLess,SolForMore,SolForDraw,clear}

type DefaultArg = {
    payload: string,
    type: string
}

const initialState :DefaultSolForWhatType = {
    SolForWhat: '',
}


export const SolForWhatSlice = createSlice({
    name: "changeSolForWhat",
    initialState,
    reducers: {
            changeSolForWhat(state, arg:DefaultArg) {
                if (arg.payload === 'SolForLess') {
                    state.SolForWhat = 'SolForLess'
                } else if (arg.payload  === 'SolForMore') {
                    state.SolForWhat = 'SolForMore'
                } else if (arg.payload  === 'SolForDraw') {
                    state.SolForWhat = 'SolForDraw'
                } else if (arg.payload  === 'clear') {
                    state.SolForWhat = ''
                }
            },
        },
})

export default SolForWhatSlice.reducer