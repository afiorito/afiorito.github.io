import { Page } from 'components/common';
import { PageProps } from 'gatsby';
import 'twin.macro';

const NotesPage = (props: PageProps) => {
  return (
    <Page
      title="Anthony's Notes"
      description="A collection of notes for Concordia Engineering courses (ENGR, COEN, ELEC, COMP) I took as a Computer Engineering student."
      {...props}
    >
      <main tw="container"></main>
    </Page>
  );
};

export default NotesPage;
