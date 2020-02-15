import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/sass/index.scss';
import { RecipesProvider} from './util/contexts/RecipesContext';

const app = (
    <Router>
    <RecipesProvider>
        <App/>
        </RecipesProvider> 
    </Router>
); 

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
