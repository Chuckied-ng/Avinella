import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useSiteImages } from '@/lib/useSiteImages';
import {
  Truck,
  Package,
  Warehouse,
  Globe,
  FileCheck,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  BarChart3,
} from 'lucide-react';

export default function Logistics() {
  const img = useSiteImages('logistics');
  const services = [
    {
      icon: Warehouse,
      title: 'Warehousing & Storage',
      description: 'Climate-controlled storage facilities for materials and equipment',
    },
    {
      icon: Truck,
      title: 'Transportation Management',
      description: 'Multi-modal transport solutions for efficient delivery',
    },
    {
      icon: FileCheck,
      title: 'Customs Clearance',
      description: 'Expert handling of import/export documentation',
    },
    {
      icon: BarChart3,
      title: 'Inventory Management',
      description: 'Real-time tracking and stock optimization',
    },
  ];

  const capabilities = [
    'Door-to-deck delivery services',
    'Base operations management',
    'Material handling & packaging',
    'Freight forwarding',
    'Project cargo logistics',
    'Supply vessel coordination',
    'Documentation management',
    'Real-time shipment tracking',
  ];

  return (
    <div className="bg-[#F8F9FA]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-white to-[#F8F9FA]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5DADE2]/10 rounded-full blur-3xl -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/services" className="inline-flex items-center text-[#5DADE2] hover:text-[#002147] mb-6 transition-colors">
                <ArrowRight className="rotate-180 mr-2" size={18} />
                Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002147] mb-6 leading-tight">
                Logistics & Supply Chain
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                End-to-end supply chain solutions ensuring timely delivery of materials and equipment to remote offshore locations. Our integrated approach optimizes efficiency and reduces costs.
              </p>
              <Button
                asChild
                className="bg-[#5DADE2] hover:bg-[#4A9ED4] text-white rounded-full px-8 shadow-lg transition-all hover:scale-105"
              >
                <Link to="/contact">
                  Request a Quote <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={img('hero') || 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80'}
                  alt="Logistics Operations"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#5DADE2] rounded-full flex items-center justify-center">
                    <Globe className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#002147]">15+</div>
                    <div className="text-sm text-gray-500">Countries Served</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">Our Logistics Services</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Comprehensive supply chain solutions for offshore operations
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
                Our integrated logistics solutions ensure seamless supply chain management, from initial sourcing to final delivery at offshore locations.
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
                src={img('capabilities') || 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80'}
                alt="Supply Chain"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#002147] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Logistics Solutions</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Optimized supply chain management for your offshore operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: 'On-Time Delivery', desc: '98% on-time delivery rate to offshore locations' },
              { icon: Shield, title: 'Cargo Safety', desc: 'Zero damage record with secure handling protocols' },
              { icon: BarChart3, title: 'Cost Efficiency', desc: 'Optimized routes and consolidated shipments' },
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
              Optimize Your Supply Chain Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us handle your logistics so you can focus on your core operations
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#5DADE2] hover:bg-[#4A9ED4] text-white rounded-full px-8 shadow-lg transition-all hover:scale-105"
            >
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
