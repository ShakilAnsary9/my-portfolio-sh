import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { MdEmail } from 'react-icons/md';
import { RiMessengerFill, RiWhatsappFill } from 'react-icons/ri';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_21shw3r', 'template_yyap2uh', form.current, 'Kpp7CuaSQIjE9QkbA')

        e.target.reset();
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container cotact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdEmail className='contact__icon'/>
          <h4>Email</h4>
          <h5>shakil@foxflue.in</h5>
          <a href="mailto:shakil@foxflue.in">Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerFill className='contact__icon'/>
          <h4>Messenger</h4>
          <h5>shakil.ansary.96</h5>
          <a href="https://m.me/shakil.ansary.96" target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <RiWhatsappFill className='contact__icon'/>
          <h4>WhatsApp</h4>
          <h5>+91 9700000000</h5>
          <a href="https://wa.me/+919700000000" target='_blank'>Send a message</a>
        </article>
      </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
