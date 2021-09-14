import { Seo } from 'components/common';
import { Fragment, ReactNode } from 'react';

interface PageProps {
  title: string;
  children: ReactNode;
}

export const Page = ({ children, title }: PageProps) => (
  <Fragment>
    <Seo title={title} />
    {children}
  </Fragment>
);
