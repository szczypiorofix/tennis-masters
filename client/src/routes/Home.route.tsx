import React from 'react';
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
    return <div>
        <h1>Home page</h1>
        <Link to="/login">Go to Login</Link>
    </div>
}

