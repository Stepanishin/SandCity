import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { firebaseApi } from "./reducers/firebase.api";
import timerAndDisableBtnSlice from './reducers/getTimerAndDisableBtnReducer'
import accessToFlatSlice from './reducers/getAccesToFlatReducer'
import SolForWhatSlice from './reducers/getSolForWhatReducer'




const rootReducer = combineReducers({
    [firebaseApi.reducerPath]: firebaseApi.reducer,
    timerAndDisableBtnSlice,
    accessToFlatSlice,
    SolForWhatSlice
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(firebaseApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
