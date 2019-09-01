
/* IMPORT */

import * as React from 'react';
import Link from 'next/link';

/* BUTTON */

const Button = ({ className, target, title }: { className?: string, target: string, title: string }) => (
  <Link href={`/${target}`}>
    <a className={`button ${target} ${className || ''}`}>
      <img src={`/static/images/logos/${target}.png`} alt={`${title}'s logo`} />
      <label>{title}</label>
    </a>
  </Link>
);

/* EXPORT */

export default Button;
