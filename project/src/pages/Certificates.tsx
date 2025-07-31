import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence, useTransform } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  Award,
  ExternalLink,
  X,
  Eye,
  Building,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
  List,
  Clock,
  Briefcase,
  BarChart,
  CheckCircle,
  AlertTriangle // Imported for the custom toast
} from 'lucide-react';

// --- Import Data and Types ---
// Data is now correctly imported from an external file as per your project structure.
import { certificates as certificatesData, Certificate as CertificateType } from '../components/certificates';


// --- Font and Global Styles ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Roboto+Slab:wght@700;800;900&display=swap');
    
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .font-poppins { font-family: 'Poppins', sans-serif; }
    .font-roboto-slab { font-family: 'Roboto Slab', serif; }
  `}</style>
);


// --- Certificate Image Viewer Modal ---
const CertificateImageViewer = ({ imageUrl, closeModal }: { imageUrl: string; closeModal: () => void; }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-lg flex justify-center items-center p-4"
        onClick={closeModal}
    >
        <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            src={imageUrl}
            alt="Certificate full view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            layoutId={`certificate-image-${imageUrl}`}
        />
        <button
            aria-label="Close image viewer"
            onClick={closeModal}
            className="absolute top-5 right-5 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
            <X size={24} />
        </button>
    </motion.div>
);


// --- Certificate Details Modal ---
const CertificateModal = ({ certificate, closeModal, onNext, onPrev, isNextDisabled, isPrevDisabled, onViewImage }: {
    certificate: CertificateType;
    closeModal: () => void;
    onNext: () => void;
    onPrev: () => void;
    isNextDisabled: boolean;
    isPrevDisabled: boolean;
    onViewImage: (imageUrl: string) => void;
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' && !isNextDisabled) onNext();
            if (e.key === 'ArrowLeft' && !isPrevDisabled) onPrev();
            if (e.key === 'Escape') closeModal();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onNext, onPrev, closeModal, isNextDisabled, isPrevDisabled]);

    // The new stylish toast notification
    const showUnverifiedToast = () => {
        toast.custom(
            (t) => (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="flex items-start max-w-sm w-full bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-4 border border-gray-200 dark:border-gray-700"
                >
                    <div className="flex-shrink-0 text-red-500 pt-0.5">
                        <AlertTriangle size={20} />
                    </div>
                    <div className="ml-3 flex-1">
                        <p className="text-base font-semibold text-gray-900 dark:text-white">Verification Unavailable</p>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            This certificate does not have a public verification link.
                        </p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="inline-flex text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            aria-label="Close"
                        >
                           <X size={20} />
                        </button>
                    </div>
                </motion.div>
            ),
            { id: 'unverified-toast' } // Use a unique ID to prevent multiple toasts
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 font-poppins"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
        >
            <motion.div
                ref={modalRef}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full relative shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh]">
                    <div className="p-8 overflow-y-auto">
                        <h2 className="text-3xl font-roboto-slab font-bold text-gray-900 dark:text-white">{certificate.title}</h2>
                        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium mt-2"><Building size={18} /> {certificate.issuer}</div>
                        
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">{certificate.description}</p>
                        
                        <div className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                <div className="flex justify-between"><span className="text-gray-500 dark:text-gray-400">Date Issued:</span><span>{new Date(certificate.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span></div>
                                <div className="flex justify-between"><span className="text-gray-500 dark:text-gray-400">Duration:</span><span>{certificate.duration}</span></div>
                                <div className="flex justify-between"><span className="text-gray-500 dark:text-gray-400">Credential ID:</span><span className="font-mono text-xs">{certificate.credentialId || 'N/A'}</span></div>
                        </div>

                        <h3 className="text-lg font-roboto-slab font-semibold text-gray-800 dark:text-white mt-6 mb-3">Skills Validated</h3>
                        <div className="flex flex-wrap gap-2">
                            {certificate.skills.map((skill, idx) => (<span key={idx} className="px-3 py-1 bg-purple-100 dark:bg-purple-800/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">{skill}</span>))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <button onClick={() => onViewImage(certificate.image)} className="flex-1 flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg hover:scale-105 transition-transform"><Eye size={18} className="mr-2" /> View Certificate</button>
                            
                            {certificate.verificationUrl && certificate.verificationUrl !== '#' ? (
                                <a href={certificate.verificationUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 font-medium shadow hover:scale-105 transition-transform"><ExternalLink size={18} className="mr-2" /> Verify</a>
                            ) : (
                                <button 
                                    onClick={showUnverifiedToast}
                                    className="flex-1 flex items-center justify-center px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium shadow-inner opacity-70 cursor-not-allowed"
                                >
                                    <ExternalLink size={18} className="mr-2" /> Unverified
                                </button>
                            )}
                        </div>
                    </div>
                    
                    <div className="hidden md:block bg-gray-100 dark:bg-gray-800/50 p-4">
                        <motion.img
                            layoutId={`certificate-image-${certificate.image}`}
                            src={certificate.image}
                            alt={`Image of ${certificate.title}`}
                            className="w-full h-full object-contain rounded-2xl cursor-pointer"
                            onClick={() => onViewImage(certificate.image)}
                        />
                    </div>
                </div>

                <button aria-label="Previous certificate" onClick={onPrev} disabled={isPrevDisabled} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity z-10"><ChevronLeft size={24} /></button>
                <button aria-label="Next certificate" onClick={onNext} disabled={isNextDisabled} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity z-10"><ChevronRight size={24} /></button>
                <button aria-label="Close modal" onClick={closeModal} className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full z-10"><X size={24} /></button>
            </motion.div>
        </motion.div>
    );
}

// --- Certificate List Item ---
const CertificateListItem = ({ certificate, setPreview, onViewDetails }: {
    certificate: CertificateType;
    setPreview: React.Dispatch<React.SetStateAction<string | null>>;
    onViewDetails: (certificate: CertificateType) => void;
}) => (
  <motion.div
    onMouseEnter={() => setPreview(certificate.image)}
    onMouseLeave={() => setPreview(null)}
    className="border-b border-gray-200 dark:border-gray-700 group relative"
    whileHover="hover"
  >
    <motion.div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50" variants={{ hover: { opacity: 1 }, initial: { opacity: 0 }}} transition={{ duration: 0.3 }} />
    <div className="flex flex-wrap items-center justify-between py-8 px-4 sm:px-6 relative">
      <div>
        <h3 className="text-2xl sm:text-3xl font-roboto-slab font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
          {certificate.title}
        </h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-gray-500 dark:text-gray-400 text-sm font-medium">
          <span>{certificate.issuer}</span>
          <span className="text-gray-400 dark:text-gray-500">•</span>
          <span>{new Date(certificate.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
        </div>
      </div>
      <button
        onClick={() => onViewDetails(certificate)}
        aria-label={`View details for ${certificate.title}`}
        className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 mt-4 sm:mt-0"
      >
        <span className="text-lg font-medium">View</span>
        <motion.div variants={{ hover: { x: 5 }, initial: { x: 0 }}} transition={{ duration: 0.3, ease: 'easeInOut' }}>
          <ArrowRight className="w-6 h-6" />
        </motion.div>
      </button>
    </div>
  </motion.div>
);

// --- Timeline Item ---
const TimelineItem = ({ certificate, setPreview, onViewDetails, isLeft }: { certificate: CertificateType, setPreview: React.Dispatch<React.SetStateAction<string | null>>, onViewDetails: (certificate: CertificateType) => void, isLeft: boolean }) => (
    <div className="flex justify-between items-center w-full" onMouseEnter={() => setPreview(certificate.image)} onMouseLeave={() => setPreview(null)}>
        <div className={`w-5/12 ${isLeft ? 'order-1 text-right' : 'order-3 text-left'}`}>
            <motion.div 
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-white dark:bg-gray-800/80 rounded-lg shadow-md backdrop-blur-sm cursor-pointer"
                onClick={() => onViewDetails(certificate)}
            >
                <h3 className="font-roboto-slab font-bold text-lg text-purple-600 dark:text-purple-400">{certificate.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{certificate.issuer}</p>
            </motion.div>
        </div>
        <div className="w-1/12 order-2 flex justify-center">
            <div className="z-10 bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-roboto-slab shadow-lg">
                {new Date(certificate.date).getFullYear().toString().slice(-2)}
            </div>
        </div>
        <div className={`w-5/12 ${isLeft ? 'order-3' : 'order-1'}`}></div>
    </div>
);

// --- Skeleton Loader ---
const SkeletonListItem = () => (
    <div className="border-b border-gray-200 dark:border-gray-700 p-8">
        <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
        </div>
    </div>
);


// --- Main App Component ---
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateType | null>(null);
  const [imageToShow, setImageToShow] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState<'All' | CertificateType['level']>('All');
  const [sortOrder, setSortOrder] = useState('date-desc');
  const [viewMode, setViewMode] = useState<'list' | 'timeline'>('list');

  const openModalButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleViewDetails = (certificate: CertificateType) => {
    openModalButtonRef.current = document.activeElement as HTMLButtonElement;
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
    openModalButtonRef.current?.focus();
  };

  const filteredAndSortedCertificates = useMemo(() => {
    // Return an empty array if data is not yet loaded
    if (!certificatesData) return [];
    return certificatesData
      .filter(c => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        const matchesSearch = c.title.toLowerCase().includes(lowerSearchTerm) || c.skills.some(s => s.toLowerCase().includes(lowerSearchTerm)) || c.issuer.toLowerCase().includes(lowerSearchTerm);
        const matchesFilter = filterLevel === 'All' || c.level === filterLevel;
        return matchesSearch && matchesFilter;
      })
      .sort((a, b) => {
        switch (sortOrder) {
          case 'date-asc': return new Date(a.date).getTime() - new Date(b.date).getTime();
          case 'date-desc': return new Date(b.date).getTime() - new Date(a.date).getTime();
          case 'title-asc': return a.title.localeCompare(b.title);
          default: return 0;
        }
      });
  }, [searchTerm, filterLevel, sortOrder]);

  const handleModalNav = (direction: 'next' | 'prev') => {
    if (!selectedCertificate) return;
    const currentIndex = filteredAndSortedCertificates.findIndex(c => c.id === selectedCertificate.id);
    const nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= 0 && nextIndex < filteredAndSortedCertificates.length) {
      setSelectedCertificate(filteredAndSortedCertificates[nextIndex]);
    }
  };
  
  const stats = useMemo(() => {
      if (!certificatesData) return [];
      const totalSkills = new Set(certificatesData.flatMap(c => c.skills)).size;
      const verifiedCount = certificatesData.filter(c => c.verificationUrl && c.verificationUrl !== '#').length;
      const verifiedPercentage = certificatesData.length > 0 ? Math.round((verifiedCount / certificatesData.length) * 100) : 0;
      return [
          { icon: Briefcase, number: certificatesData.length, label: 'Certificates' },
          { icon: BarChart, number: `${totalSkills}+`, label: 'Skills Validated' },
          { icon: Clock, number: '350+', label: 'Learning Hours' },
          { icon: CheckCircle, number: `${verifiedPercentage}%`, label: 'Verified' }
      ];
  }, []);
  
  const filterLevels: ('All' | CertificateType['level'])[] = ['All', 'Advanced', 'Intermediate', 'Foundational', 'Participation'];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  
  const glareRotate = useTransform(springRotateY, [-15, 15], [120, 60]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    x.set(e.clientX + 15);
    y.set(e.clientY + 15);
    
    const rect = e.currentTarget.getBoundingClientRect();
    const rotateYValue = (e.clientX - (rect.left + rect.width / 2)) / 20;
    const rotateXValue = -(e.clientY - (rect.top + rect.height / 2)) / 20;
    rotateX.set(rotateYValue);
    rotateY.set(rotateXValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <>
      <GlobalStyles />
      {/* This Toaster is no longer needed here, as the main one in App.js will handle it */}
      {/* <Toaster position="bottom-center" /> */}
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 sm:py-20 font-poppins relative overflow-x-hidden"
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-900 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-white/50 via-white/0 to-white/50 dark:from-gray-900/50 dark:via-gray-900/0 dark:to-gray-900/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium shadow-lg"><Award size={16} className="mr-2" />Certificates & Achievements</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-roboto-slab font-extrabold text-gray-900 dark:text-white tracking-tight">Professional Certifications</h1>
            <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">An interactive showcase of verified achievements and commitment to continuous learning.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4 sm:p-6 rounded-3xl backdrop-blur-sm bg-white/70 dark:bg-gray-800/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center">
                <stat.icon className="mx-auto h-8 w-8 text-purple-500 mb-2"/>
                <div className="text-3xl sm:text-4xl font-roboto-slab font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <div className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-8 p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                    <input type="text" placeholder="Search certificates, skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-2 pl-10 rounded-lg bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"/>
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
                </div>
                <select aria-label="Sort certificates" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="w-full p-2 rounded-lg bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 outline-none">
                    <option value="date-desc">Sort by Date (Newest)</option>
                    <option value="date-asc">Sort by Date (Oldest)</option>
                    <option value="title-asc">Sort by Title (A-Z)</option>
                </select>
                <div className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-900/50 p-1 rounded-lg">
                    <button onClick={() => setViewMode('list')} className={`w-full p-1.5 rounded-md flex items-center justify-center gap-2 transition-colors ${viewMode === 'list' ? 'bg-white dark:bg-gray-800 shadow text-purple-600 dark:text-purple-300' : 'text-gray-600 dark:text-gray-300'}`}><List size={16}/> List</button>
                    <button onClick={() => setViewMode('timeline')} className={`w-full p-1.5 rounded-md flex items-center justify-center gap-2 transition-colors ${viewMode === 'timeline' ? 'bg-white dark:bg-gray-800 shadow text-purple-600 dark:text-purple-300' : 'text-gray-600 dark:text-gray-300'}`}><Clock size={16}/> Timeline</button>
                </div>
            </div>
             <div className="flex flex-wrap items-center gap-2 mt-4">
                {filterLevels.map(level => (
                    <button key={level} onClick={() => setFilterLevel(level)} className={`px-3 py-1 text-sm rounded-full transition-colors font-medium ${filterLevel === level ? 'bg-purple-600 text-white' : 'bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-purple-900/50'}`}>{level}</button>
                ))}
            </div>
          </motion.div>

          <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => <SkeletonListItem key={i} />)
            ) : viewMode === 'list' ? (
              <div className="border-t border-gray-200 dark:border-gray-700">
                {filteredAndSortedCertificates.map((certificate) => (
                    <CertificateListItem key={certificate.id} certificate={certificate} setPreview={setPreview} onViewDetails={handleViewDetails} />
                ))}
              </div>
            ) : (
                <div className="relative p-4 sm:p-8">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 -translate-x-1/2"></div>
                    <div className="space-y-8">
                        {filteredAndSortedCertificates.map((certificate, index) => (
                            <TimelineItem key={certificate.id} certificate={certificate} setPreview={setPreview} onViewDetails={handleViewDetails} isLeft={index % 2 === 0} />
                        ))}
                    </div>
                </div>
            )}
            {!isLoading && filteredAndSortedCertificates.length === 0 && (
                <div className="text-center p-16 text-gray-500">No certificates found. Try adjusting your search or filters.</div>
            )}
          </div>
        </div>

        <AnimatePresence>
          {preview && (
            <motion.div
              className="fixed top-0 left-0 z-50 pointer-events-none"
              style={{ x: springX, y: springY, perspective: '1200px' }}
            >
              <motion.div
                className="relative rounded-lg shadow-2xl shadow-purple-500/20"
                style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: 'preserve-3d' }}
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <img className="block object-cover h-56 w-96 rounded-lg" src={preview} alt="Certificate preview" />
                <div className="absolute inset-0 rounded-lg overflow-hidden" style={{ transform: 'translateZ(1px)' }}>
                  <motion.div className="absolute inset-[-150%] w-[300%] h-[300%]" style={{ rotate: glareRotate, background: 'linear-gradient(90deg, transparent 47%, rgba(255, 255, 255, 0.15) 50%, transparent 53%)' }}/>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedCertificate && <CertificateModal 
            certificate={selectedCertificate} 
            closeModal={handleCloseModal}
            onNext={() => handleModalNav('next')}
            onPrev={() => handleModalNav('prev')}
            onViewImage={setImageToShow}
            isNextDisabled={filteredAndSortedCertificates.findIndex(c => c.id === selectedCertificate.id) === filteredAndSortedCertificates.length - 1}
            isPrevDisabled={filteredAndSortedCertificates.findIndex(c => c.id === selectedCertificate.id) === 0}
          />}
        </AnimatePresence>
        <AnimatePresence>
            {imageToShow && <CertificateImageViewer imageUrl={imageToShow} closeModal={() => setImageToShow(null)} />}
        </AnimatePresence>
      </div>
    </>
  );
};
