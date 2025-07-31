import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion'; // Import Variants and Transition
// Note: In a Canvas environment, `react-router-dom` Link might not function as expected
// for navigation between different 'pages' within a single immersive.
// For this example, we'll keep Link as it was in your original code, assuming an external router.
import { Link } from 'react-router-dom';
// Removed react-icons/hi and react-icons/fa as they caused resolution errors.
// Replaced with equivalent or similar icons from lucide-react.
import {
  Download,
  Mail,
  ChevronDown,
  Code,
  Sparkles,
  Rocket, // Already used and available in lucide-react
  Github,
  Linkedin,
  Instagram,
  X,
  // Importing specific icons for skills section
  Brackets, // For JavaScript/TypeScript/React
  Database, // For MongoDB
  Cloud, // For AWS/Cloud Computing
  Cpu, // For Generative AI
  FileCode, // For C-Language
  Leaf, // For Node.js (often associated with backend/nature)
  Coffee, // For Java (iconic)
  Atom, // Replacement for Science, for Python
  GraduationCap, // Replacement for HiAcademicCap
  Laptop, // Replacement for FaLaptopCode
} from 'lucide-react';

// Utility component for animating numbers
const AnimatedNumber: React.FC<{ value: string; duration?: number }> = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const target = parseFloat(value.replace(/[^0-9.]/g, '')); // Extract number, handle '+'

  useEffect(() => {
    let start: DOMHighResTimeStamp;
    const animate = (timestamp: DOMHighResTimeStamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / (duration * 1000);
      const current = Math.min(progress, 1) * target;
      setDisplayValue(Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(target); // Ensure final value is exact
      }
    };
    requestAnimationFrame(animate);
  }, [value, duration, target]);

  return (
    <span>{displayValue}{value.includes('+') ? '+' : ''}{value.includes('%') ? '%' : ''}</span>
  );
};

