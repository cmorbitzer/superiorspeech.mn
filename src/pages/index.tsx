import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ServicesList from '../components/ServicesList';
import TestimonialBanner from '../components/TestimonialBanner';

export default () => {
  const images = useStaticQuery(graphql`
    query {
      briann: file(relativePath: { eq: "briann.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      briannWithClient1: file(
        relativePath: { eq: "briann-with-client-1.jpg" }
      ) {
        childImageSharp {
          fixed(width: 256, height: 256) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      briannWithClient1Xl: file(
        relativePath: { eq: "briann-with-client-1.jpg" }
      ) {
        childImageSharp {
          fixed(width: 320, height: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      session1: file(relativePath: { eq: "speech-session-1.jpg" }) {
        childImageSharp {
          fixed(width: 256, height: 256) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      session1Xl: file(relativePath: { eq: "speech-session-1.jpg" }) {
        childImageSharp {
          fixed(width: 320, height: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const services = [
    { title: 'Articulation', description: '' },
    { title: 'Stuttering', description: '' },
    { title: 'Cluttering', description: '' },
    { title: 'Accent Modification', description: '' },
    { title: 'Lisps', description: '' },
    { title: 'Language Learning', description: '' },
    { title: 'Apraxia', description: '' },
    { title: 'Aphasia', description: '' },
  ];

  return (
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
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <Img
                fluid={images.briann.childImageSharp.fluid}
                className="w-full"
                alt="Briann Morbitzer"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
          <TestimonialBanner
            imgData={images}
            imgKey="session1"
            imgAlt="Speech therapy session"
            quote="My son looked forward to his speech therapy sessions.
                    We saw tremendous growth in his speech development under
                    Briann's direction. Today I no longer have concerns."
            cite="Amy, mother and physician"
          />
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
              Client-Driven Therapy
            </h2>

            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              Treatment Services
            </p>

            <p className="mt-4 text-lg text-gray-500">
              We treat most speech and language disorders, including stuttering
              and other disfluency conditions. All treatment works towards the
              client's goals and desired outcomes.
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

          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <ServicesList services={services} />
          </div>
        </div>
      </section>

      <section>
        <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
          <TestimonialBanner
            imgData={images}
            imgKey="briannWithClient1"
            imgAlt="Briann with client"
            quote="She sees beyond the mere speech remediation to
                    communication as a whole. It is apparent she values
                    communication when she herself graciously connects with
                    people of all ages and diversities."
            cite="Jen, mother"
            align="right"
          />
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">A better way to send money.</h2>
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Adults and children
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Private and individualized
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  In-home or virtual
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </section>
    </Layout>
  );
};
