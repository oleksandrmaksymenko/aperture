import React from 'react';
import { JSXFunction } from '../global.types';
import classnames from 'classnames';

import './button.css';

type ButtonPropsType = {
  children: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'error';
  size?: 'small' | 'medium' | 'large';
  onClick?: (e: React.ReactHTMLElement<HTMLButtonElement>) => void;
};

const cls = 'aperture-button';

export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}: ButtonPropsType) => {
  const mode = classnames(cls, {
    [`${cls}--primary`]: variant === 'primary',
    [`${cls}--secondary`]: variant === 'secondary',
    [`${cls}--tertiary`]: variant === 'tertiary',
    [`${cls}--quaternary`]: variant === 'quaternary',
    [`${cls}--error`]: variant === 'error',

    [`${cls}--small`]: size === 'small',
    [`${cls}--medium`]: size === 'medium',
    [`${cls}--large`]: size === 'large'
  });

  return (
    <button type="button" className={mode} {...props}>
      {children}
    </button>
  );
};
