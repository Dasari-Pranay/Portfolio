import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import { 
  Mail, Phone, MapPin, Send,
  Github, Linkedin, Twitter, Instagram,
  MessageCircle, Clock
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Unique Toast Styles
  const toastStyles = {
    success: {
      borderRadius: '12px',
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
      color: '#fff',
      fontWeight: 'bold',
      padding: '14px 18px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      fontSize: '15px'
    },
    error: {
      borderRadius: '12px',
      background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
      color: '#fff',
      fontWeight: 'bold',
      padding: '14px 18px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      fontSize: '15px'
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("⚠ Please enter a valid email address", { style: toastStyles.error });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_nieu4zd",
        "template_p91b8kn",
        {
          email: formData.email,      
          name: formData.name,        
          title: formData.subject,    
          message: formData.message,
        },
        "nMHGH7v9K6l48X0GE"
      );

      toast.success("Your message has been sent successfully!", { style: toastStyles.success });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.log(err);
      toast.error(" Oops! Failed to send your message. Try again!", { style: toastStyles.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact info
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'dasaripranaynetha@gmail.com',
      href: 'mailto:dasaripranaynetha@gmail.com',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7993573944',
      href: 'tel:+917993573944',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Godishala, Karimnagar, Telangana, India',
      href: 'https://maps.google.com/?q=18.187362302375437,79.34401560857957',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', href: 'https://github.com/Dasari-Pranay', color: 'hover:bg-gray-800', username: 'Dasari-Pranay' },
    { icon: Linkedin, name: 'LinkedIn', href: 'https://www.linkedin.com/in/pranay-dasari-027145352/', color: 'hover:bg-blue-600', username: 'Pranay Dasari' },
    { icon: Twitter, name: 'Twitter', href: 'https://x.com/_Dasari_Pranay', color: 'hover:bg-blue-400', username: 'Dasari Pranay' },
    { icon: Instagram, name: 'Instagram', href: 'https://www.instagram.com/dasari_pranay_netha/?hl=en', color: 'hover:bg-pink-600', username: 'Pranay@Dasari' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black py-20">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Mail size={16} className="mr-2" /> Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or simply chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-90 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send me a message</h2>
                  <p className="text-gray-600 dark:text-gray-300">I'll get back to you within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white" placeholder="Enter your email address" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white" placeholder="What's this about?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white resize-none" placeholder="Tell me about your project or inquiry..." />
                </div>
                <motion.button type="submit" disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }}>
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2 group-hover:rotate-12 transition-transform" /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur-lg bg-opacity-90">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a key={index} href={info.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 group" whileHover={{ scale: 1.02 }}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                      className={`flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg ${social.color} text-white transition-all duration-200 group`}
                      whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                      <Icon size={24} className="mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-white">{social.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-200">{social.username}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <Clock size={24} className="mr-3" />
                <h3 className="text-xl font-bold">Availability</h3>
              </div>
              <p className="text-green-100 mb-2">Currently available for new opportunities</p>
              <p className="text-sm text-green-200">Response time: Usually within 24 hours</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
