import React from 'react';
import My_input from '../components/UI/input/My_input';
import My_button from '../components/UI/button/My_button';

const Login = () => {
    return (
        <div>
            <h1>Page for login</h1>
            <form>
                <My_input type="text" placeholder="Login: " />
                <My_input type="password" placeholder="Password: " />
                <My_button>Log in</My_button>
            </form>
        </div>
    );
};

export default Login;