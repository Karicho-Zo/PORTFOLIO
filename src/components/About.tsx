import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUser, FiAward } from 'react-icons/fi'
import styles from './About.module.css'

import image from '../assets/Image.jpg'

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [counters, setCounters] = useState({
    yearsexperience: 0,
    projectscompleted: 0,
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { icon: FiUser, label: 'Years Experience', value: 1, suffix: '+' },
    { icon: FiAward, label: 'Projects Completed', value: 3, suffix: '+' },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCounters((prev: typeof counters) => {
          const newCounters = { ...prev }
          if (newCounters.yearsexperience < 1) newCounters.yearsexperience++
          if (newCounters.projectscompleted < 3) newCounters.projectscompleted++
          return newCounters
        })
      }, 100)

      setTimeout(() => clearInterval(interval), 3000)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const fullBio = `I'm a passionate software engineer with over 1 year of experience in creating digital solutions that make a difference. My journey in tech began with a curiosity about how things work, and it has evolved into a career dedicated to crafting exceptional user experiences.
  
  I specialize in modern web technologies, with expertise in React, Node.js, and JavaScript.`

  const shortBio = fullBio.substring(0, 200) + '...'

  return (
    <section id="about" className={`${styles.section} ${styles.about}`}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.aboutContainer}
        >
          {/* Section Header */}
          <div className={`${styles.textCenter} ${styles.mb16}`}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.aboutTitle}
            >
              About <span className={styles.aboutTitleHighlight}>Me</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`${styles.textTextMuted} ${styles.aboutSubtitle}`}
            >
              Get to know more about my journey and expertise
            </motion.p>
          </div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.aboutContent}
          >
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={styles.profileSection}
            >
              <div className={styles.profileContainer}>
                <div className={styles.profileWrapper}>
                  <div className={styles.profileInner}>
                    <div className={styles.profileContent}>
                      <img
                        src={image}
                        alt="Personal Photo"
                        className={styles.profileImage}
                      />
                      <div className={`${styles.floatingDecoration} ${styles.floatingDecoration1}`}></div>
                      <div className={`${styles.floatingDecoration} ${styles.floatingDecoration2}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info Section */}
            <div className={styles.aboutInfo}>
              {/* Bio */}
              <div className={styles.bioSection}>
                <p className={`${styles.textTextMuted} ${styles.bioText}`}>
                  {isExpanded ? fullBio : shortBio}
                </p>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={styles.readMoreBtn}
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>

              {/* Stats */}
              <div className={`${styles.grid} ${styles.statsGrid}`}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className={styles.statCard}
                  >
                    <stat.icon className={`${styles.mxAuto} ${styles.mb2} ${styles.statIcon}`} size={24} />
                    <div className={styles.statValue}>
                      {counters[stat.label.toLowerCase().replace(' ', '') as keyof typeof counters] || 0}
                      {stat.suffix}
                    </div>
                    <div className={`${styles.textSm} ${styles.textTextMuted}`}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About