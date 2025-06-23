import Link from "next/link";
import { FC } from "react";

export default function ProjectCard({ project }: ProjectProps) {
    return (
        <Link
            className="block"
            href={project.live_url}
            target="_blank" rel="noopener noreferrer">
            <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
                        <p className="text-gray-600 mb-4">
                            {project.details}
                        </p>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-2 rounded-full">
                        <project.icon size={18} />
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                    {project.skillsUsed.map((skill, index) => (
                        <span key={index} className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full">{skill}</span>
                    ))}
                </div>
            </div>
        </Link>
    )
}