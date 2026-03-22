"use client";

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
    title: "Prompt and Execute  ",
    description:
      "any natural language instruction executed across every connected app simultaneously",
  },
  {
    title: "Multi-Action Orchestration ",
    description:
      "complex workflows decomposed into parallel subtasks in the right order",
  },
  {
    title: "	Evidence Validation ",
    description:
      "every output verified via evidence-majority voting before any system is updated",
  },
  {
    title: "Autonomous Triggers ",
    description:
      "agents detect conditions and execute without prompts, 24 hours a day",
  },
];

const pmProtectionFeatures = {
  mainFeatures: [
    {
      title: "ADA Direct Access ",
      description:
        "native database connections at 2 to 15ms, no API round-trip, no hallucination from data gaps",
    },

    {
      title: "Per-Subtask RAG Grounding ",

      description:
        "every agent response grounded in retrieved evidence before generation",
    },
    {
      title: "Cross-System Intelligence ",

      description:
        "inventory, revenue, logistics, pipeline, customers pulled simultaneously",
    },
    {
      title: "Live Data ",

      description:
        "actual live data from your actual systems at 65ms average latency",
    },
  ],
};

const eventWorkspaceFeatures = [
  {
    highlight: "Commitment Model",
    description: [
      " •	  Inventory agents that reorder before stock-outs based on live velocity data",
      <br />,
      " •	  Finance agents that reconcile settlements overnight across every channel",
      <br />,
      " •	  Logistics agents that manage NDR follow-ups every morning autonomously",
      <br />,
      " •	  Marketing agents that pause underperforming spend when ROAS drops below threshold",
      <br />,
      " •	  Customer care agents that track returns from initiation to resolution",
      <br />,
      " •	  Operations agents that generate MIS reports automatically in the right format",
    ],
  },
];

const enterpriseIntegrationFeatures = {
  mainFeatures: [
    {
      Highlight: "E-commerce and D2C",
      description: [
        "•	Shopify",
        ,
        <br />,
        "•	Amazon Seller Central",
        ,
        <br />,
        "•	Flipkart Seller Hub",
        ,
        <br />,
        "•	Meesho",
        ,
        <br />,
        "•	Blinkit, Zepto, Swiggy Instamart",
        ,
        <br />,
        "•	50+ marketplace tools",
      ],
    },
    {
      Highlight: "Logistics and Delivery",
      description: [
        "•	Shiprocket ",
        <br />,
        "•	Delhivery",
        <br />,
        "•	BlueDart ",
        <br />,
        "•	Xpressbees, Ecom Express, FedEx, DHL  ",
        <br />,
      ],
    },

    {
     Highlight: "Work Management and Engineering",
      description: [
        "• Jira ",
        <br />,
        "• Linear, Asana, Monday.com, ClickUp ",
        <br />,
        "• GitHub, GitLab, Azure DevOps ",
        <br />,
        "• Notion, Confluence, Figma ",
        <br />,
        "• 50+ work management tools ",
        <br />,
      ],
    },
    {
Highlight: "Communication Platforms",
      description: [
        "• Slack ",
        <br />,
        "• Microsoft Teams ",
        <br />,
        "• WhatsApp Business ",
        <br />,
        "• Email systems ",
        <br />,
      ],
    },
    {
      Highlight: "CRM and Sales",
      description: [
        "• Salesforce ",
        <br />,
        "• HubSpot, Pipedrive, Zoho CRM ",
        <br />,
        "• Freshsales ",
        <br />,
      ],
    },
    {
     Highlight: "Finance and Payments",
      description: [
        "• Razorpay, PayU, Stripe ",
        <br />,
        "• QuickBooks, Tally, Zoho Books ",
        <br />,
      ],
    },
    {
      Highlight: "ERP and Enterprise Systems",
      description: [
        "• SAP, Oracle, Workday, ServiceNow ",
        <br />,
        "• Microsoft Dynamics, NetSuite ",
        <br />,
        "• Sellerware, Genesis ERP ",
        <br />,
      ],
    },
    {
      Highlight: "AI Model Integrations",
      description: [
        "• Anthropic Claude ",
        <br />,
        "• OpenAI GPT ",
        <br />,
        "• Azure OpenAI ",
        <br />,
        "• Google Vertex AI ",
        <br />,
        "• AWS Bedrock ",
        <br />,
      ],
    },
  ],
};

const WorkspaceFeatures = {
  mainFeatures: [
    {
      Highlight: "Features",
      description: [
        "• Natural language command interface ",<br />,,
        "• Live autonomous action feed ",<br />,,
        "• Approval and override controls ",<br />,
        "• Cross-department execution dashboard ",<br />,
        "• Audit trail and decision traceability ",<br />,
        "• Agent configuration and deployment console ",<br />,
      ]
    }
  ]
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
                    Autonomous Task Execution
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Protect Budget, Scope, and Timelines by Making Every
                    Critical Project Decision Explicit, Traceable, and Context
                    Aware.
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
                    Get Any Answer From 1,000 Feet Deep Inside Your Enterprise
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Eliminate the information gap between what your organisation
                    knows and what your decision-makers can access.
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
                    Deploy Agents That Work 24x7 Without Being Prompted
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Build a specialist AI workforce that monitors your connected
                    systems and executes tasks continuously.
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
                    Integrations
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    SuperManager AGI integrates with every application your
                    organisation uses. Agents work across all connected systems
                    simultaneously.
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
