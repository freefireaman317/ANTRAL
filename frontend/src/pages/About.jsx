import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Quote, Users, Award, Calendar, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D Elements */}
      <section
        className="relative py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #8B1538 0%, #6B0F2A 50%, #4A0A1D 100%)'
        }}
      >
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-pink-300/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
          <Sparkles className="absolute top-20 right-20 w-12 h-12 text-white/20 animate-float-gentle" />
          <Sparkles className="absolute bottom-20 left-20 w-8 h-8 text-white/15 animate-float-slow" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-float-gentle">
            About ANTRAL MUN
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Empowering youth through diplomacy, debate, and global leadership
          </p>
        </div>
      </section>

      {/* Founder's Message with 3D Card */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background 3D Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#8B1538]/5 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 transform hover:scale-[1.02] transition-all duration-700 hover:shadow-[#8B1538]/20" style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(139,21,56,0.05)'
          }}>
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] blur-xl opacity-50 rounded-full animate-pulse" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-center text-[#8B1538] mb-8">
              Founder's Message
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg">
                {siteConfig.about.founderMessage}
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 font-medium">
                {siteConfig.contact.founder.name}
              </p>
              <p className="text-[#8B1538] font-semibold">Founder, ANTRAL MUN</p>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Edition with 3D Stats Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* 3D Grid Background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(139,21,56,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(139,21,56,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#8B1538] mb-4">
              Our First Edition - Success Story
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse into ANTRAL MUN {siteConfig.about.previousEdition.year}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Users, value: siteConfig.about.previousEdition.participants, label: 'Participants' },
              { icon: Award, value: siteConfig.about.previousEdition.committees, label: 'Committees' },
              { icon: Calendar, value: siteConfig.about.previousEdition.year, label: 'Year' }
            ].map((stat, index) => (
              <div
                key={index}
                className="perspective-1500 group"
                style={{
                  animation: `popIn 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg text-center transform transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl" style={{
                  transformStyle: 'preserve-3d'
                }}>
                  {/* 3D Shadow */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-[#8B1538]/20 blur-xl rounded-full group-hover:w-full transition-all duration-700" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-[#8B1538] mb-2">
                      {stat.value}
                    </div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 transform hover:scale-[1.01] transition-all duration-500">
            <p className="text-lg text-gray-700 leading-relaxed">
              {siteConfig.about.previousEdition.description}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section with 3D Elements */}
      <section className="py-20 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #8B1538 0%, #6B0F2A 50%, #4A0A1D 100%)'
      }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Be Part of Our Legacy</h2>
          <p className="text-xl text-white/90 mb-10">
            Join us for the second edition and create history together
          </p>
          <a href="/register">
            <button className="px-10 py-5 bg-white text-[#8B1538] font-bold text-lg rounded-full hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse-glow">
              Register for ANTRAL MUN 2026
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
