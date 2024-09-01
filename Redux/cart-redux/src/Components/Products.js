import React, { useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../RTK/slices/products-slices';
import { addToCart ,removeFromCart } from '../RTK/slices/cart-slices';


const Products = () => {

    const Products = useSelector(state => state.products); // useselector allow you to see your state which you created in store.js
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <Container className='py-5'>
            <Row>
                {
                    Products.map(product => (
                        // console.log(product.id);
                        
                        <Col key={product.id} className='py-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.image}  />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                    {product.description}
                                    </Card.Text>
                                    <Card.Text>
                                    {product.price}$
                                    </Card.Text>
                                    <Button onClick={()=>{dispatch(addToCart(product))}} variant="primary">Add To Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }

            </Row>
        </Container>
    );
}

export default Products