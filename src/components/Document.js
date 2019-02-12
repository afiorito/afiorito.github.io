import React from "react"
import PropTypes from "prop-types"

import noteImage from '../images/note.svg'
import packageImage from '../images/package.svg'

import './Document.scss'

const Document = ({ note }) => {
  const imgSrc = note.type === 'note' ? noteImage : packageImage;

  return (
    <div className="Document">
      <img className="document__img" src={imgSrc} alt="Document" />
      <div className="document-code__div">{note.code}</div>
      <div className="document-prof__div">{note.professor}</div>
      <div className="document-sem__div">{note.semester}</div>
    </div>
  );
}

Document.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    code: PropTypes.string.isRequired,
    courseTitle: PropTypes.string,
    link: PropTypes.string.isRequired,
    semester: PropTypes.string.isRequired,
    professor: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })
}

export default Document