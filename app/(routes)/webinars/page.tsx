import AIPulseSection from "@/components/Footer/Webinars/Aipulsesection";
import BrowseWebinars from "@/components/Footer/Webinars/Browsewebinars";
import FeaturedWebinars from "@/components/Footer/Webinars/Featuredwebinars";
import UpcomingWebinars from "@/components/Footer/Webinars/Upcomingwebinars";
import WebinarsSection from "@/components/Footer/Webinars/Webinarssection";


const page = () => {
  return (
    <div>
      <WebinarsSection />
      <FeaturedWebinars />

      <AIPulseSection />
      <UpcomingWebinars />
      <BrowseWebinars />
    </div>
  );
};

export default page;
