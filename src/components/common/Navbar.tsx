import { logo } from 'assets';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { Link, PageProps } from 'gatsby';
import { ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { AppContextValue, NavLink } from 'types';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from 'components/common';
import { AppContext } from 'utilities/context';
import { Theme } from 'utilities/theme';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const NavContainer = styled.div<{
  isOpen: boolean;
}>(({ isOpen }) => [
  isOpen ? tw`fixed left-0 right-0` : tw`static`,
  tw`container flex flex-1 justify-between items-center p-4 pt-3 pt-3 z-50`,
]);

const Menu = tw.ul`text-xl space-x-16 hidden md:flex`;

const MobileMenu = styled.ul<{
  isOpen: boolean;
}>(({ isOpen }) => [
  tw`bg-gray-200 dark:bg-gray-800`,
  tw`fixed inset-0`,
  tw`text-4xl`,
  tw`flex flex-col justify-center items-center`,
  tw`space-y-16`,
  tw`md:hidden`,
  tw`transform transition duration-300 ease-in-out`,
  isOpen ? tw`opacity-100` : tw`-translate-y-1/2 opacity-0 pointer-events-none`,
]);

const MenuItem = styled.li<{
  isActive: boolean;
}>(({ isActive }) => [
  tw`font-medium hover:text-gray-900 transition duration-200 dark:hover:text-white`,
  isActive ? tw`text-gray-900 dark:text-white` : tw`text-gray-600 dark:text-gray-400`,
]);

interface NavbarProps {
  brand?: ReactNode;
  links: NavLink[];
  location: PageProps['location'];
}

const iconStyle = tw`fill-current text-gray-700 dark:text-gray-200`;

export const Navbar = ({ brand, links, location }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext<AppContextValue>(AppContext);

  const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const items = useMemo(
    () =>
      links.map((link) => (
        <MenuItem
          key={link.pathname}
          isActive={link.pathname === location.pathname}
          onClick={toggleOpen}
        >
          {link.pathname.startsWith('/') ? (
            <Link to={link.pathname}>{link.title}</Link>
          ) : (
            <OutboundLink href={link.pathname}>{link.title}</OutboundLink>
          )}
        </MenuItem>
      )),
    [links, toggleOpen],
  );

  return (
    <nav tw="h-16">
      <NavContainer isOpen={isOpen}>
        <Link tw="z-50" to={brand ? location.pathname : '/'} onClick={() => setIsOpen(false)}>
          {brand ? brand : <img tw="h-10 w-10" src={logo} alt="Anthony Fiorito Logo" />}
        </Link>
        <div tw="flex flex-row-reverse items-center md:flex-row">
          <button tw="h-10 w-10 z-50 md:hidden" onClick={toggleOpen}>
            {isOpen ? <CloseIcon css={iconStyle} /> : <MenuIcon css={iconStyle} />}
          </button>
          <Menu>{items}</Menu>
          <button tw="mr-4 z-50 md:m-0 md:ml-16" onClick={() => setTheme?.((theme + 1) % 2)}>
            {theme === Theme.Light ? (
              <SunIcon css={iconStyle} tw="h-6 w-6" />
            ) : (
              <MoonIcon css={iconStyle} tw="h-6 w-6" />
            )}
          </button>
        </div>
        <MobileMenu isOpen={isOpen}>{items}</MobileMenu>
      </NavContainer>
    </nav>
  );
};
