import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import { Container, Col, Row } from 'react-bootstrap';
import Footer from '../Pages/Shared/Footer/Footer';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (

        <div>
            <Header></Header>
            <Container className='mt-5'>
                <Row>
                    <Col lg='2' >
                        <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col className='md:col-span-8' lg='7'>
                        <Outlet></Outlet>
                    </Col>

                    <Col lg='3' >
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;