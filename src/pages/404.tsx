import { Page } from 'components/common';
import { PageProps } from 'gatsby';

const NotFoundPage = (props: PageProps) => {
  return (
    <Page title="404 Error" {...props}>
      <main>Not Found</main>
    </Page>
  );
};

export default NotFoundPage;
