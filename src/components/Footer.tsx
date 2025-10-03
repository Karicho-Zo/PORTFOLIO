import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
  FiHeart,
  FiSend
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import styles from './Footer.module.css'

interface FooterProps {
  emailAddress?: string
  defaultSubject?: string
  defaultBody?: string
  whatsappNumber?: string
  whatsappMessage?: string
}

const Footer: React.FC<FooterProps> = ({
  emailAddress = 'isaackaricho@gmail.com',
  defaultSubject = 'Portfolio Inquiry',
  defaultBody = 'Hi Isaac, I came across your portfolio and would like to get in touch.',
  whatsappNumber = '+254710831138',
  whatsappMessage = 'Hello! I came across your portfolio and would like to connect.'
}) => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Newsletter subscription logic would go here
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  // Create mailto link with optional subject and body
  const createMailtoLink = (email: string, subject?: string, body?: string) => {
    const params = new URLSearchParams()
    if (subject) params.append('subject', subject)
    if (body) params.append('body', body)
    return `mailto:${email}${params.toString() ? '?' + params.toString() : ''}`
  }

  // Create WhatsApp link with optional message
  const createWhatsAppLink = (number: string, message?: string) => {
    const encodedMessage = encodeURIComponent(message || '')
    return `https://wa.me/${number.replace(/[^0-9]/g, '')}${encodedMessage ? `?text=${encodedMessage}` : ''}`
  }

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Karicho-Zo', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/isaac-karicho-80907a345/', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://x.com/IsaacKaric65631', label: 'Twitter' },
    {
      icon: FiMail,
      href: createMailtoLink(emailAddress, defaultSubject, defaultBody),
      label: 'Send Email'
    },
    {
      icon: FaWhatsapp,
      href: createWhatsAppLink(whatsappNumber, whatsappMessage),
      label: 'WhatsApp'
    },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={styles.brandColumn}
            >
              <h3 className={styles.brandTitle}>Portfolio</h3>
              <p className={styles.brandDescription}>
                Passionate software engineer creating exceptional digital experiences
                with modern web technologies.
              </p>
              <div className={styles.socialLinks}>
                {socialLinks.map((social) => {
                  const isMailIcon = social.icon === FiMail
                  const isWhatsAppIcon = social.icon === FaWhatsapp
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={isMailIcon ? undefined : "_blank"}
                      rel={isMailIcon ? undefined : "noopener noreferrer"}
                      whileHover={isMailIcon ? {
                        scale: 1.15,
                        y: -3,
                        boxShadow: "0 8px 25px rgba(37, 99, 235, 0.3)"
                      } : isWhatsAppIcon ? {
                        scale: 1.1,
                        y: -2,
                        backgroundColor: "#25D366"
                      } : {
                        scale: 1.1,
                        y: -2
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`${styles.socialLink} ${isMailIcon ? styles.mailLink : ''} ${isWhatsAppIcon ? styles.whatsappLink : ''}`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} className={`${styles.socialIcon} ${isMailIcon ? styles.mailIcon : ''} ${isWhatsAppIcon ? styles.whatsappIcon : ''}`} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className={styles.footerColumn}
            >
              <h4 className={styles.columnTitle}>Quick Links</h4>
              <ul className={styles.footerList}>
                {quickLinks.map((link) => (
                  <li key={link.name} className={styles.footerListItem}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className={styles.footerLink}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={styles.footerColumn}
            >
              <h4 className={styles.columnTitle}>Services</h4>
              <ul className={styles.footerList}>
                {[
                  'Web Development',
                  'UI/UX Design',
                  'Consulting',
                  'Code Review',
                  'Mentoring'
                ].map((service) => (
                  <li key={service} className={styles.footerListItem}>
                    <span className={styles.footerText}>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className={styles.newsletterSection}
            >
              <h4 className={styles.columnTitle}>Stay Updated</h4>
              <p className={styles.newsletterDescription}>
                Subscribe to get notified about new projects and blog posts.
              </p>
              <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
                <div className={styles.newsletterInputGroup}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={styles.newsletterInput}
                    required
                  />
                  <button
                    type="submit"
                    className={styles.newsletterSubmitButton}
                  >
                    <FiSend className={styles.newsletterSubmitIcon} />
                  </button>
                </div>
                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.newsletterSuccess}
                  >
                    <FiHeart className={styles.newsletterSuccessIcon} />
                    Thanks for subscribing!
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomBarContent}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={styles.copyright}
            >
              © {currentYear} Portfolio. Made with <FiHeart className={styles.heartIcon} /> by Isaac Karicho
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.backToTopButton}
            >
              <FiArrowUp className={styles.backToTopIcon} />
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer