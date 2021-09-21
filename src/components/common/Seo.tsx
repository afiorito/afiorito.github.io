import { graphql, useStaticQuery } from 'gatsby';
import { useContext } from 'react';
import Helmet from 'react-helmet';
import { SiteMetadata } from 'types';
import { AppContext } from 'utilities/context';
import { useLocation } from '@reach/router';

interface SeoProps {
  description?: string;
  keywords?: string[];
  image?: string;
  lang?: string;
  title: string;
}

export const Seo = ({ description, keywords, lang = 'en', title }: SeoProps) => {
  const { pathname } = useLocation();
  const {
    description: defaultDescription,
    twitterUsername,
    url,
  } = useStaticQuery<SiteMetadata>(query);

  const { theme } = useContext(AppContext);

  const metaDescription = defaultDescription ?? description;
  return (
    <Helmet
      htmlAttributes={{ class: ['dark', 'light'][theme], lang }}
      title={title}
      meta={[
        { name: 'description', content: metaDescription },
        { property: 'og:description', content: metaDescription },
        { property: 'og:image', content: '' },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${url}${pathname}` },
        { property: 'twitter:creator', content: twitterUsername },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: metaDescription },
        { property: 'twitter:image', content: '' },
      ].concat(keywords?.length ? { property: 'keywords', content: keywords.join(', ') } : [])}
    />
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        title
        twitterUsername
        url
      }
    }
  }
`;
