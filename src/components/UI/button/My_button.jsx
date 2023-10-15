import React from 'react';
import cl from "./My_button.module.scss"

const My_button = ({children, ...props}) => {
    return (
        <button {...props} className={cl.button}>
            {children}
        </button>
    );
};

export default My_button;