import React from 'react';
import { PageLayout } from './styled';
import Header from './ui/header/Header';
import Footer from './ui/footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  // ToDo - add main container for logged routes
  <PageLayout>
    <Header title="Welcome to Weather Forecast" />
    {children}
    <Footer name="Ivan Rastegorac"/>
  </PageLayout>
);
