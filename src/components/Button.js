import React from 'react';
import './Button.scss';

const Button = ({ fullWidth, text, onClick }) => {
    return (
        <button onClick={onClick} style={{ width: fullWidth ? '100%' : 'fit-content' }} className="button">
            {text ? text : 'Click!'}
        </button>
    );
};

export default Button;
