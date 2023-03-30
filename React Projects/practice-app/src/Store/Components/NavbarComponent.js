
import  { Button, Container, Navbar, Model } from 'react-bootstrap';

const NavbarComponent = () =>{
    return(<>
        <Navbar expent="sm">
            <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Button>Cart 0 Items</Button>
            </Navbar.Collapse>
        </Navbar>
    </>)
} 

export default NavbarComponent;