import React, { useRef } from 'react'
import emailjs from "emailjs-com"
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsDiscord} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0xqgev5', 'template_10fmhgo', form.current, 'HltwLGcREYqrsHcc_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };
  return (
    
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>zonezerocrm@gmail.com</h5>
            <a href="mailto:zonezerocrm@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsDiscord className='contact_option-icon'/>
            <h4>Discord</h4>
            <h5>Sephia Drameus</h5>
            <a href="https://discord.com/" target='_blank'>Send a message, Only for casual conversations!</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+57 312 8667697</h5>
            <a href="https://api.whatsapp.com/send?phone=+573128667697-" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Dummyemail@gmail.com' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div> 
    </section>
  )
}

export default Contact