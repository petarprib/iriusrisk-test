import type { Dispatch, SetStateAction } from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { navigationList } from '../../../constants';
import '../styles/base-layout.scss';

type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? `sidebar--open` : `sidebar--closed`}`}
      role='menu'
    >
      <div className='sidebar__top'>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={handleCloseSidebar}
          onKeyDown={(event) => event.key === 'Enter' && handleCloseSidebar()}
          className='sidebar__top__close'
          tabIndex={0}
          role='button'
        />
      </div>
      <ul className='sidebar__main'>
        {navigationList.map((view) => (
          <li key={view.value} className='sidebar__main__navigation'>
            <Link to={`/${view.value}`} role='menuitem'>
              {view.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
