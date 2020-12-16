import React from 'react';
import Header from './Header';

export default ({ children }: React.PropsWithChildren<{}>) => (
  <>
    <Header />
    {children}
  </>
);
