import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useSiteImages } from '@/lib/useSiteImages';
import {
  Ship,
  Compass,
  Package,
  Anchor,
  Users,
  Waves,
  AlertTriangle,
  Settings,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Globe,
  Briefcase,
  Award,
  ChevronRight,
  Play,
} from 'lucide-react';

export default function Services() {
  const img = useSiteImages('services');
  const services = [
    {
      icon: Ship,
      title: 'Marine Vessel Chartering',
      subtitle: 'PSVs, AHTS, Crew Boats',
      description:
        'Comprehensive marine vessel chartering services including Platform Supply Vessels (PSVs), Anchor Handling Tug Supply vessels (AHTS), and crew boats. Our modern fleet ensures safe and efficient transportation of personnel, equipment, and supplies to offshore installations.',
      features: [
        'Platform Supply Vessels (PSVs)',
        'Anchor Handling Tug Supply (AHTS)',
        'Crew boats & fast supply vessels',
        'Standby vessels',
        'Vessel management services',
      ],
      link: '/services/offshore',
    },
    {
      icon: Compass,
      title: 'Geotechnical Survey Services',
      description:
        'Expert geotechnical survey services for offshore oil & gas projects. Our team conducts comprehensive seabed surveys, soil sampling, and analysis to support foundation design, pipeline routing, and platform installation planning.',
      features: [
        'Seabed surveys & mapping',
        'Soil sampling & testing',
        'Foundation assessments',
        'Pipeline route surveys',
        'Environmental baseline studies',
      ],
      link: '/services',
    },
    {
      icon: Package,
      title: 'Survey Equipment Supply',
      description:
        'Supply of state-of-the-art survey equipment for offshore operations. We provide high-precision instruments for positioning, navigation, and data acquisition to support all phases of offshore projects.',
      features: [
        'Positioning systems (DGPS, USBL)',
        'Sonar equipment',
        'ROV survey systems',
        'Data acquisition systems',
        'Calibration services',
      ],
      link: '/services/procurement',
    },
    {
      icon: Anchor,
      title: 'Rig and Platform Supply Operations',
      description:
        'Efficient rig and platform supply operations ensuring uninterrupted offshore activities. We manage the logistics of delivering drilling fluids, chemicals, cement, fuel, water, and deck cargo to drilling rigs and production platforms.',
      features: [
        'Deck cargo transportation',
        'Bulk materials supply',
        'Fuel & water delivery',
        'Drilling consumables',
        'Just-in-time delivery',
      ],
      link: '/services/logistics',
    },
    {
      icon: Users,
      title: 'Offshore Personnel Logistics & Accommodation',
      description:
        'Complete offshore personnel logistics including crew transportation, accommodation, and welfare services. We ensure safe, comfortable, and efficient movement and housing of offshore workers.',
      features: [
        'Crew transportation',
        'Flotel services',
        'Accommodation barges',
        'Catering & welfare',
        'Personnel tracking systems',
      ],
      link: '/services',
    },
    {
      icon: Waves,
      title: 'Subsea Equipment Handling & Deployment',
      description:
        'Specialized subsea equipment handling and deployment services. Our experienced teams manage the installation, retrieval, and maintenance of subsea infrastructure including manifolds, trees, and pipelines.',
      features: [
        'Subsea installation support',
        'Equipment deployment & retrieval',
        'ROV support operations',
        'Pipeline intervention',
        'Subsea inspection services',
      ],
      link: '/services',
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Response & Standby Services',
      description:
        'Round-the-clock emergency response and standby services to ensure the safety of offshore personnel and assets. Our dedicated vessels and trained crews are always ready to respond to any emergency situation.',
      features: [
        'Emergency Response & Rescue Vessels (ERRV)',
        '24/7 standby coverage',
        'Oil spill response',
        'Search and rescue operations',
        'Medical evacuation support',
      ],
      link: '/services',
    },
    {
      icon: Settings,
      title: 'Asset Integrity Management',
      description:
        'Comprehensive asset integrity management services to ensure the safe and reliable operation of offshore facilities. We provide inspection, maintenance, and life extension solutions for offshore assets.',
      features: [
        'Structural inspections',
        'Corrosion management',
        'Maintenance planning',
        'Life extension studies',
        'Regulatory compliance support',
      ],
      link: '/services',
    },
    {
      icon: GraduationCap,
      title: 'Offshore Training Services',
      description:
        'Industry-certified offshore training programs to develop competent and safety-conscious offshore personnel. Our courses meet international standards and prepare individuals for the demands of offshore work.',
      features: [
        'BOSIET & HUET certification',
        'H2S safety training',
        'Rigging & lifting courses',
        'First aid & firefighting',
        'Competency assessments',
      ],
      link: '/training',
    },
  ];

  const stats = [
    { value: '9+', label: 'Service Categories', icon: Briefcase },
    { value: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { value: '100%', label: 'HSE Compliance', icon: Shield },
    { value: '24/7', label: 'Operations Support', icon: Clock },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We start by understanding your specific operational requirements and challenges.',
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a tailored solution that meets your unique needs and budget.',
    },
    {
      step: '03',
      title: 'Mobilization',
      description: 'We rapidly mobilize resources, vessels, and personnel to your location.',
    },
    {
      step: '04',
      title: 'Execution',
      description: 'Flawless execution with continuous monitoring and real-time reporting.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section — Bold text + fan cards */}
      <section className="relative bg-[#F5F5F5] pt-32 pb-0 overflow-hidden min-h-screen flex flex-col">
        <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col">
          <div className="max-w-5xl mb-12">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-xs font-semibold text-[#002147] mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#C9A02B]"></span>
                Our Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#002147] leading-[0.92] mb-8">
                Comprehensive<br />
                <span className="text-[#C9A02B]">Offshore &</span><br />
                Marine Solutions
              </h1>
              <p className="text-gray-500 text-lg max-w-xl mb-8 leading-relaxed">
                From marine vessel chartering to logistics and training — Avinella delivers integrated solutions for every stage of your offshore operations.
              </p>
              <div className="flex flex-wrap gap-4 mb-16">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#002147] text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-[#002147]/90 transition-all">
                  Request a Quote<span className="w-8 h-8 bg-[#C9A02B] rounded-full flex items-center justify-center"><ArrowRight size={14} className="text-white" /></span>
                </Link>
                <a href="#services" className="inline-flex items-center gap-2 border border-[#002147]/20 text-[#002147] text-sm font-semibold px-6 py-2 rounded-full hover:bg-white transition-all">View All Services</a>
              </div>
            </motion.div>
          </div>

          {/* Fan-style image cards row */}
          <div className="flex items-end gap-4 pb-16 overflow-x-auto">
            {[
              { img: img('fan', 0) || 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', label: 'Marine Services', tag: 'Offshore', rotate: '-rotate-6', href: '/services/offshore' },
              { img: img('fan', 1) || 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', label: 'Vessel Operations', tag: 'Marine', rotate: '-rotate-2', href: '/services/offshore' },
              { img: img('fan', 2) || 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80', label: 'Equipment Supply', tag: 'Procurement', rotate: 'rotate-2', href: '/services/procurement' },
              { img: img('fan', 3) || 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80', label: 'Supply Chain', tag: 'Logistics', rotate: 'rotate-5', href: '/services/logistics' },
              { img: img('fan', 4) || 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80', label: 'Safety Training', tag: 'Training', rotate: 'rotate-8', href: '/training' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                className={`relative flex-shrink-0 w-52 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 hover:rotate-0 transition-all duration-500 cursor-pointer ${card.rotate} origin-bottom`}
                style={{ height: 280 }}
              >
                <Link to={card.href}>
                  <img src={card.img} alt={card.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs bg-[#C9A02B] text-white font-bold px-2 py-1 rounded-full block w-fit mb-1">{card.tag}</span>
                    <span className="text-white text-sm font-bold leading-tight">{card.label}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-16 bg-[#002147]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[#C9A02B] text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — Bento grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Large card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden min-h-[420px] group cursor-pointer"
            >
              <img src={img('why') || 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=900&q=80'} alt="Services" className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-[#002147]/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
                  <Play size={10} fill="white" /> Our Approach
                </span>
                <h3 className="text-white text-2xl font-bold mb-2 leading-tight">Integrated solutions that work as one</h3>
                <p className="text-white/70 text-sm">Seamless coordination across marine, procurement, logistics and training — one partner, complete coverage.</p>
              </div>
            </motion.div>

            {/* Right column */}
            <div className="flex flex-col gap-6">
              {[
                { icon: Award, title: 'ISO Triple-Certified', desc: 'ISO 9001, 14001 & 45001. Our operations meet the highest international benchmarks.', color: 'bg-[#002147]', textColor: 'text-white', descColor: 'text-white/60' },
                { icon: Clock, title: '24/7 Rapid Response', desc: 'Round-the-clock operations and emergency mobilization for critical offshore requirements.', color: 'bg-[#F5F5F5]', textColor: 'text-[#002147]', descColor: 'text-gray-500' },
                { icon: Globe, title: '15+ Country Reach', desc: 'Active operations across West Africa, with logistics partners on every continent.', color: 'bg-[#C9A02B]', textColor: 'text-white', descColor: 'text-white/70' },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`${card.color} rounded-3xl p-6 flex items-start gap-5`}
                >
                  <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <card.icon className={card.textColor} size={22} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${card.textColor} mb-1`}>{card.title}</h4>
                    <p className={`text-sm leading-relaxed ${card.descColor}`}>{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="py-12 bg-white"></div>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-semibold text-[#C9A02B] tracking-wider uppercase mb-3 block">What We Offer</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#002147] leading-tight">
                Our Service Portfolio
              </h2>
            </motion.div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed md:text-right">
              Tailored solutions for every stage of offshore operations — delivered by experts who know the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={[
                      img('grid', 6) || 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80',
                      img('grid', 7) || 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                      img('grid', 8) || 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
                      img('grid', 9) || 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80',
                      img('grid', 10) || 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80',
                      img('grid', 11) || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
                      img('grid', 12) || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
                      img('grid', 13) || 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80',
                      img('grid', 14) || 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80',
                    ][index % 9]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md">
                    <service.icon className="text-[#002147]" size={18} />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#002147] mb-1">{service.title}</h3>
                  {service.subtitle && (
                    <p className="text-[#C9A02B] text-xs font-semibold mb-3">{service.subtitle}</p>
                  )}
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-grow">{service.description}</p>
                  <div className="space-y-1.5 mb-5">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="text-[#C9A02B] flex-shrink-0" size={13} />
                        <span className="text-gray-600 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {service.link !== '/services' && (
                    <Link to={service.link} className="inline-flex items-center gap-1 text-[#002147] text-sm font-bold hover:gap-2 transition-all mt-auto">
                      Learn More <ChevronRight size={15} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-semibold text-[#C9A02B] tracking-widest uppercase mb-3 block">How We Work</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#002147] leading-tight">Our Service<br />Delivery Process</h2>
            </motion.div>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed md:text-right">A streamlined approach to delivering exceptional results for your offshore operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-3xl p-8 relative overflow-hidden ${i === 1 ? 'bg-[#002147]' : i === 3 ? 'bg-[#C9A02B]' : 'bg-[#F5F5F5]'}`}
              >
                <div className={`text-6xl font-black mb-4 leading-none ${i === 1 || i === 3 ? 'text-white/20' : 'text-[#002147]/10'}`}>
                  {item.step}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${i === 1 || i === 3 ? 'text-white' : 'text-[#002147]'}`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed ${i === 1 || i === 3 ? 'text-white/60' : 'text-gray-500'}`}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={img('choose', 15) || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80'}
                  alt="Marine Operations"
                  className="rounded-2xl shadow-xl w-full h-[250px] object-cover"
                />
                <img
                  src={img('choose', 16) || 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80'}
                  alt="Equipment"
                  className="rounded-2xl shadow-xl w-full h-[250px] object-cover mt-8"
                />
                <img
                  src={img('choose', 17) || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80'}
                  alt="Logistics"
                  className="rounded-2xl shadow-xl w-full h-[250px] object-cover -mt-8"
                />
                <img
                  src={img('choose', 18) || 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80'}
                  alt="Supply Chain"
                  className="rounded-2xl shadow-xl w-full h-[250px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-6">
                The Avinella Service Advantage
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When you partner with Avinella Global Resources, you get more than just a service provider – you get a dedicated team committed to your operational success.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Integrated Solutions', desc: 'Seamless coordination across all service lines' },
                  { title: 'Safety Excellence', desc: 'Zero LTI record with rigorous HSE protocols' },
                  { title: 'Rapid Mobilization', desc: 'Quick deployment to meet urgent requirements' },
                  { title: 'Cost Optimization', desc: 'Efficient operations that reduce total cost of ownership' },
                  { title: 'Local Expertise', desc: 'Deep knowledge of West African operations and regulations' },
                  { title: '24/7 Support', desc: 'Round-the-clock operations and customer service' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-[#F5F5F5] rounded-xl">
                    <div className="w-6 h-6 bg-[#002147] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-[#C9A02B]" size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002147] text-sm">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="bg-[#002147] hover:bg-[#002147]/90 text-white rounded-full px-8 transition-all hover:scale-105"
              >
                <Link to="/contact">
                  Discuss Your Requirements <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img src={img('cta', 19) || 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1400&q=80'} alt="Services" className="w-full h-[350px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/90 to-[#002147]/60"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8 md:px-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-xl">Need a Custom Solution?</h2>
                <p className="text-white/80 text-sm max-w-md mb-6">Our team is ready to discuss your specific requirements and develop tailored solutions for your offshore operations.</p>
                <div className="flex gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#002147] text-sm font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-gray-100 transition-all group">Contact Us<span className="w-8 h-8 bg-[#002147] rounded-full flex items-center justify-center"><ArrowRight size={14} className="text-white" /></span></Link>
                  <Link to="/about" className="inline-flex items-center gap-2 border border-white/40 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-white/10 transition-all">Learn About Us</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
