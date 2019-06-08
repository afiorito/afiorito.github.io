import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './NotesNav.scss';
import ipadpro from '../images/ipadpro.svg';
import search from '../images/search.svg';
import home from '../images/home.svg';
import backToNotes from '../images/back-to-notes.svg';

const NotesNav = ({ didUpdateSearch, goBackToNotes }) => (
  <nav className="NotesNav">
    <div className="container nav-group">
      <img className="brand-logo" src={ipadpro} alt="IPad Pro with Apple Pencil" />
      <h3 className="brand">Anthony&#39;s Notes</h3>
      <div className="nav-left">
        {typeof didUpdateSearch == 'function' && (
          <form className="note-search__input">
            <img className="note-search__icon" src={search} alt="Search Icon" />
            <input
              onChange={didUpdateSearch}
              className="note-search__text-input"
              placeholder="Find a note..."
            />
          </form>
        )}
        {goBackToNotes && (
          <Link to="/notes">
            <img className="nav__img nav-notes__img" src={backToNotes} alt="Go to Notes" />
          </Link>
        )}
        <Link to="/">
          <img className="nav__img nav-home__img" src={home} alt="Go to Home" />
        </Link>
      </div>
    </div>
  </nav>
);

NotesNav.defaultProps = {
  goBackToNotes: false,
};

NotesNav.propTypes = {
  didUpdateSearch: PropTypes.func,
  goBackToNotes: PropTypes.bool,
};

export default NotesNav;
