import React from "react"

import './NotesNav.scss';
import ipadpro from '../images/ipadpro.svg';
import search from '../images/search.svg';

const NotesNav = () => (
  <nav className="NotesNav">
    <div className="container nav-group">
      <img className="brand-logo" src={ipadpro} alt="IPad Pro with Apple Pencil" />
      <h3 className="brand">Anthony's Notes</h3>
      <form className="note-search__input">
        <img className="note-search__icon" src={search} alt="Search Icon" />
        <input className="note-search__text-input" placeholder="Find a note..." />
      </form>
    </div>
  </nav>
)

export default NotesNav