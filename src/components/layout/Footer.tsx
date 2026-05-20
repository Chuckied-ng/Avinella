import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'HSE', path: '/hse' },
  ];

  const supportLinks = [
    { name: 'Training', path: '/training' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-[#002147]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Powering offshore excellence through innovative marine support services, delivering reliable, safe, and efficient solutions for the oil & gas industry worldwide.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Facebook, href: 'https://facebook.com' },
                { icon: Twitter, href: 'https://twitter.com' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 hover:bg-white/10 rounded-full flex items-center justify-center transition-all"
                >
                  <social.icon size={16} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-base mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-base mb-6 text-white">Support</h3>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+234 (0) 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@avinellaglobal.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Lagos, Nigeria<br />Head Office</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Avinella Global Resources LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
