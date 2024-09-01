import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../RTK/slices/cart-slices';


const Cart = () => {
  const cart = useSelector(state => state.cart);
  const totalPrice = cart.reduce((acc,ele)=>{
    acc += ele.price * ele.amount;
    return acc;
  },0);

  const dispatch = useDispatch();

  return (
    <Container className='py-5 mt-5'>
      <div className='top d-flex justify-content-between w-100 mb-3'>
        <h1> Your Cart</h1>
        <Button variant='danger' onClick={() =>{dispatch(clearCart())}}> Clear</Button>
      </div>
      <h4>Total Price: {totalPrice.toFixed(2)}$</h4>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map(ele=>(
              <tr key={ele.id}>
            <th>{ele.id}</th>
            <th>{ele.title}</th>
            <th> <img src={ele.image} style={{width: "100px"}}></img></th>
            <th>{ele.price}</th>
            <th>{ele.amount}</th>
            <th><Button variant='danger' onClick={() =>{dispatch(removeFromCart(ele))}}>Delete</Button></th>
          </tr>
            ))
          }
          
        </tbody>
      </Table>
    </Container>
  )
}

export default Cart