import SectionContainer from '../../../app/layouts/SectionContainer';
import heroSectionBgImg from '../../../assets/todo-hero-bg.png';
import { heroSectionData } from '../../../content/site.content';
import { useAuth } from '../../../context/AuthContext';
import Button from '../../common/ui/Button';

const HeroSection = () => {
  const { user } = useAuth();

  return (
    <div
      style={{ backgroundImage: `url(${heroSectionBgImg})` }}
      className="flex h-[calc(100vh-65px)] items-center bg-cover bg-fixed bg-right bg-no-repeat sm:h-[calc(100vh-75px)] sm:bg-scroll md:bg-center"
    >
      <SectionContainer>
        <div className="items-left flex h-full flex-col justify-center gap-8 sm:gap-10 md:gap-20">
          <h2 className="w-auto max-w-130 text-[3.4rem] leading-18 font-bold sm:max-w-200 sm:text-[4.8rem] sm:leading-30 lg:text-[5.6rem]">
            {heroSectionData.title}
          </h2>
          <p className="max-w-250 text-4xl leading-12 font-medium text-black/80 sm:leading-15">
            {heroSectionData.tagline}
          </p>
          <Button
            variant={'lightGreen'}
            isLink
            path={user ? '\\dashboard' : '\\register'}
          >
            {user ? 'Go to workspace' : 'Get Started'}
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
};

export default HeroSection;
