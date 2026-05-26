import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCourseById } from '../data/coursesData';
import { FaArrowLeft, FaCheck, FaWhatsapp } from 'react-icons/fa';
import './CourseDetail.css';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = getCourseById(courseId);

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course not found</h2>
        <button onClick={() => navigate('/')} className="btn btn-primary">
          Go Back Home
        </button>
      </div>
    );
  }

  const handleEnroll = (trackName, price) => {
    const message = `Hi! I'm interested in enrolling in the ${course.title} - ${trackName} (${price}). Please provide me with more details.`;
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <div className="course-detail">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="course-hero-image">
          <img src={course.image} alt={course.title} />
          <div className="course-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.button
            className="back-button"
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft /> Back to Courses
          </motion.button>
          <motion.div
            className="course-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="course-hero-icon">{course.icon}</span>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <div className="course-hero-meta">
              <span>⏱️ {course.duration}</span>
              <span>📊 {course.level}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Content */}
      <section className="course-content section">
        <div className="container">
          {/* Tracks */}
          <motion.div
            className="tracks-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Choose Your Track</h2>
            <div className="tracks-grid">
              {course.tracks.map((track, index) => (
                <motion.div
                  key={index}
                  className={`track-card ${track.popular ? 'popular' : ''}`}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  {track.popular && <div className="popular-badge">Most Popular</div>}
                  <h3>{track.name}</h3>
                  <div className="track-price">{track.price}</div>
                  <p className="track-duration">Duration: {track.duration}</p>
                  <ul className="track-features">
                    {track.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheck className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className="btn btn-primary"
                    onClick={() => handleEnroll(track.name, track.price)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaWhatsapp /> Enroll Now
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="tools-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Tools You'll Master</h2>
            <div className="tools-grid">
              {course.tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="tool-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="highlights-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">What You'll Get</h2>
            <div className="highlights-grid">
              {course.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="highlight-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FaCheck className="highlight-icon" />
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="course-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Transform Your Career?</h2>
            <p>Join hundreds of students who have already started their journey</p>
            <motion.button
              className="btn btn-primary btn-large"
              onClick={() => handleEnroll(course.tracks[0].name, course.tracks[0].price)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp /> Start Learning Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;

// Made with Bob
