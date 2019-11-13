import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider, store } from 'react-redux';
import { createStore } from 'redux';
import state from './reducers/index';
import App from './components/App';

const store = createStore(state);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
