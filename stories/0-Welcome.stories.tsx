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

defaultButton.story = {
  name: 'default',
};

export const hover = () => (
  <div style={{ width: '200px', height: '100px' }}>
    <RecursiveButtons hoverMode />
  </div>
);

export const customText = () => {
  const [text, setText] = React.useState('some custom text');
  return (
    <>
      <input
        type="text"
        onChange={e => {
          setText(e.target.value);
        }}
        defaultValue={text}
      />
      <div style={{ width: '200px', height: '100px' }}>
        <RecursiveButtons text={text} />
      </div>
    </>
  );
};

customText.story = {
  name: 'custom text',
};
