import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import router from './routes/routes';
import reducers from './Reducers/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
