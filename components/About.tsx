"use client"
import { GraduationCap, Calendar, MapPin, Briefcase, Mail } from "lucide-react";
import { educationData, skills } from "./lib/utils";
import { motion } from "motion/react";

export default function About() {
    // Animation variants
    const fadeIn = { 
        opacity: 1, 
        y: 0, 
        x: 0, 
        scale: 1 
    };    return (        <section className="py-20 px-8 bg-[#0a0a0d] relative overflow-hidden">
            {/* Background Pattern - matching pattern style from Hero but on dark background */}
            <div className="absolute inset-0 opacity-5 pattern-dots pattern-gray-300 pattern-bg-transparent pattern-size-2 z-0"></div>
            
            {/* Subtle color overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#080810]/30 via-[#0a0a12]/60 to-[#070710]/80 opacity-70"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={fadeIn}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold text-gray-50 mb-4">Education & Experience</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
                </motion.div>                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Education Timeline */}
                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={fadeIn}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-50 mb-8 flex items-center">
                            <GraduationCap className="mr-3 text-emerald-500" size={28} />
                            Educational Journey
                        </h3>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-600/30"></div>

                            {educationData.map((edu, index) => (
                                <motion.div 
                                    key={index} 
                                    className="relative flex items-start mb-12 group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={fadeIn}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                >                                    {/* Timeline Dot */}
                                    <div className="absolute left-3 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full border-4 border-[#0a0a0d] group-hover:scale-110 transition-transform duration-300 z-10"></div>

                                    {/* Content - glassmorphism style on dark bg */}
                                    <div className="ml-16 bg-[#111116]/70 backdrop-blur-md rounded-xl p-6 border border-[#1c1c24]/40 hover:bg-[#13131a]/90 transition-all duration-300 group-hover:transform group-hover:scale-105 shadow-lg">
                                        <div className="flex items-center text-emerald-500 text-sm font-medium mb-2">
                                            <Calendar size={16} className="mr-2" />
                                            {edu.year}
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-50 mb-2">{edu.institution}</h4>
                                        <p className="text-gray-200 font-medium mb-2">{edu.degree}</p>
                                        <div className="flex items-center text-emerald-400 text-sm mb-3">
                                            <MapPin size={14} className="mr-2" />
                                            {edu.location}
                                        </div>
                                        <p className="text-gray-300/90 text-sm leading-relaxed">{edu.description}</p>
                                    </div>
                                </motion.div>
                            ))}                        </div>
                    </motion.div>

                    {/* Right Column - Skills & Specialization */}
                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: 20 }}
                        animate={fadeIn}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-50 mb-8 flex items-center">
                            <Briefcase className="mr-3 text-emerald-500" size={28} />
                            Expertise & Skills
                        </h3>                        {/* Specialization Card */}
                        <div className="bg-gradient-to-br from-[#111116]/80 to-[#0d0d12]/60 backdrop-blur-md rounded-2xl p-8 border border-[#1c1c24]/30 hover:border-emerald-500/30 transition-colors duration-300 shadow-lg">
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-emerald-500/30">
                                    <Mail size={32} className="text-emerald-500" />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-50 mb-3">Email Marketing Specialist</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Crafting data-driven email campaigns that convert prospects into loyal customers.
                                    Specializing in segmentation, automation, and performance optimization.
                                </p>
                            </div>                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="text-center p-4 bg-[#0c0c14]/50 rounded-lg">
                                    <div className="text-2xl font-bold text-emerald-500">95%</div>
                                    <div className="text-xs text-gray-300">Delivery Rate</div>
                                </div>
                                <div className="text-center p-4 bg-[#0c0c14]/50 rounded-lg">
                                    <div className="text-2xl font-bold text-emerald-500">28%</div>
                                    <div className="text-xs text-gray-300">Open Rate</div>
                                </div>
                                <div className="text-center p-4 bg-[#0c0c14]/50 rounded-lg">
                                    <div className="text-2xl font-bold text-emerald-500">6.8%</div>
                                    <div className="text-xs text-gray-300">Click Rate</div>
                                </div>
                            </div>
                        </div>                        {/* Skills Progress */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-semibold text-gray-50 mb-6">Core Competencies</h4>
                            {skills.map((skill, index) => (                            <motion.div 
                                    key={index} 
                                    className="bg-[#111116]/50 backdrop-blur-md rounded-lg p-6 border border-[#1c1c24]/30 hover:border-emerald-500/30 transition-colors duration-300 shadow-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={fadeIn}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center">
                                            <skill.icon size={20} className="text-emerald-500 mr-3" />
                                            <span className="text-gray-200 font-medium">{skill.name}</span>
                                        </div>
                                        <span className="text-emerald-500 font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className="bg-[#1d0c06]/60 rounded-full h-2 overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-emerald-500 to-teal-600 h-full rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div 
                            className="mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={fadeIn}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold py-4 px-8 rounded-xl hover:from-emerald-500 hover:to-teal-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                View Portfolio Projects
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}