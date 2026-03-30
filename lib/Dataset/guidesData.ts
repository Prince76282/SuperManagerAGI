export type Guide = {
  id: string;
  title: string;
  description: string;
  excerpt: string;
  readTime: number;
  category: string;
  image: string;
  topics: string[];
};

export const architectureGuides: Guide[] = [
  {
    id: "ada-architecture",
    title: "Agentic Data Architecture (ADA) Explained",
    category: "Architecture",
    description:
      "Deep dive into how ADA enables direct database access and enterprise-wide intelligence",
    excerpt:
      "Learn how ADA transforms enterprise data into actionable intelligence for autonomous decision-making",
    readTime: 8,
    image: "/Image/architecture-ada.jpg",
    topics: ["Data Architecture", "AI Infrastructure", "Enterprise Systems"],
  },
  {
    id: "multi-agent-design",
    title: "Multi-Agent System Architecture & Design Patterns",
    category: "Architecture",
    description:
      "Understanding distributed agents, coordination patterns, and governance",
    excerpt:
      "Explore best practices for designing scalable multi-agent systems in enterprises",
    readTime: 10,
    image: "/Image/multi-agent.jpg",
    topics: ["System Design", "Agent Orchestration", "Scalability"],
  },
  {
    id: "execution-engine",
    title: "Building Autonomous Execution Engines",
    category: "Architecture",
    description:
      "How to architect systems that can autonomously execute complex workflows",
    excerpt:
      "Technical guide to implementing reliable autonomous execution at scale",
    readTime: 12,
    image: "/Image/execution-architecture.jpg",
    topics: ["Execution", "Workflow Automation", "Reliability"],
  },
];

export const aiWorkforceGuides: Guide[] = [
  {
    id: "ai-workforce-basics",
    title: "AI Workforce: From Automation to Intelligence",
    category: "Workforce",
    description:
      "Understanding the evolution from RPA to intelligent AI agents",
    excerpt:
      "How AI workforce differs from traditional automation and why it matters",
    readTime: 7,
    image: "/Image/ai-workforce.jpg",
    topics: ["AI Agents", "Workforce Transformation", "Productivity"],
  },
  {
    id: "deploying-agents",
    title: "Deploying AI Agents Across Your Organization",
    category: "Workforce",
    description:
      "Step-by-step guide to rolling out autonomous agents enterprise-wide",
    excerpt:
      "Best practices for AI agent deployment, managing change, and measuring impact",
    readTime: 9,
    image: "/Image/deployment.jpg",
    topics: ["Deployment", "Change Management", "ROI Metrics"],
  },
];
