import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Clock,
  AlignCenterVertical as Certificate,
  Star,
  X,
} from 'lucide-react';

const Workshops: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const workshops = [
    {
      id: 1,
      title: 'Mobile Application Development Using MIT',
      organizer: 'Department of Computer Science and Engineering - KITS',
      duration: 'One Week',
      date: '17/02/2025 - 22/02/2025',
      location: 'Kamala Institute of Technology & Science, Singapur',
      description:
        'Active participation in a one-week workshop on Mobile Application Development using MIT tools.',
      skills: ['MIT App Inventor', 'Mobile Development', 'Android', 'App Design'],
      certificate: '/workshop/MIT.jpg', 
      rating: 5,
      image:
        'https://www.researchgate.net/profile/Anggit-Prabowo/publication/331807684/figure/fig1/AS:737080938348544@1552745198979/MIT-App-Inventor-Platform-Icon-MIT-App-Inventor-is-a-platform-for-creating-open-source_Q320.jpg',
    },
    {
      id: 2,
      title: 'Web Development Using AI Tools',
      organizer: 'Department of Computer Science and Engineering - KITS',
      duration: 'Five Days',
      date: '21/01/2025 - 25/01/2025',
      location: 'Kamala Institute of Technology & Science, Singapur',
      description:
        'Active participation in a five-day workshop on Web Development using AI tools.',
      skills: ['AI Tools', 'Web Development', 'HTML/CSS', 'JavaScript', 'AI Integration'],
      certificate: '/workshop/Web Development using AI tools.jpg', 
      rating: 5,
      image:
        'https://d2ms8rpfqc4h24.cloudfront.net/The_Roleand_Benefitsof_Artificial_Intelligencein_Web_Development_31d173a742.jpg',
    },
     {
      id: 3,
      title: 'National Level STTP - JAVA Full Stack with React JS & AI',
      organizer: 'KITS & Brainovision Solutions with AICTE',
      duration: '3 Weeks',
      date: '02/12/2024 - 22/12/2024',
      location: 'Kamala Institute of Technology & Science, Singapur',
      description:
        'National level short-term training program on Java Full Stack Development with React JS and Artificial Intelligence.',
      skills: ['Java', 'React JS', 'AI', 'Full Stack Development'],
      certificate: '/workshop/java fullstack.jpg', 
      rating: 5,
      image: 'https://i.ytimg.com/vi/_nXa9_6sOgQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsXc0SKcp1nm1uuZfpd4Ag_kACKw',
    },
    {
      id: 4,
      title: 'Emerging Software Technologies Program (ESTP)',
      organizer: 'Department of CSE - KITS with Brainovision & AICTE',
      duration: '5 Days',
      date: '23/06/2025 - 27/06/2025',
      location: 'Kamala Institute of Technology & Science, Singapur',
      description:
        'Workshop on emerging software technologies organized in collaboration with Brainovision and AICTE.',
      skills: ['Emerging Technologies', 'Software Engineering', 'AICTE Standards'],
      certificate: '/workshop/ESTP CERTIFICATE 2025.jpg', 
      rating: 5,
      image: 'https://blog.sagipl.com/wp-content/uploads/2021/02/technologies-to-adopt-this-year-1024x768-1.jpg', // PDF thumbnail icon
    },
    {
  id: 5,
  title: 'Ethical Hacking Workshop - SUMSHODHINI\'2Y',
  organizer: 'ISTE KITSW Student Chapter & Technical Club - SAC KITSW',
  duration: '2 Days',
  date: '18/10/2024 - 19/10/2024',
  location: 'Kakatiya Institute of Technology & Science, Warangal',
  description:
    'Participation in Ethical Hacking Workshop during SUMSHODHINI\'2Y - A National Level Students Technical Symposium.',
  skills: ['Ethical Hacking', 'Cybersecurity Basics', 'Network Security'],
  certificate: '/workshop/Ethical Hacking.jpg', 
  rating: 5,
  image: 'https://www.eccouncil.org/cybersecurity-exchange/wp-content/uploads/2022/03/ETHICAL-HACKING.jpg', 
},

  ];

  const stats = [
    { number: '5', label: 'Workshops Completed' },
    { number: '200+', label: 'Hours of Learning' },
    { number: '15+', label: 'Skills Acquired' },
    { number: '5', label: 'Certificates Earned' },
  ];

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg text-sm font-medium">
            <Award size={16} className="mr-2" />
            Workshops & Training
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Workshops
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hands-on workshops to stay updated with the latest technologies and trends in the
            industry.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800/60 backdrop-blur rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 text-center transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white/10 dark:bg-gray-800/40 backdrop-blur rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-400 to-blue-500 text-white shadow">
                    <Certificate size={12} className="mr-1" />
                    Available
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex space-x-1">
                  {renderStars(workshop.rating)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {workshop.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-300 font-medium mb-3">
                  {workshop.organizer}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {workshop.description}
                </p>

                {/* Details */}
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>{workshop.location}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {workshop.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium shadow-inner"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Certificate Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCertificate(workshop.certificate)}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-2xl"
              >
              <button
                type='button'
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-3xl hover:text-red-500 transition"
                title="Close">
               <X size={28} />
              </button>
                <img
                  src={selectedCertificate}
                  alt="Certificate"
                  className="w-full rounded-xl shadow-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Workshops;
