import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../assets/css/Login.css';
import Logo from '../assets/images/coms/logo.png'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = (e) => {
        e.preventDefault();

        const validEmail = 'mayanksolanki@joyfulhugs.in';
        const validPassword = 'mayank@123';

        if (email === validEmail && password === validPassword) {
            localStorage.setItem('isLoggedIn', 'true'); 
            navigate('/add-position'); 
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <div className='text-center'>
                    <img src={Logo} alt='joyful logo' width="150px" />
                </div>
                <hr />
                <h4 className='mb-0'>Login</h4>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='bg-light'
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='bg-light'
                />
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
