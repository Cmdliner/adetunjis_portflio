import { GraduationCap, Calendar, MapPin, Briefcase, Mail } from "lucide-react";
import { educationData, skills } from "./lib/utils";

export default function About() {
    return (

        <section className="p-8 bg-[#1b0b05] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-amber-50 mb-4">Education & Experience</h2>
                    <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Education Timeline */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold text-amber-100 mb-8 flex items-center">
                            <GraduationCap className="mr-3 text-yellow-600" size={28} />
                            Educational Journey
                        </h3>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-yellow-600/30"></div>

                            {educationData.map((edu, index) => (
                                <div key={index} className="relative flex items-start mb-12 group">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-3 w-6 h-6 bg-yellow-600 rounded-full border-4 border-amber-950 group-hover:scale-110 transition-transform duration-300 z-10"></div>

                                    {/* Content */}
                                    <div className="ml-16 bg-amber-900/50 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30 hover:bg-amber-900/70 transition-all duration-300 group-hover:transform group-hover:scale-105">
                                        <div className="flex items-center text-yellow-600 text-sm font-medium mb-2">
                                            <Calendar size={16} className="mr-2" />
                                            {edu.year}
                                        </div>
                                        <h4 className="text-xl font-semibold text-amber-50 mb-2">{edu.institution}</h4>
                                        <p className="text-amber-200 font-medium mb-2">{edu.degree}</p>
                                        <div className="flex items-center text-amber-300 text-sm mb-3">
                                            <MapPin size={14} className="mr-2" />
                                            {edu.location}
                                        </div>
                                        <p className="text-amber-100/80 text-sm leading-relaxed">{edu.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Skills & Specialization */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold text-amber-100 mb-8 flex items-center">
                            <Briefcase className="mr-3 text-yellow-600" size={28} />
                            Expertise & Skills
                        </h3>

                        {/* Specialization Card */}
                        <div className="bg-gradient-to-br from-amber-900/60 to-amber-800/40 backdrop-blur-sm rounded-2xl p-8 border border-amber-700/30 hover:border-yellow-600/50 transition-colors duration-300">
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-600/30">
                                    <Mail size={32} className="text-yellow-600" />
                                </div>
                                <h4 className="text-2xl font-bold text-amber-50 mb-3">Email Marketing Specialist</h4>
                                <p className="text-amber-200 leading-relaxed">
                                    Crafting data-driven email campaigns that convert prospects into loyal customers.
                                    Specializing in segmentation, automation, and performance optimization.
                                </p>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="text-center p-4 bg-amber-800/30 rounded-lg">
                                    <div className="text-2xl font-bold text-yellow-600">95%</div>
                                    <div className="text-xs text-amber-300">Delivery Rate</div>
                                </div>
                                <div className="text-center p-4 bg-amber-800/30 rounded-lg">
                                    <div className="text-2xl font-bold text-yellow-600">28%</div>
                                    <div className="text-xs text-amber-300">Open Rate</div>
                                </div>
                                <div className="text-center p-4 bg-amber-800/30 rounded-lg">
                                    <div className="text-2xl font-bold text-yellow-600">6.8%</div>
                                    <div className="text-xs text-amber-300">Click Rate</div>
                                </div>
                            </div>
                        </div>

                        {/* Skills Progress */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-semibold text-amber-100 mb-6">Core Competencies</h4>
                            {skills.map((skill, index) => (
                                <div key={index} className="bg-amber-900/40 backdrop-blur-sm rounded-lg p-6 border border-amber-800/20 hover:border-yellow-600/30 transition-colors duration-300">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center">
                                            <skill.icon size={20} className="text-yellow-600 mr-3" />
                                            <span className="text-amber-100 font-medium">{skill.name}</span>
                                        </div>
                                        <span className="text-yellow-600 font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className="bg-amber-800/30 rounded-full h-2 overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-yellow-600 to-yellow-500 h-full rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-amber-950 font-semibold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                View Portfolio Projects
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}