import './Login.css';
import "firebase/auth";
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import firebaseConfig from '../../config/firebase';
import logo from '../../resources/images/logos/logo.png';
import { useHistory, useLocation } from 'react-router-dom';
import googleLogo from '../../resources/images/googleFirebase.png';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) { firebase.initializeApp(firebaseConfig) };
    
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photo: ''
    })

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(response => {
          const {displayName, email, photoURL} = response.user;
          console.log(response);
          const newUser = {
            isSignIn: true,
            name: displayName,
            email: email,
            photo: photoURL
        }
          setUser(newUser);
          setLoggedInUser(newUser);
          history.replace(from);
        })
        .catch(error =>{
          console.log(error);
          console.log(error.message);
        })
    }
    
    return (
        <div className="container">
            <div className="login-area d-flex align-items-center justify-content-center">
                <div>
                    <Link to="/">
                        <div className="text-center">
                            <img className="brand-logo" src={logo} alt="" />
                        </div>
                    </Link>
                    <div className="login p-5 mt-5">
                        <h4 className="text-center mt-5 py-4 font-weight-bold">Login With</h4>
                        <div onClick={handleSignIn} className="google-login p-1 d-flex">
                            <div>
                                <img className="google-logo" src={googleLogo} alt="" />
                            </div>
                            <div className="ml-5 pl-4">
                                <h5>Continue With Google</h5>
                            </div>
                        </div>
                        <p className="text-center mt-2">Don't have an account? <span><a href="#">Create an account</a></span> </p>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default Login;