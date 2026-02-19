"use client";

import { useState } from "react";

const tabsData = [
  { id: "Decision-Intelligence", label: "Decision Intelligence" },
  { id: "Delivery Automation", label: "Delivery Automation" },
  { id: "Resource Management", label: "Resource Management" },
  { id: "Integrations", label: "Integrations" },
  { id: "Workspace", label: "Workspace" },
];

const decisionIntelligenceFeatures = [
  {
    title: "Scope & Change Control",
    description:
      "Detect Scope Changes, Informal Requests, and Defect vs Enhancement Shifts Across Email, Slack, Jira and Meetings. Automatically Flag High-Impact Deviations Before They Affect Budget or Delivery Timelines.",
  },
  {
    title: "Decision Traceability",
    description:
      "Build a Live Context Graph Tracking Who Decided What, When, Why, and What Alternatives Were Considered. Maintain Full Audit Logs with Ownership and Approval Visibility.",
  },
  {
    title: "Impact & Estimation",
    description:
      "Perform Effort Estimation, Timeline Recalculation, and Change Impact Simulation in Real Time. Quantify Downstream Risk Before Approvals Are Made.",
  },
  {
    title: "Risk & Escalation Intelligence",
    description:
      "Identify Delivery Risks, Blockers, and Escalation Signals Early from Communication and Execution Patterns. Trigger Structured Decision Workflows Before Firefighting Begins.",
  },
];

const pmProtectionFeatures = {
  mainFeatures: [
    {
      title: " Task Capture & Creation",
      description:
        "Extract Action Items from Meetings, Slack, Teams, and Email. Automatically Create and Update Tickets in Jira, Azure DevOps, and Other Systems with Proper Context and Ownership.",
    },

    {
      title: "Reporting & Standups",

      description:
        "Generate Daily Standups, Weekly Delivery Reports, and Executive RAG Status Updates from Real-Time Task and Communication Data. Auto Distribute to Stakeholders.",
    },
    {
      title: "Sprint Optimization",

      description:
        "Analyze Backlog Priority, Velocity, Capacity, and Dependencies. Recommend Balanced Sprint Scope and Workload Distribution in Minutes.",
    },
    {
      title: "Follow-Ups & Coordination",

      description:
        "Detect Overdue Tasks, Stalled Work, and Pending Approvals. Send Context-Aware Nudges and Escalations Automatically Across Slack, Teams, and Email.",
    },
    {
      title: "Predictive Risk Monitoring",

      description:
        "Continuously Monitor Execution Signals, Velocity Trends, and Blocker Patterns to Detect Emerging Risks Before They Escalate.",
    },
  ],
};

const eventWorkspaceFeatures = [
  {
    title: "Live",
    Highlight: " Commitment Model",
    description:
      "A unified, time aware view of person , project , allocation across the organization including priority, duration, and cross-project dependencies.",
  },
  {
    title: "Allocation",
    Highlight: "Conflict Detection",
    description:
      "Proactively identify double booking, hidden overcommitment, and future resource collisions before they impact delivery timelines.",
  },
  {
    title: "Cross Project",
    Highlight: "Impact Analysis",
    description:
      "Simulate downstream effects of delays, reassignments, scope shifts, and priority changes across concurrent engagements.",
  },
  {
    title: "Utilization",
    Highlight: " & Margin Intelligence ",
    description:
      "Real time visibility into capacity, slack windows, overload risk, and utilization variance that directly affects delivery margins.",
  },
  {
    title: "Structured Reallocation",
    Highlight: " & Trade-Offs ",
    description:
      "Surface decision-ready reallocation options with clear ownership, priority awareness, and coordinated impact visibility.",
  },
];

const enterpriseIntegrationFeatures = {
  mainFeatures: [
    {
      title: "Work Management",
      Highlight: " & PPM Systems",
      description:
        "Native Connectors for Jira, Azure DevOps, Confluence, and 50+ Project, PPM, and Work Tracking Platforms.",
    },
    {
      title: "Communication",
      Highlight: " & Collaboration Platforms",
      description:
        "Deep Integration with Slack, Microsoft Teams, Email, and Enterprise Messaging Systems. ",
    },
    {
      title: "Enterprise Applications",
      Highlight: " & Business Systems",
      description:
        "Integrated with Microsoft 365, Google Workspace, CRM Platforms, HR Systems, Finance Tools, and Internal Business Applications.",
    },
    {
      title: "Secure LLM",
      Highlight: " & AI Model Integrations",
      description:
        "Compatible with Leading Enterprise-Grade LLM Providers Including OpenAI (Azure OpenAI), Anthropic, Google Vertex AI, AWS Bedrock, and Other Secure Model Endpoints.",
    },
    {
      title: "Custom",
      Highlight: "& In-House System Connectivity",
      description:
        "Robust API Framework and Webhook Support for Proprietary Systems, Internal Tools, Data Warehouses, and Custom Enterprise Workflows. Extend SuperManager AGI Without Vendor Lock In.",
    },
  ],
};

