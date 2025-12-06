import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import { generateFAQSchema, generateWebPageSchema, businessInfo } from '@/lib/seo';

// Enhanced metadata for homepage
export const metadata: Metadata = {
  title: '#1 Landscaping Company in DFW Metroplex | Professional Landscapers',
  description: `DFW's premier landscaping company with 15+ years experience. Expert hardscaping, landscape design, paver installation, sod, irrigation, tree planting & more. ⭐ 5-Star Rated | 1000+ Projects. Serving Fort Worth, Dallas, Arlington, Mansfield & all DFW. Call ${businessInfo.phone} for FREE estimate!`,
  keywords: [
    'landscaping DFW',
    'Dallas landscaping company',
    'Fort Worth landscaper',
    'landscaper in DFW',
    'hardscaping Dallas Fort Worth',
    'landscape design DFW',
    'paver installation Dallas',
    'best landscaper Fort Worth',
    'landscaping near me',
    'lawn care DFW',
    'outdoor living Dallas',
    'sod installation Fort Worth',
    'tree planting DFW',
    'irrigation Dallas',
    'retaining walls Fort Worth',
    'Arlington landscaping',
    'Plano landscaping',
    'Frisco landscaping',
  ].join(', '),
  openGraph: {
    title: 'DFW Landscaping Pros | #1 Rated Landscaping Company in Dallas-Fort Worth',
    description: 'Transform your outdoor space with DFW\'s top-rated landscaping company. 15+ years experience, 1000+ projects completed. Free estimates!',
    url: businessInfo.url,
    images: [
      {
        url: '/images/services/hardscaping/DSC04265-2048x1152-1.jpg',
        width: 1200,
        height: 630,
        alt: 'DFW Landscaping Professional Hardscaping',
      },
    ],
  },
  alternates: {
    canonical: businessInfo.url,
  },
};

// Comprehensive FAQ for SEO
const faqs = [
  {
    question: 'What landscaping services do you offer in DFW?',
    answer: 'We offer comprehensive landscaping services including landscape design, hardscaping, paver installation, sod installation, tree planting, mulching, irrigation systems, outdoor lighting, retaining walls, French drains, and seasonal maintenance. We are a full-service DFW landscaping company.'
  },
  {
    question: 'What areas do you serve in the DFW Metroplex?',
    answer: 'We proudly serve the entire Dallas-Fort Worth Metroplex, including Dallas, Fort Worth, Arlington, Plano, Irving, Garland, Grand Prairie, McKinney, Frisco, Mansfield, Southlake, Colleyville, Grapevine, and all surrounding communities.'
  },
  {
    question: 'Do you offer free landscaping estimates?',
    answer: 'Yes! We provide free, no-obligation estimates for all landscaping and hardscaping projects. Contact us to schedule a consultation with our DFW landscaping experts.'
  },
  {
    question: 'How long does a typical landscaping project take?',
    answer: 'Project timelines vary based on scope. Small projects like mulching or sod installation take 1-2 days. Medium projects like paver patios take 1-2 weeks. Large landscape renovations may take 2-4 weeks. We provide detailed timelines during your estimate.'
  },
  {
    question: 'Are you a licensed and insured landscaping company?',
    answer: 'Yes, DFW Landscaping Pros is fully licensed and insured. We carry comprehensive liability insurance and workers\' compensation to protect your property and our team.'
  },
  {
    question: 'Do you offer warranties on landscaping work?',
    answer: 'Yes, we provide warranties on both materials and labor. Plant materials come with a 1-year warranty, and hardscaping work is backed by our workmanship guarantee. We stand behind our work.'
  },
  {
    question: 'What makes DFW Landscaping Pros different from other landscapers?',
    answer: 'With 15+ years of experience, 1000+ completed projects, and a 5-star rating, we combine expertise with exceptional customer service. Our team consists of trained professionals who treat your property like their own. We are locally owned and operated in the DFW area.'
  },
  {
    question: 'How do I get started with a landscaping project?',
    answer: `Getting started is easy! Call us at ${businessInfo.phone} or fill out our online contact form. We'll schedule a free on-site consultation to discuss your vision, provide recommendations, and deliver a detailed estimate.`
  },
  {
    question: 'What is the best time of year for landscaping in Texas?',
    answer: 'In North Texas, fall (September-November) and spring (March-May) are ideal for most landscaping projects. These seasons offer moderate temperatures that help plants establish roots. However, we work year-round and can advise on the best timing for your specific project.'
  },
  {
    question: 'Do you offer financing for landscaping projects?',
    answer: 'Yes, we offer flexible financing options for larger landscaping and hardscaping projects. Ask about our payment plans during your free consultation. We accept cash, checks, and all major credit cards.'
  },
];

export default function Home() {
  const webPageSchema = generateWebPageSchema({
    title: 'DFW Landscaping Pros - Premier Landscaping Services in Dallas-Fort Worth',
    description: businessInfo.description,
    url: '/',
  });

  return (
    <>
      {/* FAQ Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} 
      />
      
      {/* WebPage Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} 
      />
      
      {/* Hero Section */}
      <Hero backgroundImage="/images/services/hardscaping/DSC04265-2048x1152-1.jpg" />
      
      {/* Services Section */}
      <Services limit={4} />
      
      {/* Meet the Team Section */}
      <Team />
      
      {/* Projects Gallery */}
      <Projects />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* FAQ Section - Important for SEO */}
      <FAQ faqs={faqs} />
      
      {/* Call to Action */}
      <CTASection />
      
      {/* Contact Form - Lead Generation */}
      <ContactForm />
    </>
  );
}
