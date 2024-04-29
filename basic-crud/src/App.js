import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar';
import Sidebar from './components/sidbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Catigories from './Pages/Catigories';
import AddProduct from './Pages/AddProduct';
import ViewProduct from './Pages/ViewProduct';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
      <Navbar></Navbar>
      <div className='row m-auto'>
      <div className='col-2 sidebar'>
        <Sidebar></Sidebar>
      </div>
      <div className='col-10'>
        <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route  path='Products' element={<Products/>}>
              
            </Route>
            <Route  path='catigories' element={<Catigories/>}/>
            <Route  path='products/AddProduct' element={<AddProduct/>}/>
            <Route  path='products/:itemid' element={<ViewProduct/>}/>
            
        </Routes>
      </div>

      </div>
      </>
    </div>
  );
}

export default App;
