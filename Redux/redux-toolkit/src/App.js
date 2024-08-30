import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';  // The useSelector hook in Redux is used to extract data from the Redux store's state in a functional React component.
import { useDispatch } from 'react-redux';  // trigeer to activate my actions
import {withdraw_money, deposite_money} from "./redux/actions/bank-actions"
import Products from './components/Products';
import {withdraw, deposit} from './RTK/slices/bank-slice'
import {add_product, get_product} from './RTK/slices/product-slice'
// import {bank} from './RTK/slices/bank-slice'
import {store} from './RTK/store'
import { useEffect } from 'react';


function App() {
  const stateBank = useSelector(state => state.bank);
  const stateProduct = useSelector(state => state.product);
  console.log(store.getState().bank);
  console.log(stateBank);


  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <h1>Action</h1>
            <button onClick={() =>dispatch(withdraw(50))}>withdraw_money</button>
            <button onClick={() =>dispatch(deposit(100))}>deposite_money</button>
            {/* <button onClick={() =>dispatch(add_product({id: 2, title:"product two"}))}>Add product</button> */}
        </div>
        <div className="rigth">
          <h1>State {stateBank}</h1>
          <h1>State {stateBank.title}</h1>
          <span className="amount"></span>
        </div>
      </div>
      {/* <p> You Bank Account: {bankSlice}</p> */}
      <Products></Products>
    </div>
  );
}

export default App;
