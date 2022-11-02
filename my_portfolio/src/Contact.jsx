import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container{
    margin-top: 6rem;
    text-align: center;

    .contact-form{
      max-width: 50rem;
      margin: auto;

      .contact-inputs{
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"]{
          cursor: pointer;
          transition: all 0.2s;

          &:hover{
            background-color: ${({ theme }) => theme.colors.white};
            border: ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }

  `;

  return (
    <Wrapper className='section'>
      <h2 className='common-heading'>My Contact</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.1881673931807!2d74.7727934516479!3d20.93517097840501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec5c4cfaccb89%3A0x4b63f0228cfb6a56!2sRajlaxmi%20House!5e0!3m2!1sen!2sin!4v1663129422211!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xdojenkd" method='POST' className='contact-inputs'>
            <input type="text" name="username" placeholder='Username' autoComplete='off' required />
            <input type="email" name="Email" placeholder='Email' autoComplete='off' required />
            <textarea name="message" cols="30" rows="6" autoComplete='off' required></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>

    </Wrapper>
  )
}

export default Contact