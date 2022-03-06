import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/media-query.css'
import 'animate.css/animate.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './context/AuthContext'
import ThemeContextProvider from './context/ThemeContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
