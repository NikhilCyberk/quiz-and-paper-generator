import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function AdminSignup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [schoolName, setSchoolName] = useState("");

    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:8000/signup", {
                username,
                email,
                password,
                schoolName,
            });

            // Handle successful signup (redirect or show a success message)
            console.log(response.data);
        } catch (error) {
            // Handle signup failure (display an error message)
            console.error("Signup failed:", error.message);
        }
    };

    return (
        <div>
            {/* Sign in section */}
            <div>
                <h4>Admin Registration</h4>
                <p>Create your own school by registering as an admin.</p>
                <p>
                    {" "}
                    You will be able to add students and faculty and manage the system.
                </p>

                {/* Name */}
                <div>
                    {/* Input field with onChange event handler */}
                    <input
                        type="text"
                        placeholder="Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                {/* Email */}
                <div>
                    {/* Input field with onChange event handler */}
                    <input
                        type="text"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {/* School */}
                <div>
                    {/* Input field with onChange event handler */}
                    <input
                        type="text"
                        placeholder="Create your School"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div>
                    {/* Input field with onChange event handler */}
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleSignup}>Register</button>
                <div className="mt-4">
                    <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                        Already have an account?
                    </span>

                    <Link to='/admin'>
                        <div
                            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                        >
                            sign in
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
