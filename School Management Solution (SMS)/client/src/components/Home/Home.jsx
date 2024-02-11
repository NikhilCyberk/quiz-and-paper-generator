import axios from "axios";
import { useState, useEffect } from 'react';
import './Home.css';


export default function Home() {
    const [message, setMessage] = useState("");

    // const base_URL = process.env.REACT_APP_BASE_URL;


    useEffect(() => {
        axios.get(`http://localhost:5000/msg`, { crossdomain: true })
            .then((res) => setMessage(res.data.message))
            .catch((error) => {
                console.error("Error fetching data:", error);
                setMessage("Error fetching data");
            });
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}
