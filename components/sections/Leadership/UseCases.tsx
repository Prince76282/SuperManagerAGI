'use client';

import React, { useState } from 'react';
import { Search, Mail, MessageSquare, Database, Layout, BarChart3, FileText, UserPlus, Monitor, Phone, Heart, Folder, CheckSquare, UserCheck, Code, FilePlus, Edit3, FileSearch, Clock, Calendar } from 'lucide-react';

interface UseCase {
  icon: React.ReactNode;
  text: string;
}

interface TabContent {
  tag: string;
  title: string;
  description: string;
  useCases: UseCase[];
  linkText: string;
  linkHref: string;
  imageUrl: string;
}

const UseCasesPage = () => {
  const [activeTab, setActiveTab] = useState('sales');

  const tabs: Record<string, TabContent> = {
    sales: {
      tag: 'Sales Use cases',
      title: 'Arm sales teams with AI agents',
      description: 'Arm sales teams with AI agents that integrate with Salesforce, Microsoft Dynamics, Oracle, SAP, and HubSpot to surface insights, generate proposals, and move deals forward quickly and precisely.',
      useCases: [
        { icon: <Database className="w-5 h-5" />, text: 'Search CRM data for new updates' },
        { icon: <Mail className="w-5 h-5" />, text: 'Draft an email to a prospect' },
        { icon: <MessageSquare className="w-5 h-5" />, text: 'Recap and prep for conversations' }
      ],
      linkText: 'Learn more',
      linkHref: '/ai-for-work/sales',
      imageUrl: 'https://cdn.prod.website-files.com/6717a0dfaf71071a80dfce8b/68b5cba9e319bca39ca6bb93_Group%201321314872.avif'
    },
    marketing: {
      tag: 'Marketing Use cases',
      title: 'Help marketing teams deploy AI agents',
      description: 'Help marketing teams deploy AI agents that connect with Salesforce Marketing Cloud, Adobe Marketo Engage, Oracle Eloqua, HubSpot and Demand Base to generate campaigns, automate testing, and optimize performance.',
      useCases: [
        { icon: <BarChart3 className="w-5 h-5" />, text: 'Search and analyze campaign metrics' },
        { icon: <Layout className="w-5 h-5" />, text: 'Generate landing page copy' },
        { icon: <Search className="w-5 h-5" />, text: 'Scrape competitors info & get latest updates' }
      ],
      linkText: 'Learn more',
      linkHref: '/ai-for-work/marketing',
      imageUrl: 'https://cdn.prod.website-files.com/6717a0dfaf71071a80dfce8b/68b5cba9e319bca39ca6bb93_Group%201321314872.avif'
    },
    hr: {
      tag: 'HR Usecases',
      title: 'Equip HR teams with AI agents',
      description: 'Equip HR teams with AI agents that plug into Workday, SAP, ADP, Oracle, and UKG to automate requests, analyze workforce data, and streamline onboarding and policy workflows.',
      useCases: [
        { icon: <FileSearch className="w-5 h-5" />, text: 'Search HR policy documents' },
        { icon: <UserPlus className="w-5 h-5" />, text: 'Generate employee survey questions' },
        { icon: <Calendar className="w-5 h-5" />, text: 'Apply for PTO' }
      ],
      linkText: 'Explore ai for work | hr',
      linkHref: '/ai-for-work/ai-for-hr',
      imageUrl: 'https://cdn.prod.website-files.com/6717a0dfaf71071a80dfce8b/68b5cba9e319bca39ca6bb93_Group%201321314872.avif'
    },
    it: {
      tag: 'IT Use cases',
      title: 'Support IT teams using AI agents',
      description: 'Support IT teams using AI agents that integrate with ServiceNow, BMC Helix, Ivanti, and Atlassian Jira to resolve tickets, troubleshoot issues, and maintain updated internal documentation.',
      useCases: [
        { icon: <Monitor className="w-5 h-5" />, text: 'Search IT self-serve documents' },
        { icon: <Phone className="w-5 h-5" />, text: 'Generate concise call summaries' },
        { icon: <Heart className="w-5 h-5" />, text: 'Monitor device health' }
      ],
      linkText: 'Explore ai for work | it',
      linkHref: '/ai-for-work/ai-for-it',
      imageUrl: 'https://cdn.prod.website-files.com/6717a0dfaf71071a80dfce8b/68b5cba9e319bca39ca6bb93_Group%201321314872.avif'
    },
    recruiting: {
      tag: 'Recruiting Use cases',
      title: 'Let recruiting teams use AI Agents',
      description: 'Let recruiting teams use AI Agents tied to Workday, SAP, Oracle, iCIMS, and Greenhouse to automate sourcing, evaluate candidates, and accelerate hiring with better insights.',
      useCases: [
        { icon: <Search className="w-5 h-5" />, text: 'Search common candidate queries' },
        { icon: <FileText className="w-5 h-5" />, text: 'Generate job description' },
        { icon: <CheckSquare className="w-5 h-5" />, text: 'Post-interview assessment' }
      ],
      linkText: 'Explore ai for work | recruiting',
      linkHref: '/ai-for-work/ai-for-recruiting',
      imageUrl: 'https://cdn.prod.website-files.com/6717a0dfaf71071a80dfce8b/68b5cba9e319bca39ca6bb93_Group%201321314872.avif'
    },
    'customer-service': {
      tag: 'Customer Service Use cases',
      title: 'Give customer service teams AI agents',
      description: 'Give customer service teams AI agents that integrate with Salesforce, Zendesk, ServiceNow, Microsoft and Oracle to access documentation, resolve tickets, and onboard customers, reducing handle times and boosting CSAT.',
      useCases: [
        { icon: <Folder className="w-5 h-5" />, text: 'Search product documents' },
        { icon: <CheckSquare className="w-5 h-5" />, text: 'Generate post-resolution surveys' },
        { icon: <UserCheck className="w-5 h-5" />, text: 'Onboard a new customer' }
      ],
      linkText: 'explore agent marketplace',
      linkHref: '/ai-marketplace',
      imageUrl: 'https://cdn.prod.website-files.com/6717a0dfaf71071a80dfce8b/68b5cba9e319bca39ca6bb93_Group%201321314872.avif'
    },
    engineering: {
      tag: 'Engineering Use cases',
      title: 'Enable engineering teams with AI agents',
      description: 'Enable engineering teams with AI agents that connect to code repositories and version control, testing frameworks, and developer tools to surface existing code, automate documentation, and maintain dev velocity without duplicate work.',
      useCases: [
        { icon: <Code className="w-5 h-5" />, text: 'Search through commit logs' },
        { icon: <FilePlus className="w-5 h-5" />, text: 'Generate feature documentation' },
        { icon: <Edit3 className="w-5 h-5" />, text: 'Adjust code to match style guides' }
      ],
      linkText: 'Learn more',
      linkHref: '/ai-for-work/engineering',
      imageUrl: 'https://cdn.prod.website-files.com/6717a0dfaf71071a80dfce8b/68b5cba9e319bca39ca6bb93_Group%201321314872.avif'
    },
    more: {
      tag: 'more Use cases',
      title: 'Explore across functions with AI agents',
      description: 'Explore across functions with AI agents built for finance, legal, operations, and more with hundreds of integrations. New AI agents, agentic applications, and integrations added daily.',
      useCases: [
        { icon: <Search className="w-5 h-5" />, text: 'Search enterprise knowledge' },
        { icon: <FileText className="w-5 h-5" />, text: 'Summarize the documents' },
        { icon: <Clock className="w-5 h-5" />, text: 'Reschedule meetings' }
      ],
      linkText: 'explore agent marketplace',
      linkHref: '/ai-marketplace',
      imageUrl: 'https://cdn.prod.website-files.com/6717a0dfaf71071a80dfce8b/68b5cba9e319bca39ca6bb93_Group%201321314872.avif'
    }
  };

  const tabButtons = [
    { id: 'sales', label: 'Sales' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'hr', label: 'HR' },
    { id: 'it', label: 'IT' },
    { id: 'recruiting', label: 'recruiting' },
    { id: 'customer-service', label: 'Customer service' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'more', label: 'More' }
  ];

  const currentContent = tabs[activeTab];

  return (
    <div className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-white rounded-full text-sm font-medium text-gray-600 mb-4 border border-gray-200">
            usecases
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Every team, any use case, one solution
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Accelerate deployment with domain-specific and LLM-agnostic templates from the Agent Marketplace, 
            built for multilingual teams and ready for enterprise use at scale.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabButtons.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#625FD0] font-medium text-white'
                  : 'bg-white border font-medium hover:bg-[#625FD0] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-700 mb-6">
                  {currentContent.tag}
                </div>
                
                <div className="mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {currentContent.description.split(/(\*\*.*?\*\*)/).map((part, index) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={index}>{part.slice(2, -2)}</strong>;
                      }
                      return part;
                    })}
                  </p>
                </div>

                {/* Use Cases List */}
                <div className="space-y-4 mb-8">
                  {currentContent.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                        index === 0 ? 'bg-yellow-100' : 
                        index === 1 ? 'bg-orange-100' : 
                        'bg-purple-100'
                      }`}>
                        {useCase.icon}
                      </div>
                      <p className="text-base font-medium text-gray-800 pt-2">
                        {useCase.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href={currentContent.linkHref}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all duration-200 group"
                >
                  <span>{currentContent.linkText}</span>
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - Image/Visual */}
            <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
              <div className="w-full max-w-md">
                {/* Engineering Tab Specific Content */}
                {activeTab === 'engineering' ? (
                  <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-gray-900">Generate code for Sorting in binary tree</h3>
                      <span className="text-xs text-gray-500">Request Detected in 3 Seconds</span>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                      <div className="text-green-400">{`def sort_data(data, field, order='asc'):`}</div>
                      <div className="text-gray-300 ml-4">{`reverse = True if order == 'desc' else False`}</div>
                      <div className="text-blue-400 ml-4">{`if field == "last_activity":`}</div>
                      <div className="text-gray-300 ml-8">{`data = sorted(data, key=lambda x: datetime.strptime(`}</div>
                      <div className="text-orange-400 ml-12">{`x['fields']['fields']['last_activity'], '%m-%d-%Y'`}</div>
                      <div className="text-gray-300 ml-8">{`), reverse=reverse)`}</div>
                      <div className="text-blue-400 ml-4">{`return sorted(data, key=lambda x: x[field], reverse=reverse)`}</div>
                      <div className="text-green-400 mt-4">{`sorted_by_name = sort_data(data, "name", "asc")`}</div>
                      <div className="text-green-400">{`sorted_by_date = sort_data(data, "date", "desc")`}</div>
                      <div className="text-green-400">{`sorted_by_last_activity = sort_data(data, "last_activity", "desc")`}</div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-square bg-white rounded-xl shadow-xl flex items-center justify-center border border-gray-200">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 opacity-20"></div>
                      <p className="text-sm text-gray-500">Interactive visualization</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesPage;