import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Linkedin, Mail, Sparkles } from 'lucide-react';

const Team = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #8B1538 0%, #6B0F2A 50%, #4A0A1D 100%)'
        }}
      >
        {/* 3D Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-300/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
          <Sparkles className="absolute top-20 left-20 w-10 h-10 text-white/15 animate-float-gentle" />
          <Sparkles className="absolute bottom-20 right-20 w-8 h-8 text-white/20 animate-float-slow" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-float-gentle">
            Our Team
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Meet the dedicated individuals behind ANTRAL MUN
          </p>
        </div>
      </section>

      {/* Team Grid with 3D Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#8B1538]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#6B0F2A]/5 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {siteConfig.team.map((member, index) => (
              <div
                key={member.id}
                className="perspective-1500 group"
                style={{
                  animation: `popIn 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-700" style={{
                  transformStyle: 'preserve-3d'
                }}>
                  {/* 3D Shadow */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-[#8B1538]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Image Container with 3D Effect */}
                  <div className="relative h-72 overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8B1538]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    {/* Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B1538] to-[#6B0F2A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#8B1538] font-semibold mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {member.bio}
                    </p>

                    {/* Social Links with 3D Effect */}
                    <div className="flex space-x-3">
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-[#8B1538] hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md">
                        <Linkedin size={18} />
                      </button>
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-[#8B1538] hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md">
                        <Mail size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #8B1538 0%, #6B0F2A 50%, #4A0A1D 100%)'
      }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-xl text-white/90 mb-10">
            We're always looking for passionate individuals to help organize future editions
          </p>
          <a href="/contact">
            <button className="px-10 py-5 bg-white text-[#8B1538] font-bold text-lg rounded-full hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse-glow">
              Get In Touch
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
