import { Button, Input, Page, TextArea } from 'components/common';
import { Link, PageProps } from 'gatsby';
import { ChangeEvent, FormEvent, Fragment, ReactNode, useState } from 'react';
import { textLinkStyle } from 'styles';
import tw from 'twin.macro';
import { urlEncode } from 'utilities/url-encode';

const labelStyle = tw`text-gray-600 dark:text-gray-300`;
const inputContainerStyle = tw`space-y-1`;

interface ResultProps {
  head: string;
  body: ReactNode;
}

const Result = ({ head, body }: ResultProps) => (
  <main tw="text-gray-900 dark:text-white text-center pt-32 space-y-4">
    <h1 tw="text-3xl font-medium">{head}</h1>
    <p>{body}</p>
  </main>
);

const ContactPage = (props: PageProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch(
      'https://xtuegxcusb.execute-api.us-east-1.amazonaws.com/dev/contact',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncode(form),
      },
    );

    setSuccess(response.status === 200);
    setIsSubmitting(false);
  };

  const main = (
    <main tw="container p-4 pt-16 lg:pr-32 lg:pl-32 space-y-4">
      <h1 tw="text-3xl text-gray-800 dark:text-white">Get In Touch</h1>
      <p tw="text-gray-900 dark:text-white">
        Hey! Something wrong with the website? Are there missing/broken notes? Just want to get in
        touch? Use this form to leave a message here, I&#39;ll try to get back to you as soon as
        possible.
      </p>
      <form tw="space-y-6" onSubmit={handleSubmit}>
        <div css={inputContainerStyle}>
          <label css={labelStyle}>Name</label>
          <Input
            name="name"
            onChange={onFieldChange}
            placeholder="Something like you to be called by"
            required
            type="text"
          />
        </div>
        <div css={inputContainerStyle}>
          <label css={labelStyle}>Email</label>
          <Input
            name="email"
            onChange={onFieldChange}
            placeholder="An email you'd like me to send my reply to"
            required
            type="email"
          />
        </div>
        <div css={inputContainerStyle}>
          <label css={labelStyle}>Message</label>
          <TextArea
            name="message"
            onChange={onFieldChange}
            placeholder="Something you'd like to say"
            required
            tw="h-32"
          />
        </div>
        <Button tw="w-full" disabled={isSubmitting} type="submit">
          Send
        </Button>
      </form>
    </main>
  );

  return (
    <Page
      links={[
        { title: 'Home', pathname: '/' },
        { title: 'Contact', pathname: '/contact' },
        { title: 'Picks', pathname: 'https://picks.electriapp.com/' },
        { title: 'Notes', pathname: '/notes' },
      ]}
      keywords={['contact', 'email']}
      title="Contact"
      {...props}
    >
      {success === true && (
        <Result
          head="Thank you"
          body={
            <Fragment>
              Your message has been sent. Click{' '}
              {
                <Link css={textLinkStyle} to="/">
                  here
                </Link>
              }{' '}
              to go back to the home page.
            </Fragment>
          }
        />
      )}
      {success === false && (
        <Result
          head="Uh oh..."
          body={
            <Fragment>
              Your message could not be sent. Click{' '}
              <Link css={textLinkStyle} to="/">
                here
              </Link>{' '}
              to go back to the main page.
            </Fragment>
          }
        />
      )}
      {success === null && main}
    </Page>
  );
};

export default ContactPage;
