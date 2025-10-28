import DisplayRecipe from './DisplayRecipe';
import StarRating from './StarRating';
import { useDispatch, useSelector } from 'react-redux';
import { showRecipe } from '../features/recipes.slice';

// import { setSearchRecipe } from "../features/recipes.slice";


const Card = ({meal}) => {
    

    const dispatch = useDispatch();
    const { displayRecipe, scrollPosition, selectedRecipe } = useSelector((state) => state.recipes); // Pour sauvegarder la position de la page
    
    const handeRecipeClick = () => {

        dispatch(showRecipe(meal));

        window.scrollTo({ top: 0, behavior: 'smooth' }); // Remonter en haut avec un effet "smooth"
        
    
    } 



    return (
        <div>
            <div className="card">
                <img src={meal.strMealThumb} alt={"photo " + meal.strMeal} />
                <div className="description">
                    <p className='title'>{meal.strMeal.length > 20 ? meal.strMeal.substring(0, 20) + '...' : meal.strMeal}</p>
                    <StarRating initialRating={0} /> {/* Ajout du composant d'évaluation par étoiles */}
                    <button onClick={()  => handeRecipeClick()}>Voir la recette</button>
                </div>

                 <div className="">
                    {displayRecipe && <DisplayRecipe meal={selectedRecipe} />}
                 </div>
            </div>

            <div></div>
        </div>
    );
};

export default Card;