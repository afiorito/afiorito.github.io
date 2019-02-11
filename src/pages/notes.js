import React from "react"

import NotesNav from '../components/NotesNav';
import SEO from "../components/seo"

const NotesPage = () => (
  <React.Fragment>
    <SEO title="Page two" />
    <NotesNav />
    <h1>Notes</h1>
  </React.Fragment>
)

export default NotesPage
