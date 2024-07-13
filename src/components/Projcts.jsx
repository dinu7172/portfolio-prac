import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useScroll } from '../../context/ScrollProvider';

const Projects = () => {
    const { projectsRef } = useScroll();
  const projects = [
    {
      title: 'Modern Ecommerce Site',
      description: 'Large-scale e-commerce platform using JavaScript, Python, Django, and SQLite. Features include coupon codes, payment gateway, modern verification method, and cart functionality.',
      technologies: ['JavaScript', 'Python', 'Django', 'SQLite', 'SMTP', 'RAZORPAY'],
      github: 'https://github.com/yourusername/ecommerce-site',
      live: 'https://your-ecommerce-site.com',
    },
    {
      title: 'Promptify',
      description: 'A user-friendly web application built using ReactJS and NextJS to streamline and simplify the process of generating creative prompts for writing or brainstorming purposes.',
      technologies: ['ReactJS', 'NextJS'],
      github: 'https://github.com/dinu7172/promptify',
      live: 'https://promptify-app.com',
    },
    {
        title: 'PriceTracker',
        description: 'A user-friendly web application built using ReactJS and NextJS to select the scrape the products from scratch and save it and also tracked it prices.',
        technologies: ['Reactjs', 'Nextjs', 'Puppeter','MongoDB'],
        github: 'https://github.com/dinu7172/pricetracker',
        live: 'https://price-tracker-nu-nine.vercel.app/'
    },
    {
        title: 'Resource Guides',
        description: 'A user-friendly web application built using ReactJS and NextJS to help the learner to find the resources of various techs which can help them learn about the new techs and trends.',
        technologies:['Reactjs', 'Nextjs', 'Puppeter','Sanity CMS'],
        github: "https://github.com/dinu7172/resource-guides",
        live: "https://resource-guides.vercel.app/"
    }
  ];

  return (
    <div ref={projectsRef} className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen py-16 px-4 text-white">
      <div className="container mx-auto w-full flex flex-col items-center">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white">
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white">
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;