import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useSiteImages } from '@/lib/useSiteImages';
import {
  GraduationCap,
  Shield,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Target,
  Briefcase,
  ChevronRight,
} from 'lucide-react';

export default function Training() {
  const img = useSiteImages('training');
  const courses = [
    {
      code: '01',
      title: 'BOSIET',
      subtitle: 'Basic Offshore Safety Induction & Emergency Training',
      duration: '3 Days',
      color: 'bg-[#002147]',
      textColor: 'text-white',
      description: 'Essential safety training for offshore personnel including sea survival, firefighting, and helicopter safety.',
      features: ['Sea Survival Techniques', 'Fire Fighting', 'Helicopter Underwater Escape', 'First Aid'],
    },
    {
      code: '02',
      title: 'HUET',
      subtitle: 'Helicopter Underwater Escape Training',
      duration: '1 Day',
      color: 'bg-[#C9A02B]',
      textColor: 'text-white',
      description: 'Specialized training for helicopter emergency water landing scenarios and underwater escape procedures.',
      features: ['Emergency Procedures', 'Underwater Escape', 'Life Raft Deployment', 'Survival Skills'],
    },
    {
      code: '03',
      title: 'H2S Safety',
      subtitle: 'Hydrogen Sulfide Safety Training',
      duration: '1 Day',
      color: 'bg-[#C9A02B]',
      textColor: 'text-white',
      description: 'Comprehensive training on H2S hazards, detection, protection, and emergency response procedures.',
      features: ['H2S Properties', 'Detection Methods', 'PPE Usage', 'Emergency Response'],
    },
    {
      code: '04',
      title: 'Rigging & Lifting',
      subtitle: 'Rigging & Lifting Operations',
      duration: '5 Days',
      color: 'bg-[#002147]',
      textColor: 'text-white',
      description: 'Hands-on training for safe rigging and lifting operations in offshore environments.',
      features: ['Load Calculations', 'Equipment Inspection', 'Lifting Procedures', 'Safety Protocols'],
    },
  ];

  const benefits = [
    { icon: Award, title: 'Industry Certified', description: 'Internationally recognized certifications accepted by major oil & gas operators' },
    { icon: Users, title: 'Expert Instructors', description: 'Training delivered by experienced industry professionals with real-world expertise' },
    { icon: Target, title: 'Practical Focus', description: 'Hands-on training with state-of-the-art simulators and equipment' },
    { icon: Briefcase, title: 'Career Advancement', description: 'Skills and certifications that enhance career prospects in the offshore industry' },
  ];

  return (
    <div className="bg-white">
      {/* Hero — light bg with bold type */}
      <section className="relative bg-[#F5F5F5] pt-32 pb-0 overflow-hidden min-h-screen flex flex-col">
        <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col">
          <div className="max-w-4xl mb-12">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-xs font-semibold text-[#002147] mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#C9A02B]"></span>
                Training & Competence
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#002147] leading-[0.92] mb-8">
                World-Class<br />
                <span className="text-[#C9A02B]">Training for</span><br />
                Offshore Excellence
              </h1>
              <p className="text-gray-500 text-lg max-w-xl mb-8 leading-relaxed">
                Industry-certified programs that develop competent, safety-conscious offshore professionals. Delivered by experts who've been there.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#002147] text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-[#002147]/90 transition-all">
                  Register Now
                  <span className="w-8 h-8 bg-[#C9A02B] rounded-full flex items-center justify-center"><ArrowRight size={14} className="text-white" /></span>
                </Link>
                <a href="#courses" className="inline-flex items-center gap-2 border border-[#002147]/20 text-[#002147] text-sm font-semibold px-6 py-2 rounded-full hover:bg-white transition-all">View Courses</a>
              </div>
            </motion.div>
          </div>

          {/* Fan-style course preview cards */}
          <div className="flex items-end gap-4 pb-16 overflow-x-auto">
            {[
              { img: img('fan', 1) || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', label: 'BOSIET Training', tag: 'Safety', rotate: '-rotate-6' },
              { img: img('fan', 2) || 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80', label: 'Emergency Drills', tag: 'HUET', rotate: '-rotate-2' },
              { img: img('fan', 3) || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', label: 'H2S Training', tag: 'Safety', rotate: 'rotate-2' },
              { img: img('fan', 4) || 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', label: 'Rigging & Lifting', tag: 'Technical', rotate: 'rotate-5' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                className={`relative flex-shrink-0 w-52 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 hover:rotate-0 transition-all duration-500 cursor-pointer ${card.rotate} origin-bottom`}
                style={{ height: 280 }}
              >
                <img src={card.img} alt={card.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs bg-[#C9A02B] text-white font-bold px-2 py-1 rounded-full block w-fit mb-1">{card.tag}</span>
                  <span className="text-white text-sm font-bold leading-tight">{card.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-16 bg-[#002147]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10+', label: 'Certified Courses' },
              { value: '2000+', label: 'Trained Personnel' },
              { value: '100%', label: 'Pass Rate' },
              { value: 'Global', label: 'Certification Acceptance' },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[#C9A02B] text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Training — bento */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-semibold text-[#C9A02B] tracking-widest uppercase mb-3 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#002147] leading-tight">
                Training that<br />makes a real difference
              </h2>
            </motion.div>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed md:text-right">
              Industry-leading programs that prepare you for every challenge in offshore operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-3xl p-7 flex flex-col gap-4 group hover:shadow-xl transition-all duration-300
                  ${index === 1 ? 'bg-[#002147]' : index === 3 ? 'bg-[#C9A02B]' : 'bg-[#F5F5F5]'}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center
                  ${index === 1 || index === 3 ? 'bg-white/15' : 'bg-white group-hover:bg-[#002147] transition-colors'}`}>
                  <benefit.icon size={22} className={index === 1 || index === 3 ? 'text-white' : 'text-[#002147] group-hover:text-white transition-colors'} />
                </div>
                <div>
                  <h3 className={`font-bold text-base mb-1 ${index === 1 || index === 3 ? 'text-white' : 'text-[#002147]'}`}>{benefit.title}</h3>
                  <p className={`text-sm leading-relaxed ${index === 1 || index === 3 ? 'text-white/70' : 'text-gray-500'}`}>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Offerings */}
      <section id="courses" className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-semibold text-[#C9A02B] tracking-widest uppercase mb-3 block">What We Offer</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#002147] leading-tight">Our Courses</h2>
            </motion.div>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed md:text-right">
              Comprehensive programs designed to meet international standards and real operational demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${course.color} rounded-3xl p-8 flex flex-col gap-6`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${course.textColor === 'text-white' ? 'text-white/50' : 'text-gray-400'}`}>
                      Course {course.code}
                    </span>
                    <h3 className={`text-2xl font-bold ${course.textColor} mb-1`}>{course.title}</h3>
                    <p className={`text-sm font-medium ${course.textColor === 'text-white' ? 'text-white/60' : 'text-gray-500'}`}>{course.subtitle}</p>
                  </div>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
                    ${course.textColor === 'text-white' ? 'bg-white/15 text-white' : 'bg-[#002147]/10 text-[#002147]'}`}>
                    <Clock size={14} />
                    {course.duration}
                  </div>
                </div>

                <p className={`text-sm leading-relaxed ${course.textColor === 'text-white' ? 'text-white/70' : 'text-gray-600'}`}>
                  {course.description}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={13} className={course.textColor === 'text-white' ? 'text-white/60' : 'text-[#C9A02B]'} />
                      <span className={`text-xs ${course.textColor === 'text-white' ? 'text-white/70' : 'text-gray-600'}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-sm font-bold transition-all
                    ${course.textColor === 'text-white' ? 'bg-white/15 text-white hover:bg-white/25' : 'bg-[#002147] text-white hover:bg-[#002147]/90'}`}
                >
                  Register for this Course <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img src={img('cta', 5) || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=80'} alt="Training" className="w-full h-[320px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/90 to-[#002147]/60"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8 md:px-16">
                <span className="text-[#C9A02B] text-xs font-bold uppercase tracking-widest mb-3 block">Get Started</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl">Ready to Start Your Training?</h2>
                <p className="text-white/70 text-sm max-w-md mb-6">Contact us today to learn more about our training programs and upcoming course schedules.</p>
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
