import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#001218] text-white">


      <div className="container mx-auto px-6 lg:px-12 pt-4 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Column — wider */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="Avinella Global Resources" className="h-12 w-auto mb-5 brightness-0 invert" />
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-sm">
              Leading provider of offshore support services in West Africa, delivering safe, reliable, and innovative solutions since 2018.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mb-6">
              {[
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Facebook, href: 'https://facebook.com' },
                { icon: Twitter, href: 'https://twitter.com' },
                { icon: Instagram, href: 'https://instagram.com' },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A02B] transition-colors border border-white/10">
                  <Icon size={15} />
                </a>
              ))}
            </div>
            {/* CTA mini */}
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#b8911f] transition-all">
              Get in Touch <ArrowRight size={14} />
            </Link>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white/90 uppercase tracking-wider">Sitemap</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'HSE', path: '/hse' },
                { name: 'Training', path: '/training' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/50 hover:text-[#C9A02B] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white/90 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Offshore & Marine Support', path: '/services/offshore' },
                { name: 'Procurement & Equipment', path: '/services/procurement' },
                { name: 'Logistics & Supply Chain', path: '/services/logistics' },
                { name: 'Training & Competence', path: '/training' },
                { name: 'HSE Management', path: '/hse' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/50 hover:text-[#C9A02B] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white/90 uppercase tracking-wider">Contacts</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="flex-shrink-0 mt-0.5 text-[#C9A02B]" />
                <span className="text-sm text-white/50">+234 (0) 123 456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="flex-shrink-0 mt-0.5 text-[#C9A02B]" />
                <span className="text-sm text-white/50">+234 (0) 987 654 3210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="flex-shrink-0 mt-0.5 text-[#C9A02B]" />
                <a href="mailto:info@avinellaglobal.com" className="text-sm text-white/50 hover:text-[#C9A02B] transition-colors break-all">
                  info@avinellaglobal.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#C9A02B]" />
                <span className="text-sm text-white/50">Lagos, Nigeria<br />West Africa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications row */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
            {['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'STCW Certified', 'IMO Compliant'].map((cert, i) => (
              <span key={i} className="text-xs border border-white/15 text-white/40 px-4 py-1.5 rounded-full font-medium">{cert}</span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Avinella Global Resources LTD. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sitemap</span>
            <a href="/admin" className="text-white/20 hover:text-[#C9A02B] transition-colors">Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
