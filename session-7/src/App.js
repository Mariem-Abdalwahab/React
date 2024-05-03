import logo from './logo.svg';
import './App.css';
import Products from './Component/Products';
import Navbar from './Component/Navbar';
import ProductContext from './Component/Context/ProductContext';


function App() {
  
  return (
    <div className="App">
      <ProductContext>
        
        <Navbar></Navbar>
        <Products></Products>
      </ProductContext>
   
    </div>
  );
}

export default App;
