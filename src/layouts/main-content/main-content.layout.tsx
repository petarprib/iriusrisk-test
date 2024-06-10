import type { ReactNode } from 'react';

import './styles/main-content-layout.scss';

type MainContentLayoutProps = {
  children: ReactNode;
  view: string;
};

const MainContentLayout = ({ children, view }: MainContentLayoutProps) => {
  return (
    <div className='main-content'>
      <h1 className='main-content__title'>{view}</h1>
      {children}
    </div>
  );
};

export default MainContentLayout;
