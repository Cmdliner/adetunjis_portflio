"use client"
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 bg-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 pattern-dots pattern-gray-800 pattern-bg-white pattern-size-2 z-0"></div>
            
            {/* Top wave divider - connects to dark About section */}
            <div className="absolute top-0 left-0 right-0 h-16 z-10">
                <svg className="absolute bottom-0 fill-[#0a0a0d] transform translate-y-1/2" viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48h1440V0c-211.2 40-480 48-720 48C480 48 211.2 40 0 0v48z"></path>
                </svg>
            </div>

            {/* Container with content */}
            <div className="container mx-auto px-6 pt-16 relative z-20">
                {/* Section heading */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A showcase of my recent work and specialized digital marketing campaigns that have driven significant results.
                    </p>
                </motion.div>

                {/* Two column layout */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left column: Project links */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h3>

                        {/* Project Card 1 */}
                        <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Email Growth Campaign</h4>
                                    <p className="text-gray-600 mb-4">
                                        Multi-channel email marketing campaign that increased subscriber growth by 45% in 3 months.
                                    </p>
                                </div>
                                <Link 
                                    href="https://example.com/project1" 
                                    target="_blank" 
                                    className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-2 rounded-full hover:shadow-lg transition-all"
                                >
                                    <ExternalLink size={18} />
                                </Link>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full">Email Marketing</span>
                                <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full">Growth</span>
                            </div>
                        </div>
                        
                        {/* Project Card 2 */}
                        <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Social Media Rebrand</h4>
                                    <p className="text-gray-600 mb-4">
                                        Complete social media strategy overhaul resulting in 78% increase in engagement and 12K new followers.
                                    </p>
                                </div>
                                <Link 
                                    href="https://example.com/project2" 
                                    target="_blank" 
                                    className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-2 rounded-full hover:shadow-lg transition-all"
                                >
                                    <ExternalLink size={18} />
                                </Link>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full">Social Media</span>
                                <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full">Branding</span>
                            </div>
                        </div>
                        
                        {/* Project Card 3 */}
                        <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Content Strategy for Tech Brand</h4>
                                    <p className="text-gray-600 mb-4">
                                        Developed and executed a 6-month content strategy that increased organic traffic by 120%.
                                    </p>
                                </div>
                                <Link 
                                    href="https://example.com/project3" 
                                    target="_blank" 
                                    className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-2 rounded-full hover:shadow-lg transition-all"
                                >
                                    <ExternalLink size={18} />
                                </Link>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full">Content Strategy</span>
                                <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full">SEO</span>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <Link 
                                href="#" 
                                className="inline-block text-emerald-600 font-semibold hover:text-emerald-800 transition-colors"
                            >
                                View all projects →
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right column: Specialization details */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">My Specialization</h3>
                        
                        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-[2px] shadow-lg">
                            <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-lg p-7 h-full">
                                <h4 className="text-xl font-semibold text-gray-900 mb-4">Email Marketing Expertise</h4>
                                <p className="text-gray-600 mb-4">
                                    I specialize in creating high-converting email marketing campaigns that nurture leads, boost engagement, and drive revenue. My comprehensive approach covers:
                                </p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>Email sequence and automation strategy development</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>A/B testing and optimization for maximum open and click-through rates</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>Segmentation and personalization strategies</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>Responsive design and development</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-[2px] shadow-lg">
                            <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-lg p-7 h-full">
                                <h4 className="text-xl font-semibold text-gray-900 mb-4">Digital Strategy Development</h4>
                                <p className="text-gray-600 mb-4">
                                    My approach to digital strategy combines data-driven insights with creative execution to deliver measurable results:
                                </p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>Comprehensive audience analysis and segmentation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>Cross-channel marketing plan development</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>Performance tracking and analytics implementation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>ROI optimization and continuous improvement</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
