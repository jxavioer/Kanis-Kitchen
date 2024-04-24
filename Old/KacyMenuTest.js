import React, { useState } from 'react';
import './design.css'
function OrderForm() {
  const [quantities, setQuantities] = useState({
    'Edamame': 0,
    'Seaweed Salad': 0,
    'Arizona Roll': 0,
    'Hawaiian Roll': 0,
    'JB Roll': 0,
    'Rick Roll': 0,
    'Fried Icecream': 0,
    'Fried Cheesecake': 0,
    'Green Tea': 0,
    'Fountain Drink': 0,
  });
  const [total, setTotal] = useState(0);

  const handleQuantityChange = (product, event) => {
    const newQuantities = { ...quantities, [product]: parseInt(event.target.value) };
    setQuantities(newQuantities);
    calculateTotal(newQuantities);
  };

  const calculateTotal = (quantities) => {
    let newTotal = 0;
    Object.keys(quantities).forEach((product) => {
      let price = 0;
      switch (product) {
        case 'Edamame':
          price = 2.00;
          break;
        case 'Seaweed Salad':
          price = 2.50;
          break;
        case 'Arizona Roll':
          price = 6.55;
          break;
        case 'Hawaiian Roll':
            price = 6.55;
            break;
        case 'JB Roll':
          price = 6.75;
          break;
        case 'Rick Roll':
          price = 19.87;
          break;
        case 'Fried Icecream':
          price = 7.85;
          break;
        case 'Fried Cheesecake':
            price = 6.85;
            break;
        case 'Green Tea':
          price = 2.85;
          break;
        case 'Fountain Drink':
          price = 3.00;
          break;
        default:
          price = 0;

      }
      newTotal += price * quantities[product];
    });
    
    setTotal(newTotal.toFixed(2));


  };

  const confirmOrder = (quantities) =>{

  }

 
  const refreshPage = () => {
      window.location.reload();
  };


  const priceMap = {
    'Edamame': 2.00.toFixed(2),
  'Seaweed Salad': 2.50.toFixed(2),
  'Arizona Roll': 6.55.toFixed(2),
  'Hawaiian Roll': 6.55.toFixed(2),
  'JB Roll': 6.75.toFixed(2),
  'Rick Roll': 19.87.toFixed(2),
  'Fried Icecream': 7.85.toFixed(2),
  'Fried Cheesecake': 6.85.toFixed(2),
  'Green Tea': 2.85.toFixed(2),
  'Fountain Drink': 3.00.toFixed(2),
  };
  return (
    <main class = "color">
      <h2>Kani's Kitchen's Order Form</h2>
      <section class="form-group">
      {Object.keys(quantities).map((product) => (
        <div key={product} class = "product">
          <label htmlFor={`quantity-${product}`} class = "product-name">{product}</label>
          <p class = "product-price">${priceMap[product]}</p>
          <input
            type="number"
            id={`quantity-${product}`}
            min="0"
            
            value={quantities[product]}
            onChange={(event) => handleQuantityChange(product, event)}
          />
        </div>
        
      ))}
      </section>
      <div class = "total_section">
        <label htmlFor="total" class = "total">Total:</label>
        <p id="total" class ="total_price">${total}</p>
      </div>
      <div class = "buttons">
       <button onClick={refreshPage}>Refresh Page</button>
       <button onClick={confirmOrder}>Place Order</button>
      </div>
    </main>
  );
}

export default OrderForm;
