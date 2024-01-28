import React from 'react';
import '../index.css';

import { Link } from 'react-router-dom';

import picnic_bg from "../assets/picnic-bg.png";
import basket from "../assets/Basket.svg";

const Landing = () => {
    return (
        <div>
            <img src={picnic_bg} alt="green plaid background" className="background"/>

            <div className="basket ">
                <img src={basket} alt="basket vector" style={{ width: "90px", height:"90px"}}/>
            </div>

            <div className="container text-center title text-[40px] quicksand-bold">
                <h1>Picnic</h1>
            </div>

            <div className="center-container">
                <Link to="/login">
                    <button className="btn btn-lg primary-btn mb-3">Log In</button>
                </Link>
                <Link to="/signup">
                        <button className="btn btn-lg centered-button secondary-btn mb-4">Sign Up</button>
                </Link>
            </div>
        </div>
    );
}

export default Landing;

