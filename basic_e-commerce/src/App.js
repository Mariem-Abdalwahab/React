import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Slider from './Component/Slider';
import ProductList from './Component/ProductList';
import About from './Component/About';
import ProductDetails from './Component/productDetails';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<>
          <Slider/>
          <ProductList/>
        </>}>
        </Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='product/:productId' element={<ProductDetails/>}></Route>
      
      </Routes>
      
    </div>
  );
}

export default App;
