import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import SEO from '../components/seo';
import './index.scss';

import profileImg from '../images/profile.jpg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';
import picksLogo from '../images/picks-logo.svg';

import '../styles/layout.scss';
import '../styles/responsive.scss';

const HomePage = () => (
  <main className="HomePage">
    <SEO title="Home" keywords={[`personal website`, `blog`, `technology`]} />
    <section className="header__section">
      <img className="profile__img" src={profileImg} />
      <h1 className="name__h">Anthony</h1>
      <p className="tag__p">Trying to do everything at the same time.</p>
      <div className="external__div">
        <OutboundLink href="https://github.com/afiorito">
          <img src={github} />
        </OutboundLink>
        <OutboundLink href="https://www.linkedin.com/in/anthonyfiorito">
          <img src={linkedin} />
        </OutboundLink>
        <OutboundLink href="https://twitter.com/ovoant">
          <img src={twitter} />
        </OutboundLink>
        <OutboundLink href="https://www.instagram.com/ovoant">
          <img src={instagram} />
        </OutboundLink>
      </div>
      <div className="app-link">
        <img className="app-icon" src={picksLogo} alt="Picks Logo" />
        <OutboundLink href="https://apps.apple.com/us/app/picks-random-generator/id1536305926">
          Check Out My App – Picks
        </OutboundLink>
      </div>
      <p className="links">
        <Link to="/contact" state={{ referred: true }}>
          Contact
        </Link>{' '}
        | <Link to="/notes">Notes</Link>
      </p>
    </section>
  </main>
);

export default HomePage;
