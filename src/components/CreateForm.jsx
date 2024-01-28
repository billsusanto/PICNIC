import React, { useState } from 'react';
import '../index.css'; // Import the CSS file for styles

import { Link } from 'react-router-dom';

const CreateForm = () => {
    const [pickup, setPickup] = useState('');
    const [restaurant, setRestaurant] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ pickup, restaurant, time });
    };

    return (
        <form className="my-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label" htmlFor="pickup">Picnic Location</label>
                <input 
                    type="text" 
                    id="pickup" 
                    name="pickup" 
                    className="form-control" 
                    placeholder="Enter Address" 
                    value={pickup} 
                    onChange={(e) => setPickup(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="restaurant">Restaurant</label>
                <input 
                    type="text" 
                    id="restaurant" 
                    name="restaurant" 
                    className="form-control" 
                    placeholder="Enter Restaurant Name" 
                    value={restaurant} 
                    onChange={(e) => setRestaurant(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="time">Time</label>
                <input 
                    type="time" 
                    id="time" 
                    name="time" 
                    className="form-control" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                    min="00:00" 
                    max="24:00" 
                    placeholder="Enter Delivery Time" 
                    required
                />
            </div>

            <div className="gray-line mt-4"></div>

            <div className="create-container mt-4">
                <Link to="/menus">
                    <button type="submit" className="btn primary-btn centered-button">Create!</button>
                </Link>
            </div>
        </form>
    );
};

export default CreateForm;
