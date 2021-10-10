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
    site: {
      siteMetadata: { author, description: defaultDescription, image, twitterUsername, url },
    },
  } = useStaticQuery<{ site: { siteMetadata: SiteMetadata } }>(query);

  const { theme } = useContext(AppContext);

  const metaDescription = description ?? defaultDescription;
  return (
    <Helmet
      htmlAttributes={{ class: ['dark', 'light'][theme], lang }}
      title={title}
      meta={[
        { name: 'author', content: author },
        { name: 'description', content: metaDescription },
        { property: 'og:description', content: metaDescription },
        { property: 'og:image', content: `${url}${image}` },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${url}${pathname}` },
        { property: 'twitter:creator', content: twitterUsername },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: metaDescription },
        { property: 'twitter:image', content: `${url}${image}` },
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
        image
        title
        twitterUsername
        url
      }
    }
  }
`;
