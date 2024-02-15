import React from "react";
import { Link } from 'react-router-dom';
// import "../pages/Homepage.css"
import Students from "../assets/students.svg";
import ChooseUser from "./ChooseUser";
import { useNavigate } from 'react-router-dom';


export default function Homepage() {
    const navigate = useNavigate();
    return (
        <>
            <div class="bg-gray-100 h-screen w-screen flex items-center justify-center">
                <div class="flex items-center justify-center">

                    <div class="mr-32 w-1/2">
                        <img src={Students} alt="Your Image" />
                    </div>

                    <div class="text-center w-1/2 mr-12 ">
                        <h1 class="text-blue-500 text-4xl font-bold mb-6">Welcome to School Management Solution </h1>
                        <p class="text-gray-600 mb-8">Discover amazing things with our awesome service.</p>
                        <Link to="/chooseuser" >
                            <div className="btn mr-20 ml-20 bg-blue-500 text-white font-semibold px-6 py-3 rounded-full  hover:bg-lime-400" onClick={() => navigate('chooseuser')}>Get Started
                            </div>
                        </Link>
                    </div>
                </div>


            </div>
        </>
    );
}