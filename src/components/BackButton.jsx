// BackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <button 
            onClick={handleBack} 
            className="fixed top-20  left-2  bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
            Back
        </button>
    );
};

export default BackButton;
