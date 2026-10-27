import Brand from '../../common/ui/Brand';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="fixed right-0 left-0 z-15 flex h-26 items-center justify-between bg-white/90 px-5 py-3 shadow-xl md:h-30 md:px-10">
      <Brand />
      <Navbar />
    </header>
  );
};

export default Header;
