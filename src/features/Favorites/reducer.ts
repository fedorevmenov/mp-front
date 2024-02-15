
import { I_Favorites } from "./types";
import { AnyAction, PayloadAction, createAction, createReducer } from "@reduxjs/toolkit";




const initialState: I_Favorites = []


const addToFavoritesAction = createAction<number>('FAVORITES/add')
const removeFromFavoritesAction = createAction<number>('FAVORITES/remove')


const favoritesReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        addToFavoritesAction,
        (state: any, action: PayloadAction<number>) => [...state, action.payload]
    )

    builder.addCase(
        removeFromFavoritesAction,
        (state: any, action: PayloadAction<number>) => (
            state.filter((favoriteId: number) => favoriteId !== action.payload)
        )
    )
})


export const addToFavorites = (favoriteId: number): AnyAction => (
    addToFavoritesAction(favoriteId)
)

export const removeFromeFavorites = (favoriteId: number): AnyAction => (
    removeFromFavoritesAction(favoriteId)
)

export default favoritesReducer