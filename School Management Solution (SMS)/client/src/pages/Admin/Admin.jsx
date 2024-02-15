import { Link } from "react-router-dom";

export default function Admin() {
    return (
        <div>
            {/* Sign in section */}
            <div>
                <h4>Sign In</h4>
                <p>Enter your email and password to sign in!</p>

                {/* Email */}
                <div>
                    {/* Input field with onChange event handler */}
                    <input type="text" placeholder="Email Address" />
                </div>

                {/* Password */}
                <div>
                    {/* Input field with onChange event handler */}
                    <input type="password" placeholder="password" />
                </div>
                <button>Sign In</button>
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
