import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { UserProvider } from './context/userContext';
import { SingleUserProvider } from './context/singleUserContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <SingleUserProvider>
    <App />
      </SingleUserProvider>
    </UserProvider>
  </React.StrictMode>
);
