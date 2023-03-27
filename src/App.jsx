import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import ProductList from "./pages/ProductList"

const App = () => {
  return <><Router>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/products" element={<ProductList/>}/>

      
    </Routes>
  </Router>
  </>
};

export default App;