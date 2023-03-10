import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react';
// import '@stripe/stripe-js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>

        <App />

      </PersistGate>

    </Provider>
  </React.StrictMode>
);
