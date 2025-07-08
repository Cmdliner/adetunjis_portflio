"use client"
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Linkedin, Twitter, PhoneIcon, Instagram, ArrowUp, PhoneCallIcon } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer id="footer" className="relative bg-white overflow-hidden">
            
            {/* Top wave divider */}
            <div className="absolute top-0 left-0 right-0 h-16 z-10">
                <svg className="absolute bottom-0 fill-[#0a0a0d] transform translate-y-1/2" viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48h1440V0c-211.2 40-480 48-720 48C480 48 211.2 40 0 0v48z"></path>
                </svg>
            </div>

            {/* Main footer content */}
            <div className="container mx-auto pt-24 pb-12 px-6 relative z-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: Logo and About */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">Adetunji Adeniran</h3>
                        <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4"></div>
                        <p className="text-gray-600 leading-relaxed">
                            Digital marketing specialist focused on creating impactful campaigns and strategies to drive brand growth and audience engagement.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <Link href="https://linkedin.com/in/adeniranadetunji" target="_blank"  className="bg-gray-100 hover:bg-emerald-100 p-2 rounded-full transition-colors duration-300">
                                <Linkedin size={18} className="text-gray-700 hover:text-emerald-600" />
                            </Link>
                            <Link href="https://x.com/adeniranifeol17" target="_blank" className="bg-gray-100 hover:bg-emerald-100 p-2 rounded-full transition-colors duration-300">
                                <Twitter size={18} className="text-gray-700 hover:text-emerald-600" />
                            </Link>
                            <Link href="https://wa.me/2349029159174" target="_blank" className="bg-gray-100 hover:bg-emerald-100 p-2 rounded-full transition-colors duration-300">
                                <PhoneCallIcon size={18} className="text-gray-700 hover:text-emerald-600" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">Quick Links</h3>
                        <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4"></div>
                        <nav className="flex flex-col space-y-3">
                            <Link href="#about-me" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">About Me</Link>
                            <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">Portfolio</Link>
                            <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">Resume</Link>
                            <Link href="#footer" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">Contact</Link>
                        </nav>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">Services</h3>
                        <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4"></div>
                        <nav className="flex flex-col space-y-3">
                            <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">Email Marketing</Link>
                            <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">Social Media Management</Link>
                            <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">Content Strategy</Link>
                            <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">SEO Optimization</Link>
                        </nav>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">Contact</h3>
                        <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4"></div>
                        <div className="flex flex-col space-y-3">
                            <a href="mailto:adeniranifeoluwa06@gmail.com" className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                                <Mail size={16} className="mr-2" /> adeniranifeoluwa06@gmail.com
                            </a>
                            <a href="tel+2349029159174" className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                                <Phone size={16} className="mr-2" /> +234 902 915 9174
                            </a>
                            <address className="text-gray-600 not-italic">
                                Lagos, Nigeria
                            </address>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-12"></div>

                {/* Bottom section with copyright and credit */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-600 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Adetunji Adeniran. All rights reserved.
                    </div>
                    <div className="text-gray-600 text-sm">
                        Designed and developed by <Link className="text-emerald-600 hover:underline" href="https://adeyemiabiade.me" target="_blank"> Adeyemi Abiade </Link>
                    </div>
                </div>

                {/* Scroll to top button */}
                <button 
                    onClick={scrollToTop}
                    className="fixed right-6 bottom-6 cursor-pointer bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
                >
                    <ArrowUp size={24} className="text-white" />
                </button>
            </div>
        </footer>
    );
}
