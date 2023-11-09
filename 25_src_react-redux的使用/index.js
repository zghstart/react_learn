import React from "react";
import  {createRoot} from "react-dom/client";
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import store from "./redux/store";


let root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>);

store.subscribe(()=>{
    root.render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>);
})