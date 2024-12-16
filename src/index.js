// Entry point of your application.

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

// Create a root for the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <Router>
    <App />
  </Router>
);