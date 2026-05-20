import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { supabase, type JobListing } from '@/lib/supabase';
import { useSiteImages } from '@/lib/useSiteImages';
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Heart,
  Shield,
  ArrowRight,
  Upload,
  CheckCircle,
  GraduationCap,
  ChevronRight,
} from 'lucide-react';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openings, setOpenings] = useState<JobListing[]>([]);
  const [jobsLoading, setJobsLoading] = useState(true);

  useEffect(() => {
    async function loadJobs() {
      const { data } = await supabase
        .from('job_listings')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      setOpenings(data ?? []);
      setJobsLoading(false);
    }
    loadJobs();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      let cvUrl: string | null = null;

      // Upload CV to Supabase Storage if file selected
      if (cvFile) {
        const fileExt = cvFile.name.split('.').pop();
        const fileName = `${Date.now()}_${formData.name.replace(/\s+/g, '_')}.${fileExt}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('cv-uploads')
          .upload(fileName, cvFile, { cacheControl: '3600', upsert: false });
        if (!uploadError && uploadData) {
          const { data: urlData } = supabase.storage.from('cv-uploads').getPublicUrl(uploadData.path);
          cvUrl = urlData.publicUrl;
        }
      }

      await supabase.from('career_applications').insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        cover_letter: formData.coverLetter,
        cv_url: cvUrl,
        status: 'pending',
      }]);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const benefits = [
    { icon: TrendingUp, title: 'Career Growth', description: 'Clear career progression paths and opportunities for advancement', color: 'bg-[#002147]', textColor: 'text-white' },
    { icon: Heart, title: 'Health Benefits', description: 'Comprehensive health insurance and wellness programs', color: 'bg-[#F5F5F5]', textColor: 'text-[#002147]' },
    { icon: Users, title: 'Great Team', description: 'Work with talented professionals in a collaborative environment', color: 'bg-[#F5F5F5]', textColor: 'text-[#002147]' },
    { icon: Shield, title: 'Job Security', description: 'Stable employment with a growing company in a vital industry', color: 'bg-[#C9A02B]', textColor: 'text-white' },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-12 shadow-xl text-center max-w-lg"
        >
          <div className="w-20 h-20 bg-[#002147] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-[#C9A02B]" size={40} />
          </div>
          <h2 className="text-2xl font-bold text-[#002147] mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for your interest in joining Avinella Global Resources. Our HR team will review your application and get back to you soon.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-[#002147] hover:bg-[#002147]/90 text-white rounded-full px-8"
          >
            Submit Another Application
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero — light bg, bold type */}
      <section className="relative bg-[#F5F5F5] pt-32 pb-0 overflow-hidden min-h-screen flex flex-col">
        <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col">
          <div className="max-w-4xl mb-12">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-xs font-semibold text-[#002147] mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#C9A02B]"></span>
                Join Our Team
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#002147] leading-[0.92] mb-8">
                Build Your<br />
                <span className="text-[#C9A02B]">Career</span><br />
                With Us
              </h1>
              <p className="text-gray-500 text-lg max-w-xl mb-8 leading-relaxed">
                Join a team of dedicated professionals making a difference in the offshore oil & gas industry across West Africa and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#openings" className="inline-flex items-center gap-2 bg-[#002147] text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-[#002147]/90 transition-all">
                  View Openings
                  <span className="w-8 h-8 bg-[#C9A02B] rounded-full flex items-center justify-center"><ArrowRight size={14} className="text-white" /></span>
                </a>
                <a href="#apply" className="inline-flex items-center gap-2 border border-[#002147]/20 text-[#002147] text-sm font-semibold px-6 py-2 rounded-full hover:bg-white transition-all">Submit Your CV</a>
              </div>
            </motion.div>
          </div>

          {/* Fan-style image cards */}
          <div className="flex items-end gap-4 pb-0 overflow-x-auto">
            {[
              { img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80', label: 'Team Culture', tag: 'People', rotate: '-rotate-6' },
              { img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80', label: 'Collaboration', tag: 'Teamwork', rotate: '-rotate-2' },
              { img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', label: 'Marine Careers', tag: 'Offshore', rotate: 'rotate-2' },
              { img: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=600&q=80', label: 'Engineering Roles', tag: 'Technical', rotate: 'rotate-5' },
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

      {/* Why Work Here — bento grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-semibold text-[#C9A02B] tracking-widest uppercase mb-3 block">Our Culture</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#002147] leading-tight">
                Why work<br />with us
              </h2>
            </motion.div>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed md:text-right">
              We invest in our people because they are our greatest asset — your growth is our growth.
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
                className={`${benefit.color} rounded-3xl p-7 flex flex-col gap-4 group hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center
                  ${benefit.textColor === 'text-white' ? 'bg-white/15' : 'bg-[#002147]/8 group-hover:bg-[#002147] transition-colors'}`}>
                  <benefit.icon size={22} className={benefit.textColor === 'text-white' ? 'text-white' : 'text-[#002147] group-hover:text-white transition-colors'} />
                </div>
                <div>
                  <h3 className={`font-bold text-base mb-1 ${benefit.textColor}`}>{benefit.title}</h3>
                  <p className={`text-sm leading-relaxed ${benefit.textColor === 'text-white' ? 'text-white/70' : 'text-gray-500'}`}>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-semibold text-[#C9A02B] tracking-widest uppercase mb-3 block">Open Roles</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#002147] leading-tight">Current Openings</h2>
            </motion.div>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed md:text-right">
              Explore our available positions and find your perfect fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {jobsLoading ? (
              [1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-3xl p-7 h-32 animate-pulse" />
              ))
            ) : openings.length === 0 ? (
              <div className="md:col-span-2 text-center py-12 text-gray-400">
                <Briefcase size={48} className="mx-auto mb-4 text-gray-200" />
                <p className="font-medium">No open positions right now</p>
                <p className="text-sm mt-1">Check back soon or submit an open application below.</p>
              </div>
            ) : (
              openings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-7 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="text-xs font-bold text-[#C9A02B] uppercase tracking-wider mb-1 block">{job.department}</span>
                    <h3 className="text-lg font-bold text-[#002147]">{job.title}</h3>
                  </div>
                  <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center group-hover:bg-[#002147] transition-colors">
                    <Briefcase size={18} className="text-[#002147] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="flex items-center gap-1.5 text-gray-500 text-xs bg-[#F5F5F5] px-3 py-1.5 rounded-full">
                    <MapPin size={12} />{job.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-500 text-xs bg-[#F5F5F5] px-3 py-1.5 rounded-full">
                    <Clock size={12} />{job.type}
                  </span>
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-1.5 text-[#002147] text-sm font-bold hover:gap-3 transition-all"
                >
                  Apply Now <ChevronRight size={16} />
                </a>
              </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden min-h-[420px] group order-2 lg:order-1"
            >
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80" alt="Interns" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-2 bg-[#C9A02B] text-white text-xs font-bold px-4 py-2 rounded-full">
                  <GraduationCap size={12} /> Internship Program
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#F5F5F5] rounded-3xl p-8 md:p-10 flex flex-col justify-center order-1 lg:order-2"
            >
              <span className="text-xs font-semibold text-[#C9A02B] tracking-widest uppercase mb-4 block">Graduate Program</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4 leading-tight">
                Kickstart Your Career
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Our internship program offers students and recent graduates the opportunity to gain hands-on experience in the offshore oil & gas industry alongside seasoned professionals.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Mentorship from industry experts',
                  'Hands-on project experience',
                  'Competitive stipend',
                  'Potential for full-time employment',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3">
                    <div className="w-6 h-6 bg-[#002147] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-[#C9A02B]" size={13} />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 bg-[#002147] text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-[#002147]/90 transition-all w-fit"
              >
                Apply for Internship
                <span className="w-8 h-8 bg-[#C9A02B] rounded-full flex items-center justify-center"><ArrowRight size={14} className="text-white" /></span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 bg-[#002147]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <span className="text-xs font-semibold text-[#C9A02B] tracking-widest uppercase mb-4 block">Apply Now</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to join<br />our team?
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Submit your application below and our HR team will be in touch within 5 business days.
              </p>
              <div className="space-y-4">
                {['Competitive compensation package', 'Comprehensive health coverage', 'Training & development opportunities', 'Work with industry leaders'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#C9A02B]/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-[#C9A02B]" size={13} />
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-10">
                <h3 className="text-xl font-bold text-[#002147] mb-6">Submit Your Application</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#002147] font-semibold text-xs uppercase tracking-wide">Full Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="rounded-xl border-gray-200" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#002147] font-semibold text-xs uppercase tracking-wide">Email Address</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="rounded-xl border-gray-200" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#002147] font-semibold text-xs uppercase tracking-wide">Phone Number</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 123 456 7890" className="rounded-xl border-gray-200" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position" className="text-[#002147] font-semibold text-xs uppercase tracking-wide">Position</Label>
                      <select id="position" name="position" value={formData.position} onChange={handleChange} className="w-full rounded-xl border border-gray-200 p-3 text-sm" required>
                        <option value="">Select Position</option>
                        {openings.map((job, i) => (<option key={i} value={job.title}>{job.title}</option>))}
                        <option value="Internship">Internship Program</option>
                        <option value="Other">Other / Open Application</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter" className="text-[#002147] font-semibold text-xs uppercase tracking-wide">Cover Letter</Label>
                    <Textarea id="coverLetter" name="coverLetter" value={formData.coverLetter} onChange={handleChange} placeholder="Tell us why you'd be a great fit..." rows={4} className="rounded-xl border-gray-200" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[#002147] font-semibold text-xs uppercase tracking-wide">Upload CV/Resume *</Label>
                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-[#C9A02B] transition-colors cursor-pointer">
                      <input type="file" onChange={handleFileChange} className="hidden" id="cv-upload" accept=".pdf,.doc,.docx" required />
                      <label htmlFor="cv-upload" className="cursor-pointer">
                        <Upload className="mx-auto text-gray-400 mb-2" size={28} />
                        {cvFile ? (
                          <p className="text-[#002147] font-semibold text-sm">{cvFile.name}</p>
                        ) : (
                          <p className="text-gray-500 text-sm"><span className="text-[#C9A02B] font-semibold">Click to upload</span> your CV</p>
                        )}
                        <p className="text-gray-400 text-xs mt-1">PDF, DOC, DOCX up to 5MB</p>
                      </label>
                    </div>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-[#002147] hover:bg-[#002147]/90 text-white rounded-2xl py-6 text-sm font-bold transition-all">
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
