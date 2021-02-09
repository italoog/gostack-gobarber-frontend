import React from 'react';

import { Container } from './styles';

interface TootipProos {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TootipProos> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
