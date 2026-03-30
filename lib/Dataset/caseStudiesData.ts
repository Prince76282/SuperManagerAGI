export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  image: string;
  logo: string;
  testimonial?: string;
  authorName?: string;
  authorRole?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Global Financial Services Firm Reduces Operations Costs by 40%",
    subtitle:
      "Autonomous AI execution transformed their entire operations workflow",
    industry: "Finance",
    challenge:
      "Manual processes were taking weeks and consuming 50% of operational staff time",
    solution:
      "Deployed autonomous agents to handle routine tasks and decision-making with ADA intelligence layer",
    result:
      "Reduced processing time from weeks to hours, eliminated 40% of manual operations work",
    metrics: [
      { label: "Cost Reduction", value: "40%" },
      { label: "Time Savings", value: "85%" },
      { label: "Accuracy Increase", value: "98%" },
    ],
    image: "/Image/Customer/case-study-1.jpg",
    logo: "/Image/Customer/fin-logo.jpg",
    testimonial: "The transformation was immediate and remarkable",
    authorName: "John Smith",
    authorRole: "COO, Fortune 500 Finance",
  },
  {
    id: "2",
    title: "E-Commerce Company Increases Order Fulfillment Speed by 3x",
    subtitle: "AI-driven automation scaled their operations without hiring",
    industry: "E-Commerce",
    challenge:
      "Order processing bottlenecks were causing customer dissatisfaction",
    solution:
      "Implemented multi-agent orchestration for order management and inventory prediction",
    result:
      "Tripled order processing capacity, improved customer satisfaction by 65%",
    metrics: [
      { label: "Processing Speed", value: "3x" },
      { label: "Satisfaction Score", value: "+65%" },
      { label: "Error Rate", value: "-92%" },
    ],
    image: "/Image/Customer/case-study-2.jpg",
    logo: "/Image/Customer/ecom-logo.jpg",
  },
  {
    id: "3",
    title: "Manufacturing Leader Optimizes Supply Chain with AI Intelligence",
    subtitle:
      "Real-time predictive intelligence eliminated supply chain disruptions",
    industry: "Manufacturing",
    challenge: "Unpredictable supply chain delays costing millions annually",
    solution:
      "Deployed predictive intelligence for demand forecasting and supplier management",
    result: "Reduced supply chain disruptions by 78%, saved $5M annually",
    metrics: [
      { label: "Disruptions Reduced", value: "78%" },
      { label: "Annual Savings", value: "$5M" },
      { label: "Forecast Accuracy", value: "95%" },
    ],
    image: "/Image/Customer/case-study-3.jpg",
    logo: "/Image/Customer/mfg-logo.jpg",
  },
];
