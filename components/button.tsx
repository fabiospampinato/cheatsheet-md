
/* IMPORT */

import * as React from 'react';

/* BUTTON */

const Button = ({ className, target, title }: { className?: string, target: string, title: string }) => (
  <a className={`button ${target} ${className || ''}`} href={`/${target}.pdf`} title={`${title}'s cheatsheet`}>
    <img src={`/static/images/logos/${target}.png`} alt={`${title}'s logo`} width="128" height="128" />
    <label>{title}</label>
  </a>
);

/* EXPORT */

export default Button;
