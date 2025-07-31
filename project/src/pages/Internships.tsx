import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  X,
  Users,
  Star, // For achievements
  Layers, // For technologies
} from 'lucide-react';

const Internships: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const internships = [
    {
      id: 1,
      company: 'Agnirva Space Research',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN80-Ge27buHZWdrdfdZeGgahXInGgSzVKfA&s',
      position: 'Space Research Intern',
      duration: 'Jan 2025 - Mar 2025',
      location: 'Remote',
      type: 'Remote',
      description:
        'Successfully completed The Agnirva Space Internship Program recognized by AICTE. Engaged in 440+ steps of space research activities over 80 hours, acquiring a broad array of knowledge and technical skills.',
      responsibilities: [
        'Completed research-based tasks and activities in space technology domains',
        'Demonstrated diligence and consistent skill development throughout the internship',
        'Collaborated with mentors and peers in exploring innovative space solutions',
        'Produced detailed reports and presentations on assigned projects',
        'Actively participated in online workshops and sessions conducted by ISRO registered tutors',
      ],
      technologies: ['Space Research', 'Data Analysis', 'Scientific Reporting'],
      achievements: [
        'Completed 440+ research steps over 80 hours',
        'Certified by Agnirva and recognized by AICTE',
        'Enhanced technical and analytical skills in space science',
      ],
      certificate: 'Available',
      recommendation: 'Certificate awarded by Agnirva Space Research',
      certificateLink: '/internship/Agnirva Certificate.pdf',
    },
    {
      id: 2,
      company: 'EduSkills (AWS Academy)',
      logo: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      position: 'Data Engineering Virtual Intern',
      duration: 'Oct 2024 - Dec 2024',
      location: 'Remote',
      type: 'Remote',
      description:
        'Completed a 10-week Data Engineering Virtual Internship under the AICTE-EduSkills program, with curriculum provided by AWS Academy.',
      responsibilities: [
        'Designed and implemented data pipelines using AWS services',
        'Worked on big data processing tasks and data visualization projects',
        'Collaborated with peers in virtual labs to solve real-world data problems',
        'Attended expert-led sessions on data engineering concepts and practices',
        'Prepared reports and presented findings from data analytics exercises',
      ],
      technologies: ['AWS', 'Big Data', 'Data Engineering', 'Cloud Computing', 'ETL Pipelines'],
      achievements: [
        'Completed 10-week virtual internship recognized by AICTE',
        'Built and deployed cloud-based data workflows',
        'Enhanced understanding of scalable data processing systems',
      ],
      certificate: 'Available',
      recommendation: 'Certified by AICTE and EduSkills',
      certificateLink: '/internship/Data Engineering.pdf',
    },
    {
      id: 3,
      company: 'EduSkills (Google for Developers)',
      logo: 'https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0-300x300.jpg',
      position: 'Android Developer Virtual Intern',
      duration: 'Jan 2025 - Mar 2025',
      location: 'Remote',
      type: 'Remote',
      description:
        'Completed a 10-week Android Developer Virtual Internship under the AICTE-EduSkills India Edu Program, supported by Google for Developers.',
      responsibilities: [
        'Developed Android applications using Java and Kotlin',
        'Worked on UI/UX design principles to build user-friendly interfaces',
        'Integrated APIs and external libraries into Android projects',
        'Participated in online workshops and coding challenges',
        'Collaborated with mentors and peers to improve coding standards',
      ],
      technologies: ['Android Studio', 'Java', 'Kotlin', 'API Integration', 'UI/UX Design'],
      achievements: [
        'Completed 10-week internship recognized by AICTE and supported by Google for Developers',
        'Developed 3+ functional Android prototypes during the program',
        'Gained practical skills in mobile app development',
      ],
      certificate: 'Available',
      recommendation: ' AICTE and EduSkills under Google ',
      certificateLink: '/internship/Google android.pdf',
    },
    {
      id: 4,
      company: 'EduSkills (Microsoft Learn)',
      logo: 'https://learn.microsoft.com/favicon.ico', // Replace with actual Microsoft Learn logo if preferred
      position: 'Generative AI Virtual Intern',
      duration: 'Apr 2025 - Jun 2025', // Assuming 10 weeks (please confirm dates if known)
      location: 'Remote',
      type: 'Remote',
      description: 'Completed a Generative AI Virtual Internship under the AICTE-EduSkills program, supported by Microsoft Learn. Focused on developing AI applications, exploring machine learning models, and implementing generative AI use cases.',
      responsibilities: [
        'Explored and implemented generative AI models using Azure and Python',
        'Built AI-driven prototypes to demonstrate real-world applications',
        'Collaborated in virtual labs and coding exercises on machine learning concepts',
        'Attended webinars and sessions on ethical AI practices and deployment',
        'Prepared and submitted detailed reports on internship projects'
      ],
      technologies: ['Azure AI', 'Python', 'Machine Learning', 'Generative AI Models'],
      achievements: [
        'Completed internship recognized by AICTE and Microsoft Learn',
        'Successfully created multiple generative AI prototypes',
        'Gained expertise in applying AI solutions to real-world problems'
      ],
      certificate: 'Available',
      recommendation: ' AICTE and EduSkills under Microsoft Learn support',
      certificateLink: '/internship/Generative AI internship.pdf',
    },
    {
      id: 5,
      company: 'Edunet Foundation (IBM SkillsBuild)',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGKaXcfRtQG_6rHqVokWuvsqX1hjWogVOBA&s', // IBM SkillsBuild official logo
      position: 'AI & ML Virtual Intern',
      duration: 'Jun 2025 - Jul 2025 (Ongoing)',
      location: 'Remote',
      type: 'Remote',
      description: 'Currently pursuing a 6-week internship on Artificial Intelligence & Machine Learning under the Edunet Foundation SkillsBuild Program. Focused on self-paced learning, project-based tasks, and participation in mentor-led sessions.',
      responsibilities: [
        'Registered and actively using IBM SkillsBuild e-learning platform',
        'Attending weekly mentor-led sessions and technical masterclasses',
        'Developing a project applying AI & ML concepts in a real-world scenario',
        'Collaborating with peers on query resolution and technical discussions',
        'Preparing and submitting project presentation by end of internship'
      ],
      technologies: ['Python', 'AI & ML', 'IBM SkillsBuild Platform'],
      achievements: [
        'Selected for AICTE Edunet Foundation internship program',
        'Gaining practical exposure in AI & ML with mentorship from industry experts',
        'Expected certification from AICTE and Edunet Foundation upon completion'
      ],
      certificate: 'In Progress',
      recommendation: 'To be awarded after successful completion',
      certificateLink: '/internship/AICTE B2 Offer Letter .pdf',
    }
  ];

  const stats = [
    { number: '4', label: 'Internships Completed' },
    { number: '14', label: 'Months of Experience' },
    { number: '1', label: 'Current Internships' },
    { number: '19', label: 'Technologies Mastered' },
  ];

  const closeModal = () => setSelectedCertificate(null);

  // Framer Motion Variants
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const statCardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, filter: 'blur(0px)' }, // Reduced initial blur
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.7, ease: "easeOut" } },
  };

  const internshipCardVariants: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.9, filter: 'blur(0px)' }, // Reduced initial blur
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-900 py-20 font-inter relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-1/4 left-[5%] w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob will-change-transform" // Added will-change
        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 right-[5%] w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 will-change-transform" // Added will-change
        animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute top-[10%] right-[20%] w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 will-change-transform" // Added will-change
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
          <span className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold shadow-lg backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
            <Briefcase size={18} className="mr-2 animate-pulse text-blue-600 dark:text-blue-400" />
            Internship Experience
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight drop-shadow-lg">
            Professional <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-shift">Internships</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-world experience gained through internships at innovative companies, where I applied my technical skills and learned industry best practices.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={statCardVariants}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-2xl shadow-xl glassmorphism-card border border-white/30 dark:border-gray-700/50 transform hover:scale-105 transition-transform duration-300 will-change-transform"> {/* Added will-change */}
                <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 drop-shadow-md">
                  {stat.number}
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium text-lg">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Internships List */}
        <div className="space-y-16">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={internshipCardVariants}
              transition={{ delay: index * 0.15 }}
              className="bg-white/70 dark:bg-gray-800/70 rounded-3xl shadow-2xl overflow-hidden glassmorphism-card border border-white/30 dark:border-gray-700/50 relative will-change-transform" // Added will-change
            >
              {/* Subtle background gradient within the card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 dark:from-gray-700/5 dark:to-gray-800/0 rounded-3xl z-0"></div>

              <div className="p-8 relative z-10">
                {/* Internship Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg border-2 border-white/50 dark:border-gray-600/50">
                      <img
                        src={internship.logo}
                        alt={`${internship.company} logo`}
                        className="w-16 h-16 object-contain rounded-lg p-2" // object-contain to prevent cropping
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/64x64/cccccc/333333?text=${internship.company.charAt(0)}`; // Placeholder on error
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-snug">
                        {internship.position}
                      </h3>
                      <p className="text-blue-700 dark:text-blue-300 font-semibold text-lg">
                        {internship.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full shadow-sm">
                      <Calendar size={16} className="mr-1 text-blue-500" />
                      {internship.duration}
                    </div>
                    <div className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full shadow-sm">
                      <MapPin size={16} className="mr-1 text-purple-500" />
                      {internship.location}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
                        internship.type === 'Remote'
                          ? 'bg-green-200 text-green-800 dark:bg-green-700/50 dark:text-green-200'
                          : internship.type === 'Hybrid'
                          ? 'bg-yellow-200 text-yellow-800 dark:bg-yellow-700/50 dark:text-yellow-200'
                          : 'bg-blue-200 text-blue-800 dark:bg-blue-700/50 dark:text-blue-200'
                      }`}
                    >
                      {internship.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {internship.description}
                </p>

                {/* Grid Layout for Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-8">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                        <Users size={22} className="mr-3 text-blue-600 dark:text-blue-400" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {internship.responsibilities.map((responsibility, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start text-gray-700 dark:text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: i * 0.05 + 0.1 }}
                          >
                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm"></div>
                            <span className="text-base">{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                        <Layers size={22} className="mr-3 text-blue-600 dark:text-blue-400" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {internship.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: i * 0.05 + 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    {/* Achievements */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                        <Star size={22} className="mr-3 text-yellow-500 dark:text-yellow-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {internship.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start text-gray-700 dark:text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: i * 0.05 + 0.1 }}
                          >
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm"></div>
                            <span className="text-base">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Certificate & View Button */}
                    <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl space-y-4 shadow-inner border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center justify-between">
                        <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                          Certificate Status:
                        </span>
                        <span className={`text-base font-semibold ${
                          internship.certificate === 'Available' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                        }`}>
                          {internship.certificate}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                          Recommendation:
                        </span>
                        <span className="text-base text-blue-600 dark:text-blue-400 text-right">
                          {internship.recommendation}
                        </span>
                      </div>
                      {internship.certificateLink && (
                        <motion.button
                          onClick={() => setSelectedCertificate(internship.certificateLink)}
                          className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink size={20} className="mr-2" />
                          View Certificate
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Certificate View */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg p-4"
            onClick={closeModal}
          >
            {/* Close Button - Outside modal card */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-4xl p-2 rounded-full hover:bg-white/20 transition-all duration-200 z-50"
              title="Close modal"
            >
              <X size={32} />
            </button>
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full h-[90vh] relative flex flex-col"
            >
              <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 p-4 text-center border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Certificate Preview</h3>
              </div>
              <div className="flex-grow">
                {selectedCertificate.endsWith('.pdf') ? (
                  <iframe
                    src={selectedCertificate}
                    className="w-full h-full"
                    title="Certificate PDF"
                    frameBorder="0"
                  />
                ) : (
                  <img
                    src={selectedCertificate}
                    alt="Certificate"
                    className="w-full h-full object-contain p-4"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/800x600/cccccc/333333?text=Certificate+Not+Found"; // Placeholder on error
                    }}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Styles */}
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

        /* Glassmorphism Card Style */
        .glassmorphism-card {
          background-color: rgba(255, 255, 255, 0.1); /* Light background for blur */
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px); /* Safari support */
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          will-change: transform, opacity, filter; /* Added will-change */
        }
        .dark .glassmorphism-card {
          background-color: rgba(30, 41, 59, 0.4); /* Darker background for blur */
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
          will-change: transform, opacity, filter; /* Added will-change */
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

export default Internships;
