import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Ship,
  Shield,
  ArrowRight,
  Package,
  Truck,
  GraduationCap,
  CheckCircle,
  Globe,
  Phone,
  ChevronRight,
} from 'lucide-react';
import { useSiteImages } from '@/lib/useSiteImages';
import { useSiteContent } from '@/lib/useSiteContent';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12 } }),
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const img = useSiteImages('home');
  const c = useSiteContent('home');

  const stats = [
    { value: c('stats', 'stat_1_value', '10+'), label: c('stats', 'stat_1_label', 'Projects Delivered') },
    { value: c('stats', 'stat_2_value', '98%'), label: c('stats', 'stat_2_label', 'On-Time Delivery Rate') },
    { value: c('stats', 'stat_3_value', '85%'), label: c('stats', 'stat_3_label', 'Client Retention Rate') },
  ];

  const services = [
    {
      icon: Ship,
      tag: c('services', 'card_1_tag', 'Marine'),
      title: c('services', 'card_1_title', 'Offshore Support & Marine Services'),
      desc: c('services', 'card_1_desc', 'Platform supply vessels, crew boats, AHTS vessels, and 24/7 emergency response across West Africa.'),
      image: img('services', 1) || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      link: '/services/offshore',
    },
    {
      icon: Package,
      tag: c('services', 'card_2_tag', 'Procurement'),
      title: c('services', 'card_2_title', 'Procurement & Equipment Supply'),
      desc: c('services', 'card_2_desc', 'High-quality offshore equipment, safety gear, and technical instruments from world-leading manufacturers.'),
      image: img('services', 2) || 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
      link: '/services/procurement',
    },
    {
      icon: Truck,
      tag: c('services', 'card_3_tag', 'Logistics'),
      title: c('services', 'card_3_title', 'Logistics & Supply Chain'),
      desc: c('services', 'card_3_desc', 'End-to-end logistics from warehousing to just-in-time delivery at offshore installations.'),
      image: img('services', 3) || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      link: '/services/logistics',
    },
  ];

  const fleetItems = [
    { num: '01', title: 'Platform Supply Vessel', subtitle: 'Reliable offshore transportation', image: img('fleet', 5) || '/platform-supply-vessel.png' },
    { num: '02', title: 'Crew Transportation & Training', subtitle: 'Certified safety standards', image: img('fleet', 6) || '/crew-transportation-training.png' },
    { num: '03', title: 'Emergency Response Operations', subtitle: 'Coordinated maritime emergency response', image: img('fleet', 7) || '/emergency-response-operations.png' },
    { num: '04', title: 'Platform Supply', subtitle: 'Delivering cargo & fuel supply', image: img('fleet', 8) || '/platform-supply.png' },
  ];

  const projects = [
    { title: 'Offshore Platform Supply & Logistics - Gulf of Guinea', image: img('projects', 9) || '/platform-supply-vessel.png', tag: 'Marine Ops' },
    { title: 'Marine Vessel Operations & Emergency Response', image: img('projects', 10) || '/emergency-response-operations.png', tag: 'Emergency' },
    { title: 'Subsea Equipment Procurement & Delivery', image: img('projects', 11) || '/procurement-equipment-supply.png', tag: 'Procurement' },
    { title: 'Crew Transport, Training & HSE Certification', image: img('projects', 12) || '/crew-transportation-training.png', tag: 'Training' },
  ];

  const certifications = ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'STCW Certified', 'IMO Compliant', 'NORSOK Standards', 'DPR Registered', 'NIMASA Certified'];

  const faqs = [
    { question: 'What types of vessels do you operate?', answer: 'We operate a modern fleet including Platform Supply Vessels (PSVs), Anchor Handling Tug Supply vessels (AHTS), crew boats, and standby vessels maintained to the highest international standards.' },
    { question: 'Which regions do you service?', answer: 'Our primary operations cover Nigeria and West Africa, with service capabilities extending to 15+ countries across the Gulf of Guinea and beyond.' },
    { question: 'What safety certifications do you hold?', answer: 'We maintain ISO 9001, 14001, and 45001 certifications. All vessels and crew comply with IMO regulations, ISM Code, and local maritime authority requirements.' },
    { question: 'How quickly can you mobilize vessels?', answer: 'Our strategic positioning enables rapid mobilization typically within 24-48 hours. Emergency response can be even faster.' },
  ];

  return (
    <div className="bg-white font-sans">

      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#001830]">
        {/* BG image */}
        <div className="absolute inset-0">
          <img src={img('hero') || '/offshore-hero.png'} alt="Offshore Operations" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001830]/60 via-[#001830]/40 to-[#001830]/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-end pb-20 pt-36">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-block text-[#C9A02B] text-xs font-bold tracking-[0.25em] uppercase mb-6 border border-[#C9A02B]/40 px-4 py-1.5 rounded-full"
            >
              {c('hero', 'badge', "West Africa's Premier Offshore Partner")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[88px] font-bold text-white leading-[0.93] mb-8 max-w-5xl"
            >
              {c('hero', 'headline_1', 'A full range of')}<br />{c('hero', 'headline_2', 'services for')}<br /><span className="text-[#C9A02B]">{c('hero', 'headline_accent', 'offshore operations')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/65 text-base max-w-xl leading-relaxed mb-10"
            >
              {c('hero', 'description', 'We offer a full range of services – from sourcing and mobilising vessels to supporting them throughout their entire service life across the Gulf of Guinea.')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#b8911f] transition-all">
                {c('hero', 'cta_primary', 'Submit a Request')}
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all">
                {c('hero', 'cta_secondary', 'Find Out More')} <ChevronRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="relative z-10">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: 50 }}>
            <path d="M0 60 C360 0 1080 80 1440 20 L1440 60 L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ─── STATS BAR ───────────────────────────────────────────────── */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-gray-200 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center px-8">
                <div className="text-4xl md:text-5xl font-bold text-[#002147] mb-1">{s.value}</div>
                <div className="text-gray-500 text-sm leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE USAGE GUIDELINES (3 image cards) ───────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A02B] mb-3 block">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#002147] leading-tight max-w-2xl">
              Offshore service usage guidelines
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group rounded-2xl overflow-hidden relative cursor-pointer">
                <div className="relative h-72 overflow-hidden">
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/85 via-[#002147]/20 to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#C9A02B] text-white text-xs font-bold px-3 py-1 rounded-full">{svc.tag}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-2 leading-snug">{svc.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <Link to={svc.link} className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-[#b8911f] transition-all">
                    Read More <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BIG STAT DARK BANNER ────────────────────────────────────── */}
      <section className="bg-[#001830] py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
          {/* Left text */}
          <div className="flex flex-col justify-center px-10 py-16 lg:px-16">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-white/50 text-sm mb-4 leading-relaxed max-w-sm">
                More than 10 projects have been completed to a high standard in our current work and with our partners around the world.
              </p>
              <div className="text-6xl md:text-8xl font-bold text-white flex items-end gap-3">
                <Ship className="text-[#C9A02B] mb-2" size={48} />
                <span className="text-[#C9A02B]">10</span>+
              </div>
              <p className="text-white/40 text-sm mt-3 tracking-widest uppercase">Projects Completed</p>
            </motion.div>
          </div>
          {/* Right image */}
          <div className="relative min-h-[300px]">
            <img src={img('banner') || 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80'} alt="Platform Supply Vessel" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001830] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE (split layout) ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <img src={img('about') || 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80'} alt="Offshore operations" className="w-full rounded-3xl object-cover h-[480px]" />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-[#002147] rounded-2xl p-6 shadow-2xl">
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-[#C9A02B] text-xs font-semibold mt-1">Countries Served</div>
                <div className="text-white/50 text-xs mt-0.5">Across West Africa</div>
              </div>
            </motion.div>
            {/* Text side */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A02B] mb-4 block">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002147] leading-tight mb-6">
                {c('about', 'headline', 'It has long been established that design and composition matter')}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {c('about', 'para_1', 'Avinella Global Resources LTD is a leading provider of offshore support services in West Africa, combining technical expertise, operational excellence, and an unwavering commitment to safety.')}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {c('about', 'para_2', 'With ISO-certified operations, a modern fleet, and presence in 8+ countries, we are not just service providers — we are strategic partners in your offshore success.')}
              </p>
              <div className="space-y-3 mb-8">
                {['ISO 9001, 14001 & 45001 Certified', '24/7 Emergency Response', 'Experienced Marine Crew', 'West Africa Specialists'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#C9A02B] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={11} className="text-white" />
                    </div>
                    <span className="text-sm text-[#002147] font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#b8911f] transition-all">
                {c('about', 'cta', 'Submit a Request')} <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES LIST (dark bg, alternating) ────────────────────── */}
      <section className="py-24 bg-[#001830]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A02B] mb-3 block">Our Services</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-xl">
                It has long been established that when evaluating a design
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#b8911f] transition-all flex-shrink-0">
              Submit a Request <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Service rows */}
          {[
            {
              title: 'Offshore Support & Marine Services',
              desc: 'Comprehensive marine vessel chartering and offshore support services. Our modern fleet ensures safe transportation of personnel, equipment, and supplies to offshore installations across West Africa.',
              image: img('services', 1) || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
              link: '/services/offshore',
              icon: Ship,
            },
            {
              title: 'Procurement & Equipment Supply',
              desc: 'Supply of high-quality offshore equipment, safety gear, and technical instruments sourced from leading manufacturers worldwide with rapid delivery capabilities.',
              image: img('services', 2) || 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
              link: '/services/procurement',
              icon: Package,
            },
            {
              title: 'Logistics & Supply Chain',
              desc: 'End-to-end logistics solutions for offshore operations — from warehousing and inventory management to final just-in-time delivery at offshore installations.',
              image: img('services', 3) || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
              link: '/services/logistics',
              icon: Truck,
            },
            {
              title: 'Training & Competence',
              desc: 'Comprehensive training programs to enhance workforce competence and safety awareness, including BOSIET, HUET, and offshore survival certification courses.',
              image: img('training') || 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&q=80',
              link: '/training',
              icon: GraduationCap,
            },
          ].map((svc, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-14 border-t border-white/10 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#C9A02B]/20 rounded-xl flex items-center justify-center">
                    <svc.icon size={18} className="text-[#C9A02B]" />
                  </div>
                  <span className="text-[#C9A02B] text-xs font-bold uppercase tracking-widest">Service {String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{svc.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-lg">{svc.desc}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {(['Safety First', 'ISO Certified', '24/7 Support'] as string[]).map((tag: string, j: number) => (
                    <span key={j} className="text-xs border border-white/20 text-white/60 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <Link to={svc.link} className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#b8911f] transition-all">
                  Submit a Request <ArrowRight size={14} />
                </Link>
              </div>
              <div className={`relative ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <img src={svc.image} alt={svc.title} className="w-full h-72 object-cover rounded-2xl" />
                <div className="absolute inset-0 rounded-2xl bg-[#002147]/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── FEATURE (split: text left, image right) ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A02B] mb-4 block">Our Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002147] leading-tight mb-6">
                When evaluating the design and composition, readability
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Avinella Global Resources uses state-of-the-art equipment and certified crew to deliver unparalleled offshore support. Our capabilities span the entire lifecycle of offshore operations.
              </p>
              {/* Icon grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Ship, label: 'Marine Fleet', sub: 'PSVs, AHTS & Crew Boats' },
                  { icon: Shield, label: 'HSE Excellence', sub: 'Zero incident commitment' },
                  { icon: Globe, label: 'Global Reach', sub: '15+ countries served' },
                  { icon: GraduationCap, label: 'Certified Crew', sub: 'STCW & BOSIET trained' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-9 h-9 bg-[#002147] rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-[#002147] text-sm">{item.label}</div>
                      <div className="text-gray-400 text-xs mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#b8911f] transition-all">
                Submit a Request <ArrowRight size={14} />
              </Link>
            </motion.div>
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <img src={img('capabilities') || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80'} alt="Capabilities" className="w-full h-[480px] object-cover rounded-3xl" />
              <div className="absolute -top-6 -left-6 bg-[#C9A02B] rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-bold text-white">99.8%</div>
                <div className="text-white/80 text-xs mt-1">Safety Record</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── DARK FEATURE (image left, text right) ───────────────────── */}
      <section className="bg-[#001830] py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <img src={img('safety') || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'} alt="Operations" className="w-full h-[420px] object-cover rounded-3xl opacity-90" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent to-[#001830]/40" />
            </motion.div>
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A02B] mb-4 block">Safety & Compliance</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                It has long been established that when evaluating a design
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Our ISO-certified operations and zero-incident HSE culture ensure every project is delivered safely. We maintain compliance with the highest international standards including IMO, NORSOK, and regional regulations.
              </p>
              <div className="space-y-3 mb-8">
                {['Zero lost-time incidents in 2023', 'ISO 9001, 14001 & 45001 certified', 'DPR and NIMASA registered', 'STCW compliant crew across all vessels'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={15} className="text-[#C9A02B] flex-shrink-0" />
                    <span className="text-white/70 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/hse" className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#b8911f] transition-all">
                Submit a Request <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FLEET GRID ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A02B] mb-3 block">Our Fleet</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#002147] leading-tight max-w-xl">
                We offer a range of vessels and services to choose from.
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 border-2 border-[#002147] text-[#002147] text-sm font-bold px-6 py-3 rounded-full hover:bg-[#002147] hover:text-white transition-all flex-shrink-0">
              View All Services <ChevronRight size={15} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetItems.map((item, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden h-60 mb-4">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/70 to-transparent" />
                  <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full border border-white/30">{item.num}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm leading-snug">{item.title}</h3>
                    <p className="text-white/60 text-xs mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-[#002147] rounded-full flex items-center justify-center group-hover:bg-[#C9A02B] transition-colors">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS MARQUEE ──────────────────────────────────── */}
      <section className="py-16 bg-[#F5F6F8] border-y border-gray-200">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">We build with our certified standards</p>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-6 items-center justify-center flex-wrap px-6">
            {certifications.map((cert, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white border border-gray-200 rounded-full px-6 py-2.5 shadow-sm">
                <span className="text-[#002147] font-semibold text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A02B] mb-3 block">Our Projects</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#002147] mb-6">
              Explore our projects<br />in the real world
            </h2>
            <Link to="/services" className="inline-flex items-center gap-2 border-2 border-[#002147] text-[#002147] text-sm font-bold px-6 py-3 rounded-full hover:bg-[#002147] hover:text-white transition-all">
              Show All <ArrowRight size={14} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((p, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden h-64 mb-3">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 to-transparent" />
                  <span className="absolute top-3 right-3 bg-[#C9A02B] text-white text-xs font-bold px-2.5 py-1 rounded-full">{p.tag}</span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm leading-snug">{p.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#001830]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A02B] mb-4 block">FAQ</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Your Questions,<br />Our Answers.</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
                We answer the most common questions about our services, fleet, and operations across West Africa.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#b8911f] transition-all">
                Ask More <ArrowRight size={14} />
              </Link>
            </motion.div>
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    className="w-full text-left py-6 flex justify-between items-start gap-4 group"
                  >
                    <h3 className="text-base font-bold text-white group-hover:text-[#C9A02B] transition-colors leading-snug">{faq.question}</h3>
                    <span className="text-2xl text-[#C9A02B] flex-shrink-0 leading-none">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  {openFaq === index && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pb-6">
                      <p className="text-white/55 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FREE CONSULTATION CTA ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative rounded-3xl bg-[#002147] overflow-hidden">
            <img src={img('cta') || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&q=80'} alt="CTA" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-10 md:px-16 py-14">
              <div>
                <span className="text-[#C9A02B] text-xs font-bold tracking-widest uppercase mb-3 block">Get in touch</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-xl">
                  {c('cta', 'headline', 'Free consultation!')}<br />
                  <span className="text-white/60 text-xl font-normal">{c('cta', 'subline', 'We are ready to assist 24/7 nonstop.')}</span>
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <div className="flex items-center gap-3 text-white">
                  <Phone size={16} className="text-[#C9A02B]" />
                  <span className="text-sm font-semibold">{c('cta', 'phone', '+234 (0) 123 456 7890')}</span>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#b8911f] transition-all">
                  {c('cta', 'button', 'Submit a Request')} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
