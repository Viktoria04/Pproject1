import React, { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../util/contexts/RecipesContext';
import RecipesCard from '../components/cards/RecipesCard';
import * as api from '../util/api';
import Spinner from '../util/Spinner';

const Recipes = () => {
    const { searchQuery } = useContext(RecipesContext);
    const [recipes, setRecipes] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchRecipes();
    });

    const fetchRecipes = async () => {
        const response = await api.getRecipes(`filter.php?i=${searchQuery}`);
        const data = await response.data.meals;
        if (!data) {
            setError(true);
        }
        setRecipes(data);
    };

    const recipesRenderer = ({idMeal, strMeal, strMealThumb}, index) => {
        let recipeCard = null;
        if (index < 8) {
            recipeCard =
            <RecipesCard 
                image={strMealThumb}
                title={strMeal}
                key={index}
                id={idMeal}
            />
        }
        return recipeCard;
    }

    const recipesGridRerenderer = () => {
        if (recipes) {
            return recipes.map(recipesRenderer);
        }else if(error) {
            return <h2>No meals for that query, please try something else.</h2>
        }else {
            return <Spinner/>
        }
    }

    return (
        <div className="Recipes">
        {recipesGridRerenderer()}
        </div>
    );
};

export default Recipes;