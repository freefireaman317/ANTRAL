import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Quote, Users, Award, Calendar } from 'lucide-react';

const About = () => {
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
            About ANTRAL MUN
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Empowering youth through diplomacy, debate, and global leadership
          </p>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 transform hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
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

      {/* Previous Edition */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#8B1538] mb-4">
              Our First Edition - Success Story
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse into ANTRAL MUN {siteConfig.about.previousEdition.year}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#8B1538] mb-2">
                {siteConfig.about.previousEdition.participants}
              </div>
              <p className="text-gray-600 font-medium">Participants</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#8B1538] mb-2">
                {siteConfig.about.previousEdition.committees}
              </div>
              <p className="text-gray-600 font-medium">Committees</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#8B1538] mb-2">
                {siteConfig.about.previousEdition.year}
              </div>
              <p className="text-gray-600 font-medium">Year</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {siteConfig.about.previousEdition.description}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of Our Legacy</h2>
          <p className="text-xl text-white/90 mb-10">
            Join us for the second edition and create history together
          </p>
          <a href="/register">
            <button className="px-10 py-5 bg-white text-[#8B1538] font-bold text-lg rounded-full hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Register for ANTRAL MUN 2026
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
