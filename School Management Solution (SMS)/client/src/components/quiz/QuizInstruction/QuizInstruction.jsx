import './QuizInstruction.css'

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function QuizInstruction() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/items")
            .then(response => setItems(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <div>
                <h1>Items</h1>
                <ul>
                    {items.map(item => (
                        <li key={item._id}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}