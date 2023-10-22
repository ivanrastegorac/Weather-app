import React from 'react';
import { PageLayout } from './styled';
import Header from './ui/header/Header';
import WeatherPage from './weather/WeatherPage';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <PageLayout>
    <Header title="title" />
    {children}
  </PageLayout>
);
