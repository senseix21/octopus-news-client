import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const SignIn = () => {
    const { signInWithEmailAndPass } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const signInWithEmailAndPassword = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPass(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Please Verify Email')
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })

    }
    return (
        <div className='mx-auto mt-3 rounded p-5  ' style={{ backgroundColor: 'whiteSmoke', shadow: '5px' }}>
            <h2 className=''>Please, Sign in here.</h2>
            <Form onSubmit={signInWithEmailAndPassword}>
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
                <Form.Text className='text-danger fw-semibold'>
                    {error}
                </Form.Text> <br />

                <Form.Text className='text-secondary fw-bold'>
                    Don't have an account? Please <Link to={'/signup'}>Signup here</Link>.
                </Form.Text> <br />

                <Button className='mt-2' variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>

        </div> //FAGUNCB0BA45

    );
};

export default SignIn;