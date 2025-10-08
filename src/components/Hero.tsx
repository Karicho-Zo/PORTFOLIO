import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiEye } from 'react-icons/fi'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)

  const roles = [
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'React Specialist',
    'UI/UX Enthusiast'
  ]

  const fullName = 'Isaac Karicho'
  const currentRoleText = roles[currentRole]

  useEffect(() => {
    const text = currentRoleText
    const shouldDelete = isDeleting

    if (shouldDelete) {
      if (displayText.length > 0) {
        setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 100)
      } else {
        setIsDeleting(false)
        setCurrentRole((prev: number) => (prev + 1) % roles.length)
      }
    } else {
      if (displayText.length < text.length) {
        setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1))
        }, 150)
      } else {
        setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    }
  }, [displayText, isDeleting, currentRole, roles])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Karicho-Zo', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/isaac-karicho-80907a345/', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://x.com/IsaacKaric65631', label: 'Twitter' },
  ]

  return (
    <section id="home" className={`${styles.section} ${styles.hero}`}>
      {/* Background gradient */}
      <div className={styles.heroBackground} />

      {/* Animated background particles */}
      <div className={styles.particles}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className={`${styles.container} ${styles.heroContent}`}>
        <div className={styles.textCenter}>
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.mainHeading}
          >
            <h1 className={styles.nameText}>
              Hi, I'm{' '}
              <span className={styles.nameHighlight}>
                {fullName}
              </span>
            </h1>

            <div className={styles.roleText}>
              <span className={styles.mr2}>I'm a</span>
              <span className={styles.typingText}>
                {displayText}
                <motion.span
                  className={styles.cursor}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                >
                  |
                </motion.span>
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.description}
          >
            Passionate about creating exceptional digital experiences with modern web technologies.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.ctaButtons}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className={`${styles.btn} ${styles.btnPrimary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiEye size={20} />
              View My Work
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.socialLinks}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Hero