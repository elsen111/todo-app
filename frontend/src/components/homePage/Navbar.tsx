
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const getInitials = (fullname: string): string =>
    fullname
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((name) => name.charAt(0).toUpperCase())
        .join("");

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="flex flex-wrap items-center justify-between gap-4 md:gap-10">
            <div className="items-center gap-7 hidden md:flex">
                <a
                    href="/#features"
                    className="relative px-1 py-3 text-3xl text-main after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                    Features
                </a>

                <a
                    href="/#how-it-works"
                    className="relative px-1 py-3 text-3xl text-main after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                    How it works
                </a>
            </div>

            {user ? (
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link
                        to="/dashboard"
                        aria-label="Go to dashboard"
                        className="flex sm:h-20 sm:w-20 h-18 w-18 items-center justify-center rounded-full border-2 border-primary bg-primary p-4.5 text-3xl font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/90 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                    >
                        {getInitials(user.fullname)}
                    </Link>

                    <button
                        type="button"
                        onClick={logout}
                        aria-label="Log out"
                        className="flex cursor-pointer items-center justify-center rounded-2xl px-5 py-4.5 text-3xl text-white transition-all duration-200 hover:translate-x-2"
                    >
                        <LogOut className="size-11 text-primary" />
                    </button>
                </div>
            ) : (
                <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-10">
                    <Link
                        to="/login"
                        className="flex items-center justify-center rounded-2xl border-2 border-secondary/30 sm:px-7 px-5 py-3 sm:py-4.5 text-3xl font-medium text-main transition-all duration-200 hover:border-secondary hover:bg-secondary/5"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="flex items-center justify-center rounded-2xl border-2 border-primary bg-primary sm:px-7 px-5 py-3 sm:py-4.5 text-3xl font-medium text-white transition-all duration-200 hover:border-primary/90 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
