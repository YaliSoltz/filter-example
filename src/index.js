import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from "./component/counter";
import Buttons from './component/buttons';
import GreetMe from './component/greetMe';
import Moviestest from './component/6.12/moviesTest';
import DropDownMenu from './component/home work/DDMenu';
import Filter from './component/home work/filter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Filter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
