import { useState } from "react";
import { Form, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import axios from 'axios';
import '../css/Footer.css';

export default function Footer() {

    const [email, setEmail] = useState('')
    
    const handleClick = (e) => {
        e.preventDefault();
        const request = {
            email: email
        }
    
        axios.post('/footer', request).then((res) => {
            console.log(res);
            debugger
            console.log("Email sent successfully!");
        }
        ).catch(() => {
            debugger
            console.log("Email don't sent successfully!");
        });
    };

    return (
        <>
            <div style={{ backgroundColor: "#F5D43E" }}>
                <br /><br /><br /><br />
                <center>
                    <h3><b>Want to stay updated?</b></h3><br />
                    <h4>Subscribe to our newsletter</h4><br />
                    <InputGroup className="mb-3" style={{ width: '40%' }}>
                        <Button variant="outline-secondary" id="button-addon1"
                            style={{ backgroundColor: 'black', color: 'white' }}
                            onClick= {handleClick}
                            // //onClick={() => {
                            //     debugger
                            //     // window.$crisp.push(["set", "session:event", [[["newsletter_subscription"]]]]);
                            //     handleClick(e)
                            >
                            Subscribe
                        </Button>
                        <Form.Control
                            placeholder="Your text..."
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            style={{ textAlign: "right" }}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </InputGroup>
                </center>
                <br /><br /><br /><br />
            </div>
            <div>
                <center>
                    <div style={{ display: 'inline-block', margin: '5%' }}>
                        <Nav.Link><b>Customer Service</b></Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="#"
                            target={"_blank"}
                        >Shipping and Returns</Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="#"
                            target={"_blank"}
                        >Terms</Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="/contact"
                            target={"#"}
                        >Contact</Nav.Link>
                        <Nav.Link 
                            className='footer-link'
                            href="#"
                            target={"_blank"}
                        >About Us</Nav.Link>
                    </div>
                    <div style={{ display: 'inline-block', margin: '5%' }}>
                        <Nav.Link><b>Follow Us</b></Nav.Link>

                        <Nav.Link
                            className='footer-link'
                            href="https://www.instagram.com/"
                            target={"_blank"}>
                            <AiFillInstagram /> Instagram </Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="https://www.facebook.com/"
                            target={"_blank"}>
                            <AiFillFacebook /> Facebook </Nav.Link>
                    </div>
                    <div style={{ display: 'inline-block', margin: '5%' }}>
                        <Nav.Link><b>Stay in Touch</b></Nav.Link>
                        <Nav.Link>Tel: 972-2-5357425</Nav.Link>
                        <Nav.Link>Fax: 972-2-6366217</Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="mailto:ganeshastores@gmail.com">
                            ganeshastores@gmail.com </Nav.Link>

                        <Nav.Link>40,41, Kunnathoor road,Perundurai</Nav.Link>
                    </div>

                </center>
            </div>
        </>
    )
}
