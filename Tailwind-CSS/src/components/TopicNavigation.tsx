import { useRouterState } from "@tanstack/react-router";

import { tailwindTopics } from "../data/topics";

import NavLink from "./NavLink";

function TopicNavigation() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  let topics = [];

  if (pathname.startsWith("/tailwind")) {
    topics = tailwindTopics;
  } else {
    return null;
  }

  return (
    <nav className="bg-white border-b">
      <div className="max-w-8xl mx-auto overflow-x-auto">
        <div className="flex gap-6 min-w-max p-4">

        {topics.map((topic) => (
          <NavLink
            key={topic.path}
            to={topic.path}
            label={topic.title}
            exact={topic.exact}
          />
        ))}
        </div>
      </div>
    </nav>
  );
}

export default TopicNavigation;