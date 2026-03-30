"use client";

import { report } from "process";
import { useState } from "react";

const tabsData = [
  { id: "Autonomous", label: "Autonomous Task Execution" },
  { id: "Delivery Automation", label: "Enterprise Data Intelligence" },
  { id: "Resource Management", label: "Autonomous Agent Workforce" },
  { id: "Integrations", label: "Integrations" },
  { id: "Workspace", label: "Workspace" },
];

const decisionIntelligenceFeatures = [
  {
    title: "Prompt → Execution",
    description:
      "Give a natural language instruction and AI agents execute tasks across all connected applications, databases, and workflows simultaneously updating systems, generating reports, moving data, and completing operational tasks end-to-end.",
  },
  {
    title: "Cross-System Workflow Orchestration",
    description:
      "Complex workflows are automatically decomposed into subtasks and executed across multiple systems in the correct sequence CRM updates, invoice generation, project creation, notifications, reporting, and system updates handled automatically.",
  },
  {
    title: "Evidence-Grounded Execution",
    description:
      "Every action and system update is validated using real data from connected systems before execution. Outputs are traceable, verifiable, and auditable before",
  },
];

const pmProtectionFeatures = {
  mainFeatures: [
    {
      title: "ADA Direct Access ",
      description:
        "Agents connect directly to databases and enterprise systems without APIs, middleware, or data exports enabling real-time data access with ultra-low latency and no data staleness.",
    },

    {
      title: "Evidence-Grounded Intelligence ",

      description:
        "Evidence-Grounded IntelligenceEvery answer, report, and decision is grounded in retrieved system data before generation eliminating hallucinations and ensuring traceable, verifiable outputs.",
    },
    {
      title: "Cross-System Intelligence ",

      description:
        "Cross-System Intelligence Combine data across CRM, ERP, finance, logistics, HRMS, and internal systems to generate unified reports, insights, and operational intelligence across your entire organization.",
    },
    {
      title: "Live Operational Data ",

      description: "Live Operation",
    },
  ],
};

const eventWorkspaceFeatures = [
  {
    Highlight: "Commitment Model",
    description: [
      " •	 Inventory agents reorder products before stock-outs based on live sales velocity and inventory levels",
      <br />,
      " •	 Finance agents reconcile payments, settlements, and transactions across channels automatically",
      <br />,
      " •	  Logistics agents monitor shipments, delays, and delivery exceptions and trigger actions",
      <br />,
      " •	  Marketing agents monitor campaign performance and pause or adjust spend when ROAS drops below threshold",
      <br />,
      " •	  Customer support agents track tickets from creation to resolution and escalate when",
    ],
  },
];

const enterpriseIntegrationFeatures = {
  mainFeatures: [
    {
      Highlight: "800+ applications. One AI operating layer.",
      description: [
        "Instead of integrations that move data between tools, SuperManager AGI enables agents to operate across systems and execute workflows end-to-end.",
      ],
    },
    {
      Highlight:
        "Integration Categories (Use Cards Like Your UI)E-commerce and Commerce Platforms",
      description: [
        "Connect storefronts, marketplaces, inventory systems, order management systems, and commerce tools.AI agents manage orders, inventory, logistics, marketing performance, customer support, and finance workflows across your entire commerce stack.",
      ],
    },
    {
      Highlight: "Logistics and Delivery",
      description: [
        "Connect shipment providers, tracking systems, warehouse tools, and delivery platforms. AI agents create shipments, track deliveries, monitor delays, manage returns, and update systems automatically.",
      ],
    },
  ],
};

const WorkspaceFeatures = {
  mainFeatures: [
    {
      Highlight: "Features",
      description: [
        "• Natural language command interface to instruct AI agents",
        <br />,
        ,
        "• Live autonomous execution feed showing agent actions across systems ",
        <br />,
        ,
        "• Approval and override controls for critical actions and workflows",
        <br />,
        "• Cross-department execution dashboard and operational visibility",
        <br />,
        "• Audit trail and decision traceability for every agent action",
        <br />,
        "• Agent deployment, configuration, and workflow management console",
        <br />,
        "• Live reports, dashboards, and operational intelligence",
        <br />,
        "• Workflow execution monitoring and performance tracking",
        <br />,
        "• Role-based permissions and access control",
        <br />,
        "• Notifications, alerts, and escalation management",
        <br />,
      ],
    },
  ],
};

