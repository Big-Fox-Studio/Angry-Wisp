import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = process.env.GATSBY_SPREADSHEET_ID;
const SHEET_ID = process.env.GATSBY_SHEET_ID;
const CLIENT_EMAIL = process.env.GATSBY_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GATSBY_PRIVATE_KEY;

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

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const appendToSheet = async (formData) => {
    try {
      console.log('Vérification des variables d\'environnement...');
      if (!SPREADSHEET_ID) console.error('SPREADSHEET_ID manquant');
      if (!SHEET_ID) console.error('SHEET_ID manquant');
      if (!CLIENT_EMAIL) console.error('CLIENT_EMAIL manquant');
      if (!PRIVATE_KEY) console.error('PRIVATE_KEY manquant');

      console.log('Tentative de connexion à Google Sheets...');
      const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
      
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY.replace(/\\n/g, '\n')
      });
      
      await doc.loadInfo();
      const sheet = doc.sheetsById[SHEET_ID];
      
      await sheet.addRow({
        Date: new Date().toISOString(),
        Nom: formData.name,
        Email: formData.email,
        Sujet: formData.subject,
        Message: formData.message,
      });
      
      console.log('Données ajoutées avec succès!');
      return true;
    } catch (error) {
      console.error('Erreur détaillée:', {
        message: error.message,
        stack: error.stack,
        response: error.response?.data
      });
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log('Début de la soumission du formulaire');
      const success = await appendToSheet(formData);
      
      if (success) {
        alert(t('contact.success'));
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Échec de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur complète:', error);
      alert(`${t('contact.error')} - ${error.message}`);
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
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
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