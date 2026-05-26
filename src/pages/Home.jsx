import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../data/coursesData';
import { FaRocket, FaCode, FaBrain, FaUsers, FaGraduationCap, FaStar, FaAward } from 'react-icons/fa';
import instructorImage from '../assets/instructor.png';
import chatgptLogo from '../assets/chatgpt.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/js.png';
import pythonLogo from '../assets/python.png';
import reactLogo from '../assets/react.png';
import './Home.css';

const Home = () => {
  const courses = getAllCourses();

  // Floating logos configuration
  const floatingLogos = [
    { src: chatgptLogo, alt: 'ChatGPT', delay: 0, duration: 20 },
    { src: htmlLogo, alt: 'HTML', delay: 2, duration: 25 },
    { src: cssLogo, alt: 'CSS', delay: 4, duration: 22 },
    { src: jsLogo, alt: 'JavaScript', delay: 1, duration: 23 },
    { src: pythonLogo, alt: 'Python', delay: 3, duration: 24 },
    { src: reactLogo, alt: 'React', delay: 5, duration: 21 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const features = [
    {
      icon: <FaRocket />,
      title: 'Career Growth',
      description: 'Accelerate your career with in-demand tech skills'
    },
    {
      icon: <FaCode />,
      title: 'Hands-on Projects',
      description: 'Build real-world projects and create your portfolio'
    },
    {
      icon: <FaBrain />,
      title: 'Expert Guidance',
      description: 'Learn from industry professionals with years of experience'
    },
    {
      icon: <FaUsers />,
      title: 'Community Support',
      description: 'Join a thriving community of learners and professionals'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          
          {/* Floating Tech Logos */}
          <div className="floating-logos">
            {floatingLogos.map((logo, index) => (
              <motion.div
                key={index}
                className={`floating-logo floating-logo-${index + 1}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{
                  y: ['0vh', '100vh'],
                  x: [
                    `${Math.sin(index * 1.5) * 20}vw`,
                    `${Math.sin(index * 1.5 + Math.PI) * 20}vw`,
                    `${Math.sin(index * 1.5) * 20}vw`
                  ],
                  opacity: [0, 0.6, 0.6, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: logo.duration,
                  delay: logo.delay,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <img src={logo.src} alt={logo.alt} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <img src="/logo_cropped.png" alt="AyushCoders Logo" />
            </motion.div>
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Master Tech Skills with
              <span className="gradient-text"> AyushCoders</span>
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform your career with cutting-edge courses in AI, Web Development, and Programming.
              Learn from industry experts and build real-world projects.
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="#courses" className="btn btn-primary">
                Explore Courses
              </a>
              <a href="#about" className="btn btn-secondary">
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="features section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose AyushCoders?
          </motion.h2>
          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technologies We Teach
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Master the most in-demand technologies and tools
          </motion.p>
        </div>
        
        {/* Infinite Scrolling Slider */}
        <div className="tech-slider-container">
          <motion.div
            className="tech-slider"
            animate={{
              x: [0, -1200]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set of logos */}
            {floatingLogos.map((logo, index) => (
              <div key={`first-${index}`} className="tech-slide">
                <div className="tech-slide-content">
                  <img src={logo.src} alt={logo.alt} className="tech-slide-icon" />
                  <h3 className="tech-slide-name">{logo.alt}</h3>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {floatingLogos.map((logo, index) => (
              <div key={`second-${index}`} className="tech-slide">
                <div className="tech-slide-content">
                  <img src={logo.src} alt={logo.alt} className="tech-slide-icon" />
                  <h3 className="tech-slide-name">{logo.alt}</h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Courses
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Choose from our carefully crafted courses designed to make you job-ready
          </motion.p>
          <motion.div
            className="courses-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/course/${course.id}`} className="course-card">
                  <div className="course-image-container">
                    <img src={course.image} alt={course.title} className="course-image" />
                    <div className="course-overlay">
                      <span className="course-icon">{course.icon}</span>
                    </div>
                  </div>
                  <div className="course-body">
                    <h3>{course.title}</h3>
                    <p>{course.shortDescription}</p>
                    <div className="course-meta">
                      <span className="course-duration">⏱️ {course.duration}</span>
                      <span className="course-level">📊 {course.level}</span>
                    </div>
                    <motion.button
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="instructor section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet Your Instructor
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Learn from an experienced software developer passionate about teaching
          </motion.p>
          
          <motion.div
            className="instructor-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="instructor-image-wrapper">
              <img src={instructorImage} alt="Ayush Rastogi" className="instructor-photo" />
              <div className="instructor-badge">
                <FaGraduationCap />
              </div>
            </div>
            
            <div className="instructor-details">
              <h3>Ayush Rastogi</h3>
              <p className="instructor-role">Software Developer & Instructor</p>
              
              <div className="instructor-highlights">
                <div className="highlight">
                  <FaStar className="highlight-icon" />
                  <span>4.8/5 Rating</span>
                </div>
                <div className="highlight">
                  <FaUsers className="highlight-icon" />
                  <span>500+ Students</span>
                </div>
                <div className="highlight">
                  <FaAward className="highlight-icon" />
                  <span>4+ Courses</span>
                </div>
              </div>
              
              <p className="instructor-description">
                Hi! I'm Ayush Rastogi, a passionate software developer and instructor dedicated to helping students and professionals master cutting-edge technologies. With years of experience in software development and a deep understanding of modern tech stacks, I've designed these courses to provide practical, real-world skills that will accelerate your career growth.
              </p>
              
              <p className="instructor-description">
                My teaching philosophy is simple: <strong>learn by doing</strong>. Every course is packed with hands-on projects, real-world examples, and practical exercises that ensure you not only understand the concepts but can apply them confidently in your work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>Join thousands of students and professionals who have transformed their careers with AyushCoders</p>
            <motion.a
              href="https://wa.me/919999999999?text=Hi%2C%20I%27m%20interested%20in%20enrolling%20in%20your%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// Made with Bob
