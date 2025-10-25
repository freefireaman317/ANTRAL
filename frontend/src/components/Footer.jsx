import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Footer = () => {
  return (
    <footer className="bg-[#6B0F2A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_69c6dc65-dffc-4241-b53d-2659d06e0795/artifacts/el6nn5ur_background%20-%20Copy.jpg"
                alt="ANTRAL MUN Logo"
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-xl font-bold">ANTRAL MUN</h3>
            </div>
            <p className="text-white/80 text-sm">
              Model United Nations conference bringing together young minds to discuss and debate global issues.
            </p>
            <p className="mt-4 text-white/80 text-sm">
              Event Date: <span className="font-semibold text-white">7 May 2026</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/committee" className="text-white/80 hover:text-white transition-colors duration-300">
                  Committees
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white/80 hover:text-white transition-colors duration-300">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-white/80 hover:text-white transition-colors duration-300">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-white/80" />
                <span className="text-white/80">{siteConfig.contact.founder.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-white/80" />
                <span className="text-white/80">{siteConfig.social.email}</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © 2026 ANTRAL MUN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
