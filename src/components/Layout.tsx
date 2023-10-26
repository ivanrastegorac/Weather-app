import React from 'react';
import { PageLayout } from './styled';
import Header from './ui/header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <PageLayout>
    <Header title="Welcome to Weather Forecast" />
    {children}
  </PageLayout>
);
