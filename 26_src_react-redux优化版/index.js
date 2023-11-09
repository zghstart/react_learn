import React from "react";
import  {createRoot} from "react-dom/client";
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import store from "./redux/store";
import {Provider} from "react-redux";


let root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    );

// store.subscribe(()=>{
//     root.render(
//             <BrowserRouter>
//                 <App/>
//             </BrowserRouter>);
// })