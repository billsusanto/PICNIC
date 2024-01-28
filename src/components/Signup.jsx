import React from 'react';
import '../index.css'; // or the specific CSS file for this component

import picnicBg from "../assets/picnic-bg.png";
import basket from "../assets/Basket.svg";

import { Link } from 'react-router-dom';

import ModalForm from './ModalForm';

const Signup = () => {
    return (
        <div>
            <img src={picnicBg} alt="green plaid background" className="background" />

            <div className="above-image">
                <ModalForm />
            </div>

            <div className="basket ">
                <img src={basket} alt="basket vector" style={{ width: "90px", height:"90px"}}/>
            </div>

            <div className="container text-center title text-[40px] quicksand-bold">
                <h1>Create Account</h1>
            </div>

            <div className="center-container">
                <Link to="/home">
                        <button className="btn btn-lg centered-button secondary-btn mb-4">Sign Up</button>
                </Link>
                <Link to="/login">
                    <button className="btn btn-lg primary-btn mb-3">Log In</button>
                </Link>
            </div>
        </div>
    );
}

export default Signup;
