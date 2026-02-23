import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedProjectCard = ({ project, index }) => {
    if (!project) return null;
    const isReversed = index % 2 !== 0;

    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            className="relative w-full group py-12 md:py-20"
        >
            <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-center`}>
                {/* Content Island */}
                <div className="flex-1 space-y-8">
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-warm-white leading-[1.05] tracking-tight group-hover:text-orange-accent transition-colors duration-500">
                            {project.title}
                        </h3>

                        {/* Metadata Row */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] md:text-sm font-mono font-bold uppercase tracking-widest text-warm-white/30">
                            <span>{project.year || "2025"}</span>
                            <span className="opacity-20">|</span>
                            <span>{project.role || "Senior Product Designer"}</span>
                            <span className="opacity-20">|</span>
                            <span className="text-orange-accent/60">Logic-First</span>
                        </div>
                    </div>

                    <p className="text-xl md:text-2xl text-warm-white/40 leading-relaxed max-w-2xl font-medium">
                        {project.short_description || "Redefining how users interact with complex systems by leading with architectural clarity."}
                    </p>

                    <motion.div
                        variants={{
                            initial: { x: 0 },
                            hover: { x: 8 }
                        }}
                        className="flex items-center gap-3 text-orange-accent font-bold text-lg tracking-wide pt-4"
                    >
                        <span>View Case Study</span>
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                </div>

                {/* Visual Island - Simple Card (No big animations/shadows) */}
                <div className="w-full md:w-[400px] lg:w-[540px] relative">
                    <motion.div
                        variants={{
                            initial: { y: 0 },
                            hover: { y: -4 }
                        }}
                        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                        className="relative aspect-[16/10] rounded-[32px] overflow-hidden bg-[#161616] border border-white/[0.05] flex items-center justify-center p-0 group/card"
                    >
                        {project.thumbnail_url ? (
                            <img
                                src={project.thumbnail_url}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-90 transition-all duration-700"
                            />
                        ) : (
                            <div className="text-center space-y-5 opacity-20">
                                <div className="w-40 h-1.5 bg-warm-white rounded-full mx-auto" />
                                <div className="w-28 h-1.5 bg-warm-white rounded-full mx-auto" />
                                <div className="w-48 h-1.5 bg-orange-accent/50 rounded-full mx-auto" />
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default FeaturedProjectCard;
