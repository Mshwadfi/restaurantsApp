import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main App component

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create root only once

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
