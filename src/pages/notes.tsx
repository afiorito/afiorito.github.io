import { Input, Page, SearchIcon } from 'components/common';
import { graphql, Link, PageProps } from 'gatsby';
import tw from 'twin.macro';
import { NodesQuery, Note } from 'types';
import { note as noteAsset, package as packageAsset, picks } from 'assets';
import { useMemo, useState } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { textLinkStyle } from 'styles';
import { NotesBranding } from 'components/notes';

interface DocumentProps {
  note: Note;
}

const Document = ({ note }: DocumentProps) => (
  <div tw="flex flex-col items-center mt-8 ml-4 mr-4">
    <img src={note.type === 'note' ? noteAsset : packageAsset} tw="shadow w-32 md:w-36" />
    <div tw="flex flex-col items-center pt-2">
      <div tw="font-medium text-gray-800 dark:text-white md:text-xl">{note.code}</div>
      <div tw="text-sm text-gray-600 dark:text-gray-300 md:text-lg">{note.professor}</div>
      <div tw="text-sm text-gray-600 dark:text-gray-300 italic md:text-lg">{note.semester}</div>
    </div>
  </div>
);

const PicksImg = tw.img`bg-white rounded p-0.5 h-5 w-5`;

const NotesPage = ({ data, ...props }: PageProps<NodesQuery<'allNotesJson', Note>>) => {
  const [filter, setFilter] = useState('');

  const notes = useMemo(() => {
    return data.allNotesJson.nodes.filter(
      (node) =>
        filter === '' ||
        node.code.toLowerCase().includes(filter.toLowerCase()) ||
        node.courseTitle.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [data, filter]);

  return (
    <Page
      brand={<NotesBranding />}
      links={[
        { title: 'Home', pathname: '/' },
        { title: 'Contact', pathname: '/contact' },
        { title: 'Picks', pathname: 'https://picks.electriapp.com/' },
        { title: 'Notes', pathname: '/notes' },
      ]}
      title="Anthony's Notes"
      description="A collection of notes for Concordia Engineering courses (ENGR, COEN, ELEC, COMP) I took as a Computer Engineering student."
      {...props}
    >
      <main tw="container p-4 pt-8">
        <header tw="flex justify-between gap-x-4 pt-4 pb-4">
          <h1 tw="text-3xl text-gray-800 dark:text-white">Documents</h1>
          <Input
            name="filter"
            icon={<SearchIcon tw="fill-current text-gray-600 dark:text-gray-300" />}
            placeholder="Find a document..."
            onChange={(e) => setFilter(e.target.value)}
            type="text"
            value={filter}
          />
        </header>
        <div tw="flex justify-around flex-wrap">
          {notes.length > 0 ? (
            notes.map((note) => (
              <Link key={note.id} to={`/notes/${note.code.replace(/\s+/g, '')}/${note.type}`}>
                <Document key={note.id} note={note} />
              </Link>
            ))
          ) : (
            <div tw="flex items-center p-16 h-96 text-xl text-gray-800 dark:text-white">
              No documents found.
            </div>
          )}
        </div>
      </main>
      <footer>
        <section>
          <OutboundLink href="https://apps.apple.com/us/app/picks-random-generator/id1536305926">
            <div tw="bg-picks flex justify-center items-center gap-x-4 p-3 text-gray-100">
              <PicksImg src={picks} alt="Picks Logo" />
              <span>
                Check Out My App – <span tw="font-bold">Picks</span>
              </span>
              <PicksImg className="app-icon" src={picks} alt="Picks Logo" />
            </div>
          </OutboundLink>
        </section>
        <section tw="flex flex-col text-sm justify-center items-center pt-4 pb-8">
          <div tw="flex justify-center text-sm text-gray-800 dark:text-white">
            Found an issue? Report it&nbsp;
            <Link css={textLinkStyle} to="/contact">
              here
            </Link>
            .
          </div>
          <div tw="text-gray-600 dark:text-gray-300 p-1">
            © Anthony 2015-{new Date().getFullYear()}
          </div>
        </section>
      </footer>
    </Page>
  );
};

export default NotesPage;

export const query = graphql`
  {
    allNotesJson {
      nodes {
        classAvg
        classSize
        code
        courseTitle
        credits
        distribution
        grade
        id
        link
        professor
        semester
        type
      }
    }
  }
`;
