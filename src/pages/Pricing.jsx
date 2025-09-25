import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import './Pricing.css';

const { FiCheck, FiStar, FiZap, FiCrown, FiClock, FiGift } = FiIcons;

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      duration: '90 days',
      description: 'Perfect for small businesses getting started',
      features: [
        '3 platform integrations',
        'Basic review monitoring',
        'Email notifications',
        'Monthly analytics report',
        
      ],
      icon: FiStar,
      popular: false,
      cta: 'Start Free Trial',
      gradient: 'blue-cyan'
    },
    {
      name: 'Professional',
      price: '$..',
      duration: '/month',
     
      description: 'Coming Soon',
      features: [
        'All 5+ platform integrations',
        'Real-time review monitoring',
        'Automated response templates',
        'Advanced analytics & insights',
        'Priority email support',
        'Custom branding',
        'Team collaboration tools'
      ],
      icon: FiZap,
      popular: true,
      cta: 'Get Started',
      gradient: 'purple-pink'
    },
    {
      name: 'Enterprise',
      price: '$..',
      duration: '/month',
      originalPrice: '$129',
      description: 'Coming Soon',
      features: [
        'Everything in Professional',
        'White-label solution',
        
        
      ],
      icon: FiCrown,
      popular: false,
      cta: 'Contact Sales',
      gradient: 'amber-orange'
    }
  ];

  return (
    <div className="pricing-page">
      <section className="pricing-section">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pricing-hero"
        >
          <div className="hero-card">
            {/* Limited Time Banner */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="offer-banner"
            >
              <SafeIcon icon={FiGift} className="offer-icon" />
              <span className="offer-text">🎉 Limited Time: Completely FREE FOR NEW USERS!</span>
            </motion.div>

            <h1 className="hero-title">
              <span className="title-primary">
                Simple, Transparent
              </span>
              <br />
              <span className="title-secondary">
                Pricing
              </span>
            </h1>
            <p className="hero-description">
              Start with our trial. No credit card required. Cancel anytime.
            </p>

            {/* Urgency Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="urgency-card"
            >
              <div className="urgency-header">
                <SafeIcon icon={FiClock} className="urgency-icon" />
                <span className="urgency-title">Offer Ends Soon!</span>
              </div>
              <p className="urgency-text">Only <span className="spots-left">20 spots</span> left in our free program</p>
              <p className="urgency-subtext">Join now before this exclusive offer expires!</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <div className="badge-text">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="card-header">
                <div className={`plan-icon ${plan.gradient}`}>
                  <SafeIcon icon={plan.icon} className="icon" />
                </div>
                
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                
                <div className="price-section">
                  <div className="price-container">
                    {plan.originalPrice && (
                      <span className="original-price">{plan.originalPrice}</span>
                    )}
                    <span className="current-price">{plan.price}</span>
                    <span className="price-duration">{plan.duration}</span>
                  </div>
                  {plan.name === 'Starter' && (
                    <p className="price-note">Then $19/month (Save 40%!)</p>
                  )}
                  {plan.originalPrice && (
                    <p className="price-note">Save 40% - Limited time!</p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`plan-cta ${plan.popular ? 'popular-cta' : ''}`}
                >
                  {plan.cta}
                </motion.button>
              </div>

              <div className="features-section">
                <h4 className="features-title">What's included:</h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <SafeIcon icon={FiCheck} className="check-icon" />
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="faq-section"
        >
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">Is this trial really free?</h3>
              <p className="faq-answer">Yes! No credit card required. You get full access to all Starter features for completely free for first 20 users.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I upgrade or downgrade anytime?</h3>
              <p className="faq-answer">Absolutely! You can change your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What happens after the free trial?</h3>
              <p className="faq-answer">You can choose to upgrade to a paid plan or continue with limited free features. No automatic charges.</p>
            </div>
           
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Pricing;