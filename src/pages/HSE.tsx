import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Heart, Leaf, AlertTriangle, CheckCircle, Users, FileCheck, Award, ArrowRight, Eye, Zap } from 'lucide-react';
import { useSiteImages } from '@/lib/useSiteImages';

export default function HSE() {
  const img = useSiteImages('hse');
  const policies = [
    { icon: Shield, title: 'Safety First', description: 'Zero tolerance for unsafe practices. Every employee has the authority to stop work if safety is compromised.' },
    { icon: Heart, title: 'Health Protection', description: 'Comprehensive health monitoring and wellness programs for all personnel involved in operations.' },
    { icon: Leaf, title: 'Environmental Care', description: 'Minimizing environmental impact through sustainable practices and responsible resource management.' },
    { icon: AlertTriangle, title: 'Risk Management', description: 'Proactive identification, assessment, and mitigation of hazards in all operations.' },
    { icon: Eye, title: 'Incident Reporting', description: 'Transparent reporting culture with rapid investigation and corrective action implementation.' },
    { icon: Zap, title: 'Emergency Response', description: 'Fully rehearsed emergency response plans with dedicated teams for rapid incident management.' },
  ];

  const stats = [
    { value: '0', label: 'Lost Time Incidents' },
    { value: '100%', label: 'Safety Compliance' },
    { value: '50K+', label: 'Safe Work Hours' },
    { value: '100%', label: 'Trained Personnel' },
  ];

  const envItems = [
    { icon: Leaf, text: 'Emission Reduction' },
    { icon: FileCheck, text: 'Waste Management' },
    { icon: Users, text: 'Community Engagement' },
    { icon: Shield, text: 'Spill Prevention' },
    { icon: Award, text: 'ISO 14001 Certified' },
    { icon: CheckCircle, text: 'Compliance Audits' },
  ];

  return (
    <div className="bg-white">
      {/* Hero — dark full-screen with stats */}
      <section className="relative bg-[#002147] min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          <img src={img('hero') || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80'} alt="Safety" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002147]/80 via-[#002147]/60 to-[#002147]"></div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col container mx-auto px-4 pt-32 pb-16">
          <div className="flex-1 flex flex-col justify-center max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-xs font-semibold text-white mb-8">
                <span className="w-2 h-2 rounded-full bg-[#C9A02B] animate-pulse"></span>
                Health, Safety & Environment
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-8">
                Safety is Our<br />
                <span className="text-[#C9A02B]">Non-Negotiable</span><br />
                Commitment
              </h1>
              <p className="text-white/60 text-lg max-w-lg leading-relaxed mb-10">
                We believe every accident is preventable. Our HSE culture empowers every person to take ownership of safety — for themselves, their team, and the environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-[#b8912a] transition-all">
                  Contact HSE Team
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><ArrowRight size={14} className="text-white" /></span>
                </Link>
                <a href="#policies" className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-white/10 transition-all">View Our Policies</a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[#C9A02B] text-xs font-semibold uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Policies — bento grid */}
      <section id="policies" className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-semibold text-[#C9A02B] tracking-widest uppercase mb-3 block">Our Policies</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#002147] leading-tight">
                Guiding principles<br />for every operation
              </h2>
            </motion.div>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed md:text-right">
              Six core pillars that shape how we protect our people, assets, and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className={`rounded-3xl p-8 flex flex-col gap-5 hover:shadow-xl transition-all duration-300 group cursor-default
                  ${index === 0 ? 'bg-[#002147]' : index === 4 ? 'bg-[#C9A02B]' : 'bg-white'}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center
                  ${index === 0 || index === 4 ? 'bg-white/15' : 'bg-[#F5F5F5] group-hover:bg-[#002147] transition-colors'}`}>
                  <policy.icon size={22} className={index === 0 || index === 4 ? 'text-white' : 'text-[#002147] group-hover:text-white transition-colors'} />
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-2 ${index === 0 || index === 4 ? 'text-white' : 'text-[#002147]'}`}>{policy.title}</h3>
                  <p className={`text-sm leading-relaxed ${index === 0 || index === 4 ? 'text-white/70' : 'text-gray-500'}`}>{policy.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Commitment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden min-h-[480px] group"
            >
              <img src={img('commitment') || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80'} alt="Safety Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 via-[#002147]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
                  <Shield size={12} /> Our Commitment
                </div>
                <h3 className="text-white text-2xl font-bold leading-tight">All accidents are<br />preventable</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#F5F5F5] rounded-3xl p-8 md:p-10 flex flex-col justify-center"
            >
              <span className="text-xs font-semibold text-[#C9A02B] tracking-widest uppercase mb-4 block">Safety Systems</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4 leading-tight">
                A culture where safety comes first
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Our safety culture empowers every employee to take responsibility for their own safety and the safety of those around them — with no exceptions.
              </p>
              <div className="space-y-3">
                {[
                  'Comprehensive safety training for all personnel',
                  'Regular safety audits and unannounced inspections',
                  'Emergency response drills — quarterly',
                  'Personal protective equipment for every role',
                  'Transparent incident reporting and investigation',
                  'Continuous safety improvement programs',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 bg-white rounded-xl p-3"
                  >
                    <div className="w-6 h-6 bg-[#002147] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-[#C9A02B]" size={13} />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Environmental Protection */}
      <section className="py-24 bg-[#002147]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-xs font-semibold text-[#C9A02B] tracking-widest uppercase mb-4 block">Environmental Stewardship</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Protecting the world<br /><span className="text-white/50">we operate in</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-10">
                We are committed to minimizing our environmental footprint and protecting the ecosystems in which we operate, today and for generations to come.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {envItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 bg-white/8 rounded-2xl p-4"
                  >
                    <div className="w-9 h-9 bg-[#C9A02B]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-[#C9A02B]" size={16} />
                    </div>
                    <span className="text-white/80 text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img src={img('environment') || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80'} alt="Environmental" className="w-full rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/60 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#C9A02B] rounded-2xl p-5 shadow-2xl">
                <div className="text-white text-3xl font-bold">ISO</div>
                <div className="text-white/80 text-xs font-semibold">14001 Certified</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img src={img('cta') || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80'} alt="HSE" className="w-full h-[320px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/90 to-[#002147]/60"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8 md:px-16">
                <span className="text-[#C9A02B] text-xs font-bold uppercase tracking-widest mb-3 block">Get in Touch</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl">Learn more about our HSE standards</h2>
                <p className="text-white/70 text-sm max-w-md mb-6">Our team is ready to answer any questions about our health, safety and environmental programs.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#002147] text-sm font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-gray-100 transition-all group">
                  Contact Us
                  <span className="w-8 h-8 bg-[#C9A02B] rounded-full flex items-center justify-center"><ArrowRight size={14} className="text-white" /></span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
