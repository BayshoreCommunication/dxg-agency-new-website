export const SITECONFIG = {
  siteMetadata: {
    title: 'Digital Xperience Group',
    description:
      'Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences.',
  },
  mainNav: [
    {
      title: 'Home',
      slug: '/',
    },
    {
      title: 'Triple E Xperience',
      slug: '/triple-e-xperience',
    },
    {
      title: 'Who We Are',
      slug: '/who-we-are',
    },
    {
      title: 'Services',
      slug: '/services',
    },
    {
      title: 'Portfolio',
      slug: '/portfolio',
    },
    {
      title: 'Why DXG',
      slug: '/why-dxg',
    },
    {
      title: 'Our Blog',
      slug: '/blogs',
    },
    {
      title: 'Contact Us',
      slug: '/contact-us',
    },
  ],
  footerNav: {
    services: [
      {
        title: 'Production Management',
        slug: '/services/production-management',
      },
      {
        title: 'Audio Visual Technology',
        slug: '/services/audiovisual-technology',
      },
      {
        title: 'Event Platform Services',
        slug: '/services/event-platform-services',
      },
      {
        title: 'Event Experience Design',
        slug: '/services/event-experience-design',
      },
      {
        title: ' Graphics & Animation',
        slug: '/services/graphics-animation',
      },
      {
        title: 'Photography & Videography',
        slug: '/services/video-production-photography',
      },
    ],
    whyDXG: [
      {
        title: 'Our Process',
        slug: '/why-dxg',
      },
      {
        title: 'Our Services',
        slug: '/services',
      },
      {
        title: 'Our Mission',
        slug: '/why-dxg',
      },
      {
        title: 'Our Experience',
        slug: '/why-dxg',
      },
    ],
    legal: [
      {
        title: 'Privacy Policy',
        slug: '/privacy-policy',
      },
      {
        title: 'Terms of Use',
        slug: '/terms-of-use',
      },
    ],
  },
  socialLinks: [
    {
      title: 'Facebook',
      url: '',
    },
    {
      title: 'LinkedIn',
      url: '',
    },
    {
      title: 'Twitter',
      url: '',
    },
    {
      title: 'Instagram',
      url: '',
    },
  ],
  address: '12824 Dupont Circle Tampa, FL 33626',
  phone: '855.282.9394',
  email: 'Info@dxg.agency',
  appointmentBookingUrl:
    process.env.NEXT_PUBLIC_ZOHO_APPOINTMENT_BOOKING_URL || '',
  contact: {
    xnQsjsdp: process.env.NEXT_PUBLIC_ZOHO_CONTACT_SECRET_1 || '',
    xmIwtLD: process.env.NEXT_PUBLIC_ZOHO_CONTACT_SECRET_2 || '',
    leadCampaign: 'TGVhZHM=',
    returnUrl: process.env.NEXT_PUBLIC_ZOHO_CONTACT_RETURN_URL || '',
    leadSource: 'Contact Page',
  },
  proposal: {
    xnQsjsdp: process.env.NEXT_PUBLIC_ZOHO_PROPOSAL_SECRET_1 || '',
    xmIwtLD: process.env.NEXT_PUBLIC_ZOHO_PROPOSAL_SECRET_2 || '',
    leadCampaign: 'TGVhZHM=',
    returnUrl: process.env.NEXT_PUBLIC_ZOHO_PROPOSAL_RETURN_URL || '',
    leadSource: 'Request for Proposal',
  },
  events: {
    xnQsjsdp: process.env.NEXT_PUBLIC_ZOHO_PROPOSAL_SECRET_1 || '',
    xmIwtLD: process.env.NEXT_PUBLIC_ZOHO_PROPOSAL_SECRET_2 || '',
    leadCampaign: 'TGVhZHM=',
    returnUrl: process.env.NEXT_PUBLIC_ZOHO_PROPOSAL_RETURN_URL || '',
    leadSource: 'Event Page',
  },
};
