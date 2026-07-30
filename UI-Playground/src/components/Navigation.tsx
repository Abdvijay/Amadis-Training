import NavLink from "./NavLink";

function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-8xl mx-auto flex gap-8 p-4 overflow-x-auto">
        <NavLink to="/" label="Dashboard"/>

        <NavLink to="/tailwind" label="Tailwind CSS" />

        <NavLink to="/lucide" label="Lucide Icons" />

        <NavLink to="/shadcn" label="shadcn/ui" />
      </div>
    </nav>
  );
}

export default Navigation;