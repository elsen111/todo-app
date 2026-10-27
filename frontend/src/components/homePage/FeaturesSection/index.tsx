import SectionContainer from '../../../app/layouts/SectionContainer';
import { featuresSectionData } from '../../../content/site.content';
import SectionHeader from '../../common/ui/SectionHeader';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  return (
    <SectionContainer id="features">
      <SectionHeader
        title={featuresSectionData.title}
        tagline={featuresSectionData.tagline}
      />
      <div className="xxs:grid-cols-2 mt-15 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10">
        {featuresSectionData.features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturesSection;
