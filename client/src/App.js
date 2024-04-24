import Header from "./Header";
import Menu from "./Menu";
import { useState } from 'react';

function App() {
    const [cart, setCart] = useState([]);


  return (
      <>
          <Header />
          <Menu />
      </>
  );
}

export default App;
