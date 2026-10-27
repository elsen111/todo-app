
import SectionContainer from "../../../app/layouts/SectionContainer"
import heroSectionBgImg from "../../../assets/todo-hero-bg.png"
import { heroSectionData } from "../../../content/site.content"
import { useAuth } from "../../../context/AuthContext"
import Button from "../../common/ui/Button"

const HeroSection = () => {

      const { user } = useAuth();

      return (
            <div
                  style={{ backgroundImage: `url(${heroSectionBgImg})` }}
                  className="h-[calc(100vh-65px)] sm:h-[calc(100vh-75px)] bg-fixed sm:bg-scroll bg-cover bg-right md:bg-center bg-no-repeat flex items-center"
            >
                  <SectionContainer>
                        <div className="flex flex-col items-left justify-center h-full gap-8 sm:gap-10 md:gap-20">
                              <h2 className="w-auto max-w-130 sm:max-w-200 font-bold text-[3.4rem] sm:text-[4.8rem] lg:text-[5.6rem] leading-18 sm:leading-30"> {heroSectionData.title} </h2>
                              <p className="text-4xl text-black/80 font-medium max-w-250 leading-12 sm:leading-15"> {heroSectionData.tagline} </p>
                              <Button variant={"lightGreen"} isLink path={user ? "\\dashboard" : '\\register'}>
                                    {user ? "Go to workspace" : "Start Free"}
                              </Button>
                        </div>
                  </SectionContainer>
            </div>
      )
}

export default HeroSection