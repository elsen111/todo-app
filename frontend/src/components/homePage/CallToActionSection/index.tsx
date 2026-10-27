import SectionContainer from "../../../app/layouts/SectionContainer"
import { ctaSectionData } from "../../../content/site.content"
import { useAuth } from "../../../context/AuthContext"
import Button from "../../common/ui/Button"


const CallToActionSection = () => {

  const {user} = useAuth();

  if(user) return null;

  return (
    <SectionContainer>
      <div className='gap-5 md:gap-10 mt-15 bg-primary flex flex-col justify-center! items-center text-white rounded-3xl p-15'>
        <header className="w-full">
          <h3 className="text-[2.4rem] md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-center"> {ctaSectionData.title} </h3>
          <p className="text-[1.8rem] font-normal leading-relaxed mt-4 text-center"> {ctaSectionData.description} </p>
        </header>
        <Button variant={"white"} isLink path={"/register"}>
          Start Free
        </Button>
      </div>
    </SectionContainer>
  )
}

export default CallToActionSection