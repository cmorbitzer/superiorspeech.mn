import React from 'react';
import Img from 'gatsby-image';
import classNames from 'classnames';

interface TestimonialBannerProps {
  imgData: any;
  imgKey: string;
  imgAlt: string;
  quote: string;
  cite: string;
  align?: 'left' | 'right';
}

export default ({
  imgData,
  imgKey,
  imgAlt,
  quote,
  cite,
  align = 'left',
}: TestimonialBannerProps) => {
  const renderImg = () => (
    <div className="hidden lg:block lg:flex-shrink-0">
      <Img
        className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
        fixed={[
          imgData[imgKey].childImageSharp.fixed,
          {
            ...imgData[imgKey + 'Xl'].childImageSharp.fixed,
            media: `(min-width: 1280px)`,
          },
        ]}
        alt={imgAlt}
      />
    </div>
  );

  return (
    <div className="relative lg:flex lg:items-center">
      {align === 'left' && renderImg()}

      <div
        className={classNames([
          'relative',
          align === 'left' ? 'lg:ml-10' : 'lg:mr-10 lg:text-right',
        ])}
      >
        <blockquote className="relative">
          <div className="text-2xl leading-9 font-medium text-gray-900">
            <p>&ldquo;{quote}&rdquo;</p>
          </div>

          <footer className="mt-8">
            <div className="flex">
              <div
                className={classNames([
                  'ml-4 lg:ml-0',
                  align === 'right' && 'flex-grow',
                ])}
              >
                <div className="text-base font-medium text-gray-500">
                  {cite}
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>

      {align === 'right' && renderImg()}
    </div>
  );
};
