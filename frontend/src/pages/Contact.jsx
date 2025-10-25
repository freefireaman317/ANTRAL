import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with actual backend
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', phone: '', query: '' });
      setIsSubmitting(false);
    }, 1000);
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
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Have questions? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#8B1538] mb-8">
                Get In Touch
              </h2>

              {/* Founder Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transform hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Founder</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-10 h-10 bg-[#8B1538]/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#8B1538]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href={`tel:${siteConfig.contact.founder.phone}`} className="font-semibold hover:text-[#8B1538]">
                        {siteConfig.contact.founder.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-10 h-10 bg-[#8B1538]/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#8B1538]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href={`mailto:${siteConfig.contact.founder.email}`} className="font-semibold hover:text-[#8B1538]">
                        {siteConfig.contact.founder.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secretary General Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secretariat General</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-10 h-10 bg-[#8B1538]/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#8B1538]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href={`tel:${siteConfig.contact.secretariatGeneral.phone}`} className="font-semibold hover:text-[#8B1538]">
                        {siteConfig.contact.secretariatGeneral.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-10 h-10 bg-[#8B1538]/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#8B1538]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href={`mailto:${siteConfig.contact.secretariatGeneral.email}`} className="font-semibold hover:text-[#8B1538]">
                        {siteConfig.contact.secretariatGeneral.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-[#8B1538] mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="query" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Query *
                    </label>
                    <textarea
                      id="query"
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-[#8B1538] to-[#6B0F2A] text-white font-bold rounded-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
