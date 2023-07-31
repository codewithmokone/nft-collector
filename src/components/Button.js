import React from 'react';
import './Button.css';

function Button(props){
    const {children} = props; 
     return (
        <>
            <button>
            {children}
            </button>
        </>
     );
};

export default Button;