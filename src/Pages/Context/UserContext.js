import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import app from '../../Firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {

    /* Declare loading and User state */
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    /* SignUp with email and pass */
    const signUpWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    /* SigniN WITH email and password */
    const signInWithEmailAndPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    /* Verify Email address */
    const verifyEmailAddress = () => {
        return sendEmailVerification(auth.currentUser)
    }

    /* SignIn with Github Auth Provider */
    const gitHubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }
    /* SignIn with Google Auth Provider */
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    };



    /* SignOut  */
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    /* Using effect to setUser and Check loading state */
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            console.log('onAuthStateChanged', currentUser)
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => {
            unsuscribe();
        }
    }, []);
    /* Update user profile information */
    const updateUserProfileInfo = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const authInfo = {
        user,
        loading,
        googleSignIn,
        gitHubSignIn,
        userSignOut,
        signInWithEmailAndPass,
        signUpWithEmailAndPassword,
        verifyEmailAddress,
        updateUserProfileInfo
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;