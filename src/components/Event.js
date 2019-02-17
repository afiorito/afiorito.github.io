import React from 'react'

import './Event.scss'

const Event = ({ title, children }) => {
  return (
    <div className="Event">
      <div className="event-container">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
    )
}

export default Event