import { supabase } from './supabase';

const SEED_IMAGES = [
  // HOME
  { page: 'home', section: 'hero', label: 'Hero Banner', image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80', alt_text: 'Offshore vessel at sea', sort_order: 0 },
  { page: 'home', section: 'services', label: 'Service Card 1 – Offshore Support', image_url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', alt_text: 'Offshore support and marine services', sort_order: 1 },
  { page: 'home', section: 'services', label: 'Service Card 2 – Procurement', image_url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80', alt_text: 'Procurement and equipment supply', sort_order: 2 },
  { page: 'home', section: 'services', label: 'Service Card 3 – Logistics', image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', alt_text: 'Logistics and supply chain', sort_order: 3 },
  { page: 'home', section: 'about', label: 'Who We Are Photo', image_url: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80', alt_text: 'Avinella Global team', sort_order: 4 },
  { page: 'home', section: 'fleet', label: 'Platform Supply Vessel', image_url: '/platform-supply-vessel.png', alt_text: 'Platform supply vessel', sort_order: 5 },
  { page: 'home', section: 'fleet', label: 'Crew Transportation & Training', image_url: '/crew-transportation-training.png', alt_text: 'Crew transportation and training', sort_order: 6 },
  { page: 'home', section: 'fleet', label: 'Emergency Response Operations', image_url: '/emergency-response-operations.png', alt_text: 'Emergency response operations', sort_order: 7 },
  { page: 'home', section: 'fleet', label: 'Platform Supply', image_url: '/platform-supply.png', alt_text: 'Platform supply operations', sort_order: 8 },
  { page: 'home', section: 'projects', label: 'Project 1 – Offshore Platform Supply', image_url: '/platform-supply-vessel.png', alt_text: 'Offshore platform supply project', sort_order: 9 },
  { page: 'home', section: 'projects', label: 'Project 2 – Marine Vessel Operations', image_url: '/emergency-response-operations.png', alt_text: 'Marine vessel operations', sort_order: 10 },
  { page: 'home', section: 'projects', label: 'Project 3 – Equipment Procurement', image_url: '/procurement-equipment-supply.png', alt_text: 'Subsea equipment procurement', sort_order: 11 },
  { page: 'home', section: 'projects', label: 'Project 4 – Crew Transport', image_url: '/crew-transportation-training.png', alt_text: 'Crew transport and training', sort_order: 12 },
  { page: 'home', section: 'banner', label: 'Stats Banner', image_url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600&q=80', alt_text: 'Offshore operations banner', sort_order: 13 },
  { page: 'home', section: 'cta', label: 'CTA Background', image_url: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1400&q=80', alt_text: 'Call to action background', sort_order: 14 },
  // ABOUT
  { page: 'about', section: 'hero', label: 'About Hero Background', image_url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80', alt_text: 'Avinella Global headquarters', sort_order: 0 },
  { page: 'about', section: 'gallery', label: 'Gallery Photo 1', image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', alt_text: 'Offshore operations', sort_order: 1 },
  { page: 'about', section: 'gallery', label: 'Gallery Photo 2', image_url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80', alt_text: 'Marine services', sort_order: 2 },
  { page: 'about', section: 'gallery', label: 'Gallery Photo 3', image_url: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80', alt_text: 'Team at work', sort_order: 3 },
  { page: 'about', section: 'gallery', label: 'Gallery Photo 4', image_url: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80', alt_text: 'Supply chain operations', sort_order: 4 },
  { page: 'about', section: 'cta', label: 'About CTA Background', image_url: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1400&q=80', alt_text: 'CTA background', sort_order: 5 },
  // SERVICES
  { page: 'services', section: 'fan', label: 'Fan Card 1 – Marine Services', image_url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', alt_text: 'Marine services', sort_order: 0 },
  { page: 'services', section: 'fan', label: 'Fan Card 2 – Vessel Operations', image_url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', alt_text: 'Vessel operations', sort_order: 1 },
  { page: 'services', section: 'fan', label: 'Fan Card 3 – Equipment Supply', image_url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80', alt_text: 'Equipment supply', sort_order: 2 },
  { page: 'services', section: 'fan', label: 'Fan Card 4 – Supply Chain', image_url: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80', alt_text: 'Supply chain', sort_order: 3 },
  { page: 'services', section: 'fan', label: 'Fan Card 5 – Safety Training', image_url: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80', alt_text: 'Safety training', sort_order: 4 },
  { page: 'services', section: 'why', label: 'Why Choose Us – Main', image_url: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=900&q=80', alt_text: 'Integrated solutions', sort_order: 5 },
  { page: 'services', section: 'grid', label: 'Grid Card 1 – Marine Vessel Chartering', image_url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', alt_text: 'Marine vessel chartering', sort_order: 6 },
  { page: 'services', section: 'grid', label: 'Grid Card 2 – Geotechnical Survey', image_url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', alt_text: 'Geotechnical survey', sort_order: 7 },
  { page: 'services', section: 'grid', label: 'Grid Card 3 – Survey Equipment', image_url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80', alt_text: 'Survey equipment', sort_order: 8 },
  { page: 'services', section: 'grid', label: 'Grid Card 4 – Rig & Platform Supply', image_url: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80', alt_text: 'Rig and platform supply', sort_order: 9 },
  { page: 'services', section: 'grid', label: 'Grid Card 5 – Personnel Logistics', image_url: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80', alt_text: 'Offshore personnel logistics', sort_order: 10 },
  { page: 'services', section: 'grid', label: 'Grid Card 6 – Subsea Equipment', image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', alt_text: 'Subsea equipment handling', sort_order: 11 },
  { page: 'services', section: 'grid', label: 'Grid Card 7 – Emergency Response', image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', alt_text: 'Emergency response', sort_order: 12 },
  { page: 'services', section: 'grid', label: 'Grid Card 8 – Asset Integrity', image_url: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80', alt_text: 'Asset integrity management', sort_order: 13 },
  { page: 'services', section: 'grid', label: 'Grid Card 9 – Training Services', image_url: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80', alt_text: 'Offshore training services', sort_order: 14 },
  { page: 'services', section: 'choose', label: 'Choose Us Gallery 1', image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', alt_text: 'Marine operations', sort_order: 15 },
  { page: 'services', section: 'choose', label: 'Choose Us Gallery 2', image_url: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80', alt_text: 'Equipment', sort_order: 16 },
  { page: 'services', section: 'choose', label: 'Choose Us Gallery 3', image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', alt_text: 'Logistics', sort_order: 17 },
  { page: 'services', section: 'choose', label: 'Choose Us Gallery 4', image_url: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80', alt_text: 'Supply chain', sort_order: 18 },
  { page: 'services', section: 'cta', label: 'Services CTA', image_url: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1400&q=80', alt_text: 'Services CTA background', sort_order: 19 },
  // OFFSHORE
  { page: 'offshore', section: 'hero', label: 'Offshore Hero Background', image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80', alt_text: 'Offshore vessel at sea', sort_order: 0 },
  { page: 'offshore', section: 'capabilities', label: 'Marine Operations Photo', image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', alt_text: 'Marine operations', sort_order: 1 },
  // PROCUREMENT
  { page: 'procurement', section: 'hero', label: 'Procurement Hero Photo', image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', alt_text: 'Equipment supply warehouse', sort_order: 0 },
  { page: 'procurement', section: 'capabilities', label: 'Equipment Warehouse Photo', image_url: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80', alt_text: 'Equipment warehouse', sort_order: 1 },
  // LOGISTICS
  { page: 'logistics', section: 'hero', label: 'Logistics Hero Photo', image_url: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80', alt_text: 'Logistics operations', sort_order: 0 },
  { page: 'logistics', section: 'capabilities', label: 'Supply Chain Photo', image_url: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80', alt_text: 'Supply chain management', sort_order: 1 },
  // HSE
  { page: 'hse', section: 'hero', label: 'HSE Hero Background', image_url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80', alt_text: 'HSE safety operations', sort_order: 0 },
  { page: 'hse', section: 'commitment', label: 'Safety Commitment Photo', image_url: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80', alt_text: 'Safety commitment', sort_order: 1 },
  { page: 'hse', section: 'environment', label: 'Environmental Protection Photo', image_url: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80', alt_text: 'Environmental protection', sort_order: 2 },
  { page: 'hse', section: 'cta', label: 'HSE CTA Background', image_url: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1400&q=80', alt_text: 'HSE CTA', sort_order: 3 },
  // TRAINING
  { page: 'training', section: 'hero', label: 'Training Hero Background', image_url: '/training-competence.png', alt_text: 'Training and competence', sort_order: 0 },
  { page: 'training', section: 'fan', label: 'Training Fan Card 1', image_url: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80', alt_text: 'Safety training', sort_order: 1 },
  { page: 'training', section: 'fan', label: 'Training Fan Card 2', image_url: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80', alt_text: 'Technical training', sort_order: 2 },
  { page: 'training', section: 'fan', label: 'Training Fan Card 3', image_url: '/crew-transportation-training.png', alt_text: 'Crew training', sort_order: 3 },
  { page: 'training', section: 'cta', label: 'Training CTA', image_url: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1400&q=80', alt_text: 'Training CTA', sort_order: 4 },
  // CAREERS
  { page: 'careers', section: 'hero', label: 'Careers Hero', image_url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80', alt_text: 'Careers at Avinella', sort_order: 0 },
  { page: 'careers', section: 'culture', label: 'Company Culture', image_url: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80', alt_text: 'Company culture', sort_order: 1 },
  { page: 'careers', section: 'internship', label: 'Internship Programme', image_url: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&q=80', alt_text: 'Internship programme', sort_order: 2 },
  // CONTACT
  { page: 'contact', section: 'hero', label: 'Contact Hero Background', image_url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80', alt_text: 'Contact us', sort_order: 0 },
];

const SEED_CONTENT = [
  // HOME HERO
  { page: 'home', section: 'hero', key: 'badge', value: 'Trusted Offshore Partner', label: 'Hero Badge', content_type: 'text', sort_order: 1 },
  { page: 'home', section: 'hero', key: 'headline_1', value: 'Offshore', label: 'Hero Headline Line 1', content_type: 'text', sort_order: 2 },
  { page: 'home', section: 'hero', key: 'headline_2', value: 'Support &', label: 'Hero Headline Line 2', content_type: 'text', sort_order: 3 },
  { page: 'home', section: 'hero', key: 'headline_3', value: 'Marine Services', label: 'Hero Headline Line 3', content_type: 'text', sort_order: 4 },
  { page: 'home', section: 'hero', key: 'description', value: 'Avinella Global Resources LTD delivers world-class offshore support, procurement, and logistics services across West Africa and beyond.', label: 'Hero Description', content_type: 'textarea', sort_order: 5 },
  { page: 'home', section: 'hero', key: 'cta_primary', value: 'Explore Our Services', label: 'Primary CTA Button', content_type: 'text', sort_order: 6 },
  { page: 'home', section: 'hero', key: 'cta_secondary', value: 'Contact Us', label: 'Secondary CTA Button', content_type: 'text', sort_order: 7 },
  // HOME STATS
  { page: 'home', section: 'stats', key: 'stat_1_value', value: '10+', label: 'Stat 1 Value', content_type: 'text', sort_order: 1 },
  { page: 'home', section: 'stats', key: 'stat_1_label', value: 'Projects Delivered', label: 'Stat 1 Label', content_type: 'text', sort_order: 2 },
  { page: 'home', section: 'stats', key: 'stat_2_value', value: '98%', label: 'Stat 2 Value', content_type: 'text', sort_order: 3 },
  { page: 'home', section: 'stats', key: 'stat_2_label', value: 'On-Time Delivery Rate', label: 'Stat 2 Label', content_type: 'text', sort_order: 4 },
  { page: 'home', section: 'stats', key: 'stat_3_value', value: '85%', label: 'Stat 3 Value', content_type: 'text', sort_order: 5 },
  { page: 'home', section: 'stats', key: 'stat_3_label', value: 'Client Retention Rate', label: 'Stat 3 Label', content_type: 'text', sort_order: 6 },
  // HOME SERVICES
  { page: 'home', section: 'services', key: 'card_1_tag', value: 'Marine', label: 'Card 1 Tag', content_type: 'text', sort_order: 1 },
  { page: 'home', section: 'services', key: 'card_1_title', value: 'Offshore Support & Marine Services', label: 'Card 1 Title', content_type: 'text', sort_order: 2 },
  { page: 'home', section: 'services', key: 'card_1_desc', value: 'Platform supply vessels, crew boats, AHTS vessels, and 24/7 emergency response across West Africa.', label: 'Card 1 Description', content_type: 'textarea', sort_order: 3 },
  { page: 'home', section: 'services', key: 'card_2_tag', value: 'Procurement', label: 'Card 2 Tag', content_type: 'text', sort_order: 4 },
  { page: 'home', section: 'services', key: 'card_2_title', value: 'Procurement & Equipment Supply', label: 'Card 2 Title', content_type: 'text', sort_order: 5 },
  { page: 'home', section: 'services', key: 'card_2_desc', value: 'High-quality offshore equipment, safety gear, and technical instruments from world-leading manufacturers.', label: 'Card 2 Description', content_type: 'textarea', sort_order: 6 },
  { page: 'home', section: 'services', key: 'card_3_tag', value: 'Logistics', label: 'Card 3 Tag', content_type: 'text', sort_order: 7 },
  { page: 'home', section: 'services', key: 'card_3_title', value: 'Logistics & Supply Chain', label: 'Card 3 Title', content_type: 'text', sort_order: 8 },
  { page: 'home', section: 'services', key: 'card_3_desc', value: 'End-to-end logistics from warehousing to just-in-time delivery at offshore installations.', label: 'Card 3 Description', content_type: 'textarea', sort_order: 9 },
  // HOME ABOUT
  { page: 'home', section: 'about', key: 'title', value: 'Who We Are', label: 'About Section Title', content_type: 'text', sort_order: 1 },
  { page: 'home', section: 'about', key: 'subtitle', value: "Nigeria's Premier Offshore Support Company", label: 'About Section Subtitle', content_type: 'text', sort_order: 2 },
  { page: 'home', section: 'about', key: 'description', value: "Avinella Global Resources LTD is a leading provider of offshore support, marine, and logistics services in Nigeria and across West Africa. Since 2018, we have delivered world-class solutions to oil & gas operators, supporting exploration, production, and logistics operations.", label: 'About Description', content_type: 'textarea', sort_order: 3 },
  { page: 'home', section: 'about', key: 'cta', value: 'Learn More About Us', label: 'About CTA Button', content_type: 'text', sort_order: 4 },
  // ABOUT PAGE
  { page: 'about', section: 'overview', key: 'title', value: 'About Avinella Global Resources LTD', label: 'Page Title', content_type: 'text', sort_order: 1 },
  { page: 'about', section: 'overview', key: 'subtitle', value: "Nigeria's Premier Offshore Support Company", label: 'Subtitle', content_type: 'text', sort_order: 2 },
  { page: 'about', section: 'overview', key: 'body', value: 'Avinella Global Resources LTD is a leading provider of offshore support, marine, and logistics services in Nigeria and across West Africa. Founded in 2018, we have grown from a focused marine services provider to a comprehensive offshore support company delivering integrated solutions across the energy value chain.', label: 'Body Text', content_type: 'textarea', sort_order: 3 },
  { page: 'about', section: 'mission', key: 'mission_title', value: 'Our Mission', label: 'Mission Title', content_type: 'text', sort_order: 1 },
  { page: 'about', section: 'mission', key: 'mission_body', value: 'To deliver world-class offshore support services with the highest standards of safety, quality and environmental stewardship, enabling our clients to achieve their operational objectives efficiently and responsibly.', label: 'Mission Body', content_type: 'textarea', sort_order: 2 },
  { page: 'about', section: 'mission', key: 'vision_title', value: 'Our Vision', label: 'Vision Title', content_type: 'text', sort_order: 3 },
  { page: 'about', section: 'mission', key: 'vision_body', value: 'To be the foremost offshore support and marine services company in West Africa, recognized for operational excellence, innovation and commitment to sustainable development.', label: 'Vision Body', content_type: 'textarea', sort_order: 4 },
  // HSE PAGE
  { page: 'hse', section: 'hero', key: 'badge', value: 'Health, Safety & Environment', label: 'Hero Badge', content_type: 'text', sort_order: 1 },
  { page: 'hse', section: 'hero', key: 'title', value: 'Our Commitment to HSE Excellence', label: 'Hero Title', content_type: 'text', sort_order: 2 },
  { page: 'hse', section: 'hero', key: 'description', value: 'Safety is not just a policy at Avinella — it is our culture. We maintain the highest standards of health, safety and environmental protection in all our operations.', label: 'Hero Description', content_type: 'textarea', sort_order: 3 },
  { page: 'hse', section: 'commitment', key: 'title', value: 'Safety Commitment', label: 'Commitment Title', content_type: 'text', sort_order: 1 },
  { page: 'hse', section: 'commitment', key: 'body', value: 'We are committed to achieving zero harm across all our operations. Our comprehensive HSE management system ensures that every team member, contractor, and stakeholder operates in a safe and healthy environment.', label: 'Commitment Body', content_type: 'textarea', sort_order: 2 },
  { page: 'hse', section: 'environment', key: 'title', value: 'Environmental Protection', label: 'Environment Title', content_type: 'text', sort_order: 1 },
  { page: 'hse', section: 'environment', key: 'body', value: 'Avinella is fully committed to environmental stewardship. We implement rigorous environmental management procedures to minimize the impact of our operations on the natural environment.', label: 'Environment Body', content_type: 'textarea', sort_order: 2 },
  // TRAINING PAGE
  { page: 'training', section: 'hero', key: 'badge', value: 'Training & Competence', label: 'Hero Badge', content_type: 'text', sort_order: 1 },
  { page: 'training', section: 'hero', key: 'title', value: 'Building a Competent Offshore Workforce', label: 'Hero Title', content_type: 'text', sort_order: 2 },
  { page: 'training', section: 'hero', key: 'description', value: 'Avinella provides industry-certified training programs to develop competent, safety-conscious offshore personnel ready for the demands of modern energy operations.', label: 'Hero Description', content_type: 'textarea', sort_order: 3 },
  { page: 'training', section: 'hero', key: 'cta', value: 'Register for Training', label: 'CTA Button', content_type: 'text', sort_order: 4 },
  { page: 'training', section: 'courses', key: 'course_1_title', value: 'BOSIET & HUET Certification', label: 'Course 1 Title', content_type: 'text', sort_order: 1 },
  { page: 'training', section: 'courses', key: 'course_1_desc', value: 'Basic Offshore Safety Induction and Emergency Training including Helicopter Underwater Escape Training', label: 'Course 1 Description', content_type: 'textarea', sort_order: 2 },
  { page: 'training', section: 'courses', key: 'course_2_title', value: 'H2S Safety Training', label: 'Course 2 Title', content_type: 'text', sort_order: 3 },
  { page: 'training', section: 'courses', key: 'course_2_desc', value: 'Hydrogen Sulfide awareness and safety procedures for offshore personnel', label: 'Course 2 Description', content_type: 'textarea', sort_order: 4 },
  { page: 'training', section: 'courses', key: 'course_3_title', value: 'Rigging & Lifting', label: 'Course 3 Title', content_type: 'text', sort_order: 5 },
  { page: 'training', section: 'courses', key: 'course_3_desc', value: 'Safe rigging, slinging, and lifting operations for offshore environments', label: 'Course 3 Description', content_type: 'textarea', sort_order: 6 },
  { page: 'training', section: 'courses', key: 'course_4_title', value: 'First Aid & Firefighting', label: 'Course 4 Title', content_type: 'text', sort_order: 7 },
  { page: 'training', section: 'courses', key: 'course_4_desc', value: 'Emergency first aid, CPR, and marine firefighting techniques', label: 'Course 4 Description', content_type: 'textarea', sort_order: 8 },
  { page: 'training', section: 'courses', key: 'course_5_title', value: 'Dynamic Positioning (DP)', label: 'Course 5 Title', content_type: 'text', sort_order: 9 },
  { page: 'training', section: 'courses', key: 'course_5_desc', value: 'DP Operator and Induction courses for vessel officers', label: 'Course 5 Description', content_type: 'textarea', sort_order: 10 },
  { page: 'training', section: 'courses', key: 'course_6_title', value: 'Competency Assessments', label: 'Course 6 Title', content_type: 'text', sort_order: 11 },
  { page: 'training', section: 'courses', key: 'course_6_desc', value: 'Structured competency frameworks and assessments for offshore roles', label: 'Course 6 Description', content_type: 'textarea', sort_order: 12 },
  // CAREERS PAGE
  { page: 'careers', section: 'hero', key: 'badge', value: 'Careers at Avinella', label: 'Hero Badge', content_type: 'text', sort_order: 1 },
  { page: 'careers', section: 'hero', key: 'title', value: 'Join Our World-Class Team', label: 'Hero Title', content_type: 'text', sort_order: 2 },
  { page: 'careers', section: 'hero', key: 'description', value: "Build your career with Nigeria's premier offshore support company. We offer challenging roles, competitive packages, and opportunities to work on exciting projects across West Africa.", label: 'Hero Description', content_type: 'textarea', sort_order: 3 },
  { page: 'careers', section: 'why', key: 'title', value: 'Why Work at Avinella', label: 'Why Work Here Title', content_type: 'text', sort_order: 1 },
  { page: 'careers', section: 'why', key: 'benefit_1', value: 'Competitive salary & benefits package', label: 'Benefit 1', content_type: 'text', sort_order: 2 },
  { page: 'careers', section: 'why', key: 'benefit_2', value: 'International working environment', label: 'Benefit 2', content_type: 'text', sort_order: 3 },
  { page: 'careers', section: 'why', key: 'benefit_3', value: 'Career development & training opportunities', label: 'Benefit 3', content_type: 'text', sort_order: 4 },
  { page: 'careers', section: 'why', key: 'benefit_4', value: 'Work on cutting-edge offshore projects', label: 'Benefit 4', content_type: 'text', sort_order: 5 },
  { page: 'careers', section: 'why', key: 'benefit_5', value: 'Safety-first culture with zero-LTI record', label: 'Benefit 5', content_type: 'text', sort_order: 6 },
  { page: 'careers', section: 'why', key: 'benefit_6', value: 'Health insurance & welfare programmes', label: 'Benefit 6', content_type: 'text', sort_order: 7 },
  { page: 'careers', section: 'internship', key: 'title', value: 'Internship & Graduate Programme', label: 'Internship Title', content_type: 'text', sort_order: 1 },
  { page: 'careers', section: 'internship', key: 'description', value: 'Avinella offers structured internship and graduate programmes for engineering, business, and marine disciplines. Gain hands-on experience working alongside industry professionals on live offshore projects.', label: 'Internship Description', content_type: 'textarea', sort_order: 2 },
  { page: 'careers', section: 'internship', key: 'duration', value: '3 – 12 months', label: 'Programme Duration', content_type: 'text', sort_order: 3 },
  { page: 'careers', section: 'internship', key: 'cta', value: 'Apply for Internship', label: 'Internship CTA', content_type: 'text', sort_order: 4 },
  // CONTACT PAGE
  { page: 'contact', section: 'info', key: 'company_name', value: 'Avinella Global Resources LTD', label: 'Company Name', content_type: 'text', sort_order: 1 },
  { page: 'contact', section: 'info', key: 'address', value: '1 Eleganza Plaza, Victoria Island, Lagos, Nigeria', label: 'Office Address', content_type: 'text', sort_order: 2 },
  { page: 'contact', section: 'info', key: 'phone_1', value: '+234 803 000 0000', label: 'Phone 1', content_type: 'text', sort_order: 3 },
  { page: 'contact', section: 'info', key: 'phone_2', value: '+234 816 000 0000', label: 'Phone 2', content_type: 'text', sort_order: 4 },
  { page: 'contact', section: 'info', key: 'email_general', value: 'info@avinellaglobal.com', label: 'General Email', content_type: 'text', sort_order: 5 },
  { page: 'contact', section: 'info', key: 'email_hr', value: 'careers@avinellaglobal.com', label: 'HR/Careers Email', content_type: 'text', sort_order: 6 },
  { page: 'contact', section: 'info', key: 'hours', value: 'Monday – Friday: 8:00 AM – 6:00 PM (WAT)', label: 'Office Hours', content_type: 'text', sort_order: 7 },
  { page: 'contact', section: 'hero', key: 'title', value: 'Get In Touch With Us', label: 'Contact Page Title', content_type: 'text', sort_order: 1 },
  { page: 'contact', section: 'hero', key: 'description', value: 'Have a project in mind or need a quote? Our team is ready to discuss your offshore support requirements. Reach out to us and we will get back to you within 24 hours.', label: 'Contact Page Description', content_type: 'textarea', sort_order: 2 },
];

const SEED_JOBS = [
  {
    title: 'Marine Operations Manager',
    department: 'Marine Operations',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Lead and manage day-to-day marine vessel operations, ensuring safe, efficient, and cost-effective execution of all offshore support activities. Coordinate with vessel masters, port agents, and clients.',
    requirements: 'Minimum 8 years in marine operations\nClass 1 Master (Unlimited) or equivalent\nProven leadership experience\nKnowledge of offshore oil & gas industry\nStrong HSE background',
    is_active: true,
  },
  {
    title: 'HSE Coordinator',
    department: 'Health, Safety & Environment',
    location: 'Port Harcourt, Nigeria',
    type: 'Full-time',
    description: 'Implement and monitor the company HSE Management System across all offshore and onshore operations. Conduct safety audits, incident investigations, and deliver HSE training programmes.',
    requirements: 'Degree in Safety Engineering or related field\nNEBOSH or IOSH certification\nMinimum 5 years HSE experience in oil & gas\nFamiliar with ISO 45001 and ISO 14001',
    is_active: true,
  },
  {
    title: 'Procurement Specialist',
    department: 'Procurement & Supply Chain',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Source, negotiate, and procure offshore equipment, consumables, and services from local and international suppliers. Manage vendor relationships and ensure on-time delivery to offshore locations.',
    requirements: 'Degree in Supply Chain, Engineering, or Business\nMinimum 4 years procurement experience in oil & gas\nProficient in ERP procurement systems\nStrong negotiation and communication skills',
    is_active: true,
  },
  {
    title: 'Vessel Captain (PSV)',
    department: 'Marine Operations',
    location: 'Offshore – Nigeria',
    type: 'Rotational (4/4)',
    description: 'Command a Platform Supply Vessel (PSV) and ensure safe and efficient vessel operations, crew management, cargo handling, and compliance with SOLAS, MARPOL, and company procedures.',
    requirements: 'STCW Class 1 Master Certificate (Unlimited)\nMinimum 3 years as Master on PSV or offshore vessel\nDP Operator Certificate (DPOP/DPOQ)\nFamiliar with DP2 class vessels\nNIMASA endorsement required',
    is_active: true,
  },
  {
    title: 'Logistics Coordinator',
    department: 'Logistics & Supply Chain',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Coordinate end-to-end logistics for offshore supply operations including freight forwarding, customs clearance, warehousing, and transportation. Liaise with offshore teams, port agents, and clients.',
    requirements: 'Degree in Logistics, Business, or related field\nMinimum 3 years logistics experience, preferably in oil & gas\nKnowledge of Nigerian customs and import regulations\nProficient in MS Office and logistics systems',
    is_active: true,
  },
  {
    title: 'Marine Engineer (Chief)',
    department: 'Marine Engineering',
    location: 'Offshore – Nigeria',
    type: 'Rotational (4/4)',
    description: 'Responsible for the overall engineering operation, maintenance, and repair of all machinery and mechanical equipment aboard the vessel. Ensure compliance with class, flag state, and company requirements.',
    requirements: 'Class 1 Engineer Certificate of Competency\nMinimum 3 years as Chief Engineer on similar vessel type\nStrong knowledge of diesel engines, hydraulics, and automation systems\nSTCW certifications current',
    is_active: true,
  },
];

export async function seedAllContent(): Promise<{ success: boolean; message: string }> {
  try {
    // Seed images
    const { error: imgError } = await supabase.from('site_images').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    if (imgError) throw imgError;
    const { error: imgInsertError } = await supabase.from('site_images').insert(SEED_IMAGES);
    if (imgInsertError) throw imgInsertError;

    // Seed content
    const { error: contentError } = await supabase.from('site_content').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    if (contentError) throw contentError;
    const { error: contentInsertError } = await supabase.from('site_content').insert(SEED_CONTENT);
    if (contentInsertError) throw contentInsertError;

    // Seed jobs only if none exist
    const { count } = await supabase.from('job_listings').select('*', { count: 'exact', head: true });
    if ((count ?? 0) === 0) {
      const { error: jobsError } = await supabase.from('job_listings').insert(SEED_JOBS);
      if (jobsError) throw jobsError;
    }

    return { success: true, message: `Seeded ${SEED_IMAGES.length} images, ${SEED_CONTENT.length} content fields, and ${(count ?? 0) === 0 ? SEED_JOBS.length : 0} job listings.` };
  } catch (err: any) {
    return { success: false, message: err.message ?? String(err) };
  }
}

export async function isContentEmpty(): Promise<boolean> {
  const { count } = await supabase.from('site_images').select('*', { count: 'exact', head: true });
  return (count ?? 0) === 0;
}
