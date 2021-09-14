import Helmet from 'react-helmet';

interface SeoProps {
  lang?: string;
  title: string;
}

export const Seo = ({ lang = 'en', title }: SeoProps) => (
  <Helmet htmlAttributes={{ lang }} title={title} meta={[]} />
);
