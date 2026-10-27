import SectionContainer from '../../../app/layouts/SectionContainer';
import {
  brandTagline,
  footerCopyright,
  footerNavData,
} from '../../../content/site.content';
import Brand from '../../common/ui/Brand';
import FooterNavGroup from './FooterNavGroup';

const Footer = () => {
  return (
    <footer className="bg-light-green mt-15">
      <SectionContainer>
        <div className="flex flex-col justify-between gap-15 sm:flex-row">
          <section className="hidden h-20 sm:block">
            <Brand />
            <p className="text-secondary text-[1.6rem] font-medium md:text-[1.8rem]">
              {brandTagline}
            </p>
          </section>
          <section className="xxs:items-start xxs:flex-row xxs:gap-10 flex flex-col items-center justify-around gap-5 sm:justify-end sm:gap-20 lg:gap-40">
            {footerNavData.map((navGroup) => (
              <FooterNavGroup
                key={navGroup.title}
                title={navGroup.title}
                links={navGroup.links}
              />
            ))}
          </section>
        </div>
        <div className="mt-20 text-center text-2xl font-medium text-gray-700">
          <p> {footerCopyright} </p>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
