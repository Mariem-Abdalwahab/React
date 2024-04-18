import logo from './logo.svg';
import './App.css';
import Counter from './Components/CounterClass';
import CounterFn from './Components/CounterFn';
import Effectn from './Components/TryEffect';
import ProductsList from './Components/ProductsList';

function App() {
  return (
    <div className="App">
      {/* <CounterFn/>
      <Counter/>
      <Effectn/> */}
      <ProductsList></ProductsList>
    </div>
  );
}

export default App;
