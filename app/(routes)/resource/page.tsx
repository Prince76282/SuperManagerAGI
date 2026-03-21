import Blogslider from '@/components/sections/Resource/Blogslider'
import CustomerStoriesSlider from '@/components/sections/Resource/Customerstoriesslider'
import InsightsSlider from '@/components/sections/Resource/Insightsslider'
import ResourcesHub from '@/components/sections/Resource/Resourceshub'
import WhitepapersSlider from '@/components/sections/Resource/Whitepapersslider'


const page = () => {
  return (
    <div>
        <ResourcesHub/>
        <InsightsSlider/>
        <CustomerStoriesSlider/>
        <Blogslider/>
        <WhitepapersSlider/>
    </div>
  )
}

export default page