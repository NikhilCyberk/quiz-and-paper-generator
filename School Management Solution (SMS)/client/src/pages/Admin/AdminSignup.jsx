import { Link } from "react-router-dom";

export default function AdminSignup() {
    return (
        <div>
            {/* Sign in section */}
            <div>
                <h4>Admin Registration</h4>
                <p>Create your own school by registering as an admin.</p>
                <p> You will be able to add students and faculty and manage the system.</p>

                {/* Name */}
                <div>
                    {/* Input field with onChange event handler */}
                    <input type="text" placeholder="Name" />
                </div>
                {/* Email */}
                <div>
                    {/* Input field with onChange event handler */}
                    <input type="text" placeholder="Email Address" />
                </div>
                {/* School */}
                <div>
                    {/* Input field with onChange event handler */}
                    <input type="text" placeholder="Create your School" />
                </div>

                {/* Password */}
                <div>
                    {/* Input field with onChange event handler */}
                    <input type="password" placeholder="password" />
                </div>
                <button>Register</button>
                <div className="mt-4">
                    <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                        Already have an account?
                    </span>
                    <Link to="/admin">
                        <div className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white">
                            Log in
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
