import React, { useRef } from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi'
import {FiInstagram} from 'react-icons/fi'
import emailjs, { send } from 'emailjs-com'


const  Contact = () => {
  const form = useRef();
   
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q5n9um8', 'template_6moqmqm', form.current, 'IbbbKT-32VJIv8fTG')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>akashakku052@gmail.com</h5>
            <a href="mailto:akashakku052@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <FiInstagram className='contact_option-icon' />
            <h4>Instagram</h4>
            <h5>Connet Me</h5>
            <a href="https://instagram.com/akash_si.gh?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>Send a message</a>
          </article>          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
