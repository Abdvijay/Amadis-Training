function DarkMode() {
  return (
    <div className="space-y-10 dark:bg-slate-900 dark:text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold">
        Dark Mode
      </h1>

      <p>
        Tailwind provides the <strong>dark:</strong> variant to apply styles
        only when Dark Mode is enabled.
      </p>

      {/* Enable Dark Mode */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          1. Enable Dark Mode
        </h2>

        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded">

          <code>
            dark:bg-gray-800
          </code>

        </div>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Prefix any utility with <strong>dark:</strong> to apply it in Dark
          Mode.
        </p>
      </section>

      {/* Background */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          2. Dark Background
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded p-5 shadow">

          Background changes automatically.

        </div>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Background switches depending on the active theme.
        </p>
      </section>

      {/* Text */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          3. Dark Text
        </h2>

        <div className="bg-white dark:bg-gray-800 p-5 rounded">

          <p className="text-black dark:text-white">
            This text changes color.
          </p>

        </div>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Use <strong>dark:text-*</strong> for readable text.
        </p>
      </section>

      {/* Border */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          4. Dark Border
        </h2>

        <div className="border border-gray-300 dark:border-gray-700 p-5 rounded">

          Border Color

        </div>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Borders can also change in Dark Mode.
        </p>
      </section>

      {/* Button */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          5. Dark Button
        </h2>

        <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-white text-black px-6 py-3 rounded">
          Save
        </button>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Buttons can have separate colors for Light and Dark themes.
        </p>
      </section>

      {/* Card */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          6. Dark Card
        </h2>

        <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl shadow p-6">

          <h3 className="text-xl font-bold">
            React Course
          </h3>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            This card supports both themes.
          </p>

        </div>
      </section>

      {/* Navigation */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          7. Dark Navigation
        </h2>

        <nav className="bg-blue-600 dark:bg-slate-800 text-white p-4 rounded">

          <div className="flex justify-between">

            <span className="font-bold">
              My App
            </span>

            <div className="flex gap-6">
              <span>Home</span>
              <span>About</span>
              <span>Contact</span>
            </div>

          </div>

        </nav>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Navigation changes background color in Dark Mode.
        </p>
      </section>

      {/* Form */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          8. Dark Input
        </h2>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-black dark:text-white rounded p-3"
        />

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Forms should also support both themes.
        </p>
      </section>

      {/* Theme Toggle Example */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          9. Theme Toggle Button
        </h2>

        <button className="px-6 py-3 rounded bg-gray-900 text-white dark:bg-yellow-400 dark:text-black">
          🌙 / ☀️ Toggle Theme
        </button>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          This button represents a theme switcher. (We'll build a real toggle
          later using React state.)
        </p>
      </section>

      {/* Complete Example */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          10. Complete Example
        </h2>

        <div className="max-w-md rounded-xl shadow-lg bg-white dark:bg-slate-800 dark:border dark:border-slate-700 p-6">

          <h3 className="text-2xl font-bold">
            Tailwind CSS
          </h3>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Build beautiful websites that automatically support Light and Dark
            Mode.
          </p>

          <button className="mt-5 bg-blue-600 dark:bg-blue-500 text-white px-5 py-2 rounded">
            Learn More
          </button>

        </div>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Quick Summary
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>dark:</strong> Apply styles only in Dark Mode.</li>
          <li><strong>dark:bg-*</strong> → Dark background.</li>
          <li><strong>dark:text-*</strong> → Dark text color.</li>
          <li><strong>dark:border-*</strong> → Dark borders.</li>
          <li><strong>dark:hover:*</strong> → Hover styles in Dark Mode.</li>
          <li>Use the same component for both Light and Dark themes.</li>
        </ul>
      </section>

    </div>
  );
}

export default DarkMode;