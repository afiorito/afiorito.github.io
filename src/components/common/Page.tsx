import { Navbar, Seo } from 'components/common';
import { PageProps as GatsbyPageProps } from 'gatsby';
import { Fragment, PropsWithChildren, ReactNode } from 'react';
import tw, { GlobalStyles } from 'twin.macro';
import { NavLink } from 'types';
import { Global } from '@emotion/react';

interface PageProps {
  brand?: ReactNode;
  description?: string;
  links?: NavLink[];
  location: GatsbyPageProps['location'];
  image?: string;
  keywords?: string[];
  title: string;
}

export const Page = ({
  brand,
  children,
  links = [
    { title: 'Home', pathname: '/' },
    { title: 'Contact', pathname: '/contact/' },
    { title: 'Notes', pathname: '/notes/' },
  ],
  location,
  ...seoProps
}: PropsWithChildren<PageProps>) => {
  return (
    <Fragment>
      <Seo {...seoProps} />
      <Global
        styles={{
          body: tw`transition duration-200 dark:bg-gray-900`,
        }}
      />
      <GlobalStyles />
      <Navbar brand={brand} links={links} location={location} />
      {children}
    </Fragment>
  );
};
