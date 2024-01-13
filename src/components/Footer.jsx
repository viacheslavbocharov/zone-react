import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import pin from '../assets/pin.png';
import phone from '../assets/phone.png';
import email from '../assets/email.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import pinterest from '../assets/pinterest.png';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__list">
        <div className="footer__contacts">
          <Link to={'/'} className="footer__brand">
            <div className="footer__logo"><img src={logo} alt="Zone" /></div>
            <div className="footer__text">Zone.</div>
          </Link>
          <div className="footer__contact-list">
            <div className="footer__contact-item">
              <div className="footer__contact-icon"><img src={pin} alt="Map pin" /></div>
              <div className="footer__contact-text">Dhaka, Bangladesh</div>
            </div>
            <div className="footer__contact-item">
              <div className="footer__contact-icon"><img src={phone} alt="Pnone" /></div>
              <Link to={'tel:0943833399'} className="footer__contact-text">0943833399</Link>
            </div>
            <div className="footer__contact-item">
              <div className="footer__contact-icon"><img src={email} alt="Email" /></div>
              <Link to={'email:support@zone.com'} className="footer__contact-text">support@zone.com</Link>
            </div>
          </div>
          <div className="footer__socials">
            <Link to={'/'} className="footer__social"><img src={facebook} alt="Facebook" /></Link>
            <Link to={'/'} className="footer__social"><img src={twitter} alt="twitter" /></Link>
            <Link to={'/'} className="footer__social"><img src={instagram} alt="instagram" /></Link>
            <Link to={'/'} className="footer__social"><img src={pinterest} alt="pinterest" /></Link>
          </div>
        </div>
        <div className="footer__sitemap">
          <div className="footer__column">
            <div className="footer__link">Service</div>
            <Link to={'/'} className="footer__link">Order Management</Link>
            <Link to={'/'} className="footer__link">Social Assistant</Link>
            <Link to={'/'} className="footer__link">Crypto Platform</Link>
            <Link to={'/'} className="footer__link">Analyzer of the News</Link>
          </div>
          <div className="footer__column">
            <div className="footer__link">Company</div>
            <Link to={'/'} className="footer__link">About Us</Link>
            <Link to={'/'} className="footer__link">News</Link>
            <Link to={'/'} className="footer__link">Our trusted partner</Link>
            <Link to={'/'} className="footer__link">New users FAQ</Link>
          </div>
          <div className="footer__column">
            <div className="footer__link">Supports</div>
            <Link to={'/'} className="footer__link">Help center</Link>
            <Link to={'/'} className="footer__link">Feedbcak</Link>
            <Link to={'/'} className="footer__link">Contact us</Link>
            <Link to={'/'} className="footer__link">Terms conditins</Link>
          </div>
          <div className="footer__column">
            <div className="footer__link">Resources</div>
            <Link to={'/'} className="footer__link">Download app</Link>
            <Link to={'/'} className="footer__link">Blog</Link>
            <Link to={'/'} className="footer__link">What's new</Link>
            <Link to={'/'} className="footer__link">Sitemap</Link>
          </div>
        </div>
      </div>
      <div className="footer__terms">
        <div className="footer__line"></div>
        <div className="footer__terms-container">
          <div className="footer__copyright">© 2021 Zone. - All rights reserved.</div>
          <div className="footer__policies">
            <Link to={'/'} className="footer__policy">Privacy</Link>
            <Link to={'/'} className="footer__policy">Security</Link>
            <Link to={'/'} className="footer__policy">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
