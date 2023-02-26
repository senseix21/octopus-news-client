import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Context/UserContext';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Form className='mt-3 rounded' style={{ backgroundColor: 'whitesmoke', padding: '20px 60px' }}>
                <Form.Text className='mb-4'>
                    <h1>Hello, {user.displayName}</h1>
                    <h3>Let's update your profile:</h3>
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={user?.email} readOnly />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="" value={user?.displayName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Profile;