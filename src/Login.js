import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <Link to="/" >
                <img className="login__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            
            <div className="login__container"> 
                <h1> Sign In</h1>

                <form>
                    <h5>E-Mail</h5>
                    <input tyep='text' />

                    <h5>Password</h5>
                    <input type='password' />

                    <button className="login__signin">Sign In</button>

                </form>
                <p> By Signing in you agree to Amazon Clone Terms & Conditions . Please see Privacy Policy, our Cookies Notice and our Interest Based Ads </p>

                <p>Don't have an account ?</p>
                <button className="login__register">Create Your Amazon Account</button>
            </div>



        </div>
    )
}

export default Login
