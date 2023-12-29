import React from 'react'
import "./style.css"
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
    return (
        <div>
            <ul className="header-bar">
                <li className>Home</li>
                <li>Menu</li>
                <li>Contact Us</li>
                <li>Preference</li>
                <li></li>
                <div className="shopping-cart">
                    <FaShoppingCart size={30}/>
                    <span className="cart-count">0</span>
                </div>
            </ul>

        </div>
    )
}
