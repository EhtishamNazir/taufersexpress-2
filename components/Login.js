import { useState } from 'react';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

import classes from '../styles/login.module.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Successful login
                localStorage.setItem('isLoggedIn', true); // Store user identifier

                // Redirect to dashboard
                toast.success("Logged in successfully...");
                router.reload('/dashboard');
            } else {
                // Failed login
                const data = await response.json();
                console.log(data.message);
                toast.error("Something went wrong");
            }

        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className={classes.loginFormGroup}>
                    <label>Email</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={classes.loginFormGroup}>
                    <label>Password</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={classes.loginBtn}>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <Toaster />
        </div>
    )
}

export default Login;