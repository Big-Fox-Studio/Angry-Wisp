import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '500px',
  width: '100%',
  margin: '0 auto',
};

const inputStyles = {
  padding: '0.8rem',
  borderRadius: '4px',
  border: '1px solid #E6F1FF40',
  backgroundColor: '#112240',
  color: '#E6F1FF',
  fontSize: '1rem',
  fontFamily: "'BOLTZZ Sans', sans-serif",
};

const buttonStyles = {
  padding: '1rem',
  backgroundColor: '#8954A8',
  color: '#ffffff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
  transition: 'background-color 0.2s',
  '&:hover': {
    backgroundColor: '#9B6BC3',
  },
};

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi d'email
    // Par exemple, avec un service comme EmailJS ou une API backend
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <input
        type="text"
        name="name"
        placeholder={t('contact.name')}
        style={inputStyles}
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder={t('contact.email')}
        style={inputStyles}
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="subject"
        placeholder={t('contact.subject')}
        style={inputStyles}
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder={t('contact.message')}
        style={{ ...inputStyles, minHeight: '150px', resize: 'vertical' }}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit" style={buttonStyles}>
        {t('contact.send')}
      </button>
    </form>
  );
};

export default ContactForm; 