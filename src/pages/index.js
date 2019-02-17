import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Event from '../components/Event'

import '../styles/layout.scss'
import '../styles/responsive.scss'

const HomePage = () => (
  <main className="HomePage">
    <SEO 
      title="Home" 
      keywords={[`personal website`, `blog`, `technology`]} />
    <Event title="Coming Soon.">
      <p>Check out my handwritten notes: <Link to="/notes">here</Link></p>
    </Event>
  </main>
)

export default HomePage
