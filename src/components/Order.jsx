import React from 'react';
import BackIcon from '@mui/icons-material/ArrowBack';

import { Link } from 'react-router-dom';

import "./Order.css";
  
function OrderPage() {
    return (
        <div class="main">
            <header className="header">
                <a href="">
                    <Link to="/menus">
                        <BackIcon />
                    </Link> 
                </a>
            </header>
            <div class="section">
                <h2>Check Out</h2>
                <p>4053 Mesa Rd, Irvine, CA 92697</p>
                <p class="op-60">Delivery Time: 3:30 PM</p>
            </div>

            <div class="divider"></div>

            <div class="section">
                <h3>Order Summary</h3>
                <div class="info">
                    <p>BCD Tofu House</p>
                    <p class="op-60">2 Items</p>
                </div>

                <div class="mini-div"></div>


                <div class="info">
                    <div class="details">
                        <p>Beef Tofu Soup</p>
                        <p>$18.49</p>
                    </div>
                    <div class="details op-60">
                        <p>Selection Items</p>
                        <p>1 Item</p>
                    </div>
                    <div class="mini-div"></div>
                    <div class="details">
                        <p>Galbi</p>
                        <p>$31.49</p>
                    </div>
                    <div class="details op-60">
                        <p>Selection Items</p>
                        <p>1 Item</p>
                    </div>
                </div>
            </div>

            <div class="divider"></div>

            <div class="section">
                <h3>Payment</h3>
                <div class="info">
                    <div class="details op-60">
                        <p>Subtotal</p>
                        <p>$49.98</p>
                    </div>
                    <div class="details op-60">
                        <p>Delivery Fee</p>
                        <p id="green"><strike id="red">$12.50</strike> $3.12</p>
                    </div>
                    <div class="details op-60">
                        <p>Taxes & Other Fees</p>
                        <p>$3.19</p>
                    </div>
                    <div class="details">
                        <p>Total</p>
                        <p>$56.29</p>
                    </div>
                    <div class="mini-div"></div>
                    <div class="details">
                        <div class="payment-method">
                            <svg class="card" width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.75 3.30002V17.7C24.75 18.36 24.515 18.925 24.045 19.395C23.575 19.865 23.01 20.1 22.35 20.1H3.15C2.49 20.1 1.925 19.865 1.455 19.395C0.985 18.925 0.75 18.36 0.75 17.7V3.30002C0.75 2.64002 0.985 2.07502 1.455 1.60502C1.925 1.13502 2.49 0.900024 3.15 0.900024H22.35C23.01 0.900024 23.575 1.13502 24.045 1.60502C24.515 2.07502 24.75 2.64002 24.75 3.30002ZM3.15 5.70002H22.35V3.30002H3.15V5.70002ZM3.15 10.5V17.7H22.35V10.5H3.15Z" fill="#283618"/>
                            </svg>
                            <p>Add Payment Method</p>
                        </div>

                        <button class="small-button">
                            <p>Edit</p>
                        </button>
                    </div>
                </div>

                <div class="confirm-button">
                <button class="primary-button">
                    <p>Confirm</p>
                    <p>Order</p>
                </button>
                </div>
            </div>

            
            
        
        </div>
        
    );
  }

export default OrderPage;