"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Zap, TrendingDown, Calendar } from 'lucide-react';
import type { Project } from '@/lib/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <div className="absolute top-6 right-6 bg-[#1092CF] text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-3 group-hover:text-[#1092CF] transition-colors">
          {project.title}
        </h3>

        {/* Meta Information */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <MapPin size={16} className="text-[#1092CF]" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Zap size={16} className="text-[#1092CF]" />
            <span>{project.capacity} System</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <TrendingDown size={16} className="text-[#1092CF]" />
            <span>{project.savings}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Calendar size={16} className="text-[#1092CF]" />
            <span>Completed {project.completionDate}</span>
          </div>
        </div>

        <p className="text-sm text-neutral-500 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* View Details Link */}
        <div className="flex items-center gap-2 text-[#1092CF] font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all cursor-pointer">
          <span>View Details</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 w-0 bg-[#1092CF] group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export default ProjectCard;
