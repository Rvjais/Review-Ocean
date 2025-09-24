import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import './Home.css';
import yelp from '../images/yelp.png';
import google from '../images/google.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import tripadvisor from '../images/tripadvisor.png';
const { FiStar, FiTrendingUp, FiShield, FiClock, FiCheck, FiArrowRight } = FiIcons;

const Home = () => {
  const platforms = [
    { name: 'Google', logo: google },
    { name: 'Facebook', logo: facebook },
    { name: 'Instagram', logo: instagram },
    { name: 'TripAdvisor', logo: tripadvisor },
    { name: 'Yelp', logo: yelp },
  ];

  const features = [
    {
      icon: FiTrendingUp,
      title: 'Unified Dashboard',
      description: 'See all your reviews from different platforms in one beautiful dashboard'
    },
    {
      icon: FiShield,
      title: 'Smart Analytics',
      description: 'Get insights about customer sentiment and review trends'
    },
    {
      icon: FiStar,
      title: 'Response Management',
      description: 'Respond to reviews quickly and maintain your brand reputation'
    }
  ];

  return (
    <div className="home-page">
      <section className="home-section">
        <div className="home-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-card"
          >
            {/* Limited Time Offer Banner */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="offer-banner"
            >
              <SafeIcon icon={FiClock} className="offer-icon" />
              <span className="offer-text">Limited Time: FREE for first 20 users!</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-title"
            >
              <span className="title-primary">
                Manage All Your
              </span>
              <br />
              <span className="title-secondary">
                Reviews in One Place
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-description"
            >
              Streamline your review management across Google, Facebook, Instagram, TripAdvisor, and Yelp. 
              Build trust, improve ratings, and grow your business faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-cta"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-primary"
              >
                <span>Start Free Trial</span>
                <SafeIcon icon={FiArrowRight} className="cta-icon" />
              </motion.button>
              
              <div className="cta-info">
                <p className="info-text">⚡ Setup in 5 minutes</p>
                <p className="info-text">🚀 No credit card required</p>
              </div>
            </motion.div>

            {/* Urgency Message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="urgency-card"
            >
              <p className="urgency-title">⏰ Hurry! This offer expires soon!</p>
              <p className="urgency-text">Give Your Business the Boost it Needs!</p>
            </motion.div>
          </motion.div>

          {/* Platform Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="platforms-card"
          >
            <h3 className="platforms-title">Integrate with all major platforms</h3>
            <div className="platforms-grid">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="platform-item"
                >
                  <img 
                    src={platform.logo} 
                    alt={platform.name}
                    className="platform-logo"
                  />
                  <span className="platform-name">{platform.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="feature-card"
              >
                <div className="feature-icon">
                  <SafeIcon icon={feature.icon} className="icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;