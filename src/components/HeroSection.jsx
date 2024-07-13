import React from 'react';
import { motion } from 'framer-motion';
import Profile from "/dprofile.png";
import { useScroll } from '../../context/ScrollProvider';

const Hero = () => {
  const { homeRef } = useScroll();
  return (
    <div ref={homeRef} className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center p-4">
      <div className="container w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left side - Text content */}
        <motion.div 
          className="md:w-1/2 text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm Dinesh Maurya
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            CS Graduate | FullStack Developer | Problem Solver
          </motion.p>
          <motion.p 
            className="text-gray-300 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I'm passionate about creating elegant solutions to complex problems. 
            With a strong foundation in computer science and a keen eye for design, 
            I bring ideas to life through code.
          </motion.p>
          <motion.button 
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Right side - Photo */}
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
            animate={{ 
              rotateY: [0, 180, 360],
              boxShadow: [
                "0px 0px 0px rgba(0, 0, 255, 0)",
                "0px 0px 20px rgba(0, 0, 255, 0.3)",
                "0px 0px 0px rgba(0, 0, 255, 0)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          >
            <img 
              src={Profile}
              alt="Your Name" 
              className="rounded-full w-full h-full object-cover border-4 border-blue-500"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full">
              👋
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;