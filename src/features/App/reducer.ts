import { T_AppThunk, T_Reducer } from "store/types"
import { I_AppStore } from "./types"
import { createSlice, Dispatch } from "@reduxjs/toolkit"





const initialState: I_AppStore = {
    isLogged: true,
    isAppLoading: false,
}



export const isLoggedReducer: T_Reducer<I_AppStore, boolean> = (state, action) => {
    state.isLogged = action.payload
}

export const isAppLoadingReducer: T_Reducer<I_AppStore, boolean> = (state, action) => {
    state.isAppLoading = action.payload
}


const appSlice = createSlice({
    name: 'APP',
    initialState,
    reducers: {
        isLogged: isLoggedReducer,
        isAppLoading: isAppLoadingReducer
    },
})

const {
    isLogged: setIsLoggedAction,
    isAppLoading: setIsAppLoadingAction,
} = appSlice.actions


export const setIsLogged = (isLogged: boolean): T_AppThunk => (dispatch: Dispatch) => {
    dispatch(setIsLoggedAction(isLogged))
}

export const setIsAppLoading = (isAppLoading: boolean): T_AppThunk => (dispatch: Dispatch) => {
    dispatch(setIsAppLoadingAction(isAppLoading))
}




export default appSlice.reducer