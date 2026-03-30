export type IntelligenceModule = {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  useCases: string[];
  metrics?: { label: string; value: string }[];
};

export const intelligenceModules: IntelligenceModule[] = [
  {
    id: "live-org",
    title: "Live Organization Intelligence",
    description:
      "Real-time visibility into every aspect of your organization's operations",
    icon: "pulse",
    features: [
      "Real-time data dashboards",
      "Cross-functional insights",
      "Automated alerts",
      "Trend analysis",
    ],
    useCases: [
      "Executive dashboards",
      "Operations monitoring",
      "Risk detection",
      "Performance tracking",
    ],
    metrics: [
      { label: "Data Latency", value: "<1s" },
      { label: "Accuracy", value: "99.8%" },
      { label: "Systems Connected", value: "50+" },
    ],
  },
  {
    id: "financial-intel",
    title: "Financial Intelligence",
    description:
      "Deep insights into financial operations, forecasting, and optimization",
    icon: "trending-up",
    features: [
      "Revenue forecasting",
      "Cost optimization",
      "Budget planning",
      "Financial anomaly detection",
    ],
    useCases: [
      "Budget optimization",
      "Revenue cycle management",
      "Cost reduction",
      "Strategic planning",
    ],
    metrics: [
      { label: "Forecast Accuracy", value: "94%" },
      { label: "Cost Savings", value: "Up to 30%" },
      { label: "Processing Speed", value: "Real-time" },
    ],
  },
  {
    id: "operational-intel",
    title: "Operational Intelligence",
    description:
      "Optimize operations with predictive insights and autonomous controls",
    icon: "zap",
    features: [
      "Process optimization",
      "Capacity planning",
      "Resource allocation",
      "Efficiency tracking",
    ],
    useCases: [
      "Workflow optimization",
      "Resource balancing",
      "Bottleneck identification",
      "Performance improvement",
    ],
  },
  {
    id: "sales-intel",
    title: "Sales Intelligence",
    description:
      "AI-driven insights for pipeline management and sales acceleration",
    icon: "chart-line",
    features: [
      "Deal probability scoring",
      "Sales forecasting",
      "Lead intelligence",
      "Win/loss analysis",
    ],
    useCases: [
      "Deal forecasting",
      "Sales coaching",
      "Lead prioritization",
      "Revenue maximization",
    ],
  },
  {
    id: "risk-prediction",
    title: "Risk Prediction & Detection",
    description:
      "Predictive intelligence to identify and mitigate risks before they impact operations",
    icon: "alert-circle",
    features: [
      "Anomaly detection",
      "Risk scoring",
      "Early warnings",
      "Impact analysis",
    ],
    useCases: [
      "Fraud prevention",
      "Supply chain risk",
      "Operational disruption prevention",
      "Compliance monitoring",
    ],
  },
  {
    id: "decision-intel",
    title: "Decision Intelligence",
    description:
      "AI-powered scenario analysis and optimization for strategic decisions",
    icon: "brain",
    features: [
      "Scenario simulation",
      "Impact analysis",
      "Resource optimization",
      "Strategic planning",
    ],
    useCases: [
      "Strategic planning",
      "Capital allocation",
      "Portfolio optimization",
      "What-if analysis",
    ],
  },
];

export const pressData = [
  {
    id: "1",
    title:
      "SuperManager AGI Raises $100M Series B to Accelerate AI Workforce Evolution",
    date: "March 2026",
    excerpt: "New funding fuels expansion of autonomous execution platform",
    content:
      "SuperManager AGI announced a $100M Series B round to accelerate development...",
    image: "/Image/press-1.jpg",
  },
  {
    id: "2",
    title:
      "Gartner Names SuperManager AGI as Cool Vendor in Autonomous Execution",
    date: "February 2026",
    excerpt: "Leading analyst firm recognizes innovation in agentic AI",
    content:
      "Gartner recognized SuperManager AGI for its breakthrough in autonomous execution...",
    image: "/Image/press-2.jpg",
  },
];

export const careersData = [
  {
    id: "1",
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "5+ years",
    description: "Build the next generation of autonomous AI systems",
  },
  {
    id: "2",
    title: "Product Manager - Intelligence Platform",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    experience: "7+ years",
    description: "Lead product strategy for enterprise intelligence solutions",
  },
  {
    id: "3",
    title: "Enterprise Solutions Architect",
    department: "Sales Engineering",
    location: "New York, NY",
    type: "Full-time",
    experience: "8+ years",
    description: "Design AI implementations for Fortune 500 companies",
  },
];
