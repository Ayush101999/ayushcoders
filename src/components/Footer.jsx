import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaEnvelope />, url: 'mailto:contact@ayushcoders.com', label: 'Email' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="AyushCoders Logo" className="footer-logo-image" />
              <h3>AyushCoders</h3>
            </div>
            <p className="footer-description">
              Empowering students and professionals with cutting-edge tech skills.
              Learn, Build, and Grow with expert guidance.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/#courses">Courses</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Courses</h4>
            <ul>
              <li><a href="/course/ai-tools">AI Tools Mastery</a></li>
              <li><a href="/course/python">Python Programming</a></li>
              <li><a href="/course/fullstack">Full Stack Development</a></li>
              <li><a href="/course/react">React Development</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📧 contact@ayushcoders.com</li>
              <li>📱 +91 XXXXX XXXXX</li>
              <li>📍 India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} AyushCoders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Made with Bob
