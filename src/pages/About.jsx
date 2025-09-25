import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import './About.css';

const { FiUsers, FiTarget, FiAward, FiHeart } = FiIcons;

const About = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Businesses', icon: FiUsers },
    { number: '500K+', label: 'Reviews Managed', icon: FiTarget },
    { number: '98%', label: 'Customer Satisfaction', icon: FiAward },
    { number: '5+', label: 'Platform Integrations', icon: FiHeart },
  ];

  const team = [
    {
      name: 'Ranveer Jaiswal',
      role: 'Intern',
      description: ''
    },
    {
      name: 'Rahul Kumar',
      role: 'Intern',
     
    }
  ];

  return (
    <div className="about-page">
      <section className="about-section">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-hero"
        >
          <div className="hero-card">
            <h1 className="hero-title">
              <span className="title-text">
                About Review-Ocean
              </span>
            </h1>
            <p className="hero-description">
              We're on a mission to help small businesses thrive by simplifying review management 
              and building stronger customer relationships.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="stats-grid"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="stat-card"
            >
              <div className="stat-icon">
                <SafeIcon icon={stat.icon} className="icon" />
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="story-section"
        >
          <div className="story-content">
            <h2 className="story-title">Our Story</h2>
            <div className="story-text">
              <p>
                Review-Ocean was born from a simple observation: small businesses were drowning in review management. 
                Our founders, having run their own local businesses, experienced firsthand the challenge of monitoring 
                and responding to reviews across multiple platforms.
              </p>
              <p>
                What started as a weekend project to solve their own problem quickly grew into a comprehensive platform 
                that now serves thousands of businesses worldwide. We believe that every business, regardless of size, 
                deserves access to powerful tools that help them build trust and grow.
              </p>
              <p>
                Today, Review-Ocean is proud to be the go-to solution for small businesses looking to streamline their 
                review management, improve customer relationships, and focus on what they do best – serving their customers.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="team-section"
        >
          <h2 className="team-title">Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="team-member"
              >
                
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;