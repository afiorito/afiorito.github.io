import { picks } from 'assets';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { textLinkStyle } from 'styles';
import tw from 'twin.macro';

const PicksImg = tw.img`bg-white rounded p-0.5 h-5 w-5`;

export const Footer = () => (
  <footer>
    <section>
      <OutboundLink href="https://apps.apple.com/us/app/picks-random-generator/id1536305926">
        <div tw="bg-picks flex justify-center items-center gap-x-4 p-3 text-gray-100">
          <PicksImg src={picks} alt="Picks Logo" />
          <span>
            Check Out My App – <span tw="font-bold">Picks</span>
          </span>
          <PicksImg src={picks} alt="Picks Logo" />
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
      <div tw="text-gray-600 dark:text-gray-300 p-1">© Anthony 2015-{new Date().getFullYear()}</div>
    </section>
  </footer>
);
