import {
  Button,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  Page,
  TwitterIcon,
} from 'components/common';
import { PageProps } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import tw from 'twin.macro';
import { graphic, picks } from 'assets';

const iconStyle = tw`fill-current text-gray-700 dark:text-gray-200`;

const IndexPage = (props: PageProps) => (
  <Page
    title="Anthony's Website"
    keywords={['personal-website', 'about', 'blog', 'technology']}
    {...props}
  >
    <main tw="container flex flex-col items-center p-4 md:flex-row-reverse md:justify-between md:pt-32 md:pb-32">
      <img src={graphic} tw="max-w-sm w-full p-4 sm:max-w-md lg:p-0 lg:max-w-max" alt="Computer" />
      <div tw="flex flex-col items-center space-y-12 md:items-start">
        <div tw="text-center md:text-left">
          <h1 tw="font-bold text-4xl text-gray-800 dark:text-white sm:text-6xl md:text-4xl lg:text-7xl">
            Hi I&#39;m Anthony
          </h1>
          <p tw="text-sm sm:text-xl pt-2 text-gray-800 dark:text-white md:text-base lg:text-xl">
            I like making things and solving problems.
          </p>
        </div>
        <div tw="space-y-4">
          <Button>
            <OutboundLink
              href="https://apps.apple.com/us/app/picks-random-generator/id1536305926"
              tw="flex gap-x-1.5 items-center"
            >
              Download my app
              <img tw="bg-white rounded p-0.5 w-5 h-5" src={picks} alt="Picks Logo" /> Picks
            </OutboundLink>
          </Button>
          <div tw="flex justify-center space-x-2 md:justify-start">
            <OutboundLink href="https://github.com/afiorito">
              <GithubIcon css={iconStyle} tw="h-6" />
            </OutboundLink>
            <OutboundLink href="https://www.linkedin.com/in/anthonyfiorito">
              <LinkedInIcon css={iconStyle} tw="h-6" />
            </OutboundLink>
            <OutboundLink href="https://twitter.com/ovoant">
              <TwitterIcon css={iconStyle} tw="h-6" />
            </OutboundLink>
            <OutboundLink href="https://www.instagram.com/ovoant">
              <InstagramIcon css={iconStyle} tw="h-6" />
            </OutboundLink>
          </div>
        </div>
      </div>
    </main>
  </Page>
);

export default IndexPage;
