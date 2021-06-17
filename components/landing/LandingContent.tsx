import React from 'react';
import { LandingHeader } from './header/LandingHeader';
import './LandingContent.module.scss';
import { LayoutSection } from './layout/LayoutSection';

export const LandingContent = () => {
  return (
    <div>
      <LandingHeader />
      <div>
        <LayoutSection />
      </div>
    </div>
  );
};
