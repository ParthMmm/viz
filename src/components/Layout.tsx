import React, { ReactNode } from 'react';
import Navbar from './Navbar';

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return <div>{children}</div>;
}

export default Layout;
