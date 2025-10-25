import React from 'react';
import { ExternalLink, FileSpreadsheet, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Matrix = () => {
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
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-pink-300/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-float-gentle">
            Committee Matrix
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            View detailed portfolio allocations and committee information
          </p>
        </div>
      </section>

      {/* Matrix Content */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center transform hover:scale-[1.01] transition-all duration-500" style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(139,21,56,0.05)'
          }}>
            <div className="mb-8">
              <div className="relative inline-block">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] blur-2xl opacity-30 rounded-full animate-pulse" />
                
                <div className="relative w-20 h-20 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                  <FileSpreadsheet className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-[#8B1538] mb-4">
                Access Committee Matrix
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Review the complete list of committees and available portfolios before registering.
                This will help you make informed choices during registration.
              </p>
            </div>

            <a
              href={siteConfig.matrixUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-[#8B1538] to-[#6B0F2A] text-white font-bold text-lg rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <span>Open Matrix Spreadsheet</span>
              <ExternalLink className="w-5 h-5" />
            </a>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What's in the Matrix?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {[
                  { title: 'Committee Details', desc: 'Complete information about each committee' },
                  { title: 'Portfolio List', desc: 'Available portfolios for each committee' },
                  { title: 'Agenda Topics', desc: 'Discussion topics for debate' },
                  { title: 'Country Allocations', desc: 'See which countries/portfolios are available' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Ready to register after reviewing the matrix?
            </p>
            <a
              href="/register"
              className="inline-block px-8 py-4 bg-white border-2 border-[#8B1538] text-[#8B1538] font-semibold rounded-full hover:bg-[#8B1538] hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Proceed to Registration
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Matrix;
