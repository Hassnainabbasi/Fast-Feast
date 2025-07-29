// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App.jsx';
// import './index.css';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//       <App />
//   </StrictMode>,
// );
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { AdminProvider } from './context/AdminContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <AuthProvider>
   <AdminProvider>
    <App/>
   </AdminProvider>
   </AuthProvider>
  </BrowserRouter>
);
