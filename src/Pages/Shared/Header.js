import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    
    return (
        <>
            <Navbar collapseOnSelect sticky="top" opacity= "25" style={{color: 'black'}} bg="light" expand="lg" variant="info">
                <Container fluid>
                    <Navbar.Brand className="text-info fs-2 fw-bold" href="#home">Sports Gear Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="justify-content-end ms-auto ">
                        <Nav.Link as = {Link} to="home">Home</Nav.Link>
                        {/* <Nav.Link as = {Link} to="Inventory">Inventory</Nav.Link> */}
                        <Nav.Link as = {Link} to="blogs">Blogs</Nav.Link>
                        
                    </Nav>
                    <Nav className="text-info">
                    {
                                user && <>
                                <Nav.Link as={Link} to="AddItem">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="Inventory">Manage Inventory</Nav.Link>
                                <Nav.Link as={Link} to="MyItems">My Items</Nav.Link>
                                </>
                            }
                            
                            {
                                user ?
                                    <button className='btn btn-link text-white bg-info text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;