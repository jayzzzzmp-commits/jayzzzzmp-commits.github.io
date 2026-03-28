import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "Gallery", path: "/gallery" },
  { label: "Resume", path: "/resume" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-3xl px-4">
      <div className="flex items-center justify-between rounded-2xl bg-card/80 px-6 py-3 shadow-sm backdrop-blur-xl border border-border/50">
        <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
          My life
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
