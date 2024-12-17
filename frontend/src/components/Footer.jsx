import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importing Link for navigation

const Footer = () => {
    return (
        <footer 
            className="bg-gray-100 py-8" 
            style={{ 
                backgroundImage: 'url("./Footer.png")', // Replace with your image path
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="container mx-auto px-20 py-10">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="px-10 items-center mb-4 md:mb-0">
                        <img src="logo.png" alt="Logo" className="h-20 w-auto ml-5" />
                        <p className='text-gray-600'>Travel helps companies manage payments easily.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-4 md:mb-0 ml-20">
                        <div>
                            <h3 className="font-semibold text-lg py-2">Company</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg py-2">Destinations</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li><Link to="/siem-reap">Siem Reap</Link></li>
                                <li><Link to="/phnom-penh">Phnom Penh</Link></li>
                                <li><Link to="/kompong-cham">Kompong Cham</Link></li>
                                <li><Link to="/battambang">Battambang</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-2xl">Join Our Newsletter</h3>
                            <div className="flex space-x-5 py-5">
                                <a href="#" className="text-gray-600">
                                    <FaFacebookF className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-gray-600">
                                    <FaLinkedinIn className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-gray-600">
                                    <FaTelegram className="h-5 w-5" />
                                </a>
                            </div>
                            <p className="text-gray-600 mb-2">
                                * We’ll send you weekly updates for your better tour packages.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8 text-gray-500">
                    <p>© 2024 WCT. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;