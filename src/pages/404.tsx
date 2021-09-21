import { Page } from 'components/common';
import { PageProps } from 'gatsby';
import 'twin.macro';

const NotFoundPage = (props: PageProps) => {
  return (
    <Page title="404 Error" {...props}>
      <main tw="fixed inset-0 flex justify-center items-center text-3xl text-gray-800 dark:text-white">
        Page Not Found
      </main>
    </Page>
  );
};

export default NotFoundPage;
