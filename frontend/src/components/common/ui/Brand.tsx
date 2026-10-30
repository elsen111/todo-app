import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { siteMetaData } from '../../../content/site.content';

const Brand = () => {
  return (
    <div className="h-full">
      <Link
        className="flex h-full flex-wrap items-center gap-0"
        to="/"
      >
        <img
          className="h-full"
          src={logo}
          alt="logo"
          title="TaskWise"
        />
        <h1 className="text-main xs:block hidden text-[3rem] font-bold sm:text-5xl">
          {siteMetaData?.name || 'ToDo app'}
        </h1>
      </Link>
    </div>
  );
};

export default Brand;
