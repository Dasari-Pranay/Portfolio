import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Download, 
    Eye, 
    Share2, 
    Briefcase, 
    GraduationCap, 
    Code, 
    Award, 
    Mail, 
    Phone, 
    Linkedin,
    Lightbulb,
    Languages,
    Star,
    X,
    Info // Added missing Info icon for notifications
} from 'lucide-react';

// --- Data from the user's resume PDF ---
const resumeData = {
  name: "Dasari Pranay",
  title: "Computer Science Undergraduate",
  tagline: "Eager to Solve Real-World Problems with Code",
  contact: {
    email: "dasaripranaynetha@gmail.com",
    phone: "+91 7993573944",
    linkedin: "https://www.linkedin.com/in/pranay-dasari-027145352/",
    location: "Godishala",
  },
  education: [
    {
      degree: "Bachelors Degree (BTech)",
      institution: "Kamala Institute of Technology & Science",
      period: "09/2023 - Present",
      location: "Singapuram",
    },
    {
      degree: "Senior Secondary",
      institution: "Sree Sai Junior college",
      period: "06/2021 - 03/2023",
      location: "Hanmakonda",
    },
    {
      degree: "Secondary",
      institution: "T.S.Model School",
      period: "06/2009 - 04/2021",
      location: "Somaram",
    },
  ],
  skills: {
    programming: ["C (moderate)", "Python (familiar)", "Java (beginner)"],
    development: ["HTML", "CSS", "JavaScript", "MERN Stack", "Django", "NodeJs"],
    databases: ["MySQL", "MongoDB"],
  },
  projects: [
    {
      title: "DriveEasy - MERN Car Rental Platform",
      period: "06/2025 - 07/2025",
      description: "A Full-Stack Web Application for Online Vehicle Booking.",
    },
    {
      title: "Autonomous Web Agent",
      period: "03/2025 - 04/2025",
      description: "An AI-Powered Agent for Automated Browser-Based Research.",
    },
    {
      title: "Easy Trip",
      period: "01/2025 - 02/2025",
      description: "Full-Stack Trip Planning Web Application.",
    },
  ],
  experience: [
    {
      role: "Artificial Intelligence & Machine Learning Intern",
      company: "Edunet Foundation (AICTE Approved)",
      period: "06/2025 - Present",
      location: "Virtual",
    },
    {
      role: "Generative AI Intern",
      company: "EduSkills Foundation in collaboration with AICTE & Google Cloud",
      period: "04/2025 - 06/2025",
      location: "Virtual",
    },
    {
      role: "Space Technology Intern",
      company: "Agnirva (ISRO Registered Space Tutor, Recognized by AICTE)",
      period: "01/2025 - 03/2025",
      location: "Virtual",
    },
     {
      role: "Data Engineering Intern",
      company: "EduSkills Foundation in collaboration with AICTE & AWS Academy",
      period: "10/2024 - 12/2024",
      location: "Virtual",
    },
    {
      role: "Android Developer Intern",
      company: "EduSkills Foundation in collaboration with AICTE & Google for Developers",
      period: "01/2025 - 03/2025",
      location: "Virtual",
    },
  ],
  certificates: [
    "National-Level Workshop on Application Development with AI & Essential Skills",
    "National Level Short Term Training Program on JAVA Full Stack with React JS & AI",
    "Scientific Computing with Python Developer Certification",
    "One Week Workshop on Mobile Application Development Using MIT",
    "Ethical Hacking Workshop (Sumshodhini'24 Symposium)",
    "Five-Day Workshop on Web Development Using AI Tools",
    "Machine Learning with Python Developer Certification",
  ],
  languages: ["English", "Telugu"],
  interests: [
    "Exploring Emerging Technologies",
    "Algorithmic Problem Solving",
    "UI/UX Design & Product Development",
    "Space Technology & Exploration",
    "Open-Source Contribution",
  ],
  resumeOnlineUrl: "https://flowcv.com/resume/pdc12g3veosa"
};

// --- Define types for Section component props ---
interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

// --- Reusable Section Component ---
const Section: React.FC<SectionProps> = ({ icon, title, children }) => (
  <div className="mb-8">
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <div className="pl-12 border-l-2 border-blue-200 dark:border-gray-700">
      {children}
    </div>
  </div>
);

// --- Define types for Notification component props ---
interface NotificationProps {
    message: string;
    onClear: () => void;
}

// --- Custom Notification Modal ---
const Notification: React.FC<NotificationProps> = ({ message, onClear }) => (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className="fixed bottom-5 right-5 z-50 bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-4 flex items-center max-w-sm"
    >
      <div className="text-blue-500 mr-3">
        <Info size={24} />
      </div>
      <p className="text-gray-800 dark:text-gray-200">{message}</p>
      <button onClick={onClear} aria-label="Close notification" className="ml-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
        <X size={18} />
      </button>
    </motion.div>
);


