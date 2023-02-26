import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/UserContext';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const { signUpWithEmailAndPassword, updateUserProfileInfo, verifyEmailAddress } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const createUser = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.username.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoUrl, email, password);

        signUpWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user.displayName, user.photoURL);

                handleUpdateProfile(name, photoUrl);
                handleEmailVerification();
                toast.success(`${name}! Please, verify your email address`);
                navigate('/login');

            })
            .catch(error => {
                // console.error(error);
                setError(error.message);
            });

    };

    const handleEmailVerification = () => {
        verifyEmailAddress()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }
    const handleUpdateProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl,
        };
        updateUserProfileInfo(profile);
    };

    const handleAccepted = event => {
        setAccepted(event.target.checked);
        console.log(accepted);
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

                    <Form.Group className="mb-3" controlId="formBasicImg">
                        <Form.Label>Photo Url</Form.Label>
                        <Form.Control type="text" name='photoUrl' placeholder="Enter photoUrl" required />
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

                    <Form.Text className="text-danger fw-semibold">
                        {error}
                    </Form.Text>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            onClick={handleAccepted}
                            label={
                                <>
                                    Accept <Link to={'/terms'}>terms & conditions.</Link>
                                </>
                            } />
                    </Form.Group>
                    <Form.Text>
                        Already have an account? Please <Link to={'/signin'}>Sign in</Link>.
                    </Form.Text> <br />
                    <Button className='mt-2' variant="primary" type="submit" disabled={!accepted}>
                        Sign Up
                    </Button>
                </Form>

            </div>

        </div>
    );
};

export default SignUp;