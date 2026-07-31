function Responsive() {
  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold">Responsive Design</h1>

      <p>
        Responsive utilities allow your UI to adapt to different screen sizes
        like mobile, tablet and desktop.
      </p>

      {/* Breakpoints */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          1. Tailwind Breakpoints
        </h2>

        <div className="border rounded-lg p-5 bg-gray-50">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>sm:</strong> 640px and above</li>
            <li><strong>md:</strong> 768px and above</li>
            <li><strong>lg:</strong> 1024px and above</li>
            <li><strong>xl:</strong> 1280px and above</li>
            <li><strong>2xl:</strong> 1536px and above</li>
          </ul>
        </div>

        <p className="mt-2 text-gray-600">
          Prefix any utility with a breakpoint to apply it only from that screen size.
        </p>
      </section>

      {/* Responsive Text */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          2. Responsive Text
        </h2>

        <h3 className="text-lg md:text-2xl lg:text-4xl font-bold">
          Resize the browser window
        </h3>

        <p className="mt-2 text-gray-600">
          Text size increases on medium and large screens.
        </p>
      </section>

      {/* Responsive Width */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          3. Responsive Width
        </h2>

        <div className="w-full md:w-2/3 lg:w-1/2 bg-blue-500 text-white p-4 rounded">
          Responsive Width
        </div>

        <p className="mt-2 text-gray-600">
          Width changes based on screen size.
        </p>
      </section>

      {/* Responsive Grid */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          4. Responsive Grid
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-green-500 text-white p-5 rounded">Card 1</div>

          <div className="bg-green-500 text-white p-5 rounded">Card 2</div>

          <div className="bg-green-500 text-white p-5 rounded">Card 3</div>

          <div className="bg-green-500 text-white p-5 rounded">Card 4</div>

        </div>

        <p className="mt-2 text-gray-600">
          1 column on mobile, 2 on tablet and 4 on desktop.
        </p>
      </section>

      {/* Responsive Flex */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          5. Responsive Flex
        </h2>

        <div className="flex flex-col md:flex-row gap-4">

          <div className="bg-purple-500 text-white p-5 rounded flex-1">
            Left
          </div>

          <div className="bg-purple-300 p-5 rounded flex-1">
            Right
          </div>

        </div>

        <p className="mt-2 text-gray-600">
          Items stack vertically on mobile and become horizontal on medium screens.
        </p>
      </section>

      {/* Hide & Show */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          6. Hide & Show Elements
        </h2>

        <div className="space-y-3">

          <div className="hidden md:block bg-blue-500 text-white p-4 rounded">
            Visible on md and larger
          </div>

          <div className="block md:hidden bg-red-500 text-white p-4 rounded">
            Visible only on mobile
          </div>

        </div>

        <p className="mt-2 text-gray-600">
          Use <strong>hidden</strong> and <strong>block</strong> with breakpoints.
        </p>
      </section>

      {/* Responsive Navigation */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          7. Responsive Navigation
        </h2>

        <nav className="bg-blue-600 text-white rounded p-4">

          <div className="flex justify-between items-center">

            <h3 className="font-bold">
              My App
            </h3>

            <div className="hidden md:flex gap-6">
              <span>Home</span>
              <span>About</span>
              <span>Services</span>
              <span>Contact</span>
            </div>

            <button className="md:hidden">
              ☰
            </button>

          </div>

        </nav>

        <p className="mt-2 text-gray-600">
          Desktop shows menu links while mobile shows a menu button.
        </p>
      </section>

      {/* Dashboard Cards */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          8. Responsive Dashboard
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-orange-500 text-white p-6 rounded">
            Users
          </div>

          <div className="bg-green-500 text-white p-6 rounded">
            Orders
          </div>

          <div className="bg-blue-500 text-white p-6 rounded">
            Revenue
          </div>

          <div className="bg-purple-500 text-white p-6 rounded">
            Reports
          </div>

        </div>

        <p className="mt-2 text-gray-600">
          Dashboard cards automatically adjust to screen size.
        </p>
      </section>

      {/* Responsive Image */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          9. Responsive Image
        </h2>

        <img
          src="https://placehold.co/700x300"
          alt="Placeholder"
          className="w-full rounded-lg"
        />

        <p className="mt-2 text-gray-600">
          <strong>w-full</strong> makes the image fit its container.
        </p>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Quick Summary
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>sm:</strong> 640px+</li>
          <li><strong>md:</strong> 768px+</li>
          <li><strong>lg:</strong> 1024px+</li>
          <li><strong>xl:</strong> 1280px+</li>
          <li><strong>2xl:</strong> 1536px+</li>
          <li><strong>md:text-xl</strong> → Responsive Text</li>
          <li><strong>md:w-1/2</strong> → Responsive Width</li>
          <li><strong>md:grid-cols-2</strong> → Responsive Grid</li>
          <li><strong>md:flex-row</strong> → Responsive Flex</li>
          <li><strong>hidden md:block</strong> → Hide & Show Elements</li>
        </ul>
      </section>

    </div>
  );
}

export default Responsive;