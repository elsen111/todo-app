
import SectionContainer from '../../../app/layouts/SectionContainer'
import SectionHeader from '../../common/ui/SectionHeader'
import { howItWorksSectionData } from '../../../content/site.content'
import Card from './Card'

const HowItWorksSection = () => {
  return (
    <SectionContainer>
      <SectionHeader title={howItWorksSectionData.title}/>
      <div className='grid md:grid-cols-3 xxs:grid-cols-2 grid-cols-1 gap-5 md:gap-10 mt-15'>
              {
                howItWorksSectionData.howItWorksCards.map((cardContent) => (
                  <Card key={cardContent.step} {...cardContent} />
                ))
              }
            </div>
    </SectionContainer>
  )
}

export default HowItWorksSection