import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  ExternalLink, 
  Github,
  Calendar,
  Globe
} from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
  id: 1,
  title: 'Easy Trip - Travel Booking Website',
  description: 'A dynamic travel booking website developed under RTRP project using HTML, CSS, PHP, and MySQL. It allows users to search, plan, and book trips with secure database management.',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPUsOH3gTqaE87Pwe8h5CWSt2zAPjGXe_sw&s',
  technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'XAMPP'],
  category: 'Full Stack',
  status: 'Completed',
  date: 'March 2025',
  githubUrl: 'https://github.com/Dasari-Pranay/RTRP',  
  liveUrl: 'https://dasari-pranay.github.io/RTRP/', 
  features: [
    'User registration and login system',
    'Search and filter travel destinations',
    'Hotel and travel package booking',
    'Database-driven dynamic content',
    'Admin dashboard for managing bookings'
  ],
  highlights: [
    'Responsive design using HTML & CSS',
    'Dynamic backend using PHP and MySQL',
    'Secure data storage with XAMPP server'
  ]
},

   {
  id: 2,
  title: 'AI Browsing Agent',
  description: 'An intelligent Python-based agent that takes a user prompt, automatically searches the web, scrapes relevant data, and returns summarized results in real time.',
  image: 'https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/db03bbbf-b674-43de-b257-504659ecb1ad/OpenAI_s_Operator_AI_Agent_Automates_Web_Tasks_with_a_Browser.jpg?t=1737663464',
  technologies: ['Python', 'BeautifulSoup', 'Selenium', 'Requests', 'OpenAI API'],
  category: 'Backend',
  status: 'Completed',
  date: 'June 2025',
  githubUrl: 'https://github.com/Dasari-Pranay/ai-agent',
  liveUrl: null,  
  features: [
    'Takes natural language prompts as input',
    'Automated web searching and scraping',
    'Extracts, filters, and cleans relevant information',
    'Summarizes results using AI-based text processing',
    'Exports results to a text or PDF file'
  ],
  highlights: [
    'Real-time automated browsing',
    'AI-powered summarization',
    'Handles multiple search engines',
    'Customizable search filters'
  ]
},
{
  id: 3,
  title: 'Personal Portfolio Website',
  description: 'A modern, responsive portfolio website built using HTML, CSS, and JavaScript, designed to showcase my projects, skills, and contact details with smooth animations and a professional layout.',
  image: 'https://media.www.kent.ac.uk/se/20823/portfolio-banner_1920w.jpg',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  category: 'Frontend',
  status: 'Completed',
  date: 'July 2025',
  githubUrl: 'https://github.com/Dasari-Pranay/Portfolio-1', // Replace with your repo link
  liveUrl: 'https://dasari-pranay.github.io/Portfolio-1/',  // Replace with your live deployment URL
  features: [
    'Fully responsive design for all screen sizes',
    'Smooth scroll navigation with sticky header',
    'Project showcase with image previews',
    'Contact form with email integration',
    'Custom CSS animations and hover effects'
  ],
  highlights: [
    'Minimal and modern UI design',
    'Fast-loading and SEO optimized',
    'Deployed online for public access',
    'User-friendly interactive interface'
  ]
},
{
  id: 4,
  title: 'Car Rental Web Application',
  description: 'A modern and responsive car rental platform developed using React and Vite, allowing users to browse available cars, view pricing details, book rentals online, and manage reservations seamlessly.',
  image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  technologies: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'REST API'],
  category: 'Full Stack',
  status: 'Completed',
  date: 'July 2025',
  githubUrl: 'https://github.com/Dasari-Pranay/CarRental-fullstack', 
  liveUrl: 'https://car-rental-one-gamma.vercel.app/', 
  features: [
    'Browse and search cars with filters (price, model, availability)',
    'Booking system with date selection and real-time availability',
    'User authentication and profile management',
    'Admin dashboard for managing cars and bookings',
    'Responsive UI with smooth animations'
  ],
  highlights: [
    'Fast performance with Vite',
    'Reusable React components',
    'Mobile-friendly and SEO optimized',
    'Integrated REST API for dynamic data handling'
  ]
},
{
  id: 5,
  title: 'Employee Salary Prediction Web App',
  description: 'A machine learning-powered web application that predicts employee salaries based on experience, skills, and other input factors using regression models.',
  image: 'https://images.pexels.com/photos/669623/pexels-photo-669623.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask/Streamlit', 'HTML', 'CSS'],
  category: 'Machine Learning',
  status: 'Completed',
  date: 'August 2025',
  githubUrl: 'https://github.com/Dasari-Pranay/Employee_Salary_Prediction', 
  liveUrl: 'https://mellifluous-lily-7bc5c6.netlify.app/', 
  features: [
    'Data preprocessing and cleaning of employee datasets',
    'Training multiple regression models for accurate predictions',
    'Interactive web UI to input employee details',
    'Real-time salary prediction based on trained ML model',
    'Option to download results as a CSV report'
  ],
  highlights: [
    'Implemented Linear and Random Forest Regression',
    'High prediction accuracy with optimized hyperparameters',
    'Deployed as a user-friendly web application',
    'Scalable model with future dataset integration'
  ]
},
{
  id: 6,
  title: 'Quick AI - AI-Powered Content & Image Assistant',
  description: 'A full-stack AI-powered web application that provides advanced tools for content generation, image editing, and resume analysis. It uses Gemini APIs, Clerk for authentication, and Neon database for data storage. Premium features are accessible only to subscribed users.',
  image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  technologies: ['Python', 'React', 'Vite', 'JavaScript', 'Gemini API', 'Clerk Auth', 'Neon Database', 'Tailwind CSS'],
  category: 'Full Stack',
  status: 'Completed',
  date: 'August 2025',
  githubUrl: 'https://github.com/Dasari-Pranay/QuickAI', 
  liveUrl: 'https://quick-ai-five-mocha.vercel.app/', // Replace with your deployed link
  features: [
    'Generate SEO-friendly articles and blogs with AI',
    'AI-powered image generation based on prompts',
    'Remove backgrounds or objects from images with one click',
    'Resume review and improvement suggestions',
    'Premium plan for unlocking advanced AI features'
  ],
  highlights: [
    'Integrated Gemini AI APIs for high-quality outputs',
    'Secure authentication with Clerk and JWT-based sessions',
    'Neon PostgreSQL database for storing user data & history',
    'Fast and scalable architecture with React + Vite',
    'Subscription-based access to premium tools'
  ]
}

  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { number: '6+', label: 'Projects Completed' },
    { number: '15+', label: 'Technologies Used' },
    { number: '100+', label: 'Commits Made' },
    { number: '3', label: 'Live Deployments' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
              <Code size={16} className="mr-2" />
              My Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A showcase of my technical skills and creativity through various projects 
            spanning web development, mobile apps, and data analytics.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg neomorphism">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-2 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg neomorphism">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden neomorphism group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    <span className="text-xs">{project.date}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start text-xs text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={16} className="mr-2 group-hover:rotate-12 transition-transform" />
                    Code
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={16} className="mr-2 group-hover:rotate-12 transition-transform" />
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with fellow developers. 
              Have an idea? Let's discuss how we can bring it to life!
            </p>
            <motion.button
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={20} className="mr-2" />
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;