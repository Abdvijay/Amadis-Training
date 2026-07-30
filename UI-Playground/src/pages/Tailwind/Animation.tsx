function Animation() {
  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold">Animation</h1>

      <p>
        Tailwind provides built-in animation utilities to create loading
        indicators, notifications and interactive UI effects.
      </p>

      {/* animate-spin */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          1. animate-spin
        </h2>

        <div className="size-16 border-4 bg-gradient-to-r from-red-500 to-purple-300 border-violet-500-600 border-t-transparent rounded-full animate-spin"></div>

        <p className="mt-2 text-gray-600">
          <strong>animate-spin</strong> continuously rotates the element.
        </p>
      </section>

      {/* animate-ping */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          2. animate-ping
        </h2>

        <div className="relative size-16">

          <div className="absolute inset-0 rounded-full bg-violet-300 animate-ping"></div>

          <div className="relative size-16 rounded-full bg-violet-600"></div>

        </div>

        <p className="mt-2 text-gray-600">
          Creates a ripple or notification effect.
        </p>
      </section>

      {/* animate-pulse */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          3. animate-pulse
        </h2>

        <div className="animate-pulse space-y-3">

          <div className="h-5 bg-gray-300 rounded"></div>

          <div className="h-5 bg-gray-300 rounded w-3/4"></div>

          <div className="h-5 bg-gray-300 rounded w-1/2"></div>

        </div>

        <p className="mt-2 text-gray-600">
          Used for skeleton loading placeholders.
        </p>
      </section>

      {/* animate-bounce */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          4. animate-bounce
        </h2>

        <button className="bg-green-600 text-white px-6 py-3 rounded animate-bounce">
          Bounce
        </button>

        <p className="mt-2 text-gray-600">
          Makes the element bounce continuously.
        </p>
      </section>

      {/* Loading Spinner */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          5. Loading Spinner
        </h2>

        <div className="flex items-center gap-4">

          <div className="size-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>

          <span>Loading...</span>

        </div>

        <p className="mt-3 text-gray-600">
          Common loading indicator in web applications.
        </p>
      </section>

      {/* Notification */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          6. Notification Badge
        </h2>

        <div className="relative w-fit">

          <button className="bg-gray-800 text-white px-6 py-3 rounded">
            Inbox
          </button>

          <span className="absolute -top-2 -right-2">

            <span className="absolute inline-flex size-5 rounded-full bg-red-400 animate-ping"></span>

            <span className="relative flex size-5 rounded-full bg-red-600 text-white text-xs items-center justify-center">
              3
            </span>

          </span>

        </div>

        <p className="mt-2 text-gray-600">
          Notification badge with a ping animation.
        </p>
      </section>

      {/* Skeleton Card */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          7. Skeleton Card
        </h2>

        <div className="max-w-sm border rounded-lg p-5 animate-pulse space-y-4">

          <div className="h-40 bg-gray-300 rounded"></div>

          <div className="h-5 bg-gray-300 rounded"></div>

          <div className="h-5 bg-gray-300 rounded w-2/3"></div>

        </div>

        <p className="mt-2 text-gray-600">
          Used while waiting for API data.
        </p>
      </section>

      {/* Animated Card */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          8. Animated Card
        </h2>

        <div className="max-w-sm border rounded-xl p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-400">

          <h3 className="text-xl font-bold mb-2">
            React Course
          </h3>

          <p className="text-gray-600">
            Hover to see the smooth animation.
          </p>

        </div>
      </section>

      {/* Animated Button */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          9. Animated Button
        </h2>

        <button className="bg-blue-600 text-white px-6 py-3 rounded transition duration-300 hover:scale-120 active:scale-95">
          Click Me
        </button>

        <p className="mt-2 text-gray-600">
          Button grows on hover and shrinks slightly when clicked.
        </p>
      </section>

      {/* Custom Animation */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          10. Custom Animation
        </h2>

        <div className="animate-[bounce_2s_infinite] size-10 rounded-full bg-purple-600"></div>

        <p className="mt-2 text-gray-600">
          Tailwind allows custom animations using arbitrary values.
        </p>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Quick Summary
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>animate-spin</strong> → Rotating animation</li>
          <li><strong>animate-ping</strong> → Ripple effect</li>
          <li><strong>animate-pulse</strong> → Skeleton loading</li>
          <li><strong>animate-bounce</strong> → Bouncing animation</li>
          <li><strong>transition</strong> → Smooth hover animation</li>
          <li><strong>hover:scale-110</strong> → Zoom effect</li>
          <li><strong>active:scale-95</strong> → Click effect</li>
          <li><strong>animate-[...]</strong> → Custom animation</li>
        </ul>
      </section>

    </div>
  );
}

export default Animation;