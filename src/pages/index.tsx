import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ServicesList from '../components/ServicesList';
import TestimonialBanner from '../components/TestimonialBanner';
import MailIcon from '../icons/mail.svg';
import PhoneIcon from '../icons/phone.svg';
import QuoteIcon from '../icons/quote.svg';

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

      clientArt1: file(relativePath: { eq: "client-art-1.jpg" }) {
        childImageSharp {
          fixed(width: 256, height: 256) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      clientArt1Xl: file(relativePath: { eq: "client-art-1.jpg" }) {
        childImageSharp {
          fixed(width: 320, height: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      lakeSuperiorCabin: file(relativePath: { eq: "lake-superior-cabin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
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
                <AnchorLink
                  to="/#contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Request a free consultation
                </AnchorLink>
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
                <AnchorLink
                  to="/#contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Request a free consultation
                </AnchorLink>
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

      <section>
        <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
          <TestimonialBanner
            imgData={images}
            imgKey="clientArt1"
            imgAlt="Clietn artwork"
            quote="An indication of how my children feel about Bri: without prompt, my daughter brings an
                original piece of artwork for Bri. Every. Single. Session."
            cite="John, father and teacher"
          />
        </div>
      </section>

      <section id="contact" className="relative bg-white mx-auto max-w-7xl">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Img
              fluid={images.lakeSuperiorCabin.childImageSharp.fluid}
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              alt="Lake Superior cabin"
            />
          </div>
        </div>

        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Let's talk
              </h2>

              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                I’d love to hear from you!
              </p>

              <dl className="mt-4 mb-4 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />

                    <span className="ml-3">
                      <a href="tel:+13202248243">(320) 224-8243</a>
                    </span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />

                    <span className="ml-3">
                      <a href="mailto:briann.slp@gmail.com">
                        briann.slp@gmail.com
                      </a>
                    </span>
                  </dd>
                </div>
              </dl>

              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                Or send me a message using the secure form below.
              </p>

              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                Questions? Request a free consultation.
              </p>

              <form
                method="POST"
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                data-netlify="true"
                name="contact"
              >
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="how_can_we_help"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How can I help you?
                    </label>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="how_can_we_help"
                      name="how_can_we_help"
                      aria-describedby="how_can_we_help_description"
                      className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="how_did_you_hear_about_us"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How did you hear about me?
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="how_did_you_hear_about_us"
                      id="how_did_you_hear_about_us"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>

              <p className="mt-3 text-sm text-gray-500">
                We care about the protection of your data.
                <br />
                All communication with Superior Speech Therapy is confidential.
                <br />
                Read our{' '}
                <a href="#" className="font-medium text-gray-900 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-800 mt-16 sm:mt-24 lg:mt-32">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
          <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-indigo-900 lg:pr-16">
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <QuoteIcon className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600" />

                <p className="relative">
                  The progress my children have made since starting with Bri has
                  been nothing less than amazing. My wife and Bri view Bri as a
                  magician.
                </p>
              </div>
            </blockquote>
          </div>
          <div className="py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <QuoteIcon className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600" />

                <p className="relative">
                  Bri gave me the tools I needed to come alongside my child. I
                  was amazed at her high level of education an expertise in the
                  field, her deep passion, and her commitment to the success of
                  her students.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
};
