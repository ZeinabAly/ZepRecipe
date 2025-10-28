import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Card from '../components/Card';
import Form from '../components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Categories from '../components/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipes, setSearchRecipe, selectedOrder } from "../features/recipes.slice";
import Filters from '../components/Filters';


const Recipes = () => {


    // REDUX
    const dispatch = useDispatch();

    // Recupérer les Elements
    const {  recipes, searchRecipe, category, country, order } = useSelector((state) => state.recipes);
    

    const getRecipes = (search) => {
        axios.get("https://themealdb.com/api/json/v1/1/search.php?s="+ search)
            .then((res) => dispatch(setRecipes(res.data.meals)));
    }


    
    useEffect(() => {
        if(searchRecipe){
            getRecipes(searchRecipe);
        }else{
            getRecipes("");
        }
    }, [searchRecipe]);



    return (
        <div className="recipes">
            
            <Navbar />
            
            <Form faSearch={faSearch} />

           
            <Filters />

            <div className="cards">
               {
                    recipes && recipes.length > 0 ? (
                        recipes
                        // .filter((meal) => meal.strMealThumb.toLowerCase().includes(searchRecipe.toLowerCase()))
                        .filter((meal) => !category || meal.strCategory.includes(category))
                        .filter((meal) => !country || meal.strArea.includes(country))
                        .sort((a, b) => {
                            if (order === "asc") {
                                return a.strMeal.localeCompare(b.strMeal); // Tri par ordre croissant
                            } else if (order === "desc") {
                                return b.strMeal.localeCompare(a.strMeal); // Tri par ordre décroissant
                            } else{
                                return 0;
                            }
                        })
                        .map((meal) => (
                           <div key={meal.idMeal}>
                                <Card meal={meal} />
                            </div>
                        ))
                   ) : (
                    <p>Aucun repas trouvé</p>
                   )
               }
            </div>
        </div>
    );
};

export default Recipes;