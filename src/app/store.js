import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../features/recipes.slice";


export const store = configureStore({
    reducer: {
        recipes: recipesReducer,
    }
})