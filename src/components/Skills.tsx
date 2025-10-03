import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiCode,
  FiDatabase,
  FiCloud,
  FiSmartphone,
  FiGlobe,
  FiTool,
  FiStar
} from 'react-icons/fi'
import styles from './Skills.module.css'

interface Skill {
  name: string
  level: number
  icon: React.ReactNode
  category: 'frontend' | 'backend' | 'mobile' | 'tools' | 'cloud'
}

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'backend' | 'mobile' | 'tools' | 'cloud'>('all')
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>({})

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 95, icon: <FiCode />, category: 'frontend' },
    { name: 'TypeScript', level: 90, icon: <FiCode />, category: 'frontend' },
    { name: 'HTML', level: 85, icon: <FiGlobe />, category: 'frontend' },
    { name: 'CSS', level: 90, icon: <FiCode />, category: 'frontend' },
    { name: 'JavaScript', level: 95, icon: <FiCode />, category: 'frontend' },

    // Backend
    { name: 'Node.js', level: 90, icon: <FiDatabase />, category: 'backend' },
    { name: 'Python', level: 85, icon: <FiCode />, category: 'backend' },

    // Tools
    { name: 'Git', level: 90, icon: <FiTool />, category: 'tools' },
  ]

  const categories = [
    { id: 'all', label: 'All Skills', icon: <FiStar /> },
    { id: 'frontend', label: 'Frontend', icon: <FiGlobe /> },
    { id: 'backend', label: 'Backend', icon: <FiDatabase /> },
    { id: 'tools', label: 'Tools', icon: <FiTool /> },
  ]

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        filteredSkills.forEach((skill, index) => {
          setTimeout(() => {
            setAnimatedLevels(prev => ({
              ...prev,
              [skill.name]: skill.level
            }))
          }, index * 100)
        })
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [isInView, selectedCategory, filteredSkills])

  const getLevelColor = (level: number) => {
    if (level >= 90) return styles.progressFillExpert
    if (level >= 80) return styles.progressFillAdvanced
    if (level >= 70) return styles.progressFillIntermediate
    return styles.progressFillBeginner
  }

  const getLevelText = (level: number) => {
    if (level >= 90) return 'Expert'
    if (level >= 80) return 'Advanced'
    if (level >= 70) return 'Intermediate'
    return 'Beginner'
  }

  return (
    <section id="skills" className={`${styles.section} ${styles.skills}`}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.skillsContainer}
        >
          {/* Section Header */}
          <div className={`${styles.textCenter} ${styles.mb16}`}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={styles.skillsTitle}
            >
              My <span className={styles.skillsTitleHighlight}>Skills</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={`${styles.textTextMuted} ${styles.skillsSubtitle}`}
            >
              A comprehensive overview of my technical skills and expertise across different technologies and tools
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className={styles.categoryFilter}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as any)}
                className={`${styles.categoryBtn} ${
                  selectedCategory === category.id
                    ? styles.categoryBtnActive
                    : styles.categoryBtnInactive
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className={`${styles.grid} ${styles.skillsGrid}`}>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${styles.bgSurfaceColor} ${styles.skillCard}`}
              >
                <div className={`${styles.flex} ${styles.skillHeader}`}>
                  <div className={styles.skillInfo}>
                    <div className={styles.skillIcon}>
                      {skill.icon}
                    </div>
                    <h3 className={styles.skillName}>{skill.name}</h3>
                  </div>
                  <div className={styles.skillLevel}>
                    <div className={styles.skillPercentage}>
                      {animatedLevels[skill.name] || 0}%
                    </div>
                    <div className={`${styles.textXs} ${styles.textTextMuted}`}>
                      {getLevelText(skill.level)}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className={styles.progressContainer}>
                  <div className={styles.progressBar}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isInView ? `${animatedLevels[skill.name] || 0}%` : 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`${styles.progressFill} ${getLevelColor(skill.level)}`}
                    />
                  </div>
                  <div className={`${styles.flex} ${styles.progressLabels}`}>
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Skills