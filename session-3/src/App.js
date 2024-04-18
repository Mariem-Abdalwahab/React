import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Welcome from './components/Welcome';
import Guest from './components/Guest';
import List from './components/List';
import ProductsList from './components/ProductsList';

function App() {
  // const [Loggedin, setLoggedin] = useState(false);
  //   let element = Loggedin? <Welcome name = "mariem"/> : <Guest/> ;
  //   // if(Loggedin){
    //   element = <h1>I am Loggedin</h1>
    // }else{
    //   element = <h1>I am not Loggedin</h1>

    // }

  return (
    <div className='App'>
    {/* {element}
    <button onClick={()=>{
      setLoggedin(true);
    }}>log in</button>

    <List></List> */}
    <ProductsList/>

    </div>
  );
}

export default App;
