import Nav from 'react-bootstrap/Nav';
import logo from '../Image/logo.webp'
import cart from '../Image/cart.png'
import home from '../Image/home.png'
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import NoProducts from './NoProducts';



function Navbar() {

    const cartProduct = useSelector((state) => state.cartReducer);
    const nevigate = useNavigate();

    return (
        <>
            <Nav justify variant="tabs" style={{ textAlign: "center", backgroundColor: "#F5D43E" }}>
                <Nav.Item>
                    <Nav.Link onClick={()=>nevigate('/')} style={{ color: "black" }}><img src={home} style={{ width: 30, height: 30 }} /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>nevigate('/about')} style={{ color: "black" }} >אודותינו</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>nevigate('/electronic')} style={{ color: "black" }}>אלקטרוניקה</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>nevigate('/stationery')} style={{ color: "black" }}>מכשירי כתיבה</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>nevigate('/paper')} style={{ color: "black" }}>נייר</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>nevigate('/filing')} style={{ color: "black" }}>איחסון</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>nevigate('/branches')} style={{ color: "black" }}>החנויות שלנו</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>nevigate('/cart')} style={{ color: "black" }} ><img src={cart} style={{ width: 30, height: 30 }} /><Badge bg="secondary">{cartProduct.length}</Badge></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <img src={logo} alt="logo" />
                </Nav.Item>
            </Nav>

            
        </>
    );
}

export default Navbar;