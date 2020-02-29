import React, { useContext } from 'react';
import { HistoryContext }    from '../../util/contexts/HistoryContext';

const RecipesCard = props => {
  const { routerHistory } = useContext(HistoryContext);


const goToRecipe = e => {
    const recipeId = e.target.parentElement.id;
    routerHistory.push(`/recipe#${recipeId}`);
  };

    return (
        <div className="RecipeCard" id={props.id}>
        <img
            className="RecipeCard__image"
            src={props.image}
            alt={props.title}
        />
        <h3 className="RecipeCard__title">{props.title}</h3>
        <button className="RecipeCard__button" onClick={goToRecipe}>Open</button>
        </div>
    );
};

export default RecipesCard;