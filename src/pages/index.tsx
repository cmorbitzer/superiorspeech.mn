import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

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
    }
  `);

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
    </Layout>
  );
};
