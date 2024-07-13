import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward } from 'react-icons/fa';
import { useScroll } from '../../context/ScrollProvider';

const Education = () => {
    const { educationRef } = useScroll();

  const educationData = [
    {
      degree: 'BSc in Computer Science',
      institution: 'VESASC, Mumbai University',
      period: 'July 2020 - May 2023',
      gpa: '7.71/10',
      details: [
        'Studied various subjects related to Programming, Cloud, Web Development, Databases, Statistics, Networking, and other technologies.',
      ],
    },
    {
        degree: '12th HSC Board(Sci)',
        institution: 'Maharashtra State Board',
        period: 'Aug 2018 - Mar 2020',
        gpa: '72%',
        details: [
            'Passout the 12th std in Science(PCMB)'
        ]
    }
  ];

  const certifications = [
    'Python Programming Certificate by Kaggle',
    'Responsive Web Development Certificate by FreeCodeCamp',
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
    <div ref={educationRef} className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen py-16 px-4 text-white">
      <div className="container mx-auto w-full flex flex-col items-center">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <motion.div
          className="space-y-8 w-[80%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-blue-400 text-2xl mr-2" />
                <h3 className="text-2xl font-semibold text-blue-400">{edu.degree}</h3>
              </div>
              <p className="text-xl text-gray-300 mb-2">{edu.institution}</p>
              <p className="text-gray-400 mb-2">{edu.period}</p>
              <p className="text-gray-300 mb-4">GPA: {edu.gpa}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <FaAward className="text-blue-400 text-2xl mr-2" />
              <h3 className="text-2xl font-semibold text-blue-400">Certifications</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;