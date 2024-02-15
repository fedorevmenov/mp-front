import { createAction, createReducer } from "@reduxjs/toolkit";
import { I_UserData } from "./types";
import type { AnyAction } from '@reduxjs/toolkit'





const initialState: I_UserData = {
    id: null,
    login: null,
    email: null,
    phone: null,
    nameFirst: null,
    nameLast: null,
    namePatronymic: null,
    displayName: null,
    birthDate: null,
    gender: null,
}

const selectUserDataAction = createAction<I_UserData>('USER_DATA/set')

const userDataReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        selectUserDataAction,
        (_, action) => action.payload
    )
})

export const setUserData = (userData: I_UserData): AnyAction => (
    selectUserDataAction(userData)
)

export default userDataReducer