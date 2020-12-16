import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default ({ children }: React.PropsWithChildren<{}>) => (
  <>
    <Header />

    <main className="mt-16 sm:mt-24 lg:mt-32">{children}</main>

    <Footer />
  </>
);
