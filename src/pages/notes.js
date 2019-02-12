import React from "react"

import NotesNav from '../components/NotesNav';
import SEO from "../components/seo"

import '../styles/responsive.scss';
import './notes.scss';

const NotesPage = () => (
  <React.Fragment>
    <SEO title="Notes" />
    <NotesNav />
    <main className="container documents__main">
      <h4 className="documents__header">Documents</h4>
    </main>
  </React.Fragment>
)

export default NotesPage
