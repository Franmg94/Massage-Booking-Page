import React, { useState } from "react";
import { useFormContext } from "./FormContext";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {toggleForm} = useFormContext();

    return (
        <header className="w-full p-4 z-50 absolute top-0 left-0">
            <div className="container mx-auto flex justify-between items-center">
                <button 
                    className="block lg:inline-block mt-2 lg:mt-0 hover:text-light-green text-shadow text-white"
                    onClick={toggleForm}
                    >Book Now</button>
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
