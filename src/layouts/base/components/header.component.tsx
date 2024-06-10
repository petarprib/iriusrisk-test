import type { Dispatch, SetStateAction } from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/base-layout.scss';

type HeaderProps = {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setIsSidebarOpen }: HeaderProps) => {
  const handleOpenSidebar = () => setIsSidebarOpen(true);

  return (
    <header className='header'>
      <div className='header__menu-and-logo'>
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleOpenSidebar}
          onKeyDown={(event) => event.key === 'Enter' && handleOpenSidebar()}
          className='header__menu-and-logo__menu'
          tabIndex={0}
          role='button'
        />
        <h2>Imperial destroyers center</h2>
      </div>
    </header>
  );
};

export default Header;
