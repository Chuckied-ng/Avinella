import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { supabase } from '@/lib/supabase';
import { useSiteContent } from '@/lib/useSiteContent';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Upload,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export default function Contact() {
  const c = useSiteContent('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await supabase.from('contact_submissions').insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        subject: formData.subject,
        message: formData.message,
      }]);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email Us', details: c('info', 'email_1', 'info@avinellaglobal.com'), subtext: 'We respond within 24 hours', color: 'bg-[#002147]', textColor: 'text-white' },
    { icon: Phone, title: 'Call Us', details: c('info', 'phone_1', '+234 (0) 123 456 7890'), subtext: c('info', 'hours', 'Mon-Fri from 8am to 5pm'), color: 'bg-[#C9A02B]', textColor: 'text-white' },
    { icon: MapPin, title: 'Visit Us', details: c('info', 'address_2', 'Lagos, Nigeria'), subtext: 'Head Office Location', color: 'bg-[#002147]', textColor: 'text-white' },
    { icon: Clock, title: 'Business Hours', details: 'Mon - Fri: 8AM - 5PM', subtext: '24/7 Emergency Support', color: 'bg-[#C9A02B]', textColor: 'text-white' },
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
          <h2 className="text-2xl font-bold text-[#002147] mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
          <Button onClick={() => setIsSubmitted(false)} className="bg-[#002147] hover:bg-[#002147]/90 text-white rounded-full px-8">
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero — dark full screen */}
      <section className="relative bg-[#002147] min-h-[60vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
            alt="Contact"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002147]/70 to-[#002147]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-xs font-semibold text-white mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C9A02B]"></span>
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-6">
              Let's Start<br />
              <span className="text-[#C9A02B]">a Conversation</span>
            </h1>
            <p className="text-white/60 text-lg max-w-lg leading-relaxed">
              Have questions about our services? Ready to start a project? Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${item.color} rounded-3xl p-7 group`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5
                  ${item.textColor === 'text-white' ? 'bg-white/15' : 'bg-[#002147]/8'}`}>
                  <item.icon size={22} className={item.textColor === 'text-white' ? 'text-white' : 'text-[#002147]'} />
                </div>
                <h3 className={`font-bold text-base mb-1 ${item.textColor}`}>{item.title}</h3>
                <p className={`font-semibold text-sm mb-1 ${item.textColor}`}>{item.details}</p>
                <p className={`text-xs ${item.textColor === 'text-white' ? 'text-white/60' : 'text-gray-400'}`}>{item.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#002147] rounded-3xl p-8 md:p-10">
                <span className="text-xs font-semibold text-[#C9A02B] tracking-widest uppercase mb-4 block">Send a Message</span>
                <h2 className="text-3xl font-bold text-white mb-8 leading-tight">
                  We'd love to<br />hear from you
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/70 font-semibold text-xs uppercase tracking-wide">Full Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#C9A02B]" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/70 font-semibold text-xs uppercase tracking-wide">Email Address</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#C9A02B]" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white/70 font-semibold text-xs uppercase tracking-wide">Phone Number</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 123 456 7890" className="rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#C9A02B]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white/70 font-semibold text-xs uppercase tracking-wide">Company</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" className="rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#C9A02B]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white/70 font-semibold text-xs uppercase tracking-wide">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help you?" className="rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#C9A02B]" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/70 font-semibold text-xs uppercase tracking-wide">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more about your inquiry..." rows={4} className="rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#C9A02B] resize-none" required />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label className="text-white/70 font-semibold text-xs uppercase tracking-wide">Attachment (Optional)</Label>
                    <div className="border-2 border-dashed border-white/20 rounded-2xl p-5 text-center hover:border-[#C9A02B] transition-colors cursor-pointer">
                      <input type="file" onChange={handleFileChange} className="hidden" id="file-upload" />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="mx-auto text-white/40 mb-2" size={24} />
                        {file ? (
                          <p className="text-[#C9A02B] font-semibold text-sm">{file.name}</p>
                        ) : (
                          <p className="text-white/50 text-sm"><span className="text-[#C9A02B] font-semibold">Click to upload</span> or drag and drop</p>
                        )}
                        <p className="text-white/30 text-xs mt-1">PDF, DOC, DOCX up to 10MB</p>
                      </label>
                    </div>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-[#C9A02B] hover:bg-[#b8912a] text-white rounded-2xl py-6 text-sm font-bold transition-all">
                    {isSubmitting ? 'Sending...' : (
                      <span className="flex items-center justify-center gap-2">Send Message <Send size={16} /></span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map + FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-[#F5F5F5] rounded-3xl overflow-hidden" style={{ height: 380 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63893344655!2d3.1191412573828133!3d6.548376785214764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Company details card */}
              <div className="bg-[#F5F5F5] rounded-3xl p-8">
                <h3 className="text-xl font-bold text-[#002147] mb-6">Company Details</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: 'Head Office', value: 'Lagos, Nigeria' },
                    { icon: Phone, label: 'Main Line', value: '+234 (0) 123 456 7890' },
                    { icon: Mail, label: 'Email', value: 'info@avinellaglobal.com' },
                    { icon: Clock, label: 'Hours', value: 'Mon–Fri: 8AM–5PM | Emergency: 24/7' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-[#002147]/8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="text-[#002147]" size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#C9A02B] uppercase tracking-wide mb-0.5">{item.label}</p>
                        <p className="text-[#002147] text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-[#002147] rounded-3xl p-8">
                <h3 className="text-lg font-bold text-white mb-5">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {[
                    { q: 'What is your response time?', a: 'We respond to all inquiries within 24 business hours.' },
                    { q: 'Do you offer 24/7 support?', a: 'Yes, we provide round-the-clock emergency support for our clients.' },
                    { q: 'Which regions do you serve?', a: 'We operate across West Africa and have global partnership networks.' },
                  ].map((faq, i) => (
                    <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-white text-sm mb-1">{faq.q}</h4>
                      <p className="text-white/50 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
