import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from "./components/Footer";

function App() {
  const [hasCats, setHasCats] = useState(true); //Hago uso de mi operador ternario para decir si es verdadero se mostrarán las card, si es falso se mostrará "No tienes gatitos actualmente"

  return (
    <div className='container'>
      <Header title="Adopta a un gatito" />
      <div className='tarjetas'>
        {hasCats ? (
          <>
            <MyCard
              image="https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_1280.jpg"
              title="Choco"
              description={'Este gatito es muy juguetón, le encanta dormir y es una muy buena compañia'}
              colorButton="success"
              textButton="Siames"
            />
            <MyCard
              image="https://cdn.pixabay.com/photo/2017/08/26/14/22/cat-2683212_1280.jpg"
              title="Xena"
              description={'Este gatito le gusta estar siempre acostado y en los brazos de su dueño'}
              colorButton="primary"
              textButton="Esfinge"
            />
            <MyCard
              image="https://cdn.pixabay.com/photo/2017/11/09/21/39/bengal-cat-2934716_1280.jpg"
              title="King"
              description={'Este gatito siempre tiene mucha energía para jugar, es ideal para salir a pasear'}
              colorButton="danger"
              textButton="Bengalí"
            />
            <MyCard
              image="https://cdn.pixabay.com/photo/2020/05/22/23/06/cat-5207440_1280.jpg"
              title="Pelusa"
              description={'Este gatito le encanta que le cepillen su pelo, es un excelente compañero'}
              colorButton="warning"
              textButton="Persa"
            />
          </>
        ) : (
          <p>No tienes gatitos actualmente.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
