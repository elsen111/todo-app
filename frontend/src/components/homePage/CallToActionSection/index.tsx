import SectionContainer from '../../../app/layouts/SectionContainer';
import { ctaSectionData } from '../../../content/site.content';
import { useAuth } from '../../../context/AuthContext';
import Button from '../../common/ui/Button';

const CallToActionSection = () => {
  const { user } = useAuth();

  if (user) return null;

  return (
    <SectionContainer>
      <div className="bg-primary mt-15 flex flex-col items-center justify-center! gap-5 rounded-3xl p-15 text-white md:gap-10">
        <header className="w-full">
          <h3 className="text-center text-[2.4rem] leading-tight font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {ctaSectionData.title}
          </h3>
          <p className="mt-4 text-center text-[1.8rem] leading-relaxed font-normal">
            {ctaSectionData.description}
          </p>
        </header>
        <Button
          variant={'white'}
          isLink
          path={'/register'}
        >
          Start Free
        </Button>
      </div>
    </SectionContainer>
  );
};

export default CallToActionSection;
