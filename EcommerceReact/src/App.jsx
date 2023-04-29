import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import HomePage from "./Pages/HomePage";
import ProductList from "./Pages/ProductList";  

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ProductList />
    </div>
  );
}

export default App;
