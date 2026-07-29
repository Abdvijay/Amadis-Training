import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { Outlet } from "@tanstack/react-router";

function MainLayout() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <Outlet />
    </div>
  );
}

export default MainLayout;