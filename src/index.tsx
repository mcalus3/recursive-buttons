import * as React from 'react';
import { RecursiveButton } from './RecursiveButton';

export type RecursiveButtonsParams = {
  touchEnabled?: boolean;
  hoverMode?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const RecursiveButtons: React.FC<RecursiveButtonsParams> = ({
  hoverMode = false,
  touchEnabled = true,
  className,
  style,
}) => {
  const onTouch =
    touchEnabled && hoverMode
      ? (e: React.TouchEvent) => {
          const onTouchMove = (moveEvent: any) => {
            var currentElementTouched = document.elementFromPoint(
              moveEvent.touches[0].pageX,
              moveEvent.touches[0].pageY
            );
            currentElementTouched?.dispatchEvent(
              new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
              })
            );
          };
          const onTouchEnd = (endEvent: any) => {
            endEvent.target.removeEventListener('touchmove', onTouchMove);
            endEvent.target.removeEventListener('touchend', onTouchEnd);
          };
          e.target.addEventListener('touchmove', onTouchMove);
          e.target.addEventListener('touchend', onTouchEnd);
        }
      : undefined;

  return (
    <div
      className={className}
      style={{ ...style, display: 'flex', height: '100%' }}
      onTouchStart={onTouch}
    >
      <RecursiveButton first hover={hoverMode} />
    </div>
  );
};
