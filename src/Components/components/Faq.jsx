import React from 'react';

const Faq = () => {
  return (
    <div className="faq container">
      <div className="bg-white row">
        <h1 className="display-4" style={{ fontWeight: '700', color: '#34A853', textDecoration: 'underline' }}>FAQ</h1>
        <p className='faq-desc'>Frequently Asked Questions</p>
        
        <div className="d-flex justify-content-center flex-column align-items-center faq-items gap-5 col-lg-8 px-5">
          <div className='faq-item'>
            <h2 style={{ fontWeight: '700', color: '#34A853' }}>Is AI safe and secure in healthcare?</h2>
            <p><span style={{ fontWeight: '700', color: '#000' }}>Answer:</span> Yes, AI in healthcare is designed with safety and security in mind. Regulations and standards, such as HIPAA in the United States, govern the use of AI in healthcare to protect patient data and privacy.</p>
          </div>

          <div className='faq-item'>
            <h2 style={{ fontWeight: '700', color: '#34A853' }}>What are the benefits of AI in healthcare?</h2>
            <p><span style={{ fontWeight: '700', color: '#000' }}>Answer:</span> The benefits of AI in healthcare include faster and more accurate diagnoses, personalized treatment plans, improved patient outcomes, reduced healthcare costs, enhanced medical research, and increased efficiency in healthcare administration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
