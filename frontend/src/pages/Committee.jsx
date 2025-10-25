import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

const Committee = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 21, 56, 0.9), rgba(107, 15, 42, 0.95)), url('https://customer-assets.emergentagent.com/job_69c6dc65-dffc-4241-b53d-2659d06e0795/artifacts/elj0xhga_home%20page.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Our Committees
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our diverse range of committees covering critical global issues
          </p>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.committees.map((committee, index) => (
              <div
                key={committee.id}
                className="perspective-1000 h-[400px]"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${
                    flippedCard === committee.id ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => handleCardClick(committee.id)}
                  onMouseEnter={() => window.innerWidth >= 768 && setFlippedCard(committee.id)}
                  onMouseLeave={() => window.innerWidth >= 768 && setFlippedCard(null)}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      backgroundImage: `linear-gradient(rgba(139, 21, 56, 0.7), rgba(107, 15, 42, 0.85)), url('${committee.backgroundImage}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                      <h3 className="text-4xl font-bold text-white mb-4">
                        {committee.name}
                      </h3>
                      <p className="text-white/80 text-lg">
                        Click to learn more
                      </p>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl bg-white rotate-y-180"
                  >
                    <div className="h-full flex flex-col p-8">
                      <h3 className="text-2xl font-bold text-[#8B1538] mb-3">
                        {committee.name}
                      </h3>
                      <h4 className="text-sm font-semibold text-gray-600 mb-4">
                        {committee.fullName}
                      </h4>
                      <p className="text-gray-700 mb-4 flex-grow">
                        {committee.description}
                      </p>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-sm font-semibold text-gray-600 mb-2">Agenda:</p>
                        <p className="text-sm text-gray-700">{committee.agenda}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              For detailed portfolio information, check the matrix before registration
            </p>
            <a
              href={siteConfig.matrixUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#8B1538] to-[#6B0F2A] text-white font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              View Committee Matrix
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Committee;
