// Admin.js
import React, { useState } from 'react';
import AddEventPage from './AddEventPage';

const Admin = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(username === 'admin' && password === 'admin') {
            setAuthenticated(true);
        } else {
            alert('Incorrect username or password!');
        }
    };

    if(authenticated) {
        return <AddEventPage />;
    }

    return (
        <div>
            <h1>Admin Login</h1>
            <div>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Admin;
