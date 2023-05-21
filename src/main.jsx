import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import DemoCarousel from './Carrusel.jsx';
import NavBar from './NavBar.jsx';
import Stock from './Productos.jsx';
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <DemoCarousel/>
    <NavBar/>
    <Stock/>
  </React.StrictMode>,
)
