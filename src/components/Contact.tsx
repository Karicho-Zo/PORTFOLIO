import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
  FiCheck,
  FiAlertCircle
} from 'react-icons/fi'
import styles from './Contact.module.css'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check your .env file.')
      }

      // Prepare email template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        to_email: import.meta.env.VITE_CONTACT_EMAIL || 'isaackaricho@gmail.com',
        subject: data.subject,
        message: data.message,
        reply_to: data.email,
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'isaackaricho@gmail.com',
      href: 'mailto:isaackaricho@gmail.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+254 710831138',
      href: 'tel:+254710831138'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Kenya, Nairobi',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Karicho-Zo', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/isaac-karicho-80907a345/', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://x.com/IsaacKaric65631', label: 'Twitter' },
  ]

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.container}
        >
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={styles.title}
            >
              Get In <span className={styles.titleHighlight}>Touch</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={styles.subtitle}
            >
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </motion.p>
          </div>

          <div className={styles.contentGrid}>
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className={styles.contactSection}
            >
              <div>
                <h3 className={styles.sectionTitle}>Let's Connect</h3>
                <p className={styles.description}>
                  I'm always interested in new opportunities and exciting projects.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className={styles.contactDetails}>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={styles.contactLink}
                  >
                    <div className={styles.contactIconWrapper}>
                      <info.icon className={styles.contactIcon} />
                    </div>
                    <div>
                      <div className={styles.contactLabel}>{info.label}</div>
                      <div className={styles.contactValue}>{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Follow Me</h4>
                <div className={styles.socialLinksContainer}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={styles.socialLink}
                      aria-label={social.label}
                    >
                      <social.icon className={styles.socialIcon} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
                <h3 className={styles.formTitle}>Send Message</h3>

                {/* Name Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className={`${styles.formInput} ${
                      errors.name ? styles.error : ''
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className={styles.errorMessage}>
                      <FiAlertCircle className={styles.errorIcon} />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`${styles.formInput} ${
                      errors.email ? styles.error : ''
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className={styles.errorMessage}>
                      <FiAlertCircle className={styles.errorIcon} />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: 'Subject is required' })}
                    className={`${styles.formInput} ${
                      errors.subject ? styles.error : ''
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className={styles.errorMessage}>
                      <FiAlertCircle className={styles.errorIcon} />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className={`${styles.formTextarea} ${
                      errors.message ? styles.error : ''
                    }`}
                    placeholder="Tell me about your project or just say hello!"
                  />
                  {errors.message && (
                    <p className={styles.errorMessage}>
                      <FiAlertCircle className={styles.errorIcon} />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={styles.submitButton}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.loadingSpinner} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${styles.statusMessage} ${
                      submitStatus === 'success' ? styles.success : styles.error
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <FiCheck className={styles.statusIcon} />
                        Message sent successfully! I'll get back to you soon.
                      </>
                    ) : (
                      <>
                        <FiAlertCircle className={styles.statusIcon} />
                        Failed to send message. Please try again.
                      </>
                    )}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact