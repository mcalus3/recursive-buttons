import React from 'react';
import classes from './RecursiveButton.module.css';

type Props = {
  first?: boolean;
  hover: boolean;
};

export const RecursiveButton: React.FC<Props> = ({ first, hover }) => {
  const [clicked, setClicked] = React.useState(false);

  const open = () => {
    setClicked(true);
  };

  return clicked ? (
    <div className={`${classes['f-column']} ${classes['f-grow']}`}>
      <div className={`${classes['d-flex']} ${classes['f-grow']}`}>
        <RecursiveButton hover={hover} />
        <RecursiveButton hover={hover} />
        <RecursiveButton hover={hover} />
      </div>
      <div className={`${classes['d-flex']} ${classes['f-grow']}`}>
        <RecursiveButton hover={hover} />
        <div className={`${classes['f-grow']}`}></div>
        <RecursiveButton hover={hover} />
      </div>
      <div className={`${classes['d-flex']} ${classes['f-grow']}`}>
        <RecursiveButton hover={hover} />
        <RecursiveButton hover={hover} />
        <RecursiveButton hover={hover} />
      </div>
    </div>
  ) : (
    <button
      className={`${classes['r-button']} ${classes['f-grow']}`}
      onClick={open}
      onMouseMove={hover ? open : undefined}
    >
      {first ? 'Click me!' : null}
    </button>
  );
};
