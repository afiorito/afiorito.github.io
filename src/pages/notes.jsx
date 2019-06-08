import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Document from '../components/Document';
import NotesNav from '../components/NotesNav';
import NotesFooter from '../components/NotesFooter';
import SEO from '../components/seo';

import '../styles/layout.scss';
import '../styles/responsive.scss';
import './notes.scss';
import generateNoteSlug from '../utils/generateNoteSlug';

class NotesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  renderDocuments = () => {
    const query = this.state.query.toLowerCase();
    const { data } = this.props;
    return data.allNotesJson.edges
      .filter(
        edge =>
          query === '' ||
          edge.node.code.toLowerCase().includes(query) ||
          edge.node.courseTitle.toLowerCase().includes(query),
      )
      .map(edge => (
        <Link key={edge.node.id} to={generateNoteSlug(edge.node)}>
          <Document note={edge.node} />
        </Link>
      ));
  };

  updateQuery = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <SEO
          title="Anthony's Notes"
          keywords={[`engineering`, `school`, `notes`]}
          description="A Collection of Notes for Concordia Engineering Courses (ENGR, COEN, ELEC, COMP)"
        />
        <NotesNav didUpdateSearch={this.updateQuery} />
        <main className="container documents__main">
          <h3 className="documents__header">Documents</h3>
          <section className="documents__section">{this.renderDocuments()}</section>
        </main>
        <NotesFooter />
      </React.Fragment>
    );
  }
}

NotesPage.propTypes = {
  data: PropTypes.shape({
    contentJson: PropTypes.shape({
      notes: PropTypes.object,
    }),
  }).isRequired,
};

export default NotesPage;

export const NotesQuery = graphql`
  {
    allNotesJson {
      edges {
        node {
          id
          code
          type
          professor
          semester
          courseTitle
          link
        }
      }
    }
  }
`;
