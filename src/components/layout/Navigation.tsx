import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const logo = '/logo.png';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'HSE', path: '/hse' },
    { name: 'Training', path: '/training' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Avinella Global Resources"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-[#002147] font-semibold'
                  : 'text-gray-600 hover:text-[#002147]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#002147] text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-[#003366] transition-all duration-300 group"
          >
            Contact Us
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
              <ArrowRight size={14} className="text-[#002147]" />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-[#002147] p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-6">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#002147] bg-gray-50 font-semibold'
                    : 'text-gray-600 hover:text-[#002147] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#002147] text-white font-semibold py-3 rounded-full hover:bg-[#003366] transition-all"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
