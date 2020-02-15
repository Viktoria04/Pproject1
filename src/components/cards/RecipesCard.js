import React from 'react';

const RecipesCard = props => {
    return (
        <div className="RecipeCard">
        <img
            className="RecipeCard__image"
            src={props.image}
            alt={props.title}
        />
        <h3 className="RecipeCard__title">{props.title}</h3>
        <button className="RecipeCard__button">Open</button>
        </div>
    );
};

export default RecipesCard;