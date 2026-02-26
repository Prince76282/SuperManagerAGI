
import HomePage from "../../../components/sections/Leadership/HomePage";
import EnterpriseFeatures from "@/components/sections/Leadership/departments";
import Supermanagersection from "@/components/sections/Leadership/Supermanagersection";
import Prebulit from '@/components/sections/Leadership/Prebulit'
import WhyEnterprises from "@/components/sections/Leadership/Whyenterprises";

export default function LeadershipPage() {
  return (
    <>
      <HomePage />
      <Supermanagersection/>
      <EnterpriseFeatures/>
         <Prebulit/>
      <WhyEnterprises/>
  
    </>
  );
}