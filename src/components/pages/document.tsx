import { note as noteAsset, package as packageAsset } from 'assets';
import { Page } from 'components/common';
import { graphql, PageProps } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { ReactNode, useMemo } from 'react';
import { textLinkStyle } from 'styles';
import { GradeData, NodeQuery, Note } from 'types';
import 'twin.macro';
import { Footer, GradeDistribution, NotesBranding } from 'components/notes';

interface NotePropertyProps {
  name: string;
  value: ReactNode;
}

const NoteProperty = ({ name, value }: NotePropertyProps) => (
  <div>
    <h2 tw="text-2xl font-medium text-gray-900 dark:text-white">{name}</h2>
    <div tw="text-xl text-gray-600 dark:text-gray-300">{value}</div>
  </div>
);

const DocumentPage = ({ data, ...props }: PageProps<NodeQuery<'notesJson', Note>>) => {
  const note = data.notesJson;

  const distribution = useMemo<GradeData[]>(
    () =>
      note.distribution.map((num, i) => ({
        letter: [
          'A+',
          'A',
          'A-',
          'B+',
          'B',
          'B-',
          'C+',
          'C',
          'C-',
          'D+',
          'D',
          'D-',
          'F',
          'FNS',
          'R',
          'NR',
        ][i],
        count: num,
      })),
    [note],
  );

  return (
    <Page
      brand={<NotesBranding />}
      links={[
        { title: 'Home', pathname: '/' },
        { title: 'Contact', pathname: '/contact' },
        { title: 'Picks', pathname: 'https://picks.electriapp.com/' },
        { title: 'Notes', pathname: '/notes' },
      ]}
      title={`Anthony's ${note.code} Notes${note.type !== 'note' ? ' Package' : ''}`}
      description={`The ${note.type === 'note' ? 'notes' : 'cheat sheet'} I ${
        note.type === 'note' ? 'took' : 'made'
      } when studying ${note.courseTitle} (${note.code}) at Concordia University.`}
      keywords={[note.type, 'school', 'engineering', note.code, note.courseTitle, note.semester]}
      {...props}
    >
      <main tw="container flex flex-col items-center p-4 pt-8 gap-y-16 mb-16">
        <header tw="flex flex-col items-center gap-y-8">
          <img
            tw="w-48 shadow"
            src={note.type === 'note' ? noteAsset : packageAsset}
            alt={`${note.type}`}
          />
          <div tw="text-center">
            <h1 tw="text-3xl font-medium text-gray-800 dark:text-white">{note.courseTitle}</h1>
            <p tw="text-2xl text-gray-600 dark:text-gray-300">{note.code}</p>
          </div>
        </header>
        <section tw="flex flex-wrap gap-x-8 gap-y-8">
          <NoteProperty name="Professor" value={note.professor} />
          <NoteProperty name="Semester" value={note.semester}></NoteProperty>
          <NoteProperty name="Credits" value={note.credits.toFixed(2)}></NoteProperty>
          <NoteProperty name="Class Average" value={note.classAvg.toFixed(2)}></NoteProperty>
          <NoteProperty name="Class Size" value={note.classSize}></NoteProperty>
          <NoteProperty
            name="File Download"
            value={
              <OutboundLink
                css={textLinkStyle}
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/^[a-z0-9\-.]+/.exec(note.link.split('/').slice(-1)[0] ?? '')?.[0]}
              </OutboundLink>
            }
          ></NoteProperty>
        </section>
        <section tw="h-72 w-full">
          <h2 tw="text-2xl font-medium text-gray-900 dark:text-white">Distribution</h2>
          <GradeDistribution distribution={distribution} grade={note.grade} />
        </section>
      </main>
      <Footer />
    </Page>
  );
};

export default DocumentPage;

export const query = graphql`
  query ($code: String, $type: String) {
    notesJson(type: { eq: $type }, code: { eq: $code }) {
      id
      link
      professor
      semester
      type
      code
      courseTitle
      classAvg
      classSize
      credits
      distribution
      grade
    }
  }
`;
