import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Get the root DOM element where you want to render the React app
const container = document.getElementById('root');
const root = createRoot(container); // createRoot is now the new API in React 18

// Render the App component using the new API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
