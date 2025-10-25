import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
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
            Our Team
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Meet the dedicated individuals behind ANTRAL MUN
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {siteConfig.team.map((member, index) => (
              <div
                key={member.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B1538]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#8B1538] font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-[#8B1538] hover:text-white transition-colors duration-300">
                      <Linkedin size={18} />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-[#8B1538] hover:text-white transition-colors duration-300">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-xl text-white/90 mb-10">
            We're always looking for passionate individuals to help organize future editions
          </p>
          <a href="/contact">
            <button className="px-10 py-5 bg-white text-[#8B1538] font-bold text-lg rounded-full hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Get In Touch
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
