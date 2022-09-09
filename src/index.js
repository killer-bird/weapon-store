import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import  store, {persistor}  from './redux/rootReduser';
// import * as serviceWorker from './serviceWorker';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';


if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);


reportWebVitals();