const App = () => {
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 5000); // Auto-dismiss after 5 seconds
  };

  const handleDownload = () => {
    // Reference the file from the public folder using a root-relative path.
    // Ensure the PDF file is named 'My Resume.pdf' and is in the 'public' folder.
    const link = document.createElement('a');
    link.href = '/My Resume.pdf'; 
    link.setAttribute(
      'download',
      'Dasari-Pranay-Resume.pdf',
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification("Your resume download has started.");
  };

  const handleView = () => {
    window.open(resumeData.resumeOnlineUrl, '_blank');
    showNotification("Opening resume in a new tab for viewing.");
  };

  const handleShare = () => {
    // Change this line to use the direct resume URL
    const shareUrl = resumeData.resumeOnlineUrl; 

    if (navigator.share) {
      navigator.share({
        title: `${resumeData.name} - Resume`,
        text: `Check out ${resumeData.name}'s resume.`,
        url: shareUrl, // The Web Share API will now use the correct link
      }).catch((error) => {
        console.log('Share failed:', error);
        // Fallback: copy the direct resume link to the clipboard
        try {
            const textArea = document.createElement('textarea');
            textArea.value = shareUrl;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showNotification('Share cancelled. Resume link copied to clipboard!');
        } catch (err) {
            console.error('Fallback copy failed:', err);
            showNotification('Could not copy link. Please copy it manually.');
        }
      });
    } else {
      // Fallback for browsers that don't support navigator.share
      try {
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl; // The clipboard will also get the correct link
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Resume link copied to clipboard!');
      } catch (err) {
        console.error('Fallback copy failed:', err);
        showNotification('Could not copy link. Please copy it manually.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 font-sans">
      <AnimatePresence>
        {notification && <Notification message={notification} onClear={() => setNotification(null)} />}
      </AnimatePresence>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            {resumeData.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-semibold"
          >
            {resumeData.title}
          </motion.p>
           <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-2"
          >
            {resumeData.tagline}
          </motion.p>
        </motion.div>

        {/* Resume Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            onClick={handleDownload}
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} className="mr-2 group-hover:animate-bounce" />
            Download Resume
          </motion.button>

          <motion.button
            onClick={handleView}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye size={20} className="mr-2 group-hover:scale-110 transition-transform" />
            View Online
          </motion.button>

          <motion.button
            onClick={handleShare}
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-medium transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
            Share
          </motion.button>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-2xl p-6 sm:p-10 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 text-gray-600 dark:text-gray-300">
                <a href={`mailto:${resumeData.contact.email}`} className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Mail size={16} className="mr-2" /> {resumeData.contact.email}</a>
                <a href={`tel:${resumeData.contact.phone}`} className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Phone size={16} className="mr-2" /> {resumeData.contact.phone}</a>
                <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Linkedin size={16} className="mr-2" /> LinkedIn Profile</a>
            </div>

            {/* Experience */}
            <Section icon={<Briefcase size={16} className="text-blue-600 dark:text-blue-400" />} title="Professional Experience">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-6 pl-4 relative before:absolute before:left-[-25px] before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{exp.period}</p>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">{exp.role}</h4>
                  <p className="text-md text-gray-600 dark:text-gray-300">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                </div>
              ))}
            </Section>

            {/* Projects */}
            <Section icon={<Lightbulb size={16} className="text-blue-600 dark:text-blue-400" />} title="Projects">
              {resumeData.projects.map((proj, index) => (
                <div key={index} className="mb-6 pl-4 relative before:absolute before:left-[-25px] before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{proj.period}</p>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">{proj.title}</h4>
                  <p className="text-md text-gray-600 dark:text-gray-300">{proj.description}</p>
                </div>
              ))}
            </Section>

            {/* Skills */}
            <Section icon={<Code size={16} className="text-blue-600 dark:text-blue-400" />} title="Technical Skills">
                <div className="pl-4">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">Programming:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {resumeData.skills.programming.map(skill => <span key={skill} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>)}
                    </div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">Development:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {resumeData.skills.development.map(skill => <span key={skill} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>)}
                    </div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">Databases:</h4>
                    <div className="flex flex-wrap gap-2">
                        {resumeData.skills.databases.map(skill => <span key={skill} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>)}
                    </div>
                </div>
            </Section>
            
            {/* Education */}
            <Section icon={<GraduationCap size={16} className="text-blue-600 dark:text-blue-400" />} title="Education">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-6 pl-4 relative before:absolute before:left-[-25px] before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full">
                   <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{edu.period}</p>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">{edu.degree}</h4>
                  <p className="text-md text-gray-600 dark:text-gray-300">{edu.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.location}</p>
                </div>
              ))}
            </Section>

            {/* Certificates */}
            <Section icon={<Award size={16} className="text-blue-600 dark:text-blue-400" />} title="Certificates">
                <ul className="list-none space-y-2 pl-4">
                    {resumeData.certificates.map((cert, index) => (
                        <li key={index} className="flex items-start">
                            <Star size={14} className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">{cert}</span>
                        </li>
                    ))}
                </ul>
            </Section>

            {/* Languages & Interests */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                            <Languages size={16} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Languages</h3>
                    </div>
                    <div className="pl-12 flex flex-wrap gap-2">
                        {resumeData.languages.map(lang => <span key={lang} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full">{lang}</span>)}
                    </div>
                </div>
                 <div>
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                           <Lightbulb size={16} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Interests</h3>
                    </div>
                    <div className="pl-12 flex flex-wrap gap-2">
                         {resumeData.interests.map(interest => <span key={interest} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full">{interest}</span>)}
                    </div>
                </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
