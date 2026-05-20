import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useSiteImages } from '@/lib/useSiteImages';
import {
  Package,
  Wrench,
  Shield,
  HardHat,
  Cog,
  CheckCircle,
  ArrowRight,
  Globe,
  Truck,
} from 'lucide-react';

export default function Procurement() {
  const img = useSiteImages('procurement');
  const categories = [
    {
      icon: Wrench,
      title: 'Drilling Equipment',
      items: ['Drill bits & tools', 'Mud pumps', 'BOP equipment', 'Drilling consumables'],
    },
    {
      icon: HardHat,
      title: 'Safety & PPE',
      items: ['Personal protective equipment', 'Safety harnesses', 'Fire-fighting gear', 'Rescue equipment'],
    },
    {
      icon: Cog,
      title: 'Marine Spares',
      items: ['Engine components', 'Deck machinery parts', 'Navigation equipment', 'Electrical systems'],
    },
    {
      icon: Package,
      title: 'Industrial Supplies',
      items: ['Valves & fittings', 'Pipes & flanges', 'Chemicals', 'Lubricants'],
    },
  ];

  const features = [
    'Global sourcing network',
    'Quality assurance testing',
    'Competitive pricing',
    'Express delivery options',
    'Technical support',
    'Inventory management',
    'Custom specifications',
    'Warranty management',
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
                Procurement & Equipment Supply
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Global sourcing and supply of high-quality equipment, materials, and consumables for offshore operations. We maintain strategic partnerships with leading manufacturers worldwide.
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
                  src={img('hero') || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80'}
                  alt="Equipment Supply"
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
                    <div className="text-2xl font-bold text-[#002147]">50+</div>
                    <div className="text-sm text-gray-500">Global Partners</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">Equipment Categories</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Comprehensive range of equipment and materials for offshore operations
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
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
                    <category.icon className="text-[#5DADE2] group-hover:text-white transition-colors" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#002147] mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="text-[#5DADE2]" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
                Why Choose Our Procurement Services
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our procurement team leverages global partnerships and industry expertise to source the best equipment at competitive prices, with guaranteed quality and timely delivery.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((item, i) => (
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
                src={img('capabilities') || 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80'}
                alt="Equipment Warehouse"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">Our Procurement Process</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Streamlined process to ensure efficient and reliable delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Requirement Analysis', desc: 'Understanding your specific equipment needs' },
              { step: '02', title: 'Sourcing & Quotation', desc: 'Global sourcing from trusted suppliers' },
              { step: '03', title: 'Quality Assurance', desc: 'Rigorous inspection and testing' },
              { step: '04', title: 'Delivery & Support', desc: 'Timely delivery with after-sales support' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#5DADE2] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#002147] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#002147] to-[#003366] rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Equipment for Your Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for competitive quotes and reliable supply solutions
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#5DADE2] hover:bg-[#4A9ED4] text-white rounded-full px-8 shadow-lg transition-all hover:scale-105"
            >
              <Link to="/contact">
                Get a Quote <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
