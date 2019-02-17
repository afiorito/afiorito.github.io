import React from "react"
import { Link } from 'gatsby'

import SEO from "../components/seo"
import Event from '../components/Event'

const NotFoundPage = () => (
    <React.Fragment>
      <SEO title="404 – Page Not Found" />
      <Event title="Page Not Found">
        <p>Looks like you ended up at a dead-end. Go back to the <Link to="/">main page</Link></p>
      </Event>
    </React.Fragment>
)

export default NotFoundPage
