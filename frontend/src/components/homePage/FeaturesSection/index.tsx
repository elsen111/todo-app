
import SectionContainer from '../../../app/layouts/SectionContainer'
import { featuresSectionData } from '../../../content/site.content'
import SectionHeader from '../../common/ui/SectionHeader'
import FeatureCard from './FeatureCard'

const FeaturesSection = () => {
  return (
    <SectionContainer>
      <SectionHeader title={featuresSectionData.title} tagline={featuresSectionData.tagline} />
      <div className='grid md:grid-cols-3 xxs:grid-cols-2 grid-cols-1 gap-5 md:gap-10 mt-15'>
        {
          featuresSectionData.features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))
        }
      </div>
    </SectionContainer>
  )
}

export default FeaturesSection