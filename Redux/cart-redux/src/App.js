import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Products from './Components/Products';
import Cart from './Components/Cart';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes> {/* my routing... go to NavBar.js to edit links */}
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='Cart' element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
