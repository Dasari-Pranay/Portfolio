import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  Globe, // Added for a more global/innovative feel
  Zap, // Added for energy/innovation
} from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Kamala Institute of Technology & Science',
      location: 'Singapur, Telangana',
      duration: '2023 - 2027',
      grade: 'CGPA: 8.5/10',
      status: 'Pursuing',
      highlights: [
        'Specialized in Full Stack Development',
        'Active in Coding',
        'Participated in multiple Workshops',
      ],
      projects: [
        'Car Rental website',
        'Real-Time Research Project',
        'AI-Agent',
        'MERN Authentication System'
      ]
    },
    {
      id: 2,
      degree: 'Intermediate (12th Grade)',
      field: 'Mathematics, Physics, Chemistry',
      institution: 'Sree Sai Junior College',
      location: 'Hanamkonda, Telangana',
      duration: '2021 - 2023',
      grade: 'Percentage: 84.2%',
      status: 'Completed',
      highlights: [
        'Participated in Maths Quiz Clubs',
        'Led the Science Club',
      ],
      projects: [
        'Scientific Calculator in C',
        'Physics Simulation',
      ]
    },
    {
      id: 3,
      degree: 'Secondary School (10th Grade)',
      field: 'General Studies',
      institution: 'T.S.Model School',
      location: 'Somaram,Saidapur, Telangana',
      duration: '2018 - 2019',
      grade: 'CGPA: 10/10',
      status: 'Completed',
      highlights: [
        'Class Valedictorian',
        'Captain of School Cricket Team',
        'Perfect attendance award'
      ],
      projects: [
        'School Management System',
        'Library Automation System',
      ]
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistently maintained high grades throughout academic career',
      icon: Award,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Technical Leadership',
      description: 'Led multiple technical projects and coding initiatives',
      icon: Target,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Continuous Learning',
      description: 'Always eager to learn new technologies and methodologies',
      icon: BookOpen,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Growth Mindset',
      description: 'Focused on continuous improvement and skill development',
      icon: TrendingUp,
      color: 'from-purple-400 to-purple-600'
    }
  ];

  // Framer Motion Variants
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const timelineItemVariants: Variants = {
    hidden: (isEven: boolean) => ({ opacity: 0, x: isEven ? -100 : 100, filter: 'blur(10px)' }),
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } },
  };

  const achievementCardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-900 py-20 font-inter relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-1/4 left-[5%] w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 right-[5%] w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
        animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute top-[10%] right-[20%] w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
        animate={{ x: [0, 80, 0], y: [0, 80, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="text-center mb-16"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold shadow-lg backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
              <GraduationCap size={18} className="mr-2 animate-pulse text-blue-600 dark:text-blue-400" />
              Education Background
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight drop-shadow-lg"
          >
            My Academic{' '}
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-shift">
              Journey
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            From foundational learning to specialized technical education, here's my educational path
            that shaped my passion for technology and innovation.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg timeline-line-glow"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={timelineItemVariants}
              custom={index % 2 === 0} // Pass custom prop for left/right animation
              className={`relative flex items-center mb-24 ${
                index % 2 === 0 ? 'justify-start md:justify-end md:flex-row-reverse' : 'justify-end md:justify-start'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-white dark:border-gray-900 rounded-full z-20 flex items-center justify-center shadow-xl timeline-node-pulse">
                {index % 2 === 0 ? <Globe size={16} className="text-white" /> : <Zap size={16} className="text-white" />}
              </div>

              {/* Content Card */}
              <div className={`w-full max-w-lg ${index % 2 === 0 ? 'mr-auto pr-8 md:pr-0 md:pl-12' : 'ml-auto pl-8 md:pl-0 md:pr-12'}`}>
                <motion.div
                  className="bg-white/70 dark:bg-gray-800/70 rounded-3xl shadow-2xl p-8 glassmorphism-card border border-white/30 dark:border-gray-700/50 relative overflow-hidden"
                  whileHover={{ y: -8, rotateY: index % 2 === 0 ? 3 : -3, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Background overlay for glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 dark:from-gray-700/10 dark:to-gray-800/0 rounded-3xl z-0"></div>

                  {/* Header */}
                  <div className="relative z-10 flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                        {item.degree}
                      </h3>
                      <p className="text-blue-700 dark:text-blue-300 font-semibold mb-2">
                        {item.field}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {item.institution}
                      </p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md ${
                      item.status === 'Pursuing'
                        ? 'bg-green-200 text-green-800 dark:bg-green-700/50 dark:text-green-200'
                        : 'bg-blue-200 text-blue-800 dark:bg-blue-700/50 dark:text-blue-200'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="relative z-10 space-y-4 mb-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Calendar size={18} className="mr-3 text-blue-600 dark:text-blue-400" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <MapPin size={18} className="mr-3 text-purple-600 dark:text-purple-400" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Award size={18} className="mr-3 text-yellow-600 dark:text-yellow-400" />
                      <span>{item.grade}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="relative z-10 mb-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ delay: i * 0.05 + 0.1 }}
                        >
                          <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm"></div>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  <div className="relative z-10 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Notable Projects
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {item.projects.map((project, i) => (
                        <motion.span
                          key={i}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ delay: i * 0.05 + 0.2 }}
                        >
                          {project}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="mt-28"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-md">
              Academic <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Recognition and milestones that mark my educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={achievementCardVariants}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-3xl shadow-2xl glassmorphism-card border border-white/30 dark:border-gray-700/50 relative overflow-hidden"
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Background overlay for glassmorphism */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 dark:from-gray-700/10 dark:to-gray-800/0 rounded-3xl z-0"></div>

                    <div className={`relative z-10 w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg border-2 border-white/50 dark:border-gray-600/50`}>
                      <Icon size={32} className="text-white drop-shadow-sm" />
                    </div>
                    <h3 className="relative z-10 text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {achievement.title}
                    </h3>
                    <p className="relative z-10 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
      {/* Tailwind CSS Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Gradient Text Animation (re-used from Home) */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradientShift 3s ease-in-out infinite;
        }

        /* Glassmorphism Card Style */
        .glassmorphism-card {
          background-color: rgba(255, 255, 255, 0.1); /* Light background for blur */
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px); /* Safari support */
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        .dark .glassmorphism-card {
          background-color: rgba(30, 41, 59, 0.4); /* Darker background for blur */
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
        }

        /* Animated Blob Background */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* Timeline Node Pulse Effect */
        @keyframes pulse-node {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(66, 153, 225, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(66, 153, 225, 0); }
        }
        .timeline-node-pulse {
          animation: pulse-node 2s infinite cubic-bezier(0.66, 0, 0, 1);
        }

        /* Timeline Line Gradient Effect */
        @keyframes gradient-line-shift {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }
        .timeline-line-glow {
          background-size: 100% 200%;
          animation: gradient-line-shift 10s ease-in-out infinite alternate;
        }

        /* General shadow for consistency */
        .shadow-lg {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .dark .shadow-lg {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default Education;
