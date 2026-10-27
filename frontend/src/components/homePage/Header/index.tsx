import Brand from "../../common/ui/Brand"
import Navbar from "./Navbar"


const Header = () => {
      return (
            <header className="px-5 md:px-10 py-3 md:h-30 h-26 z-15 bg-white/90 flex justify-between items-center shadow-xl fixed left-0 right-0">
                  <Brand />
                  <Navbar />
            </header>
      )
}

export default Header