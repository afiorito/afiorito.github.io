import React from 'react';
import { Link } from 'gatsby';

import './NotesFooter.scss';

const Footer = () => (
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
);

export default Footer;
