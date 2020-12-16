import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/Layout';
// import Image from '../components/image';
import SEO from '../components/SEO';

export default () => (
  <Layout>
    <SEO title="Minnesota Stuttering and Articulation Treatment" />

    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
              Briann R. Morbitzer, M.S., CCC-SLP
            </span>

            <span className="mt-1 block text-4xl tracking-tight font-bold sm:text-5xl xl:text-6xl">
              <span className="block text-gray-900">Delivering</span>
              <span className="block text-indigo-600">
                effective communication
              </span>
            </span>
          </h1>

          <p className="mt-3 text-base font-semibold text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Therapy for all ages and communication goals
            <br />
            via in-home or virtual sessions.
          </p>

          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Briann Morbitzer is a licensed speech-language pathologist with
            special interest and experience in treating stuttering and fluency
            disorders.
          </p>

          <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Request a free consultation
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <svg
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
            width="640"
            height="784"
            fill="none"
            viewBox="0 0 640 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                x="118"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              y="72"
              width="640"
              height="640"
              className="text-gray-50"
              fill="currentColor"
            />
            <rect
              x="118"
              width="404"
              height="784"
              fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
            />
          </svg>
          <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <img
              className="w-full"
              src="https://images.squarespace-cdn.com/content/v1/5a2c04ac017db208ee05af32/1566872500928-YY4GOBTMICENAUEA4ONP/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_0190.jpg?format=2500w"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
