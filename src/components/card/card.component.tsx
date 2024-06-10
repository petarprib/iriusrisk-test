import type { ReactNode } from 'react';

import './styles/card.scss';

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <article className='card'>{children}</article>;
};

export default Card;
