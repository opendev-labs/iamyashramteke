import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import * as LucideIcons from 'lucide-react'
import projectsData from '../../data/projects.json'
import './App.css'

const Icon = ({ name, size = 24, className }) => {
    const LucideIcon = LucideIcons[name.charAt(0).toUpperCase() + name.slice(1)];
    if (!LucideIcon) return <LucideIcons.Activity size={size} className={className} />;
    return <LucideIcon size={size} className={className} />;
};

function App() {
    return (
        <div className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent tracking-tight">
                        Selected Works
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        A curated collection of founder-level engineering projects, blending quantum concepts with high-fidelity automation.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Project Header */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{project.title}</h2>
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full bg-white/5 border border-white/10 text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 backdrop-blur-sm group/btn"
                                    >
                                        <LucideIcons.Github size={20} className="text-gray-300 group-hover/btn:text-white transition-colors" />
                                        <span className="font-medium text-gray-300 group-hover/btn:text-white">Source</span>
                                    </a>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black hover:bg-gray-200 border border-transparent transition-all duration-300 shadow-lg shadow-white/5"
                                        >
                                            <LucideIcons.Globe size={20} />
                                            <span className="font-bold">Website</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {project.features?.map((feature, fIndex) => (
                                    <div
                                        key={fIndex}
                                        className="p-6 rounded-2xl bg-[#0A0A0A]/80 border border-white/5 hover:border-white/10 transition-all duration-300 group/card hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-white group-hover/card:text-[#FF5A1F] transition-colors duration-300">
                                            <Icon name={feature.icon} size={24} />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
