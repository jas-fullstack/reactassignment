import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import loginReducer from './reducers/loginReducer'; 
import usersReducer from './reducers/usersReducer'; 
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login'
import Userdetails from './Userdetails'
import Search from './components/Search'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const masterReducer = combineReducers({
  login : loginReducer,
  users : usersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(masterReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Router>
    <Provider store={store} >
      <Switch>
          <Route exact path="/">
             <Login />
          </Route>
          <Route exact path="/home">
             <Login />
          </Route>
          <Route exact path="/Userdetails">
             <Userdetails />
          </Route>
          <Route exact path="/Search">
             <Search />
          </Route>
          
          
        </Switch>
    </Provider>
  </Router>
    ,
    document.getElementById('root')
);

