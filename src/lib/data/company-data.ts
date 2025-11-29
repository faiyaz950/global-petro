import {
  ClipboardList,
  Construction,
  Factory,
  GitMerge,
  ShieldCheck,
  Waypoints,
  type LucideIcon,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react';

export const COMPANY_OVERVIEW = {
  focusAreas: [
    'Tailored solutions for client needs',
    'Ensuring practicality, quality, and efficiency',
    'Services from planning to commissioning',
  ],
  strengths: [
    'Streamlined organizational structure for quick access to personnel',
    'Adaptation to emerging technologies',
    'Workforce training in modern practices',
    'Harmonious departmental collaboration',
  ],
  experience:
    'With over a decade of regional experience, Global Petrotech SPC has built a reputation for quality, safety, and sustainable practices, driven by client satisfaction and reliable contract execution.',
  coreSectors: ['Oil & Gas', 'Power', 'Energy', 'Infrastructure', 'Municipal', 'Environmental', 'Landscape'],
};

export const TIMELINE_DATA = [
  {
    year: 'Foundation',
    title: 'Established to Support Growth',
    description: 'Founded to support Oman\'s infrastructure and industrial sectors with reliable, high-quality services.',
  },
  {
    year: 'Growth',
    title: 'Expansion of Capabilities',
    description: 'Expanded scope from modest installations to managing technically demanding projects.',
  },
  {
    year: 'Recognition',
    title: 'Solidifying Regional Reputation',
    description: 'Earned a solid reputation across Oman and the GCC through modern technology and sustainable development.',
  },
  {
    year: 'Present Day',
    title: 'Commitment to Continuous Improvement',
    description: 'Continuing to evolve with a focus on customer satisfaction, quality, reliability, and innovation.',
  },
];

export const VISION_MISSION_DATA = {
  vision: "To be the leading provider of integrated engineering and construction solutions in Oman and the GCC region, recognized for excellence, innovation, and sustainable practices.",
  mission: "To deliver high-quality, cost-effective services that exceed client expectations, while maintaining the highest standards of safety, environmental responsibility, and ethical business practices.",
  keyPrinciples: [
      { title: "Quality", description: "Adhering to international standards for project success." },
      { title: "Innovation", description: "Seeking innovative solutions to improve services and efficiency." },
      { title: "Safety", description: "Top priority with rigorous protocols to protect all stakeholders." },
      { title: "Integrity", description: "Conducting business with ethical standards, transparency, and accountability." },
  ]
}

export const ORG_CHART_DATA = {
  leadership: [
    {
      role: 'Chief Executive Officer',
      description: 'Ensures quality management system compliance (aligned with ISO 9001:2015).',
    },
    {
      role: 'General Manager',
      description: 'Provides strategic oversight for all operations.',
    },
     {
      role: 'Operations Manager',
      description: 'Manages day-to-day project execution.',
    },
  ],
  projectTeam: [
    { role: 'Project Director', description: 'Overall leadership and client relationships.' },
    { role: 'Project Manager', description: 'Day-to-day operations and budget management.' },
    { role: 'Technical Manager', description: 'Ensures technical excellence and quality.' },
    { role: 'HSE Supervisor', description: 'Oversees on-site health, safety, and environment.' },
  ],
};

export const SERVICES_DATA: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'Civil & Mechanical Construction',
    description: 'Execution of industrial/infrastructure projects including foundations, structures, and utility systems.',
    icon: Construction,
  },
  {
    title: 'Flowlines & Hook-Up Works',
    description: 'Construction and commissioning of wellhead flowlines and hook-up systems for oil & gas facilities.',
    icon: GitMerge,
  },
  {
    title: 'Structural Fabrication & Erection',
    description: 'Fabrication and installation of steel structures, equipment supports, and modular assemblies.',
    icon: Factory,
  },
  {
    title: 'EPC Project Support',
    description: 'Providing skilled manpower, supervision, and construction support to EPC contractors.',
    icon: ClipboardList,
  },
  {
    title: 'Pipeline Installation & Maintenance',
    description: 'Comprehensive solutions for oil, gas, and utility pipelines, including installation and maintenance.',
    icon: Waypoints,
  },
];

export const POLICIES_DATA = {
    hse: {
        commitment: "Global Petrotech SPC is committed to the highest standards of Health, Safety, and Environment (HSE), integrating QHSE principles into all aspects of our operations to ensure zero harm.",
        principles: [
            "Protecting our people, assets, and the environment.",
            "Integrating QHSE considerations into all business decisions.",
            "Providing regular training to ensure a competent and skilled workforce."
        ]
    },
    quality: {
        commitment: "Our Quality Policy is focused on achieving customer satisfaction by providing services that meet or exceed their expectations, complying with all applicable requirements, and continually improving our processes.",
        principles: [
            "Focusing on customer satisfaction and project success.",
            "Ensuring process efficiency through the Plan-Do-Check-Act cycle.",
            "Complying with ISO 9001:2015 standards for our Quality Management System."
        ]
    }
}
