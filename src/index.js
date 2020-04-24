import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// Ini fungsinya untuk props
import { Provider } from "react-redux";
// Si createStore fungsinya untuk manggil reducers dari index.js, sedangkan applyMiddleware ini untuk menggunakan si dispatch
import { createStore, applyMiddleware } from "redux";
// Si reduxThunk ini fungsinya untuk memproses si asynchronous message
import ReduxThunk from "redux-thunk";
// Nah baru deh di import reducersnya buat dijadiin propps, trs karena dia letaknya di index.js jadi /indexnya gaperlu
import reducers from "./redux/reducers";

const reducersGroup = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <React.StrictMode>
    {/* Store ini adalah props bawaan dari provider  */}
    <Provider store={reducersGroup}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
