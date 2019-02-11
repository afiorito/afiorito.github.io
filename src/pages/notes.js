import React from "react"

import NotesNav from '../components/NotesNav';
import SEO from "../components/seo"

import '../components/layout.scss';
import '../components/responsive.scss';

const NotesPage = () => (
  <React.Fragment>
    <SEO title="Notes" />
    <NotesNav />
    <h1>Notes</h1>
  </React.Fragment>
)

export default NotesPage
