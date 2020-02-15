import React, { useState, useContext } from 'react';
import SearchIcon from '../assets/icons/SearchIcon';
import { RecipesContext } from '../util/contexts/RecipesContext';
import Recipes from '../pages/Recipes';

const MainForm = ({ history }) => {
        const [query, setQuery] = useState('');
        const { setSearchQuery } = useContext(RecipesContext);
      
        const getRecipes = e => {
          e.preventDefault();
          // searchQuery context && push query into the context
          setSearchQuery(query);
          setQuery('');
          history.push('/recipes');
        };

    return (
        <div className="MainForm">
    <form onSubmit={getRecipes} className="MainForm">
      <input type="text" className="MainForm__input" value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="e.g. chicken"
      name="query" />
      <label className="MainForm__label" htmlFor="query">
      {SearchIcon()}
      </label>
    </form>
    </div>
    );
};

export default MainForm;