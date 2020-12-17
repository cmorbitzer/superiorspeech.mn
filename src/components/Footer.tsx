import React from 'react';
import FacebookIcon from '../icons/facebook.svg';
import logo from '../images/superior_speech_therapy-logo.png';

export default () => (
  <footer className="bg-gray-800" aria-labelledby="footerHeading">
    <h2 id="footerHeading" className="sr-only">
      Footer
    </h2>

    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-8 xl:col-span-1">
          <img src={logo} className="h-10" alt="Superior Speech Therapy logo" />

          <p className="text-gray-300 text-base">
            Superior Speech Therapy treats adults and children for most speech
            and fluency disorders, including stuttering and apraxia. Briann
            Morbitzer is an ASHA certified speech-language pathologist and
            licensed Minnesota speech therapist in the Twin Cities of Saint Paul
            and Minneapolis.
          </p>

          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/Superior-Speech-Therapy-LLC-489752681794078"
              className="text-gray-400 hover:text-gray-300"
              target="_blank"
            >
              <span className="sr-only">Facebook</span>
              <FacebookIcon className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <p className="text-base text-gray-400 xl:text-center">
          <span className="inline-block">
            &copy; {new Date().getFullYear()} Superior Speech Therapy, LLC.
          </span>

          <span className="inline-block">All rights reserved.</span>
        </p>
      </div>
    </div>
  </footer>
);
