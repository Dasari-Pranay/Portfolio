import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  User,
  Code,
  BookOpen,
  Target,
  Award,
  Lightbulb,
  Coffee,
  Music,
  Camera,
  Globe,
  Car
} from 'lucide-react';

const App = () => {
  // --- DATA ---
  const skills = [
    { name: 'JavaScript', level: 70, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 45, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 40, color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 75, color: 'from-purple-400 to-purple-600' },
    { name: 'MongoDB', level: 70, color: 'from-green-500 to-green-700' },
    { name: 'Java', level: 65, color: 'from-orange-400 to-orange-600' },
    { name: 'C-Language', level: 85, color: 'from-red-400 to-red-600' },
    { name: 'SQL', level: 85, color: 'from-violet-400 to-violet-600' },
  ];

  const interests = [
    { icon: Code, title: 'Coding', description: 'Building innovative solutions' },
    { icon: BookOpen, title: 'Learning', description: 'Exploring new technologies' },
    { icon: Coffee, title: 'Coffee', description: 'Fuel for late-night coding' },
    { icon: Music, title: 'Music', description: 'Inspiration for creativity' },
    { icon: Camera, title: 'Photography', description: 'Capturing moments' },
    { icon: Car, title: 'Driving', description: 'I love to drive cars' },
  ];

  const values = [
    { icon: Target, title: 'Goal-Oriented', description: 'I set clear objectives and work systematically to achieve them.' },
    { icon: Lightbulb, title: 'Innovation', description: 'I believe in thinking outside the box and find creative solutions.' },
    { icon: Award, title: 'Excellence', description: 'I strive for quality in everything I do, from code to communication.' },
    { icon: Globe, title: 'Collaboration', description: 'I value teamwork and believe great things are built together.' },
  ];

  const nameToAnimate = "Dasari Pranay";

  // --- ANIMATION VARIANTS ---

  // Variants for the typing effect container
  const typingContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Time delay between each letter
        delayChildren: 0.5, // Delay before the animation starts
      },
    },
  };

  // Variants for each letter in the typing effect
  const typingLetterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  // --- STATE & ANIMATION CONTROLS ---
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const glintControls = useAnimation();

  // --- EFFECTS ---

  // Effect to run the shine animation on a loop
  useEffect(() => {
    const runGlintAnimation = async () => {
      // Initial delay before starting the loop
      await new Promise(resolve => setTimeout(resolve, 3000));
      while (true) {
        // Animate from off-screen left to off-screen right
        await glintControls.start({
          x: ['-150%', '250%'],
          transition: { duration: 1.5, ease: 'easeInOut' }
        });
        // Wait for a few seconds before repeating
        await new Promise(resolve => setTimeout(resolve, 4000));
      }
    };
    runGlintAnimation();
  }, [glintControls]);

  // --- EVENT HANDLERS ---

  // Handle mouse movement on the 3D card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped) return; // Disable mouse follow when flipped
    const card = e.currentTarget;
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = -((y - height / 2) / (height / 2)) * 15;
    const rotateY = ((x - width / 2) / (width / 2)) * 15;

    setRotate({ x: rotateX, y: rotateY });
  };

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  // Handle card flip
  const handleFlip = () => {
    setRotate({ x: 0, y: 0 });
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Orbitron:wght@400;700&display=swap');
          
          .font-signature {
            font-family: 'Dancing Script', cursive;
          }
          .font-tech {
            font-family: 'Orbitron', sans-serif;
          }
        `}
      </style>
      <div className="min-h-screen bg-white dark:bg-gray-900 font-sans">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-white dark:bg-gray-900 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                    <User size={16} className="mr-2" /> About Me
                  </span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Passionate About <span className="gradient-text" style={{background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Technology</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I'm a dedicated software engineering student with a passion for creating innovative solutions and exploring the latest technologies. My journey in tech started with curiosity and has evolved into a deep commitment to excellence.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  I believe in continuous learning, collaborative problem-solving, and building technology that makes a positive impact. When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects, or brainstorming the next big idea.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }} className="flex flex-wrap gap-4">
                  {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map((trait) => (
                    <span key={trait} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium">
                      {trait}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Content - 3D ID Card */}
              <motion.div 
                className="flex justify-center items-center h-[34rem]" 
                style={{ perspective: '1200px' }}
                initial={{ opacity: 0, y: -500 }} // Initial state for falling down
                animate={{ 
                  opacity: 1, 
                  y: [-15, 0, -15], // Keyframes for floating effect
                }}
                transition={{
                  // Transition for the initial drop
                  y: { duration: 1, ease: "easeOut", delay: 0.5 },
                  opacity: { duration: 1, delay: 0.5 },
                  // Transition for the continuous floating
                  default: {
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }
                }}
              >
                <motion.div
                  className="relative w-96 h-full cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleFlip}
                  animate={{ rotateX: rotate.x, rotateY: rotate.y }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.div
                    className="absolute w-full h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  >
                    {/* Lanyard Strap (Flat Clean Design with Visible Stripes & Text) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[100%] flex flex-col items-center z-0">
                      {/* Strap */}
                      <div className="w-8 h-40 relative overflow-hidden rounded-full bg-red-700 shadow-md">
                        {/* Diagonal Stripes */}
                        <div className="absolute inset-0"
                             style={{
                               backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0 6px, transparent 6px 12px)',
                               opacity: 0.7
                             }}></div>

                        {/* Repeated Text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-1">
                          <p className="text-[10px] font-semibold text-white tracking-wide rotate-90 whitespace-nowrap">
                            KITS(S) HUZURABAD
                          </p>
                        </div>
                      </div>

                      {/* Metallic Clip (Positioned to go through Punch Hole) */}
                      <div className="w-7 h-7 bg-gradient-to-b from-gray-200 to-gray-400 rounded-sm mt-[-6px] border border-gray-300 z-10">
                        <div className="w-3 h-0.5 bg-gray-500 rounded-sm mx-auto mt-1"></div>
                      </div>
                    </div>
                    {/* Front of Card */}
                    <div style={{ backfaceVisibility: 'hidden' }} className="absolute w-full h-full rounded-2xl overflow-hidden">
                      <div className="relative w-full h-full bg-white flex flex-col border-4 border-gray-300">
                        {/* Shine Effect Element */}
                        <motion.div
                            className="absolute top-0 left-0 w-1/2 h-full opacity-90 z-10"
                            style={{
                                background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)',
                                transform: 'skewX(-25deg)',
                                pointerEvents: 'none'
                            }}
                            animate={glintControls}
                        />

                        <div className="relative bg-gray-100 text-center py-3">
                          <h2 className="text-black font-bold text-md tracking-widest uppercase mt-5 font-tech">Student Identity Card</h2>
                        </div>
                        <div className="text-center py-3 border-b-2 border-gray-300">
                          <h3 className="font-semibold text-black text-lg">Kamala Institute of Technology & Science</h3>
                          <p className="text-sm text-gray-500">Singapur, Huzurabad, Telangana</p>
                        </div>
                        <div className="p-6 flex items-center flex-grow gap-4">
                            <div className="flex flex-col items-center">
                                <img
                                    src="/images/professional pic.jpg"
                                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/150x150/a0aec0/ffffff?text=Error'; }}
                                    alt="Dasari Pranay"
                                    className="w-36 h-36 rounded-lg object-cover border-4 border-gray-200 shadow-lg"
                                />
                                <p className="text-xs text-gray-400 mt-2 opacity-75">Click for QR code</p>
                            </div>
                            <div className="flex-1 text-left">
                                <motion.h4 
                                  className="mt-4 text-2xl font-bold text-black"
                                  variants={typingContainerVariants}
                                  initial="hidden"
                                  animate="visible"
                                >
                                  {nameToAnimate.split('').map((char, index) => (
                                    <motion.span key={index} variants={typingLetterVariants}>
                                      {char}
                                    </motion.span>
                                  ))}
                                </motion.h4>
                                <div className="w-full mt-4 text-xs space-y-2">
                                    <div className="flex"><span className="w-20 font-semibold text-gray-500">ID Number</span><span className="font-mono text-black">: 23281A0552</span></div>
                                    <div className="flex"><span className="w-20 font-semibold text-gray-500">Course</span><span className="font-mono text-black">: B.Tech CSE</span></div>
                                    <div className="flex"><span className="w-20 font-semibold text-gray-500">Valid Till</span><span className="font-mono text-black">: 07 / 2027</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto p-6 flex justify-between items-end">
                            <div className="text-center">
                                <p className="font-signature text-xl text-green-600">Dr. K. Eshwaraiah</p>
                                <hr className="border-gray-400 border-dashed" />
                                <p className="text-xs text-gray-500">Principal's Signature</p>
                            </div>
                            <div className="text-center">
                                <p className="font-signature text-2xl text-black -mb-1">Dasari Pranay</p>
                                <hr className="border-gray-400 border-dashed" />
                                <p className="text-xs text-gray-500">Holder's Signature</p>
                            </div>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} className="absolute w-full h-full">
                      <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex flex-col p-6 border-4 border-gray-300">
                        <div className="w-full h-12 bg-black mt-2"></div> {/* Magnetic Stripe */}
                        <div className="flex-grow flex items-center mt-4">
                            <div className="w-2/3 pr-4 text-xs text-black space-y-2">
                                <p><span className="font-semibold">D.O.B:</span> <br/>07 July 2006</p>
                                <p><span className="font-semibold">Blood Group:</span><br/> B+ Positive</p>
                                <p className="leading-tight"><span className="font-semibold">Address:</span> <br/>H.No: 2-143/A, Yellamma Street, Godishala, Saidapur, Karimnagar, Telangana - 505468</p>
                                <p><span className="font-semibold">Emergency Contact:</span> <br/>+91 79935 73944</p>
                            </div>
                            <div className="w-1/3 flex flex-col items-center justify-center">
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://github.com/Dasari-Pranay"
                                    alt="QR Code"
                                    className="w-28 h-28 rounded-md border-2 border-gray-200"
                                />
                                <p className="text-xs text-gray-600 mt-1">Scan to view my projects</p>
                            </div>
                        </div>
                        <div className="text-center text-gray-500 text-xs mt-auto">
                            <p>This card is the property of the issuing institution and is non-transferable.</p>
                            <p>If found, please contact the institution immediately.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Here's what I bring to the table - a blend of technical expertise and continuous learning</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                    <motion.div className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`} initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1.5, delay: index * 0.1 }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Values</h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">The principles that guide my work and personal growth</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 h-full">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-blue-100 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Beyond Code</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">When I'm not coding, here's what keeps me inspired and motivated</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div key={interest.title} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="text-center">
                    <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group h-full" whileHover={{ y: -5 }}>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{interest.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{interest.description}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
