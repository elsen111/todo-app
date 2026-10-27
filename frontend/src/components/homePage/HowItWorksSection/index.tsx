import React from 'react'
import SectionContainer from '../../../app/layouts/SectionContainer'
import SectionHeader from '../../common/ui/SectionHeader'
import { howItWorksSectionData } from '../../../content/site.content'

const HowItWorksSection = () => {
  return (
    <SectionContainer>
      <SectionHeader title={howItWorksSectionData.title}/>
    </SectionContainer>
  )
}

export default HowItWorksSection