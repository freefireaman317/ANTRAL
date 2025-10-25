import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Sparkles } from 'lucide-react';

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
          background: 'linear-gradient(135deg, #8B1538 0%, #6B0F2A 50%, #4A0A1D 100%)'
        }}
      >
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-pink-300/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
          <Sparkles className="absolute top-16 right-16 w-10 h-10 text-white/20 animate-float-gentle" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-float-gentle">
            Our Committees
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our diverse range of committees covering critical global issues
          </p>
        </div>
      </section>

      {/* Committees Grid with Enhanced 3D */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* 3D Grid Background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(139,21,56,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(139,21,56,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.committees.map((committee, index) => (
              <div
                key={committee.id}
                className="perspective-1500 h-[400px] group"
                style={{
                  animation: `popIn 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* 3D Shadow Effect */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-[#8B1538]/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${
                    flippedCard === committee.id ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => handleCardClick(committee.id)}
                  onMouseEnter={() => window.innerWidth >= 768 && setFlippedCard(committee.id)}
                  onMouseLeave={() => window.innerWidth >= 768 && setFlippedCard(null)}
                  style={{
                    transform: flippedCard === committee.id ? 'rotateY(180deg)' : 'rotateY(0)'
                  }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-[#8B1538]/30 transition-shadow duration-500"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(139, 21, 56, 0.85), rgba(107, 15, 42, 0.95)), url('${committee.backgroundImage}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 shimmer" />
                    
                    <div className="h-full flex flex-col items-center justify-center p-8 text-center relative z-10">
                      <div className="transform group-hover:scale-110 transition-transform duration-500">
                        <h3 className="text-4xl font-bold text-white mb-4">
                          {committee.name}
                        </h3>
                        <p className="text-white/80 text-lg">
                          Click to learn more
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl bg-white"
                    style={{
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="h-full flex flex-col p-8 relative">
                      {/* Gradient Accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B1538] to-[#6B0F2A]" />
                      
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
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#8B1538] to-[#6B0F2A] text-white font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
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
