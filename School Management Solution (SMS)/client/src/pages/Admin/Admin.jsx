import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


export default function Admin() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8000/login', {
                username,
                password,
            });

            // Handle successful login (redirect or show a success message)
            console.log(response.data);
        } catch (error) {
            // Handle login failure (display an error message)
            console.error('Login failed:', error.message);
        }
    }


    return (
        <div>
            {/* Sign in section */}
            <div>
                <h4>Sign In</h4>
                <p>Enter your email and password to sign in!</p>

                {/* Email */}
                <div>
                    {/* Input field with onChange event handler */}
                    <input type="text" placeholder="Email Address"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}

                    />
                </div>

                {/* Password */}
                <div>
                    {/* Input field with onChange event handler */}
                    <input type="password" placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleLogin}>Sign In</button>
                <div className="mt-4">
                    <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                        Not registered yet?
                    </span>
                    <Link to="/admin/signup">
                        <div className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white">
                            Create an account
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
