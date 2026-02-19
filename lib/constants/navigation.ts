import { NavItem } from '@/app/components/navigation/types';

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'AGI Managers',
    type: 'dropdown',
    content: {
      title: 'AI Solutions',
      type: 'agi',
      columns: [
        {
          className: 'with-p',
          blocks: [
            {
              type: 'content',
              title: 'AGI for Leadership',
              description: 'Replace team leads and engineering managers with AGI. Autonomous team coordination. Intelligent decisions. Drive performance.',
              link: {
                href: '/ai-for-tasks',
                text: 'learn more'
              },
              groups: [
                {
                  title: 'CAPABILITIES',
                  links: [
                    { title: 'Autonomous Decision Making', href: '/LearnMore' },
                    { title: 'Team Coordination', href: '/LearnMore' },
                    // ... more links
                  ]
                },
                // ... more groups
              ]
            },
            // ... more blocks
          ]
        },
        {
          className: 'with-p',
          blocks: [
            {
              type: 'resources',
              title: 'TOP RESOURCES',
              resources: [
                {
                  title: 'Manager Replacement Economics: practical insights from AGI deployments',
                  image: '/image/ManagerReplacement.png',
                  href: '/LearnMore'
                },
                // ... more resources
              ]
            },
            {
              type: 'links',
              title: 'QUICK LINKS',
              fillSpace: true,
              links: [
                { title: 'About SuperManager AGI', href: '/LearnMore' },
                // ... more links
              ]
            }
          ]
        }
      ]
    }
  },
  {
    title: 'Pricing',
    type: 'link',
    href: '/Pricing'
  },
  // ... more items
];