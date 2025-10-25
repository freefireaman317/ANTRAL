import React from 'react';
import { ExternalLink, FileSpreadsheet } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Matrix = () => {
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
            Committee Matrix
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            View detailed portfolio allocations and committee information
          </p>
        </div>
      </section>

      {/* Matrix Content */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] rounded-full flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet className="w-10 h-10 text-white" />
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
              className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-[#8B1538] to-[#6B0F2A] text-white font-bold text-lg rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Open Matrix Spreadsheet</span>
              <ExternalLink className="w-5 h-5" />
            </a>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's in the Matrix?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8B1538] rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Committee Details</h4>
                    <p className="text-gray-600 text-sm">Complete information about each committee</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8B1538] rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Portfolio List</h4>
                    <p className="text-gray-600 text-sm">Available portfolios for each committee</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8B1538] rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Agenda Topics</h4>
                    <p className="text-gray-600 text-sm">Discussion topics for debate</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8B1538] rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Country Allocations</h4>
                    <p className="text-gray-600 text-sm">See which countries/portfolios are available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Ready to register after reviewing the matrix?
            </p>
            <a
              href="/register"
              className="inline-block px-8 py-4 bg-white border-2 border-[#8B1538] text-[#8B1538] font-semibold rounded-full hover:bg-[#8B1538] hover:text-white transform hover:scale-105 transition-all duration-300"
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
