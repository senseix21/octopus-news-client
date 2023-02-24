import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/UserContext';

const SignUp = () => {
    const { signUpWithEmailAndPassword } = useContext(AuthContext);


    const createUser = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, email, password);

        signUpWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            });

    }
    return (
        <div>
            <div className='mx-auto mt-3 rounded p-5  ' style={{ backgroundColor: 'whiteSmoke', shadow: '5px' }}>
                <h2 className=''>Please, Sign Up here.</h2>
                <Form onSubmit={createUser}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name='username' placeholder="Enter Username" required />
                        <Form.Text className="text-muted">
                            We'll never share your info with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="***********" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name='confirm-password' placeholder="***********" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Text>
                        Already have an account? Please <Link to={'/signin'}>Sign in</Link>.
                    </Form.Text> <br />
                    <Button className='mt-2' variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>

            </div>

        </div>
    );
};

export default SignUp;