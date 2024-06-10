import type { ReactNode } from 'react';

import './styles/centralized-content-layout.scss';

const CentralizedContentLayout = ({ children }: { children: ReactNode }) => {
  return <div className='centralized-content-wrapper'>{children}</div>;
};

export default CentralizedContentLayout;
