import React from "react";
import './Button.scss'

const Button = ({fullWidth, text}) => {
    return (
        <button style={{width: fullWidth ? '100%' : 'fit-content'}} className="button">{text ? text : 'Click!'}</button>
    );
};
//*****
export default Button