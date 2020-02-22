import React from 'react';
import { RecursiveButtons } from '@';

export default {
  title: 'Components',
};

export const defaultButton = () => (
  <div style={{ width: '200px', height: '100px' }}>
    <RecursiveButtons />
  </div>
);

export const hover = () => (
  <div style={{ width: '200px', height: '100px' }}>
    <RecursiveButtons hoverMode />
  </div>
);

defaultButton.story = {
  name: 'default',
};