const Home: React.FC = () => {
  // Function to scroll to the next section (Skills section)
  const scrollToNext = () => {
    // Calculate the scroll position to the top of the skills section
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      window.scrollTo({ top: skillsSection.offsetTop, behavior: 'smooth' });
    } else {
      // Fallback to scrolling by window height if section ID is not found
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  // List of skills with associated Lucide React icons
  const skills = [
    { name: 'JavaScript', icon: Brackets },
    { name: 'TypeScript', icon: Brackets },
    { name: 'React', icon: Brackets },
    { name: 'Node.js', icon: Leaf }, // Using Leaf for Node.js
    { name: 'Python', icon: Atom }, // Changed from Science to Atom for Python
    { name: 'Java', icon: Coffee }, // Using Coffee for Java
    { name: 'MongoDB', icon: Database },
    { name: 'AWS', icon: Cloud },
    { name: 'Generative AI', icon: Cpu }, // Using Cpu for AI
    { name: 'C-Language', icon: FileCode },
    { name: 'Cloud Computing', icon: Cloud }
  ];

  // Statistics for the stats section
  const stats = [
    { number: '5', label: 'Projects Completed' },
    { number: '6', label: 'Technologies Mastered' },
    { number: '2+', label: 'Years Learning' },
    { number: '98%', label: 'Passion for Code' }
  ];

  // State to control the visibility of the fullscreen image modal
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Effect to handle Escape key press for closing the modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsImageOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Variants for Framer Motion animations
  const textVariants: Variants = { // Explicitly type Variants
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants: Variants = { // Explicitly type Variants
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } },
  };

  const socialIconVariants: Variants = { // Explicitly type Variants
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 1 + i * 0.1 },
    }),
  };

  // Define the transition separately and type it
  const cardTransition: Transition = {
    duration: 0.7,
    ease: "easeOut", // This is a valid string for ease
  };

  const cardVariants: Variants = { // Explicitly type Variants
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: cardTransition }, // Use the typed transition object
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 py-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          {/* Additional subtle background shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 bg-green-400/5 rounded-full blur-3xl"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-red-400/5 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -50, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-center lg:text-left"
            >
              <motion.div
                variants={textVariants}
                className="mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium shadow-inner">
                  <Sparkles size={16} className="mr-2 animate-pulse" />
                  Welcome to my Portfolio
                </span>
              </motion.div>

              <motion.h1
                variants={textVariants}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
              >
                Hi, I'm{' '}
                <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-shift">
                  Dasari Pranay
                </span>
              </motion.h1>

              <motion.p
                variants={textVariants}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 space-y-2"
              >
                <span className="flex items-center gap-2">
                  <GraduationCap className="text-blue-500 w-6 h-6" /> {/* Replaced HiAcademicCap */}
                  Student of Computer Science and Engineering
                </span>
                <span className="flex items-center gap-2">
                  <Laptop className="text-green-500 w-6 h-6" /> {/* Replaced FaLaptopCode */}
                  Aspiring Full-Stack Developer
                </span>
                <span className="flex items-center gap-2">
                  <Rocket className="text-purple-500 w-6 h-6" /> {/* FaRocket is now Rocket from lucide-react */}
                  Passionate Learner | Tech Enthusiast
                </span>
              </motion.p>

              <motion.p
                variants={textVariants}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                I'm passionate about creating innovative solutions and exploring cutting-edge technologies.
                Always eager to learn, grow, and contribute to meaningful projects.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/resume"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group transform hover:-translate-y-1 active:translate-y-0"
                >
                  <Download size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                  View Resume
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-xl font-semibold transition-all duration-300 group transform hover:-translate-y-1 active:translate-y-0"
                >
                  <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  Contact Me
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center lg:justify-start space-x-4 mt-8"
              >
                {[
                  { icon: Github, href: 'https://github.com/Dasari-Pranay' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/pranay-dasari-027145352/' },
                  { icon: Instagram, href: 'https://www.instagram.com/dasari_pranay_netha/?hl=en' },
                  { icon: Mail, href: 'mailto:dasaripranaynetha@gmail.com', label: 'Email' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      variants={socialIconVariants}
                    >
                      {/* Animated background on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <Icon size={20} className="text-gray-600 dark:text-gray-300 group-hover:text-white relative z-10" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Profile Card */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="flex justify-center lg:justify-end perspective-1000" // Added perspective for 3D effect
            >
              <motion.div
                className="relative w-80 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-8 text-white card-3d transform-gpu"
                whileHover={{ rotateY: 8, rotateX: 8, scale: 1.05 }} // Increased rotation and scale on hover
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }} // Enable 3D transformations
              >
                <div className="text-center" style={{ transform: "translateZ(20px)" }}> {/* Push content forward in 3D space */}
                  <div
                    className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm cursor-pointer border-4 border-white/30 shadow-inner"
                    onClick={() => setIsImageOpen(true)}
                  >
                    <img
                      src="/images/professional pic.jpg" // Ensure this path is correct
                      alt="Dasari Pranay"
                      className="w-28 h-28 rounded-full object-cover border-2 border-white"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/112x112/cccccc/333333?text=Profile"; // Placeholder on error
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-md">Dasari Pranay</h3>
                  <p className="text-blue-100 mb-4 text-shadow-sm">Software Engineer</p>
                  <div className="flex items-center justify-center mb-4">
                    <Code size={20} className="mr-2 text-white/80" />
                    <span>Full Stack Developer</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Rocket size={20} className="mr-2 text-white/80" />
                    <span>Innovation Enthusiast</span>
                  </div>
                </div>

                {/* Floating Elements with more pronounced animations */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360, y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
                >
                  <Sparkles size={24} className="text-yellow-800" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
                >
                  <Rocket size={20} className="text-green-800" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Fullscreen Modal for Profile Picture */}
        <AnimatePresence>
          {isImageOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsImageOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsImageOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl p-2 rounded-full hover:bg-white/20 transition-all duration-200 z-50"
                title="Close image"
              >
                <X size={28} />
              </button>
              <motion.img
                src="/images/professional pic.jpg" // Ensure this path is correct
                alt="Dasari Pranay Fullscreen"
                className="max-w-full md:max-w-3xl max-h-[90vh] rounded-xl shadow-2xl border-4 border-white/50 object-contain"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found"; // Placeholder on error
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-300 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </motion.button>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
          <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" className="text-gray-300 dark:text-gray-700" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => {
              const SkillIcon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -5, x: 2, scale: 1.03, rotate: 2 }} // Subtle lift and rotate on hover
                  className="text-center"
                >
                  <div className="bg-white dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl p-6 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-600 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-inner">
                      <SkillIcon size={28} className="text-white group-hover:animate-bounce-icon" /> {/* Animated icon */}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-lg">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        {/* Abstract shapes for background */}
        <motion.div
          className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl opacity-30"
          animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-30"
          animate={{ x: [50, -50, 50], y: [50, -50, 50] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 transform hover:scale-105 transition-transform duration-300"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-extrabold mb-2 text-white drop-shadow-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                >
                  <AnimatedNumber value={stat.number} />
                </motion.div>
                <div className="text-blue-100 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailwind CSS Custom Styles (add this to your main CSS file or a style block if this is a standalone HTML) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Gradient Text Animation */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradientShift 3s ease-in-out infinite;
        }

        /* Neomorphism style (subtle inner/outer shadows) */
        .neomorphism {
          box-shadow: 5px 5px 10px rgba(0,0,0,0.1), -5px -5px 10px rgba(255,255,255,0.8);
        }
        .dark .neomorphism {
          box-shadow: 5px 5px 10px rgba(0,0,0,0.5), -5px -5px 10px rgba(50,50,50,0.3);
        }

        /* Button Hover Effect */
        .btn-hover-effect {
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .btn-hover-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: all 0.4s ease-in-out;
          z-index: -1;
        }
        .btn-hover-effect:hover::before {
          left: 100%;
        }

        /* Icon bounce animation for skills */
        @keyframes bounceIcon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .group-hover\\:animate-bounce-icon .lucide {
          animation: bounceIcon 0.6s ease-in-out;
        }

        /* 3D Card Float Effect */
        @keyframes float {
          0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          50% { transform: translateY(-10px) rotateX(2deg) rotateY(2deg); }
          100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
        }
        .card-3d {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
