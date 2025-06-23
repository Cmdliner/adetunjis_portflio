"use client"
import Link from "next/link";
import { motion } from "motion/react";
import { Activity, FileSpreadsheet, PieChart, BarChart4, Mail, Users } from "lucide-react";
import { projects } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 bg-white overflow-hidden">

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
                        A showcase of my professional work across digital marketing, sales, and HR management that has delivered meaningful results.
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

                        {/* Projects */}
                        {projects && projects.map((p, index) => <ProjectCard key={index} project={p} />)}

                    </motion.div>

                    {/* Right column: Specialization details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">My Professional Skills</h3>

                        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-[2px] shadow-lg">
                            <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-lg p-7 h-full">
                                <div className="flex items-center mb-4">
                                    <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                                        <Mail className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-900">Email Marketing & Content Creation</h4>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Leveraging Zoho to create impactful email marketing campaigns and developing strategic content calendars for social media.
                                </p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>Strategic email campaign development and implementation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>Content calendar creation for consistent brand messaging</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>Performance analysis and optimization for digital campaigns</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>AI-assisted content development strategies</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-[2px] shadow-lg">
                            <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-lg p-7 h-full">
                                <div className="flex items-center mb-4">
                                    <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                                        <Users className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-900">Sales & Human Resources</h4>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Combined experience in sales and HR with a focus on building relationships, recruitment, and training development.
                                </p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>Sales strategy and customer relationship development</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>Recruitment and onboarding process management</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>Training program development and implementation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <span>Administrative support and operational efficiency</span>
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
