import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Link, } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../Context/UserContext';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';



const Header = () => {

    const { user, userSignOut, } = useContext(AuthContext);

    const signOut = () => {
        userSignOut()
            .then(() => { })
            .catch(err => {
                console.error(err);
            });
    }
    return (
        <div className='mb-3'>
            <Navbar className='text-white' fixed="top" sticky='absolute' bg="danger" expand="lg">
                <Container>
                    <Navbar.Brand ><Link className='h5 text-white'>OctopusNews</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-white">
                            <Nav.Link className="me-auto text-white" href="/">Home</Nav.Link>
                            <Nav.Link className="me-auto text-white" href="/">All news</Nav.Link>

                        </Nav>
                        <Nav.Item>
                            {user?.displayName ? <span>Hello, {user.displayName}</span> : null}
                        </Nav.Item>
                        <Link to={'/profile'} className='ps-1 px-3'>
                            {user?.photoURL ? <Image src={user.photoURL} style={{ height: '30px' }} roundedCircle></Image> : <FaUser></FaUser>}
                        </Link>
                        <Nav.Item>
                            {
                                user?.email ? <Button onClick={signOut} className='' variant="light">Sign Out</Button>
                                    : <Link to={'/signin'} > <Button variant="outline-light">SignIn</Button></Link>

                            }
                        </Nav.Item>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;