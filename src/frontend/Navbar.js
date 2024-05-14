import Nav from 'react-bootstrap/Nav';
import logo from '../Image/ganesha_stores_logo.png'
import cart from '../Image/cart.png'
import home from '../Image/home.png'
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import NoProducts from './NoProducts';



function Navbar() {

    const cartProduct = useSelector((state) => state.cartReducer);
    const navigate = useNavigate();

    return (
        <>
            <Nav justify variant="tabs" style={{ textAlign: "center", backgroundColor: "#F5D43E" }}>
                <Nav.Item>
                    <Nav.Link onClick={()=>navigate('/')} style={{ color: "black" }}><img src={home} style={{ width: 30, height: 30 }} /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>navigate('/about')} style={{ color: "black" }} >About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>navigate('/electronic')} style={{ color: "black" }}>Electronics</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>navigate('/stationery')} style={{ color: "black" }}>Stationery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>navigate('/paper')} style={{ color: "black" }}>Paper</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>navigate('/filing')} style={{ color: "black" }}>Filing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>navigate('/branches')} style={{ color: "black" }}>Our Branches</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>navigate('/cart')} style={{ color: "black" }} ><img src={cart} style={{ width: 30, height: 30 }} /><Badge bg="secondary">{cartProduct.length}</Badge></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>navigate('/cart')} style={{ color: "black" }} ><img src={logo} style={{ width: 30, height: 30 }} /></Nav.Link>
                </Nav.Item>
            </Nav>

            
        </>
    );
}

export default Navbar;
