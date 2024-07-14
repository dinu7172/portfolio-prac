import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaComments } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await emailjs.send(
          'dinesh7171', // Replace with your EmailJS service ID
          'template_ex2wvjj', // Replace with your EmailJS template ID
          formData,
          'tQeakiSJFsxkRDuqI' // Replace with your EmailJS user ID
        );
        setSubmitMessage('Thank you for your message. I will get back to you soon!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (error) {
        setSubmitMessage('Oops! Something went wrong. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen py-16 px-4 text-white">
      <div className="container mx-auto max-w-2xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-900 p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
             <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 items-center">
              <FaUser className="mr-2" /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 items-center">
              <FaEnvelope className="mr-2" /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2 items-center">
              <FaComments className="mr-2" /> Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Subject of your message"
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 items-center">
              <FaPaperPlane className="mr-2" /> Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message here..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FaPaperPlane className="mr-2" /> Send Message
                </>
              )}
            </button>
          </div>
        </motion.form>
        {submitMessage && (
          <motion.p
            className="text-center mt-4 text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {submitMessage}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Contact;