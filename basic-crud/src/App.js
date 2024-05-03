import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar';
import Sidebar from './components/sidbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Catigories from './Pages/Catigories';
import AddProduct from './Pages/AddProduct';
import ViewProduct from './Pages/ViewProduct';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

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
              <Route  path='Products' element={
                <>
                <Outlet/>
                </>
              }>
              <Route  path='' element={<Products/>}/>
              <Route  path='catigories' element={<Catigories/>}/>
              <Route  path='AddProduct' element={<AddProduct/>}/>
              <Route  path=':itemid' element={<ViewProduct/>}/>
            </Route>
            
            
        </Routes>
      </div>

      </div>
    
      </>
    </div>
  );
}

export default App;
