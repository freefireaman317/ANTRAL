import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Globe } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import { siteConfig } from '../config/siteConfig';

const Home = () => {
  const [currentMember, setCurrentMember] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMember((prev) => (prev + 1) % siteConfig.team.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Diverse Committees",
      description: "5 specialized committees covering global issues"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional Experience",
      description: "Learn diplomacy and negotiation skills"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description: "Engage with international affairs"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Clean & Sharp */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #8B1538 0%, #A01844 25%, #6B0F2A 75%, #4A0A1D 100%)'
        }}
      >
        {/* Clean Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Diagonal Lines Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 60px,
                rgba(255, 255, 255, 0.03) 60px,
                rgba(255, 255, 255, 0.03) 120px
              )`
            }} />
          </div>
          
          {/* Clean Geometric Shapes */}
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-white/10 rounded-full animate-float-gentle" />
          <div className="absolute bottom-32 left-32 w-48 h-48 border-2 border-white/10 rotate-45 animate-float-slow" />
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-lg rotate-12 animate-float" />
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full animate-float-delayed" />
          
          {/* Accent Dots */}
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-white/20 rounded-full" />
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-white/20 rounded-full" />
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white/30 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Logo with Sharp 3D Effect */}
          <div className="mb-8 transform hover:scale-110 transition-all duration-700 animate-float-gentle">
            <div className="relative inline-block">
              {/* Sharp Shadow Layers */}
              <div className="absolute -inset-2 bg-white/5 rounded-full transform translate-y-2 translate-x-2" />
              <div className="absolute -inset-1 bg-white/10 rounded-full transform translate-y-1 translate-x-1" />
              <img
                src="https://customer-assets.emergentagent.com/job_69c6dc65-dffc-4241-b53d-2659d06e0795/artifacts/el6nn5ur_background%20-%20Copy.jpg"
                alt="ANTRAL MUN Logo"
                className="h-28 sm:h-36 w-auto mx-auto relative z-10 transform hover:rotateY-12 transition-transform duration-700"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))' }}
              />
            </div>
          </div>

          {/* Title with Sharp Typography */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="block mb-2 text-white/90">THE</span>
            <span className="block text-white" style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.1)'
            }}>
              ANTRAL
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl mt-3 text-white/95">MODEL UNITED NATIONS</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable experience of diplomacy, debate, and global leadership
          </p>

          {/* Countdown Timer */}
          <div className="mb-10">
            <CountdownTimer />
          </div>

          {/* Register Button - Clean & Sharp */}
          <Link to="/register">
            <button className="group relative px-12 py-6 bg-white text-[#8B1538] font-bold text-xl rounded-full overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-500 transform hover:scale-110">
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <span>REGISTER NOW</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              
              {/* Clean Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Sharp 3D Depth */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-black/20 rounded-full" />
            </button>
          </Link>

          <p className="mt-6 text-white/80 text-lg font-semibold">
            Registration Fee: <span className="text-white text-xl">{siteConfig.eventPrice}</span>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#8B1538] mb-4">Why Attend ANTRAL MUN?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience world-class Model United Nations conference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rotating Team Member Card */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#8B1538] mb-4">Meet Our Team</h2>
          </div>

          <div className="max-w-md mx-auto perspective-1000">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img
                  src={siteConfig.team[currentMember].image}
                  alt={siteConfig.team[currentMember].name}
                  className="w-full h-full object-cover transition-all duration-700"
                  key={currentMember}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {siteConfig.team[currentMember].name}
                </h3>
                <p className="text-[#8B1538] font-semibold mb-3">
                  {siteConfig.team[currentMember].position}
                </p>
                <p className="text-gray-600">
                  {siteConfig.team[currentMember].bio}
                </p>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {siteConfig.team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMember(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentMember ? 'bg-[#8B1538] w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/team"
              className="inline-flex items-center space-x-2 text-[#8B1538] font-semibold hover:text-[#6B0F2A] transition-colors duration-300"
            >
              <span>View Full Team</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-white/90 mb-10">
            Secure your spot at ANTRAL MUN 2026. Limited seats available!
          </p>
          <Link to="/register">
            <button className="px-10 py-5 bg-white text-[#8B1538] font-bold text-lg rounded-full hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Register Now - {siteConfig.eventPrice}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