const WorkspaceFeatures = {
  mainFeatures: [
    {
      title: "Intelligent",
      Highlight: "Notification Center",
      description:
        "The Workspace includes a dedicated notification layer where the system surfaces only critical, decision grade events in real time. Scope changes, high risk emails, allocation conflicts, blockers, stalled tasks, and escalations are automatically detected and presented in a structured attention feed.",
    },
    {
      title: "Context-Rich",
      Highlight: "Decision Modals",
      description:
        "Every notification opens into an interactive modal that brings together the full execution context. Linked tasks, dependencies, conversations, timeline impacts, resource effects, and risk exposure are presented in one structured view.",
    },
    {
      title: "Unified",
      Highlight: "Chat Interface",
      description:
        "The Workspace includes a unified conversational control layer that connects across all integrated enterprise systems. Managers can search, analyze, and take action across all platforms.",
    },
    {
      title: "Preview",
      Highlight: " & Approval Layer",
      description:
        "No operational change executes automatically. Every task update, reallocation, report generation, escalation, or structural change appears in a structured preview panel before execution.",
    },
    {
      title: "Intelligent",
      Highlight: "Dashboards",
      description:
        "The Workspace provides continuously updating dashboards across delivery health, RAG status, resource utilization, cross-project commitments, sprint performance, risk trends, and escalation patterns.",
    },
    {
      title: "Process Visibility",
      Highlight: " & Decision Auditability",
      description:
        "Every recommendation, approval, override, and system-triggered action is recorded with full traceability for enterprise-grade governance.",
    },
  ],
};

const ProjectManagementPlatform = () => {
  const [activeTab, setActiveTab] = useState("Decision-Intelligence");

  return (
    <div className="bg-[#F0F6F9] py-8 md:py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-[2.5rem] font-medium leading-[1.2] tracking-[-0.02em] text-gray-900 ">
            Complete AI Powered Project Management Platform
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
            {activeTab === "Decision-Intelligence" && (
              <div className="space-y-6 md:space-y-8">
                <div className="mb-6 md:mb-8">
                  <div className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 md:mb-4">
                    Decision Intelligence
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Protect Budget, Scope, and Timelines by Making Every
                    Critical Project Decision Explicit, Traceable, and Context
                    Aware.
                  </p>
                </div>

                <div className="space-y-6 md:space-y-8">
                  {decisionIntelligenceFeatures.map((item, i) => (
                    <div key={i} className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                        AI for{" "}
                        <span className="text-[#625FD0]">{item.title}</span>
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
                  <div className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 md:mb-4">
                    Delivery Automation
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Eliminate PM Operational Overhead Across Tasks, Meetings,
                    Reporting, Planning, and Coordination.
                  </p>
                </div>

                {/* Main Features */}
                <div className="space-y-6 md:space-y-8">
                  {pmProtectionFeatures.mainFeatures.map((item, i) => (
                    <div key={i} className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="space-y-4 md:space-y-6">
                        <div>
                          <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">
                            AI for{" "}
                            <span className="text-[#625FD0]">{item.title}</span>
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
                  <div className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 md:mb-4">
                    Resource Management
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Continuously model, monitor, and reconcile resource
                    commitments across all active projects in real time.
                  </p>
                </div>

                <div className="space-y-6">
                  {eventWorkspaceFeatures.map((item, i) => (
                    <div key={i} className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="space-y-3 md:space-y-4">
                        <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">
                          {item.title}{" "}
                          <span className="text-[#625FD0]">
                            {item.Highlight}
                          </span>
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
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
                  <div className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 md:mb-4">
                    Integrations
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Seamlessly Connect SuperManager AGI Across Your Enterprise
                    Stack With Secure, Enterprise-Grade Integrations.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Main Features */}
                  {enterpriseIntegrationFeatures.mainFeatures.map((item, i) => (
                    <div key={i} className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="space-y-3 md:space-y-4">
                        <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">
                          {item.title}{" "}
                          <span className="text-[#625FD0]">
                            {item.Highlight}
                          </span>
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
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
                  <div className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 md:mb-4">
                    Workspace
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    A Two Way Operating Interface Where Managers Direct the Agent and the Agent Surfaces What Requires Attention.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Main Features */}
                  {WorkspaceFeatures.mainFeatures.map((item, i) => (
                    <div key={i} className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="space-y-3 md:space-y-4">
                        <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">
                          {item.title}{" "}
                          <span className="text-[#625FD0]">
                            {item.Highlight}
                          </span>
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
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
