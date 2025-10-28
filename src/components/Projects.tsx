import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX, FiFilter } from 'react-icons/fi'
import styles from './Projects.module.css'
import Carsokoni from '../assets/Carsokoni.jpg'
import Explore from '../assets/Explore.jpg'
import Portfolio from '../assets/Portfolio.jpg'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  category: 'web' | 'mobile' | 'desktop'
  featured: boolean
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'mobile' | 'desktop'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Carsokoni E-commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, JavaScript and Css.',
      longDescription: 'This is a comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, payment integration with Stripe, and admin dashboard. Built with modern web technologies for optimal performance and user experience.',
      image: Carsokoni,
      technologies: ['React', 'Node.js', 'JavaScript', 'CSS'],
      githubUrl: 'https://github.com/Karicho-Zo/CARSOKONI-PROJECT',
      liveUrl: 'https://carsokoni-project-auj6.vercel.app/',
      category: 'web',
      featured: true,
    },
    {
      id: 2,
      title: 'ExploreAfrica Travel Blog',
      description: 'A responsive tours and travel website built with React, Node.js, JavaScript and Css.',
      longDescription: 'ExploreAfrica is a dynamic travel blog platform that showcases the beauty of Africa through engaging content, stunning visuals, and user-generated reviews. Features include trip planning tools, interactive maps, and social media integration to connect travelers worldwide.',
      image: Explore,
      technologies: ['React', 'Javascript', 'Node.js', 'CSS'],
      githubUrl: 'https://github.com/Karicho-Zo/TOURS-AND-TRAVEL ',
      liveUrl: 'https://tours-and-travel-taupe.vercel.app',
      category: 'web',
      featured: true,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: ' A responsive personal portfolio website built with React.js, HTML, TypeScrpt and CSS',
      longDescription: 'A sleek and modern portfolio website to showcase my projects, skills, and experience. Features include smooth scrolling, responsive design, project galleries, and contact forms to connect with potential clients and employers.',
      image: Portfolio,
      technologies: ['React', 'TypeScript', 'CSS', 'Node.js'],
      githubUrl: 'https://github.com/Karicho-Zo/PORTFOLIO',
      liveUrl: 'https://portfolio-8pl7-cyan.vercel.app/',
      category: 'web',
      featured: true,
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
  ]

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className={`${styles.section} ${styles.projects}`}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.projectsContainer}
        >
          {/* Section Header */}
          <div className={`${styles.textCenter} ${styles.mb16}`}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={styles.projectsTitle}
            >
              My <span className={styles.projectsTitleHighlight}>Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={`${styles.textTextMuted} ${styles.projectsSubtitle}`}
            >
            
            </motion.p>
          </div>

          {/* Featured Projects */}
          {selectedCategory === 'all' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className={styles.featuredSection}
            >
              <h3 className={`${styles.featuredTitle} ${styles.textCenter}`}>Featured Projects</h3>
              <div className={`${styles.grid} ${styles.featuredGrid}`}>
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className={styles.featuredCard}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div
                      className={styles.featuredImage}
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      <div className={styles.featuredOverlay}>
                        <button className={styles.featuredOverlayBtn}>
                          <FiExternalLink size={16} />
                          View Details
                        </button>
                      </div>
                    </div>
                    <div className={styles.featuredContent}>
                      <h4 className={styles.featuredCardTitle}>{project.title}</h4>
                      <p className={`${styles.featuredDescription} ${styles.textTextMuted}`}>{project.description}</p>
                      <div className={`${styles.flex} ${styles.featuredTechGrid}`}>
                        {project.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className={styles.featuredTechTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className={`${styles.flex} ${styles.featuredLinks}`}>
                        <a href={project.githubUrl} className={styles.featuredLink}>
                          <FiGithub size={20} />
                        </a>
                        <a href={project.liveUrl} className={styles.featuredLink}>
                          <FiExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className={styles.filterButtons}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as any)}
                className={`${styles.filterBtn} ${
                  selectedCategory === category.id
                    ? styles.filterBtnActive
                    : styles.filterBtnInactive
                }`}
              >
                <FiFilter size={16} />
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className={`${styles.grid} ${styles.projectsGrid}`}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${selectedCategory}-${project.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`${styles.bgSurfaceColor} ${styles.projectCard}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div
                    className={styles.projectImage}
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className={styles.projectOverlay}>
                      <button className={styles.featuredOverlayBtn}>
                        <FiExternalLink size={16} />
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className={styles.projectCardContent}>
                    <h4 className={styles.projectTitle}>{project.title}</h4>
                    <p className={`${styles.projectDescription} ${styles.textTextMuted}`}>{project.description}</p>
                    <div className={`${styles.flex} ${styles.projectTechGrid}`}>
                      {project.technologies.slice(0, 2).map(tech => (
                        <span key={tech} className={styles.projectTechTag}>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className={styles.projectTechMore}>
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                    <div className={`${styles.flex} ${styles.projectLinks}`}>
                      <a href={project.githubUrl} className={styles.projectLink}>
                        <FiGithub size={18} />
                      </a>
                      <a href={project.liveUrl} className={styles.projectLink}>
                        <FiExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.modal}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className={styles.modalImage}
                  style={{
                    backgroundImage: `url(${selectedProject.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={styles.modalClose}
                  >
                    <FiX size={20} />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                  <p className={`${styles.modalDescription} ${styles.textTextMuted}`}>{selectedProject.longDescription}</p>
                  <div className={`${styles.flex} ${styles.modalTechGrid}`}>
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className={styles.modalTechTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`${styles.flex} ${styles.modalButtons}`}>
                    <a
                      href={selectedProject.githubUrl}
                      className={`${styles.btn} ${styles.btnPrimary}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub size={18} />
                      View Code
                    </a>
                    <a
                      href={selectedProject.liveUrl}
                      className={`${styles.btn} ${styles.btnSecondary}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects