import { Outlet } from "@tanstack/react-router";
import Header from "./Header";
import Navigation from "./Navigation";
import TopicNavigation from "./TopicNavigation";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <Navigation />

      <TopicNavigation />

      <main className="max-w-7xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;