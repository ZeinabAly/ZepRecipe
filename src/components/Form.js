import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchRecipe, selectedCategory, selectedCountry, selectedOrder } from "../features/recipes.slice";



const Form = ({faSearch}) => {

     // REDUX
    const dispatch = useDispatch();

    const { listCategories, category, listCountries, country, order } = useSelector((state) => state.recipes);
    const handleSearch = (e) => {
        dispatch(setSearchRecipe(e.target.value));
    };
    
  
    return (
        <div className="">
            <div className="form">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="search" placeholder="Search..."  onChange={(e) => handleSearch(e)}/>
                    <button type="submit" className="searchBtn" onClick={(e) => handleSearch(e)}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>

                <div className="filtres">
                    <div className=''>
                        <select className="filtre" onChange={(e) => {dispatch(selectedCategory(e.target.value))}}>
                            <option value="" key="" selected>Categories</option>
                            {
                                listCategories && listCategories.length > 0 &&
                                listCategories.map((cat, index) => (
                                    <option value={cat.strCategory} key={index} >{cat.strCategory}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className=''>
                        <select className="filtre" onChange={(e) => {dispatch(selectedCountry(e.target.value))}}>
                            <option value="" key="" selected>Countries</option>
                            {
                                listCountries && listCountries.length > 0 &&
                                listCountries.map((country, index) => (
                                    <option value={country.strArea} key={index} >{country.strArea}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className=''>
                        <select className="filtre" onChange={(e) => {dispatch(selectedOrder(e.target.value))}}>
                            <option value="" key="" selected>Order</option>
                            <option value="asc" key="">Croissant</option>
                            <option value="desc" key="">Decroissant</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;