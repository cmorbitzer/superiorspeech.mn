import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import logo from '../images/superior_speech_therapy-logo.png';

export default () => (
  <header className="pt-6">
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center flex-1">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img
            src={logo}
            className="h-8 w-auto sm:h-10"
            alt="Superior Speech Therapy logo"
          />

          <div className="hidden md:block md:ml-2 md:space-x-10">
            <h2 className="text-lg font-semibold font-serif text-gray-900 sm:text-xl sm:tracking-tight lg:text-2xl">
              Superior Speech Therapy
            </h2>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a
          href="#"
          className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Client Login
        </a>

        <AnchorLink
          to="/#contact"
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Contact
        </AnchorLink>
      </div>
    </nav>
  </header>
);
