import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import Button from '../../common/ui/Button';

const getInitials = (fullname: string): string =>
  fullname
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((name) => name.charAt(0).toUpperCase())
    .join('');

const Navbar = () => {
  const { user, logout } = useAuth();

  console.log(user);

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 md:gap-10">
      <div className="hidden items-center gap-7 md:flex">
        <a
          href="#features"
          className="text-main after:bg-secondary relative px-1 py-3 text-3xl after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
        >
          Features
        </a>

        <a
          href="#how-it-works"
          className="text-main after:bg-secondary relative px-1 py-3 text-3xl after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
        >
          How it works
        </a>
      </div>

      {user ? (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/dashboard"
            aria-label="Go to dashboard"
            className="border-primary bg-primary hover:border-primary/90 hover:bg-primary/90 hover:shadow-primary/20 flex h-18 w-18 items-center justify-center rounded-full border-2 p-4.5 text-3xl font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:h-20 sm:w-20"
          >
            {getInitials(user.fullName)}
          </Link>

          <button
            type="button"
            onClick={logout}
            aria-label="Log out"
            className="flex cursor-pointer items-center justify-center rounded-2xl px-5 py-4.5 text-3xl text-white transition-all duration-200 hover:translate-x-2"
          >
            <LogOut className="text-primary size-11" />
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-10">
          <Button
            variant={'white'}
            isLink
            path="\auth"
          >
            Login
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
