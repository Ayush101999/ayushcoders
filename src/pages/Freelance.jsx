import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCode, FaMobile, FaLaptop, FaRobot, FaDatabase, FaCloud, FaCheckCircle } from 'react-icons/fa';
import './Freelance.css';

const Freelance = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      icon: <FaLaptop />,
      title: 'Web Development',
      description: 'Custom websites, web apps, and e-commerce solutions'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Apps',
      description: 'iOS and Android app development'
    },
    {
      icon: <FaRobot />,
      title: 'AI Solutions',
      description: 'AI integration, chatbots, and automation'
    },
    {
      icon: <FaCode />,
      title: 'Custom Software',
      description: 'Tailored software solutions for your business'
    },
    {
      icon: <FaDatabase />,
      title: 'Backend Development',
      description: 'APIs, databases, and server-side logic'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Cloud deployment and infrastructure'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
*New Project Request*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Project Type:* ${formData.projectType}
*Budget:* ${formData.budget}
*Timeline:* ${formData.timeline}

*Project Description:*
${formData.description}
    `.trim();

    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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
    <div className="freelance-page">
      {/* Hero Section */}
      <section className="freelance-hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Let's Build Your
              <span className="gradient-text"> Dream Project</span>
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Professional freelance development services for your business needs.
              From concept to deployment, I'll bring your ideas to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Services I Offer
          </motion.h2>
          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Request Form */}
      <section className="project-form-section section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Start Your Project
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Fill out the form below and I'll get back to you within 24 hours
          </motion.p>

          <motion.form
            className="project-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="form-group">
                <label htmlFor="projectType">Project Type *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="AI Solutions">AI Solutions</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="Backend Development">Backend Development</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="budget">Budget Range *</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select budget range</option>
                  <option value="Under ₹50,000">Under ₹50,000</option>
                  <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                  <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                  <option value="₹2,50,000 - ₹5,00,000">₹2,50,000 - ₹5,00,000</option>
                  <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="timeline">Expected Timeline *</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="2-4 weeks">2-4 weeks</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="3+ months">3+ months</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Project Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project, goals, and any specific requirements..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Project Request
            </motion.button>

            {submitted && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FaCheckCircle /> Request sent! I'll contact you soon via WhatsApp.
              </motion.div>
            )}
          </motion.form>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="why-choose section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Work With Me?
          </motion.h2>
          <motion.div
            className="benefits-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="benefit-card" variants={itemVariants}>
              <h3>🚀 Fast Delivery</h3>
              <p>Quick turnaround times without compromising quality</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <h3>💎 Quality Code</h3>
              <p>Clean, maintainable, and scalable code architecture</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <h3>💬 Clear Communication</h3>
              <p>Regular updates and transparent project management</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <h3>🔧 Post-Launch Support</h3>
              <p>Ongoing maintenance and support after delivery</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Freelance;

// Made with Bob
