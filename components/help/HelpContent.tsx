import React, { useState } from 'react';
import { SiteWrapper } from '../common/SiteWrapper';
import { HelpAccordions } from './accordions/HelpAccordions';
import { HelpHeader } from './header/HelpHeader';

export const HelpContent: React.FC = () => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const onSearchInputChange = (val: string) => setSearchInputValue(val);

  return (
    <div>
      <SiteWrapper>
        <HelpHeader searchInputValue={searchInputValue} onSearchInputChange={onSearchInputChange} />
        <HelpAccordions searchInputValue={searchInputValue} />
      </SiteWrapper>
    </div>
  );
};
