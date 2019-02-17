import React, { Component } from "react"
import { graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Document from '../components/Document'
import NotesNav from '../components/NotesNav'
import SEO from "../components/seo"

import '../styles/layout.scss'
import '../styles/responsive.scss'
import './notes.scss'

class NotesPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      query: ''
    }
  }

  renderDocuments = () => {
    const query = this.state.query.toLowerCase();
    return this.props.data.contentJson.notes
      .filter(n => query === '' || n.code.toLowerCase().includes(query) || n.courseTitle.toLowerCase().includes(query))
      .map(n => <OutboundLink key={n.id} href={n.link} target="_blank" rel="noopener noreferrer"><Document note={n} /></OutboundLink>)
  }

  updateQuery = (e) => {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <SEO 
          title="Anthony's Notes" 
          keywords={[`engineering`, `school`, `notes`, ``]}
          description="A Collection of Notes for Concordia Engineering Courses (ENGR, COEN, ELEC, COMP)" />
        <NotesNav didUpdateSearch={this.updateQuery} />
        <main className="container documents__main">
          <h4 className="documents__header">Documents</h4>
          <section className="documents__section">
            {this.renderDocuments()}
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default NotesPage

export const NotesQuery = graphql`
  query NotesQuery {
    contentJson {
      notes {
        id
        code
        courseTitle
        link
        semester
        professor
        type
      }
    }
  }
`