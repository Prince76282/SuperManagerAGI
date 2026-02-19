import SuperManagerSection from "@/components/sections/Leadership/Supermanagersection";
import HomePage from "../../../components/sections/Leadership/HomePage";
import EnterpriseFeatures from "@/components/sections/Leadership/EnterpriseFeatures";
import UseCases from "@/components/sections/Leadership/UseCases";

export default function LeadershipPage() {
  return (
    <>
      <HomePage />
      <SuperManagerSection/>
      <EnterpriseFeatures/>
      <UseCases/>

    </>
  );
}