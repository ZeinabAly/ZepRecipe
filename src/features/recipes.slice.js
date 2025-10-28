import { createSlice } from "@reduxjs/toolkit";

export const recipesSlice = createSlice({
    name: "recipes",
    initialState: {
        recipes: null,
        displayRecipe: false,
        selectedRecipe: null,
        listCategories: [],
        category: "",
        country: "",
        order: "",
    },
    reducers: {
        setSearchRecipe: (state, action) => {
            state.searchRecipe = action.payload;
        },

        setRecipes: (state, action) => {
            state.recipes = action.payload;
        }, 
      
        showRecipe: (state, action) => {
            state.displayRecipe = true;
            state.selectedRecipe = action.payload;
            state.scrollPosition = window.scrollY;
        },
        hideRecipe: (state) => {
            state.displayRecipe = false;
            state.selectedRecipe = null;
            state.scrollPosition = window.scrollY;
        },

        setCategories: (state, action) => {
            state.listCategories = action.payload;
        }, 

        selectedCategory: (state, action) => {
            state.category = action.payload;
        }, 
        setCountries: (state, action) => {
            state.listCountries = action.payload;
        }, 

        selectedCountry: (state, action) => {
            state.country = action.payload;
        }, 

        selectedOrder: (state, action) => {
            state.order = action.payload;
        }, 
        
    }
});

export const {setSearchRecipe, setRecipes, showRecipe, hideRecipe, setCategories, selectedCategory, setCountries, selectedCountry, selectedOrder } = recipesSlice.actions;

export default recipesSlice.reducer;