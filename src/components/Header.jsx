import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 shadow-lg rounded-lg">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">Cleaning Service</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-blue-200">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-blue-200">About</Link>
                    </li>
                    <li>
                        <Link to="/services" className="text-white hover:text-blue-200">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-blue-200">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;