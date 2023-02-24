import React from 'react';
import { Navbar, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <Navbar bg="danger" variant="dark">
                <Container>
                    <Navbar.Text className='d-block'>
                        <div>
                            <Link>Terms of Use</Link> <br />
                            <Link>Privpcy Policy</Link><br />
                        </div>
                        © 2023 My Website. All rights reserved.

                    </Navbar.Text>
                    <Form>
                        <Form.Control type="email" placeholder="Enter your email" className="mr-sm-2" />
                        <Button variant="outline-light">Subscribe</Button>
                    </Form>
                </Container>
            </Navbar>

        </div>
    );
};

export default Footer;