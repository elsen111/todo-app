import SEO from "../../components/common/seo/SEO"
import CallToActionSection from "../../components/homePage/CallToActionSection"
import FeaturesSection from "../../components/homePage/FeaturesSection"
import Footer from "../../components/homePage/Footer"
import Header from "../../components/homePage/Header"
import HeroSection from "../../components/homePage/HeroSection"
import HowItWorksSection from "../../components/homePage/HowItWorksSection"


const HomePage = () => {
  return (
    <>
      <SEO /> 
      <Header />
      <main className="relative z-0 md:top-30 top-26">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  )
}

export default HomePage