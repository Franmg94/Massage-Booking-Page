import React, { useState } from "react";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full p-4 z-50 absolute top-0 left-0">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/booking" className="text-white text-xl p-1 text-shadow hover:text-light-green">Book Now</a>
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
                            <a href="#treatments" className="block lg:inline-block mt-2 lg:mt-0 hover:text-light-green text-shadow">
                                Treatments
                            </a>
                        </li>
                        <li>
                            <a href="#prices" className="block lg:inline-block mt-2 lg:mt-0 hover:text-light-green text-shadow">
                                Prices
                            </a>
                        </li>
                        <li>
                            <a href="#about-me" className="block lg:inline-block mt-2 lg:mt-0 hover:text-light-green text-shadow">
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="block lg:inline-block mt-2 lg:mt-0 hover:text-light-green text-shadow">
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
