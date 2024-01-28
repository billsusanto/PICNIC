import React, { useState } from 'react';
import '../index.css'; // Import your CSS, adjust the path as needed

const ModalForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit behavior
        // Handle form submission, e.g., make an API call with the email and password
        console.log('Form submitted with:', { email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="mb-1 form-group">
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-control" 
                        placeholder="Enter Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </div>
            
                <div className="mb-5 form-group">
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        className="form-control" 
                        placeholder="Enter Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                </div>
            </div>
        </form>
    );
};

export default ModalForm;
