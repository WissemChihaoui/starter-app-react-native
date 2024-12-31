import React from 'react';
import AppNavigator from './navigation/AppNavigator';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <AppNavigator />
      {children}
    </>
  );
};

export default Layout;
