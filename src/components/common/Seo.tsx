import { graphql, useStaticQuery } from 'gatsby';
import { useContext } from 'react';
import Helmet from 'react-helmet';
import { SiteMetadata } from 'types';
import { AppContext } from 'utilities/context';

interface SeoProps {
  description?: string;
  lang?: string;
  title: string;
}

export const Seo = ({ description, lang = 'en', title }: SeoProps) => {
  const metadata = useStaticQuery<SiteMetadata>(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `);

  const { theme } = useContext(AppContext);

  return (
    <Helmet
      htmlAttributes={{ class: ['dark', 'light'][theme], lang }}
      title={title}
      meta={[{ name: 'description', content: metadata.description ?? description }]}
    />
  );
};
