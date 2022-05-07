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
            <Navbar collapseOnSelect sticky="top" opacity= "25" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="text-info fs-2 fw-bold" href="#home">Sports Gear Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                    <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
                    <Nav className="justify-content-end me-auto">
                        <Nav.Link as = {Link} to="home">Home</Nav.Link>
                        {/* <Nav.Link as = {Link} to="Inventory">Inventory</Nav.Link> */}
                        <Nav.Link as = {Link} to="blogs">Blogs</Nav.Link>
                        
                    </Nav>
                    <Nav>
                    {
                                user && <>
                                <Nav.Link as={Link} to="AddItem">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="Inventory">Manage Items</Nav.Link>
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
                </Container>
            </Navbar>
        </>
    );
};

export default Header;