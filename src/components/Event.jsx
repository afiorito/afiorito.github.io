import React from 'react';
import PropTypes from 'prop-types';

import './Event.scss';

const Event = ({ title, children }) => {
  return (
    <div className="Event">
      <div className="event-container">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
};

Event.defaultProps = {
  children: [],
};

Event.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Event;
