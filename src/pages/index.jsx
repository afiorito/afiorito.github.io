import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import SEO from '../components/seo';
import './index.scss';

import profileImg from '../images/profile.jpg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

import '../styles/layout.scss';
import '../styles/responsive.scss';

const HomePage = () => (
  <main className="HomePage">
    <SEO title="Home" keywords={[`personal website`, `blog`, `technology`]} />
    <section className="header__section">
      <img className="profile__img" src={profileImg} />
      <h1 className="name__h">Anthony</h1>
      <p className="tag__p">– I create things –</p>
      <div className="external__div">
        <OutboundLink href="https://github.com/afiorito">
          <img src={github} />
        </OutboundLink>
        <OutboundLink href="https://www.linkedin.com/in/anthonyfiorito">
          <img src={linkedin} />
        </OutboundLink>
      </div>
      <p>
        <Link to="/contact" state={{ referred: true }}>
          Contact
        </Link>{' '}
        | <Link to="/notes">Notes</Link>
      </p>
    </section>
  </main>
);

export default HomePage;
