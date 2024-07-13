import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import { useScroll } from '../../context/ScrollProvider';

const WorkExperience = () => {
  const { workExpRef } = useScroll();
  const experiences = [
    {
      company: 'Perfectlyokay',
      position: 'Full-Stack Developer',
      period: 'March 2024 - Current',
      description: [
        'Developed and maintained web applications using Angular, ReactJS, NextJS, and MongoDB.',
        'Created, secured, and tested APIs using Postman with various access control mechanisms.',
        'Utilized Puppeteer for web scraping and automated data collection using cron jobs.',
        'Gained strong foundation in software development practices and version control with Git.',
      ],
      current: true,
    },
    {
      company: 'RSWebTechSoft',
      position: 'Web Developer',
      period: 'September 2023 - February 2024',
      description: [
        'Translated designs and wireframes into code using HTML, TailwindCSS, and ReactJS.',
        'Created the company official website from scratch using ReactJS.',
        'Utilized NextJS for server-side rendering and Node.js for API endpoints with Express.',
        'Implemented MongoDB for database connections and Sanity for modern CMS integration.',
      ],
      current: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div ref={workExpRef} className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen py-16 px-4 text-white">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <motion.div
          className="space-y-8 sm:w-[80%] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`bg-gray-800 rounded-lg p-6 shadow-lg border-l-4 ${
                exp.current ? 'border-blue-500' : 'border-gray-600'
              }`}
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400">{exp.company}</h3>
                  <p className="text-xl text-gray-300">{exp.position}</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <FaCalendar className="text-gray-400 mr-2" />
                  <p className="text-gray-400">{exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {exp.current && (
                <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-4">
                  Current
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExperience;