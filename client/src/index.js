import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from '../src/redux/store';
import {Provider} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css'


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root')
);


