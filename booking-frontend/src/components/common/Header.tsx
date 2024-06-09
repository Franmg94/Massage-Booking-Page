import React, { useState } from "react";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-medium-blue p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-xl border border-200-white rounded-lg shadow-md p-1 ">Book Now</h1>
                <button
                    className="block lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        />
                    </svg>
                </button>
                <nav
                    className={`${
                        isOpen ? "block" : "hidden"
                    } lg:flex lg:items-center lg:w-auto w-full`}
                >
                    <ul className="lg:flex lg:space-x-4 text-white">
                        <li>
                            <a href="#services" className="block lg:inline-block mt-2 lg:mt-0 hover:text-light-green">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#about-me" className="block lg:inline-block mt-2 lg:mt-0 hover:text-light-green">
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="block lg:inline-block mt-2 lg:mt-0 hover:text-light-green">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
