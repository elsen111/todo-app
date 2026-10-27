import SectionContainer from '../../../app/layouts/SectionContainer';
import SectionHeader from '../../common/ui/SectionHeader';
import { howItWorksSectionData } from '../../../content/site.content';
import Card from './Card';

const HowItWorksSection = () => {
  return (
    <SectionContainer id="how-it-works">
      <SectionHeader title={howItWorksSectionData.title} />
      <div className="xxs:grid-cols-2 mt-15 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10">
        {howItWorksSectionData.howItWorksCards.map((cardContent) => (
          <Card
            key={cardContent.step}
            {...cardContent}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default HowItWorksSection;
