import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import 'tachyons';
import HeaderComp from './HeaderComp';
import FooterComp from './FooterComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(

 
<>
  <HeaderComp />
  <FooterComp />
</>
,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
