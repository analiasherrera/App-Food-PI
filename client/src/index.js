import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from '../src/redux/store';
import {Provider} from 'react-redux';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

import dotenv from 'dotenv';
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";




ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root')
);


