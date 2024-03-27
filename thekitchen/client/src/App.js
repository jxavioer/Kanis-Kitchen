import React, {useState} from 'react';
import './style-sheet.css'
const App = () => {
    return (
  
    <main>
      <section class = "background">
      <header class = "welcome">
      <h2 class = 'title'>Welcome to Kani's Kitchen!</h2>
      <h3 class = 'title'>Sushi and Kitchen</h3>
      </header>
      
      <div class = 'menu'>
        <h2 class = 'title'>Menu</h2>
        <hr class = "bigHR"></hr>

        <h2>Appetizers</h2>
        <hr class = "smallHR"></hr> 
          <article class = 'item'><p class = "food">Edamame</p><p class = "price">2.00</p></article>
          <article class = 'item'><p class = "food">Seaweed Salad</p><p class = "price">2.50</p></article>
        <h2>Sushi</h2>
        <hr class = "smallHR"></hr> 
          <article class = 'item'><p class = "food">Arizona Roll</p><p class = "price">6.55</p></article>
          <p class = "description">Yellow Tail, Scallion, and Smelt Roe</p>
          <article class = 'item'><p class = "food">Hawaiian Roll</p><p class = "price">6.55</p></article>
          <p class = "description">Shrimp Tempura, Spicy Tuna, and Spicy Mayo</p>
          <article class = 'item'><p class = "food">JB Roll</p><p class = "price">6.75</p></article>
          <p class = "description">Smoked Salmon, Cream Cheese, Sesame Seed</p>
          <article class = 'item'><p class = "food">Rick Roll</p><p class = "price">19.87</p></article>
          <p class = "description">Shrimp and Asparagus Tempura, Seared Filet Mignon, Green Onion, Cream Cheese</p>
        
        <h2>Dessert</h2>
        <hr class = "smallHR"></hr> 
          <article class = 'item'><p class = "food">Fried Icecream</p><p class = "price">7.85</p></article>
          <article class = 'item'><p class = "food">Fried Cheesecake</p><p class = "price">6.85</p></article>
        <h2>Drinks</h2>
        <hr class = "smallHR"></hr> 
          <article class = 'item'><p class = "food">Green Tea</p><p class = "price">2.85</p></article>
          <p class = "description">Iced or Hot</p>
          <article class = 'item'><p class = "food">Fountain Drink</p><p class = "price">3.00</p></article>
          <p class = "description">Only Dr. Pepper. Everything else is broken.</p>
      </div>
      </section>
      <footer>
        <p class = "visit">Visit Kani's Kitchen</p>
        <p class = "address">1234 Univeristy Ave.</p>
        <p class = "phonenumber">727-555-2000</p>
      </footer>
      
    </main>
  );
};

export default App;

    