import { Link } from "react-router-dom"
import logo from '../../../assets/logo.png'
import { siteMetaData } from "../../../content/site.content"


const Brand = () => {
  return (
    <div className="h-full">
      <Link className="h-full flex gap-0 flex-wrap items-center" to="/">
            <img className="h-full" src={logo} alt="logo" title="TaskWise" />
            <h1 className="sm:text-5xl text-[3rem] text-main font-medium hidden xs:block"> {siteMetaData?.name || 'ToDo app'} </h1>
      </Link>
    </div>
  )
}

export default Brand