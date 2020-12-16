import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ServicesList from '../components/ServicesList';

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

  const session1ImgSrc = [
    images.session1.childImageSharp.fixed,
    {
      ...images.session1Xl.childImageSharp.fixed,
      media: `(min-width: 1280px)`,
    },
  ];

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
          <div className="relative lg:flex lg:items-center">
            <div className="hidden lg:block lg:flex-shrink-0">
              <Img
                className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                fixed={session1ImgSrc}
                alt="Speech therapy session"
              />
            </div>

            <div className="relative lg:ml-10">
              <blockquote className="relative">
                <div className="text-2xl leading-9 font-medium text-gray-900">
                  <p>
                    &ldquo;My son looked forward to his speech therapy sessions.
                    We saw tremendous growth in his speech development under
                    Briann's direction. Today I no longer have concerns.&rdquo;
                  </p>
                </div>

                <footer className="mt-8">
                  <div className="flex">
                    <div className="ml-4 lg:ml-0">
                      <div className="text-base font-medium text-gray-500">
                        Amy, mother and physician
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
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
    </Layout>
  );
};
