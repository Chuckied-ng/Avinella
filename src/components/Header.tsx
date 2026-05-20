import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'HSE', path: '/hse' },
    { name: 'Training', path: '/training' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHome || isOpen
          ? 'bg-[#001830] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.png" alt="Avinella Global Resources" className="h-12 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                  isActive(link.path)
                    ? 'text-[#C9A02B] bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#b8911f] transition-all"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex-shrink-0 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#001830] border-t border-white/10 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 pb-6 pt-3">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-[#C9A02B] bg-white/10'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#C9A02B] text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#b8911f] transition-all w-full"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
