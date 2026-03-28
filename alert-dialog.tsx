import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background pt-4">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <Outlet />
      </main>
      <footer className="mx-auto max-w-3xl px-4 pb-12 pt-8 border-t border-border/50">
        <p className="text-sm text-muted-foreground">© 2026 My life. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
