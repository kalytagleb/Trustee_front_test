import React from 'react';
import cl from './My_input.module.scss'

const My_input = (props) => {
    return (
        <input {...props} className={cl.input}/>
    );
};

export default My_input;