import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { setCategories, selectedCategory, setCountries } from "../features/recipes.slice";
import { useDispatch, useSelector } from 'react-redux';


const Filters = () => {

    const dispatch = useDispatch();
    const {listCategories, listCountries, order} = useSelector((state) => state.recipes);

    // RECUPERER LES CATEGORIES
    useEffect(() => {
        axios.get("https://themealdb.com/api/json/v1/1/list.php?c=list")
        .then((res) => dispatch(setCategories(res.data.meals))
        )
        console.log(listCategories);
        
    }, [dispatch]);
    
    // RECUPERER LA LISTE DES PAYS
    useEffect(() => {
        axios.get("https://themealdb.com/api/json/v1/1/list.php?a=list")
        .then((res) => dispatch(setCountries(res.data.meals))
        )
    }, [dispatch]);

    
 
    return (
        <div>
            <div className="categories">
                {/* {
                    listCategories && listCategories.length > 0 &&
                    listCategories.map((cat, index) => (
                        <div key={index} className="categorie">{cat.strCategory}</div>
                    ))
                } */}

            </div>
        </div>
    );
};

export default Filters;