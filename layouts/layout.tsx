
/* IMPORT */

import '@static/scss/index.scss';

import * as React from 'react';
import {DefaultSeo, NextSeo, NextSeoProps} from 'next-seo';

/* LAYOUT */

const Layout = ({ className, seo, children }: { className?: string, seo?: NextSeoProps, children: React.ReactNode }) => (
  <div className={`layout ${className || ''}`}>
    <DefaultSeo title="Cheatsheet.md" titleTemplate="%s | Cheatsheet.md" description="Markdown cheatsheets for popular flavors like CommonMark, GitHub Flavored Markdown, Hacker News and Notable." />
    <NextSeo {...seo} />
    {children}
  </div>
);

/* EXPORT */

export default Layout;
