import { Slider } from '@material-ui/core';
import React from 'react';

const marks = [
  {
    value: 10,
    label: '10'
  },
  {
    value: 12,
    label: '12'
  },
  {
    value: 14,
    label: '14'
  },
  {
    value: 16,
    label: '16'
  }
];

type Props = {
  handleFontChange: (val: number) => void;
  value?: number;
};

export const FontSizeSlider: React.FC<Props> = ({ value, handleFontChange }) => {
  return (
    <Slider
      value={value ?? 14}
      aria-labelledby='discrete-slider-custom'
      step={1}
      onChange={(_, val) => handleFontChange(val as number)}
      valueLabelDisplay='auto'
      marks={marks}
      max={16}
      min={10}
    />
  );
};
