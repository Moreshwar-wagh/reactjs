import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../Styles/Button'
import { FaGithub, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to work with you?</h3>
            <h3>Talk to me today</h3>
          </div>
          <div>
            <NavLink to='/'>
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section */}
      <footer>
        <div className="container grid grid-four-column">
          <div className='footer-about'>
            <h3>Wagh Moreshwar</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Send your for any query.</h3>
            <form action='#'>
              <input type="email" autoComplete='off' placeholder='email' required />
              <input type="submit" value='subscribe' />
            </form>
          </div>

          {/*3rd column*/}
          <div className='footer-social'>
            <h3>Follow Me</h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://github.com/Moreshwar-wagh" target="_newPage">
                  <FaGithub className='icons' />
                </a>
              </div>
              <div>
                <a href="https://linkedin.com/in/moreshwar-wagh" target="_newPage">
                  <FaLinkedinIn className='icons' />
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/channel/UCTTHR7z_z6cMnKvvcq9SSYw" target="_newPage">
                  <FaYoutube className='icons' />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column */}
          <div className='footer-contact'>
            <h3>Call Me</h3>
            <h3>+91 123456789</h3>
          </div>
        </div>

        {/* bottom section */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} WaghMoreshwar. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>

      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.contact-short{
  max-width: 60vw;
  margin: auto;
  padding: 5rem 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform: translateY(50%);

  .grid div:last-child{
    justify-self: end;
    align-self: center;
  }
}

footer{
  padding: 14rem 0 9rem 0;
  background-color: ${({ theme }) => theme.colors.footer_bg};

  h3{
    color: ${({ theme }) => theme.colors.hr};
    margin-bottom: 2.4rem;
  }
  p{
    color: ${({ theme }) => theme.colors.white};
  }
  .footer-social--icons{
    display: flex;
    gap: 2rem;

    div{
      padding: 1rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};

      .icons{
        color: ${({ theme }) => theme.colors.white};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
      }
    }
  }

  .footer-bottom--section{
    padding-top: 9rem;

    hr{
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
}

`;

export default Footer