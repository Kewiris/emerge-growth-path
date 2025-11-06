import { NavLink } from "@/components/NavLink";
import logoMain from "@/assets/logo-main.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-20 items-center justify-between px-6">
        <NavLink to="/" className="flex items-center">
          <img src={logoMain} alt="E-merge Consulting" className="h-12" />
        </NavLink>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="text-sm font-medium transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            className="text-sm font-medium transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            Blog
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
