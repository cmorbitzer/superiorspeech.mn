import React from 'react';
import ChatIcon from '../icons/chat.svg';

export interface ServicesListItemProps {
  title: string;
  description: string;
}

export default ({ title, description }: ServicesListItemProps) => (
  <div className="flex">
    <ChatIcon
      className="flex-shrink-0 h-6 w-6 text-gray-400"
      aria-hidden="true"
    />

    <div className="ml-3">
      <dt className="text-lg leading-6 font-medium text-gray-900">{title}</dt>
      <dd className="mt-2 text-base text-gray-500">{description}</dd>
    </div>
  </div>
);
