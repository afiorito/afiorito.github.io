import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import picksLogo from '../images/picks-logo.svg';
import './NotesFooter.scss';

const Footer = () => (
  <>
    <div className="promotion">
      <OutboundLink href="https://apps.apple.com/us/app/picks-random-generator/id1536305926">
        <img className="app-icon" src={picksLogo} alt="Picks Logo" />
        <span>Check Out My App – Picks</span>
        <img className="app-icon" src={picksLogo} alt="Picks Logo" />
      </OutboundLink>
    </div>
    <footer className="notes__footer">
      <div className="container">
        <p>
          Found an issue? Report it{' '}
          <Link to="/contact" state={{ referred: true }}>
            here
          </Link>
        </p>
        <p>© Anthony {new Date().getFullYear()}</p>
      </div>
    </footer>
  </>
);

export default Footer;
