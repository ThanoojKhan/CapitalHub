import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, onClick, styleType }) => {
    const baseStyle = 'justify-center px-11 py-2.5 text-base rounded-[70px]';
    const primaryStyles = `${baseStyle} text-white bg-neutral-800`;
    const secondaryStyles = `${baseStyle} text-black border border-solid border-neutral-800`;

    return (
        <button
            onClick={onClick}
            className={styleType === 'primary' ? primaryStyles : secondaryStyles}
            type="button"
        >
            {text}
        </button>
    );
};

const NavBar = () => {
    return (
        <nav className="grid grid-cols-3 container items-center bg-white border border-solid h-24 border-neutral-200  py-2 max-w-full">
            <div className="col-span-1">
            </div>
            <div className="col-span-1 gap-10 flex justify-center">
                <Link to="/" className="text-black font-medium">Home</Link>
                <Link to="/about" className="text-black font-medium">About Us</Link>
                <Link to="/contact" className="text-black font-medium">Contact Us</Link>
            </div>
            <div className="col-span-1 gap-4 flex justify-end">
                <Button text="Donate" onClick={() => console.log("Donate Clicked")} styleType="secondary" />
                <Button text="Sign In" onClick={() => console.log("Sign In Clicked")} styleType="primary" />
            </div>
        </nav>
    );
};

export default NavBar;
