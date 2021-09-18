import { Navbar, Seo } from 'components/common';
import { PageProps as GatsbyPageProps } from 'gatsby';
import { Fragment, PropsWithChildren } from 'react';
import tw, { GlobalStyles } from 'twin.macro';
import { NavLink } from 'types';
import { Global } from '@emotion/react';

interface PageProps {
  description?: string;
  links?: NavLink[];
  location: GatsbyPageProps['location'];
  title: string;
}

export const Page = ({
  children,
  links = [
    { title: 'Home', pathname: '/' },
    { title: 'Contact', pathname: '/contact' },
    { title: 'Notes', pathname: '/notes' },
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
      <Navbar links={links} location={location} />
      {children}
    </Fragment>
  );
};
