import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, TrendingUp, Users, Award, Shield, Globe, Anchor, CheckCircle, Ship, Briefcase, Zap, Clock, ArrowRight, Play, ChevronRight } from 'lucide-react';
import { useSiteImages } from '@/lib/useSiteImages';
import { useSiteContent } from '@/lib/useSiteContent';

export default function About() {
  const img = useSiteImages('about');
  const c = useSiteContent('about');
  const values = [
    { icon: Heart, title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical practices in all our dealings.' },
    { icon: Award, title: 'Excellence', description: 'We strive for the highest standards in service delivery and operational performance.' },
    { icon: Users, title: 'Collaboration', description: 'We build strong partnerships with clients, suppliers, and stakeholders for mutual success.' },
    { icon: TrendingUp, title: 'Innovation', description: 'We embrace new technologies and methodologies to improve efficiency and safety.' },
    { icon: Shield, title: 'Safety', description: 'Zero tolerance for unsafe practices. Every employee has the authority to stop work if safety is compromised.' },
    { icon: Globe, title: 'Sustainability', description: 'We are committed to responsible operations that protect the environment for future generations.' },
  ];

  const achievements = [
    { icon: Shield, stat: '99.8%', label: 'Safety Record' },
    { icon: Globe, stat: '15+', label: 'Countries Served' },
    { icon: Anchor, stat: '15+', label: 'Vessel Fleet' },
    { icon: CheckCircle, stat: '100+', label: 'Projects Completed' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Full Width Image */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={img('hero') || 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80'} alt="About Avinella" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002147]/30 via-[#002147]/20 to-[#002147]/80"></div>
        </div>
        <div className="relative z-10 w-full pb-16 pt-32">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-sm font-medium text-white/70 tracking-wider uppercase mb-4 block">About Us</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8 max-w-4xl">Powering Africa's Offshore Energy Sector</h1>
              <p className="text-white/80 text-lg max-w-2xl">Since 2018, Avinella Global Resources has been the trusted partner for major oil & gas operators across West Africa.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Statement */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
              <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">Who We Are</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-9">
              <h2 className="text-3xl md:text-5xl font-bold text-[#002147] leading-tight mb-8">
                We combine technical expertise, operational excellence, and an unwavering commitment to safety to deliver <span className="text-gray-400">world-class offshore support services.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                With ISO-certified operations, a modern fleet of 15+ vessels, and presence in 8+ countries, we're not just service providers—we're strategic partners in your offshore success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#F5F5F5] rounded-3xl p-8 md:p-12">
              <div className="w-14 h-14 bg-[#002147] rounded-xl flex items-center justify-center mb-6"><Target className="text-white" size={24} /></div>
              <h2 className="text-2xl font-bold text-[#002147] mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">To be the most reliable and innovative offshore support company in Africa, delivering exceptional value to our clients through safe, efficient, and sustainable operations that set new industry standards.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-[#002147] rounded-3xl p-8 md:p-12 text-white">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6"><Eye className="text-white" size={24} /></div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">To be recognized as Africa's premier offshore support company—trusted by global operators for our operational excellence, safety culture, and ability to deliver in the most challenging environments.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#002147]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">{item.stat}</div>
                <div className="text-gray-400 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={img('gallery', 0) || 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80'} alt="Operations" className="rounded-2xl w-full h-48 object-cover" />
                  <img src={img('gallery', 1) || 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80'} alt="Vessels" className="rounded-2xl w-full h-64 object-cover" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src={img('gallery', 2) || 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=400&q=80'} alt="Equipment" className="rounded-2xl w-full h-64 object-cover" />
                  <img src={img('gallery', 3) || 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80'} alt="Safety" className="rounded-2xl w-full h-48 object-cover" />
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-4 block">What Sets Us Apart</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-6">Comprehensive Offshore Solutions</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">From marine operations to procurement and logistics, we provide end-to-end support for your offshore projects with unmatched reliability.</p>
              <div className="space-y-4">
                {[
                  { title: 'Proven Track Record', desc: '100+ successfully completed projects with zero major incidents.' },
                  { title: 'Modern Fleet', desc: '15+ well-maintained vessels with the latest technology.' },
                  { title: 'Expert Team', desc: 'Highly trained personnel committed to continuous improvement.' },
                  { title: '24/7 Operations', desc: 'Round-the-clock support and rapid emergency response.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[#F5F5F5] rounded-xl">
                    <div className="w-6 h-6 bg-[#002147] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle className="text-white" size={14} /></div>
                    <div><h4 className="font-bold text-[#002147] text-sm">{item.title}</h4><p className="text-gray-600 text-sm">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-4 block">Our Foundation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-xl mx-auto">The principles that guide every decision, every project, and every partnership we build.</p>
            </motion.div>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">

            {/* Row 1 — 5 small cards */}
            {values.slice(0, 5).map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-3xl p-6 hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden"
              >
                <div className="w-12 h-12 bg-[#002147] rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#C9A02B] transition-colors duration-300">
                  <value.icon className="text-white" size={20} />
                </div>
                <h3 className="font-bold text-[#002147] text-sm mb-2">{value.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{value.description}</p>
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#C9A02B]/5 rounded-bl-3xl rounded-tr-3xl transition-all group-hover:bg-[#C9A02B]/10"></div>
              </motion.div>
            ))}

            {/* Row 2 — featured center card + 2 flanking cards */}
            {/* Left flanking card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="col-span-1 bg-[#002147] rounded-3xl p-6 flex flex-col justify-between min-h-[220px] group cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#C9A02B]/20 rounded-2xl flex items-center justify-center mb-4">
                <Globe className="text-[#C9A02B]" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm mb-2">Global Reach</h3>
                <p className="text-white/60 text-xs leading-relaxed">Operating across 15+ countries in West Africa and beyond.</p>
              </div>
            </motion.div>

            {/* Big featured card — spans 3 cols */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-2 md:col-span-1 lg:col-span-3 bg-[#002147] rounded-3xl overflow-hidden min-h-[220px] flex flex-col relative group cursor-pointer"
              style={{
                backgroundImage: `url('${img('values') || 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80'}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#002147]/75 group-hover:bg-[#002147]/65 transition-all duration-300"></div>

              {/* Gold tag */}
              <div className="relative z-10 p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
                    <Heart size={12} /> Our Commitment
                  </span>
                  <h3 className="text-white text-2xl font-bold leading-tight mb-3">Safety &amp; Integrity First</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                    Zero tolerance for unsafe practices. Every employee has the authority and responsibility to stop work if safety is compromised — no exceptions.
                  </p>
                </div>

                {/* Bottom info bar */}
                <div className="flex items-center gap-3 mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-3">
                  <div className="w-8 h-8 rounded-xl bg-[#C9A02B] flex items-center justify-center flex-shrink-0">
                    <Shield size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">Avinella Global Resources</p>
                    <p className="text-white/50 text-xs">ISO 9001 · ISO 14001 · ISO 45001</p>
                  </div>
                  <div className="ml-auto">
                    <span className="inline-flex items-center gap-1 bg-white/20 text-white text-xs px-3 py-1.5 rounded-full">
                      <CheckCircle size={11} /> Certified
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right flanking card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="col-span-1 bg-[#C9A02B] rounded-3xl p-6 flex flex-col justify-between min-h-[220px] group cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm mb-2">Innovation</h3>
                <p className="text-white/80 text-xs leading-relaxed">Embracing new technologies to drive efficiency and safety.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose Avinella — Two-column feature cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-medium text-[#C9A02B] tracking-wider uppercase mb-4 block font-semibold">Why Avinella</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#002147] mb-4">The Partner You Can Count On</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Every engagement is backed by experience, integrity, and an obsession with delivering results.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Large card left — image + text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden relative group cursor-pointer min-h-[420px] md:row-span-2"
            >
              <img
                src={img('why') || 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80'}
                alt="Offshore operations"
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-[#002147]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
                  <Play size={11} fill="white" /> Experience in Action
                </span>
                <h3 className="text-white text-2xl font-bold mb-3 leading-tight">Offshore Operations That Never Stop</h3>
                <p className="text-white/70 text-sm leading-relaxed">24/7 marine support, platform supply, and crew management — executed flawlessly even in the most demanding conditions.</p>
                <Link to="/services/offshore" className="inline-flex items-center gap-2 mt-4 text-[#C9A02B] text-sm font-semibold hover:gap-3 transition-all">
                  Explore Marine Services <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Top-right card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-[#F5F5F5] rounded-3xl p-8 group hover:bg-[#002147] transition-colors duration-500 cursor-pointer"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#002147] group-hover:bg-[#C9A02B] rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-500">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#002147] group-hover:text-white mb-2 transition-colors duration-300">ISO Triple-Certified</h3>
                  <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                    ISO 9001, 14001, and 45001 certified — our processes meet the highest international standards in quality, environment, and safety management.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'].map((tag, i) => (
                  <span key={i} className="text-xs bg-white group-hover:bg-white/10 text-[#002147] group-hover:text-white px-3 py-1 rounded-full font-medium transition-colors duration-300">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Bottom-right card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#002147] rounded-3xl p-8 relative overflow-hidden cursor-pointer group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A02B]/10 rounded-bl-full"></div>
              <div className="w-14 h-14 bg-[#C9A02B]/20 rounded-2xl flex items-center justify-center mb-5">
                <Globe className="text-[#C9A02B]" size={24} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Deep Regional Knowledge</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Born and built in West Africa, we understand the operational realities, regulatory landscapes, and logistical challenges unique to this region.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-white/50 text-xs">Countries</div>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">6+</div>
                  <div className="text-white/50 text-xs">Years Active</div>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-white/50 text-xs">Projects</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Snapshot — Carousel-style row */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="text-sm font-semibold text-[#C9A02B] tracking-wider uppercase mb-3 block">What We Do</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#002147] leading-tight">End-to-End Offshore<br />Support Services</h2>
                <p className="text-gray-500 mt-3 max-w-md text-sm leading-relaxed">
                  From the moment a project is scoped to the final delivery, Avinella provides integrated solutions across every operational need.
                </p>
              </motion.div>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#002147] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#002147]/90 transition-all self-start md:self-auto flex-shrink-0"
            >
              View All Services <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Offshore Support & Marine Services',
                desc: 'Platform supply vessels, anchor handling, crew boats, and around-the-clock marine management.',
                image: img('services', 0) || 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80',
                href: '/services/offshore',
                tag: 'Marine',
              },
              {
                title: 'Procurement & Equipment Supply',
                desc: 'Global sourcing of drilling equipment, safety gear, industrial tools, and spare parts with fast delivery.',
                image: img('services', 1) || 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
                href: '/services/procurement',
                tag: 'Procurement',
              },
              {
                title: 'Logistics & Supply Chain',
                desc: 'Air, sea, and land freight management, customs clearance, and last-mile delivery to offshore installations.',
                image: img('services', 2) || 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80',
                href: '/services/logistics',
                tag: 'Logistics',
              },
              {
                title: 'Training & Competence',
                desc: 'BOSIET, HUET, firefighting, and offshore safety training delivered by certified instructors.',
                image: img('services', 3) || 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80',
                href: '/training',
                tag: 'Training',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C9A02B] text-white text-xs font-bold px-3 py-1.5 rounded-full">{service.tag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#002147] text-base mb-2 leading-snug">{service.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{service.desc}</p>
                  <Link to={service.href} className="inline-flex items-center gap-1 text-[#002147] text-xs font-bold hover:gap-2 transition-all">
                    Learn More <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Trust Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="text-sm font-semibold text-[#C9A02B] tracking-wider uppercase mb-4 block">Trusted Partnership</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-6 leading-tight">Backed by Results, Trusted by Operators</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We've earned long-term relationships with major international oil companies and independent operators across the Niger Delta, Gulf of Guinea, and beyond — built on consistent delivery and zero-compromise on safety.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our clients trust us not just because of our capabilities, but because of our culture — a team that treats every project as if Avinella's own reputation depends on it. Because it does.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#002147] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#002147]/90 transition-all">
                  Partner With Us <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 border border-[#002147]/20 text-[#002147] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#F5F5F5] transition-all">
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: '99.8%', label: 'On-time delivery rate', icon: CheckCircle, color: 'bg-[#002147]' },
                  { stat: '0', label: 'Lost-time incidents in 2023', icon: Shield, color: 'bg-[#C9A02B]' },
                  { stat: '150+', label: 'Qualified offshore crew', icon: Users, color: 'bg-[#002147]' },
                  { stat: '24/7', label: 'Emergency response availability', icon: Clock, color: 'bg-[#C9A02B]' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-[#F5F5F5] rounded-3xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                      <item.icon className="text-white" size={18} />
                    </div>
                    <div className="text-3xl font-bold text-[#002147] mb-1">{item.stat}</div>
                    <div className="text-gray-500 text-xs leading-snug">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#002147]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Certified & Compliant</h3>
            <p className="text-gray-400 text-sm">Meeting and exceeding international industry standards</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'STCW Certified', 'IMO Compliant', 'NORSOK Standards'].map((cert, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
                <span className="text-white font-medium text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden">
            <img src={img('cta') || 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=1400&q=80'} alt="Partner" className="w-full h-[350px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/90 to-[#002147]/60"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8 md:px-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-xl">Ready to Experience the Avinella Difference?</h2>
                <p className="text-white/80 text-sm max-w-md mb-6">Partner with West Africa's most trusted offshore support company.</p>
                <div className="flex gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#002147] text-sm font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-gray-100 transition-all group">Get in Touch<span className="w-8 h-8 bg-[#002147] rounded-full flex items-center justify-center"><ArrowRight size={14} className="text-white" /></span></Link>
                  <Link to="/services" className="inline-flex items-center gap-2 border border-white/40 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-white/10 transition-all">Explore Services</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
