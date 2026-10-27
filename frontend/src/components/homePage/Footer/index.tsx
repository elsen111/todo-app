import SectionContainer from "../../../app/layouts/SectionContainer"
import { brandTagline, footerCopyright, footerNavData } from "../../../content/site.content"
import Brand from "../../common/ui/Brand"
import FooterNavGroup from "./FooterNavGroup"


const Footer = () => {

      return (
            <footer className="mt-15 bg-light-green">
                  <SectionContainer>
                        <div className="flex justify-between gap-15 flex-col sm:flex-row">
                              <section className="h-20 sm:block hidden">
                                    <Brand />
                                    <p className="text-[1.6rem] md:text-[1.8rem] text-secondary font-medium"> {brandTagline} </p>
                              </section>
                              <section className="flex flex-col items-center xxs:items-start xxs:flex-row justify-around sm:justify-end gap-5 xxs:gap-10 sm:gap-20 lg:gap-40">
                                    {footerNavData.map((navGroup) => (
                                          <FooterNavGroup
                                                key={navGroup.title}
                                                title={navGroup.title}
                                                links={navGroup.links}
                                          />
                                    ))}

                              </section>
                        </div>
                        <div className="mt-20 text-center text-2xl text-gray-700 font-medium">
                              <p> {footerCopyright} </p>
                        </div>
                  </SectionContainer>
            </footer>
      )
}

export default Footer