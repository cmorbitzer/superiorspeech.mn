import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
  description?: string;
}

export default ({ title, description }: Props) => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    title={title}
    titleTemplate="%s - Superior Speech Therapy"
    meta={[
      {
        name: 'description',
        content: description ?? '',
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description ?? '',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description ?? '',
      },
    ]}
  />
);
