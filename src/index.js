import React from 'react';
import reactDom from 'react-dom';

import { Provider } from 'react-redux';
import { createStore , applyMiddleware , compose} from 'redux';
// import thunk from 'redux-thunk';

// import reducers from './reducers/index'

import App from './App';
// import "./index.css"

// const store = createStore(reducers , compose(applyMiddleware(thunk)));

reactDom.render(
   
    <App/>,
 
   document.getElementById('root')
);