const ProjectManagementPlatform = () => {
  const [activeTab, setActiveTab] = useState("Autonomous");

  return (
    <div className="bg-[#F0F6F9] py-8 md:py-16 px-4">
      <div className="max-w-300 mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-[2.5rem] font-medium leading-[1.2] tracking-[-0.02em] text-gray-900 ">
            Complete AI Vibe Working Platform
          </h2>
        </div>

        {/* Tabs Layout - Sticky Left, Scrollable Right */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 ">
          {/* Left Side - Sticky Tab Menu */}
          <div className="space-y-6 lg:w-1/4">
            <div className="overflow-x-auto scrollbar-hide lg:sticky lg:top-8">
              <div className="p-4 md:p-6">
                <nav className="flex lg:flex-col gap-2">
                  {tabsData.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`whitespace-nowrap text-left md:text-center px-4 py-3 rounded-xl md:rounded-2xl text-sm md:text-base transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-[#625FD0] text-white font-medium shadow-md"
                          : "text-gray-900 hover:text-white border-2 border-black/10 hover:bg-[#625FD0] hover:border-[#625FD0] bg-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Right Side - Scrollable Content */}
          <div className="lg:w-3/4">
            {/* Decision Intelligence Tab */}
            {activeTab === "Autonomous" && (
              <div className="space-y-6 md:space-y-8">
                <div className="mb-6 md:mb-8">
                  <div className="text-2xl md:text-3xl  text-gray-900 mb-3 md:mb-4">
                    The Autonomous Execution Engine
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    The execution layer where AI agents plan, coordinate, and
                    execute work across your entire company software stack not
                    just generate answers, but complete real operational tasks
                    across systems.
                  </p>
                </div>

                <div className="space-y-6 md:space-y-8">
                  {decisionIntelligenceFeatures.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <h4 className="text-xl md:text-2xl lg:text-3xl ">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mt-3 md:mt-4">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PM Protection Shield Tab */}
            {activeTab === "Delivery Automation" && (
              <div className="space-y-6 md:space-y-8">
                <div className="mb-6 md:mb-8">
                  <div className="text-2xl md:text-3xl  text-gray-900 mb-3 md:mb-4">
                    Enterprise Data Intelligence
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Access answers, insights, reports, and operational
                    intelligence directly from live company data across all
                    systems not dashboards, not exports, but real system data.
                  </p>
                </div>

                {/* Main Features */}
                <div className="space-y-6 md:space-y-8">
                  {pmProtectionFeatures.mainFeatures.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="space-y-4 md:space-y-6">
                        <div>
                          <h4 className="text-xl md:text-2xl lg:text-3xl  mb-3 md:mb-4">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Event Workspace Tab */}
            {activeTab === "Resource Management" && (
              <div className="space-y-6 md:space-y-8">
                <div className="mb-6 md:mb-8">
                  <div className="text-2xl md:text-3xl  text-gray-900 mb-3 md:mb-4">
                   Deploy Agents That Work 24×7 Without Being Prompted
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Deploy specialist AI agents that continuously monitor your systems, make decisions using live data, and execute operational workflows across your organization without manual triggers or supervision.

                  </p>
                </div>

                <div className="space-y-6">
                  {eventWorkspaceFeatures.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="space-y-3 md:space-y-4">
                        <h4 className="text-xl md:text-2xl lg:text-3xl  mb-3 md:mb-4">
                          {item.Highlight}
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Enterprise Integrations Tab */}
            {activeTab === "Integrations" && (
              <div className="space-y-6 md:space-y-8">
                <div className="mb-6 md:mb-8">
                  <div className="text-2xl md:text-3xl  text-gray-900 mb-3 md:mb-4">
                    Universal Integrations Layer
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    SuperManager AGI connects to your entire company software stack and allows AI agents to read data, write updates, and execute actions across all connected systems simultaneously.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Main Features */}
                  {enterpriseIntegrationFeatures.mainFeatures.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="space-y-3 md:space-y-4">
                        <h4 className="text-xl md:text-2xl lg:text-3xl  mb-3 md:mb-4">
                          {item.Highlight}
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Workspace Tab */}
            {activeTab === "Workspace" && (
              <div className="space-y-6 md:space-y-8">
                <div className="mb-6 md:mb-8">
                  <div className="text-2xl md:text-3xl  text-gray-900 mb-3 md:mb-4">
                    Workspace
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    A unified operating interface where you direct agents in
                    natural language and agents surface completed actions, live
                    intelligence and items requiring your approval.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Main Features */}
                  {WorkspaceFeatures.mainFeatures.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="space-y-3 md:space-y-4">
                        <h4 className="text-xl md:text-2xl lg:text-3xl  mb-3 md:mb-4">
                          {item.Highlight}
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagementPlatform;
