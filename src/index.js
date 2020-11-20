import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducer from './store/reducers/counterReducer';
import resultReducer from './store/reducers/resultReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  ctrReducer:reducer,
  resReducer:resultReducer
});
const store = createStore(rootReducer,applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
); 
console.log(document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
