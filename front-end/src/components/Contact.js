/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './Contact.css';
import ContactIcon from '../assets/img/contact/icons/contact.svg';
import Mail from '../assets/img/contact/icons/mail.svg';
import Phone from '../assets/img/contact/icons/phone.svg';
import Map from '../assets/img/contact/icons/map.svg';

function Contact() {
  return (
    <section id='contact' className='section pb-[80px] pt-[80px] md:pb-[110px] md:pt-[110px] lg:pb-[120px] lg:pt-[120px]'>
        <div data-aos='fade-down' data-aos-delay='100' className="section-title-group max-x-[540px] mx-auto px-4 lg:px-0">
            <img src={ContactIcon} alt=''/>
            <h2 className='h2 section-title'>Наши &nbsp; <span className='text-primary-200'>контакты</span></h2>
        </div>
        <div className="contact-widget" data-aos='fade-down' data-aos-delay='300'>
            <ContactItem icon={Map} text="Москва, Варшавское ш., 14, стр. 1" />
            <ContactItem icon={Phone} text="+7 4912 555 777" />
            <ContactItem icon={Mail} text="hercules_gym_center@gmail.com" />
        </div>
        <div className="map" data-aos='fade-down' data-aos-delay='500' data-aos-offset='300'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.069761554938!2d-74.2175599360452!3d40.767139456514954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1581710470843!5m2!1sen!2sbd"></iframe>
        </div>
    </section>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="cw-text">
      <img src={icon} alt=''/>
      <p>{text}</p>
    </div>
  );
}

export default Contact;
