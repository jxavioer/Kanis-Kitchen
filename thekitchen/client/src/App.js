import React, {useState} from 'react';

const App = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const menuItems = [
    { id: 1, name: "Edamame", price: 2.00, catagory: 'Appeizier', Description: "" },
    { id: 2, name: "Seaweed Salad", price: 2.50, catagory: 'Appeizier', Description: "" },
    { id: 3, name: "Arizona Roll", price: 6.75, catagory: 'Sushi', Description: 'Yellow Tail, Scallion, and Smelt Roe' },
    { id: 4, name: "Hawaiian Roll", price: 6.75, catagory: 'Sushi', Description: 'Shrimp Tempura, Spicy Tuna, and Spicy Mayo' },
    { id: 5, name: "JB Roll", price: 6.75, catagory: 'Sushi', Description: 'Smoked Salmon, Cream Cheese, Sesame Seed'},
    { id: 6, name: "Rick Roll", price: 19.87, catagory: 'Sushi', Description: 'Shrimp and Asparagus Tempura, Seared Filet Mignon, Green Onion, 1/2lb Cream Cheese'},
    { id: 7, name: "Fried Cheesecake", price: 7.75, catagory: 'Dessert', Description: 'Tempura Cheesecake. Comes with Strawberry or Chocolate Sauce'},
    { id: 8, name: "Fried Icecream", price: 6.75, catagory: 'Dessert', Description: 'Tempura Icecream. Comes with Strawberry or Chocolate Sauce'},
    { id: 9, name: "Green Tea", price: 2.00, catagory: 'Drinks', Description: 'Iced or Hot'},
    { id: 10, name: "Fountain Drink", price: 3.50, catagory: 'Drinks', Description: 'Only Dr. Pepper. Everything else is broken.'}
  ];

  return (
    <div className = "App">
      <h1> Menu </h1>
      {menuItems.map((menuItems => (
        <li key={menuItems.id}>
          <h3>{menuItems.name}</h3>
          <p>{menuItems.Description}</p>
          <p>${menuItems.price.toFixed(2)}</p>
        </li>
      )))}
    </div>
  );
};

export default App;

    
