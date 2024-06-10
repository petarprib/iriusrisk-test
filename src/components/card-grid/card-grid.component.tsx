import type { ReactNode } from 'react';

import './styles/card-grid.scss';

type CardGridProps = {
  children: ReactNode;
};

const CardGrid = ({ children }: CardGridProps) => {
  return <div className='card-grid'>{children}</div>;
};

export default CardGrid;
