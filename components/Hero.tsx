"use client"
import Image from "next/image";
import Header from "./Header";
import { motion } from "motion/react";

export default function Hero() {
    // Animation variants
    const fadeIn = { 
        opacity: 1, 
        y: 0, 
        x: 0, 
        scale: 1 
    };
    return (
        <section className="min-h-screen bg-white relative overflow-hidden">
            <Header />
            
            {/* Background subtle pattern */}
            <div className="absolute inset-0 opacity-5 pattern-dots pattern-gray-800 pattern-bg-white pattern-size-2 z-0"></div>

            <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">                    {/* Left column - Text content */}
                    <motion.div 
                        className="w-full md:w-3/5 mt-8 md:mt-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={fadeIn}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={fadeIn}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <h2 className="text-emerald-600 font-semibold mb-2 tracking-wider uppercase text-sm">Digital Marketing Specialist</h2>
                        </motion.div>
                        
                        <motion.h1 
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={fadeIn}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Adetunji Adeniran
                        </motion.h1>
                        
                        <motion.div
                            className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-600 mb-6"
                            initial={{ width: 0 }}
                            animate={{ width: 96 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        ></motion.div>
                        
                        <motion.p 
                            className="text-lg text-gray-700 mb-6 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={fadeIn}
                            transition={{ delay: 0.9, duration: 0.8 }}
                        >
                            I am a detail-oriented Digital Marketing enthusiast with a passion for driving brand growth through innovative strategies. With hands-on experience in sales, HR assistance, and digital marketing practices such as email campaigns and social media management, I excel at leveraging communication, organizational, and analytical skills to create impactful marketing solutions.
                        </motion.p>
                        
                        <motion.div
                            className="flex gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={fadeIn}
                            transition={{ delay: 1.1, duration: 0.5 }}
                        >
                            <button className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-md transition-all duration-300 transform hover:scale-105 shadow-md">
                                View Projects
                            </button>
                            <button className="px-6 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-100 rounded-md transition-all duration-300 transform hover:scale-105">
                                Contact Me
                            </button>
                        </motion.div>
                    </motion.div>
                      {/* Right column - Image */}
                    <motion.div 
                        className="w-full md:w-2/5 flex justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={fadeIn}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative">
                            {/* Background decoration elements */}
                            <div className="absolute -right-4 -top-4 w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 blur-2xl"></div>
                            <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-10 blur-3xl"></div>
                            
                            {/* Profile image with border */}
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                <Image 
                                    src="/me.jpg" 
                                    fill
                                    className="object-cover"
                                    alt="Adetunji Adeniran - Digital Marketing Specialist" 
                                    priority
                                />
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute -z-10 w-full h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 blur-md opacity-20 scale-110"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}