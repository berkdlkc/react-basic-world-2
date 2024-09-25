import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white font-bold">React World</h1>
                <ul className="flex space x-4">
                    <li className="text-white">Home</li>
                    <li className="text-white">About</li>
                    <li className="text-white">Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;