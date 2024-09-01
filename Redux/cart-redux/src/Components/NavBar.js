import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const NavBar = () => {
    const countCart = useSelector(state => state.cart);
    return (
        <Navbar fixed = "top" expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to="/" className='navbar-brand'>CART - {countCart.length}</Link> {/* edit link from this => <Navbar.Brand href="#home">CART</Navbar.Brand>... to this <Link to="/" className='navbar-brand'>CART</Link*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link'>Products</Link>
                        <Link to="/Cart" className='nav-link'>Cart</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
