import React, { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../util/contexts/RecipesContext';
import RecipesCard from '../components/cards/RecipesCard';
import * as api from '../util/api';
import Spinner from '../util/Spinner';

const Recipes = () => {
    const { searchQuery } = useContext(RecipesContext);
    const [recipes, setRecipes] = useState(null);

  
    useEffect(() => {
      fetchRecipes();
    }, [searchQuery]);
  
    /**
     * Get list of recipes matching the query
     */
    const fetchRecipes = async () => {
      const response = await api.getRecipes(`filter.php?i=${searchQuery}`);
      const data = await response.data.meals;
      setRecipes(data);
    };
  
    return (
      <div className="Recipes">
        {recipes ? recipes.map((item, index) => {
          let recipeCard = null;
          if (index < 8) {
            recipeCard =
              <RecipesCard
                key={index}
                id={item.idMeal}
                title={item.strMeal}
                image={item.strMealThumb}
              />
          }
          return recipeCard;
        }) : <Spinner/> && <h2> No meals for that query, please try something else. </h2>}
      </div>
    );
  };
  
  export default Recipes;