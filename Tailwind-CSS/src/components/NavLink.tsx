import { Link } from "@tanstack/react-router";

type NavLinkProps = {
  to: string;
  label: string;
  exact?: boolean;
};

function NavLink({ to, label, exact = false}: NavLinkProps) {
  return (
    <Link
      to={to}
      activeProps={{
        className:
          "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1",
      }}
      inactiveProps={{
        className:
          "text-slate-700 hover:text-blue-600 transition-colors duration-200",
      }}
      activeOptions={{
        exact,
      }}
    >
      {label}
    </Link>
  );
}

export default NavLink;