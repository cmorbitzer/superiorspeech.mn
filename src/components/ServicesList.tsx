import React from 'react';
import ServicesListItem, { ServicesListItemProps } from './ServicesListItem';

interface ServicesListProps {
  services: ServicesListItemProps[];
}

export default ({ services }: ServicesListProps) => (
  <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
    {services.map(service => (
      <ServicesListItem {...service} />
    ))}
  </dl>
);
