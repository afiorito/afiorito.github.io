import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import '../components/layout.scss';
import './index.scss';
import '../components/responsive.scss';

const HomePage = () => (
  <main className="HomePage">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="in-progress">
      <h1 className="coming-soon">Coming Soon.</h1>
      <p>Check out my handwritten notes: <Link to="/notes">here</Link></p>
    </div>
  </main>
)

export default HomePage
