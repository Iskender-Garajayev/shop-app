import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import './contact.css';

const Contacts = () => {
  return (
    <div>
      <Header />
      <div className='contacts-container'>
        <div className='call-write'>
          <div className='call'>
            <p>
              <span className='contact-icon'>
                <ion-icon name='call-outline'></ion-icon>
              </span>
              call to us
            </p>
            <p>We are available 24/7, 7 days a week.</p>
            <p>
              Phone:<a href='tel:+905451522343'>+905451522343</a>{' '}
            </p>
          </div>

          <div className='write'>
            <div>
              <span className='contact-icon'>
                <ion-icon name='mail-outline'></ion-icon>
              </span>
              Write To US{' '}
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>

        <div className='email-container'></div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
