import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { hideRecipe } from '../features/recipes.slice';


const DisplayRecipe = ({meal}) => {

    
    const dispatch = useDispatch();

    
    const { displayRecipe, scrollPosition } = useSelector((state) => state.recipes); // Pour sauvegarder la position de la page

    // LISTE DES INGREDIENTS
    const getIngredientsAndMeasures = () => {
        const ingredients = [];
        for (let i = 0; i <=20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            
            if(ingredient){
                ingredients.push({ ingredient, measure });
            }
        }
        return ingredients;
    }

    const [listIngredients, setListIngredients] = useState(getIngredientsAndMeasures);
     
    // Fermer le composant et retourner à la position sauvegardée
    const handleCloseRecipe = () => {
        dispatch(hideRecipe());
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' }); // Retour à la position d'origine
    };



    return (
        
        <div className="">
            <div className="recipe">
                <button onClick={handleCloseRecipe}>X</button>
                
                <h1 className="recipeTitle">{meal.strMeal}</h1>
                <div className="recipeElements">
                    <div className="img-ingredients">
                        <div>
                            <img src={meal.strMealThumb} alt={"photo " + meal.strMeal} className="recetteImg" />
                            <p style={{marginTop: "20px"}}><span style={{fontWeight: 'bold'}}>Origine</span> : {meal.strArea}</p>
                            <p style={{marginTop: "10px"}}><span style={{fontWeight: 'bold'}}>Catégorie</span> : {meal.strCategory}</p>
                            <p style={{marginTop: "10px"}}><span style={{fontWeight: 'bold'}}>Vidéo</span> : <a href={meal.strYoutube} className="playVideo"><FontAwesomeIcon icon={faCirclePlay}/></a></p>

                        </div>
                       <div>
                            <p style={{fontWeight: 'bold', fontSize: '22px', textAlign: 'center'}}>Ingredients</p>
                            <div className="listIngredients">
                                {
                                    listIngredients.map((item, index) => (
                                        <div key={index}>
                                            <img src={`https://themealdb.com/images/ingredients/${item.ingredient}.png`} alt={item.ingredient} style={{ width: '70px', height: '70px' }} className="imgIngr" />
                                            <p><span style={{fontWeight: 'bold', color: 'green'}}>{item.ingredient}</span> : {item.measure}</p>
                                        </div>
                                    ))
                                    
                                }
                            </div>
                       </div>
                    </div>
                    <div className='instructions'>
                    <p style={{fontWeight: 'bold', fontSize: '22px', textAlign: 'center'}}>Instructions</p>
                        <p style={{marginTop: "20px"}}>{meal.strInstructions}</p>
                        
                        </div>

                </div>
                
            </div>
            <div>

                {/* {ingredients.forEach(ingredient => {
                
                })
               } */}
            </div>
        </div>
    );
};

export default DisplayRecipe;