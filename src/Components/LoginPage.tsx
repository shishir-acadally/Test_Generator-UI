import { FunctionComponent, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginPage.css";
// import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// import * as dotenv from 'dotenv';
// dotenv.config();

const Login: FunctionComponent = () => {
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            sessionStorage.setItem('userLoggedIn', "true");
            sessionStorage.setItem('userName', user.displayName || "");
            navigate('/cri');
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (

        <div className="mt-5 text-center">
            <h1 className="mb-3 text-center">Content Management System</h1>
            <button type="button" className="login-with-google-btn mt-4" onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;