import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useSiteImages } from '@/lib/useSiteImages';
import {
  Ship,
  Anchor,
  Users,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Settings,
  Navigation,
} from 'lucide-react';

export default function Offshore() {
  const img = useSiteImages('offshore');
  const services = [
    {
      icon: Ship,
      title: 'Platform Supply Vessels (PSV)',
      description: 'Modern PSVs for cargo transportation to offshore platforms',
    },
    {
      icon: Anchor,
      title: 'Anchor Handling Tug Supply (AHTS)',
      description: 'Powerful vessels for anchor handling and towing operations',
    },
    {
      icon: Navigation,
      title: 'Crew Transfer Vessels',
      description: 'Safe and efficient personnel transfer to offshore installations',
    },
    {
      icon: Settings,
      title: 'Vessel Management',
      description: 'Complete vessel management and operational support',
    },
  ];

  const capabilities = [
    'Platform supply and logistics',
    'Anchor handling and positioning',
    'Towing and escort services',
    'Crew boat operations',
    'Standby and emergency response',
    'ROV support operations',
    'Deck cargo transportation',
    'Bulk liquid and dry cargo handling',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={img('hero') || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80'} alt="Offshore" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002147]/30 via-[#002147]/20 to-[#002147]/80"></div>
        </div>
        <div className="relative z-10 w-full pb-16 pt-32">
          <div className="container mx-auto px-4">
            <Link to="/services" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors text-sm">
              <ArrowRight className="rotate-180 mr-2" size={16} /> Back to Services
            </Link>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-6 max-w-3xl">
              Offshore Support & Marine Services
            </motion.h1>
            <p className="text-white/80 text-lg max-w-2xl mb-8">Comprehensive vessel operations and marine logistics for offshore oil & gas installations.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#002147] text-sm font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-gray-100 transition-all group">
              Request a Quote<span className="w-8 h-8 bg-[#002147] rounded-full flex items-center justify-center"><ArrowRight size={14} className="text-white" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">Our Marine Services</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                A comprehensive fleet of vessels to support your offshore operations
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8F9FA] rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#5DADE2] transition-colors">
                    <service.icon className="text-[#5DADE2] group-hover:text-white transition-colors" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#002147] mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-6">
                Our Capabilities
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With our modern fleet and experienced crew, we provide comprehensive marine support services that meet the highest industry standards.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#5DADE2]/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-[#5DADE2]" size={14} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={img('capabilities') || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80'}
                alt="Marine Operations"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#002147] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Marine Services</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Industry-leading expertise and reliability for your offshore operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Safety Excellence', desc: 'Zero LTI record with rigorous safety protocols' },
              { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock operational support' },
              { icon: Users, title: 'Expert Crew', desc: 'Highly trained and certified marine personnel' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#5DADE2]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-[#5DADE2]" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#002147] to-[#003366] rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Discuss Your Marine Needs?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a customized solution for your offshore operations
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#5DADE2] hover:bg-[#4A9ED4] text-white rounded-full px-8 shadow-lg transition-all hover:scale-105"
            >
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
