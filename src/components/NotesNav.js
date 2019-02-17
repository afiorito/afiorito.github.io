import React from "react"
import { Link } from 'gatsby';

import './NotesNav.scss';
import ipadpro from '../images/ipadpro.svg';
import search from '../images/search.svg';
import home from '../images/home.svg';

const NotesNav = ({ didUpdateSearch }) => (
  <nav className="NotesNav">
    <div className="container nav-group">
      <img className="brand-logo" src={ipadpro} alt="IPad Pro with Apple Pencil" />
      <h3 className="brand">Anthony's Notes</h3>
      <div className="nav-left">
        <form className="note-search__input">
          <img className="note-search__icon" src={search} alt="Search Icon" />
          <input onChange={didUpdateSearch} className="note-search__text-input" placeholder="Find a note..." />
        </form>
        <Link to="/"><img className="nav-home__img" src={home} alt="Go to Home" /></Link>
      </div>
    </div>
  </nav>
)

export default NotesNav