import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { WishListProvider } from './contexts/WishListContext';

ReactDOM.render(
  <React.StrictMode>
    <WishListProvider>
      <App />
    </WishListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
