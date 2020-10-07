import React from 'react';
import SEO from './seo';
import { graphql } from 'gatsby';
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import NotesNav from '../components/NotesNav';
import NotesFooter from '../components/NotesFooter';
import PropTypes from 'prop-types';
import noteImage from '../images/note.svg';
import packageImage from '../images/package.svg';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import generateNoteFilename from '../utils/generateNoteFilename';

import './DocumentDetail.scss';

const formatDistribution = distribution => {
  const letters = [
    'A+',
    'A',
    'A-',
    'B+',
    'B',
    'B-',
    'C+',
    'C',
    'C-',
    'D+',
    'D',
    'D-',
    'F',
    'FNS',
    'R',
    'NR',
  ];
  return distribution.map((num, i) => ({
    letter: letters[i],
    count: num,
  }));
};

const DocumentDetail = ({ data }) => {
  const note = data.notesJson;
  const imgSrc = note.type === 'note' ? noteImage : packageImage;

  console.log('Distribution', note.distribution);

  return (
    <React.Fragment>
      <SEO
        title={`Anthony's ${note.code} Notes ${note.type !== 'note' ? 'Package' : ''}`}
        keywords={[`engineering`, `school`, `notes`, `Concordia`, note.code]}
        description={`${note.code} | ${note.courseTitle}`}
      />
      <NotesNav goBackToNotes={true} />
      <main className="container DocumentDetail">
        <div className="detail-body__div">
          <img className="document__img" src={imgSrc} alt="Document Icon" />
          <div className="detail-content__div">
            <div className="detail-head__div">
              <div className="detail-title__div">
                <h2>{note.courseTitle}</h2>
                <p>{note.code}</p>
              </div>
            </div>
            <div className="note-detail__div">
              <div className="note-detail-item__div">
                <h3>Professor</h3>
                <p>{note.professor}</p>
              </div>
              <div className="note-detail-item__div">
                <h3>Semester</h3>
                <p>{note.semester}</p>
              </div>
              <div className="note-detail-item__div">
                <h3>Credits</h3>
                <p>{note.credits.toFixed(2)}</p>
              </div>
              <div className="note-detail-item__div">
                <h3>Class Average</h3>
                <p>{note.classAvg.toFixed(2)}</p>
              </div>
              <div className="note-detail-item__div">
                <h3>Class Size</h3>
                <p>{note.classSize}</p>
              </div>
              <div className="note-detail-item__div">
                <h3>File Download</h3>
                <OutboundLink href={note.link}>{generateNoteFilename(note.link)}</OutboundLink>
              </div>
              <div className="note-detail-item__div--full">
                <h3>Distribution</h3>
                <ResponsiveContainer height={300} width="100%">
                  <BarChart
                    margin={{ left: -32, bottom: 16 }}
                    barCategoryGap="10%"
                    data={formatDistribution(note.distribution)}
                  >
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="letter" />
                    <YAxis />
                    <Tooltip />
                    <Bar isAnimationActive={false} dataKey="count" fill="#8b9dc3"></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </main>
      <NotesFooter />
    </React.Fragment>
  );
};

DocumentDetail.propTypes = {
  data: PropTypes.object,
};

export default DocumentDetail;

export const query = graphql`
  query($code: String!, $type: String!) {
    notesJson(type: { eq: $type }, code: { eq: $code }) {
      id
      link
      professor
      semester
      type
      code
      courseTitle
      classAvg
      classSize
      credits
      distribution
    }
  }
`;
