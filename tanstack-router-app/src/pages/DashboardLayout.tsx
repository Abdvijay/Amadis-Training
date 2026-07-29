import { Link, Outlet } from "@tanstack/react-router";
import "../App.css";
function DashboardLayout() {
  return (
    <div>
      <h1>Company Dashboard</h1>
      <nav>
        <Link to="/dashboard" activeOptions={{exact:true}} activeProps={{className:"active-link"}}>Dashboard</Link>
        {" | "}
        <Link to="/dashboard/employees" activeProps={{className:"active-link"}}>Employees</Link>
        {" | "}
        <Link to="/dashboard/students" activeProps={{className:"active-link"}}>Students</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;