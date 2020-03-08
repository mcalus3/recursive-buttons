import React from 'react';
import { RecursiveButtons } from '@';

export default {
  title: 'Components',
};

export const RecursiveButton = () => {
  const [text, setText] = React.useState('some custom text');
  const [hover, setHover] = React.useState(false);
  const [touch, setTouch] = React.useState(true);
  return (
    <>
      <div style={{ width: '200px', height: '200px', marginBottom: '20px' }}>
        <RecursiveButtons text={text} hoverMode={hover} touchEnabled={touch} />
      </div>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          onChange={e => {
            setText(e.target.value);
          }}
          defaultValue={text}
        />
        <input
          type="checkbox"
          id="hover"
          name="hover"
          defaultChecked={hover}
          onClick={e => {
            setHover(!hover);
          }}
        />
        <label htmlFor="hover"> hoverMode</label>
        <input
          type="checkbox"
          id="touch"
          name="touch"
          defaultChecked={touch}
          onClick={e => {
            setTouch(!touch);
          }}
        />
        <label htmlFor="touch"> touchEnabled</label>
      </div>
    </>
  );
};
