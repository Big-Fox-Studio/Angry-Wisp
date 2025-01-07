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
  border: '1px solid #112240',
  backgroundColor: '#ffffff',
  color: '#112240',
  fontSize: '1rem',
  fontFamily: "'Estandar', sans-serif",
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

const selectGroupStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
}

const selectLabelStyles = {
  flexShrink: 0,
  minWidth: '120px',
  color: '#ffffff',
  fontSize: '1rem',
  fontFamily: "'Estandar', sans-serif",
  fontWeight: '500',
}

const selectStyles = {
  ...inputStyles,
  flex: 1,
  backgroundColor: '#ffffff',
  color: '#112240',
  border: '1px solid #8954A8',
  '&:focus': {
    outline: 'none',
    borderColor: '#9B6BC3',
    boxShadow: '0 0 0 2px rgba(137, 84, 168, 0.2)',
  }
}

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subjectType: 'other',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Remplacez l'URL ci-dessous par votre URL de déploiement Google Apps Script 
      const response = await fetch('https://script.google.com/macros/s/AKfycbwOCqSZajRguFNhW4E9s2BwAw_4gycrBr7GNjUvFPl3QG1Rs3KlGiS_GviYDlXOncSh/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors' // Ajout important pour éviter les erreurs CORS
      });

      // Comme nous utilisons no-cors, nous ne pouvons pas vérifier response.ok
      alert(t('contact.success'));
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Erreur:', error);
      alert(t('contact.error'));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={formStyles}
    >
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
      <div style={selectGroupStyles}>
        <label htmlFor="subjectType" style={selectLabelStyles}>
          {t('contact.subjectType')}
        </label>
        <select
          id="subjectType"
          name="subjectType"
          style={selectStyles}
          value={formData.subjectType}
          onChange={handleChange}
          required
        >
          <option value="bugs">{t('contact.subjectTypes.bugs')}</option>
          <option value="publishing">{t('contact.subjectTypes.publishing')}</option>
          <option value="request">{t('contact.subjectTypes.request')}</option>
          <option value="privacy">{t('contact.subjectTypes.privacy')}</option>
          <option value="other">{t('contact.subjectTypes.other')}</option>
        </select>
      </div>
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