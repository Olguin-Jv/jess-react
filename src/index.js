import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Componente from './Componente';
import reportWebVitals from './reportWebVitals';

const api = () => {
  return {
    imagen: "otra imagen",
    titulo: "este es el titulo",
    descripcion: "este es el descripcion"
  }
}

const data = api()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Componente 
      titulo={data.titulo}
      imagen={data.imagen}
      descripcion={data.descripcion}
    />
    <App />
    <Componente />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
