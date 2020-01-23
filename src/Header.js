import React from "react";
import {Link} from "react-router-dom";
import './Header.css'

export const Header = () => (
    <header className="header">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/reviews">Reviews</Link>
    </header>
)
