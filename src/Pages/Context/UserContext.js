import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
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
        return createUserWithEmailAndPassword(auth, email, password);
    };

    /* SigniN WITH email and password */
    const signInWithEmailAndPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    /* SignIn with Github Auth Provider */
    const gitHubSignIn = () => {
        return signInWithPopup(auth, gitHubProvider)
    }
    /* SignIn with Google Auth Provider */
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    };

    /* SignOut  */
    const userSignOut = () => {
        return signOut(auth);
    };

    /* Using effect to setUser and Check loading state */
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('onAuthStateChanged', currentUser)
            setLoading(false);
        })
        return () => {
            unsuscribe();
        }
    }, [])

    const authInfo = { user, loading, googleSignIn, gitHubSignIn, userSignOut, signInWithEmailAndPass, signUpWithEmailAndPassword }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;