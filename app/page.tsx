import HomeScreen from '@/components/sections/HomeScreen';
import SuperManagerSection from '@/components/sections/SuperManagerSection';
import ProjectManagementPlatform from '@/components/sections/ProjectManagementPlatform';
import DecisionIntelligence from '@/components/sections/DecisionIntelligence';
import SuperManagerTabs from '@/components/sections/SuperManagerTabs';
import InfrastructurePartners from '@/components/sections/InfrastructurePartners';

const Page = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <HomeScreen />
      <SuperManagerSection />
      <ProjectManagementPlatform />
      <DecisionIntelligence />
      <SuperManagerTabs />
      <InfrastructurePartners />

    </main>
  );
};

export default Page;
