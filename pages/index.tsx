
/* IMPORT */

import * as React from 'react';
import Button from '@components/button';
import Hero from '@components/hero';
import Wave from '@components/wave';
import Layout from '@layouts/layout';

/* INDEX */

const Index = () => (
  <Layout seo={{ title: 'Cheatsheet.md', titleTemplate: '%s' }}>
    <Hero />
    <Wave />
    <div className="buttons">
      <Button className="disabled" target="commonmark" title="CommonMark" />
      <Button className="disabled" target="github" title="Github" />
      <Button className="disabled" target="hackernews" title="Hacker News" />
      <Button className="disabled" target="reddit" title="Reddit" />
      <Button target="notable" title="Notable" />
    </div>
  </Layout>
);

/* EXPORT */

export default Index;
