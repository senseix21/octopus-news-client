import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle, FaFacebook, FaTwitch, FaTwitter, FaInstagram, FaReddit } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import ImgCarousel from './ImgCarousel';
import { AuthContext } from '../../Context/UserContext';


const RightSideNav = () => {
    const { googleSignIn, gitHubSignIn, user } = useContext(AuthContext);

    const signInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.log('error:', err);
            })
    }

    const signInWithGithub = () => {
        gitHubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.log('error:', err);
            })
    }
    return (
        <div className='mt-2 sticky-top z-50'>
            <br />
            {
                !user?.uid ?
                    <ButtonGroup vertical className='mt-2'>
                        <Button onClick={signInWithGoogle} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google </Button>
                        <Button onClick={signInWithGithub} className='mb-5' variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>
                    </ButtonGroup> : ''
            }
            <div>
                <h3>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-5'><FaReddit /> Reddit</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <ImgCarousel></ImgCarousel>
            </div>

        </div>
    );
};

export default RightSideNav;