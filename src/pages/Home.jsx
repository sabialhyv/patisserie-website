import React from 'react';
import About from './About';
import Products from './Products';
import Contact from './Contact';

function Home() {
  return (
    <>
      <div id='/' className="home w-full tracking-widest p-16 relative">
        <h1 className="text-red-300 text-7xl my-3">Maison Fraise</h1>
        <p className="text-5xl text-yellow-500">Welcome to our sweet pastry shop!</p>
        <p className="absolute top-[60%] left-[50%] max-w-[300px] text-4xl tracking-[10px]">
          we are here to bake happy you!
        </p>
      </div>


      <section id="about"><About /></section>
      <section id="products"><Products /></section>
      <section id="contact"><Contact /></section>
    </>

  );
}

export default Home;
