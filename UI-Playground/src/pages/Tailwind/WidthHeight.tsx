function WidthHeight() {
  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold">Width & Height</h1>

      <p>
        Tailwind provides utility classes to control the width and height of
        elements. You can use fixed values, percentages, screen size and
        minimum/maximum dimensions.
      </p>

      {/* Width */}
      <section>
        <h2 className="text-xl font-semibold mb-3">1. Width (w)</h2>

        <div className="bg-blue-500 text-white w-24 p-2 mb-2">
          w-24
        </div>

        <div className="bg-blue-500 text-white w-40 p-2 mb-2">
          w-40
        </div>

        <div className="bg-blue-500 text-white w-64 p-2">
          w-64
        </div>

        <p className="mt-2 text-gray-600">
          Use <strong>w-*</strong> to set the width.
        </p>
      </section>

      {/* Height */}
      <section>
        <h2 className="text-xl font-semibold mb-3">2. Height (h)</h2>

        <div className="bg-green-500 text-white h-20 p-2 mb-2">
          h-20
        </div>

        <div className="bg-green-500 text-white h-32 p-2 mb-2">
          h-32
        </div>

        <div className="bg-green-500 text-white h-40 p-2">
          h-40
        </div>

        <p className="mt-2 text-gray-600">
          Use <strong>h-*</strong> to set the height.
        </p>
      </section>

      {/* Full Width */}
      <section>
        <h2 className="text-xl font-semibold mb-3">3. Full Width</h2>

        <div className="bg-purple-500 text-white w-full p-3 rounded">
          w-full
        </div>

        <p className="mt-2 text-gray-600">
          <strong>w-full</strong> makes the element take the full width of its
          parent.
        </p>
      </section>

      {/* Screen Height */}
      <section>
        <h2 className="text-xl font-semibold mb-3">4. Screen Height</h2>

        <div className="bg-red-500 text-white h-screen flex items-center justify-center">
          h-screen
        </div>

        <p className="mt-2 text-gray-600">
          <strong>h-screen</strong> makes the element as tall as the viewport.
        </p>
      </section>

      {/* Min Width */}
      <section>
        <h2 className="text-xl font-semibold mb-3">5. Minimum Width</h2>

        <div className="min-w-64 bg-yellow-500 p-3 rounded">
          min-w-64
        </div>

        <p className="mt-2 text-gray-600">
          Prevents the width from becoming smaller than the specified value.
        </p>
      </section>

      {/* Max Width */}
      <section>
        <h2 className="text-xl font-semibold mb-3">6. Maximum Width</h2>

        <div className="max-w-sm bg-cyan-500 text-white p-3 rounded">
          max-w-sm
        </div>

        <p className="mt-2 text-gray-600">
          Limits the maximum width of an element.
        </p>
      </section>

      {/* Min Height */}
      <section>
        <h2 className="text-xl font-semibold mb-3">7. Minimum Height</h2>

        <div className="min-h-32 bg-pink-500 text-white p-3 rounded flex justify-center items-center">
          min-h-32
        </div>

        <p className="mt-2 text-gray-600">
          Keeps the minimum height of the element.
        </p>
      </section>

      {/* Max Height */}
      <section>
        <h2 className="text-xl font-semibold mb-3">8. Maximum Height</h2>

        <div className="max-h-32 overflow-auto bg-orange-500 text-white p-3 rounded">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.
        </div>

        <p className="mt-2 text-gray-600">
          Limits the height and shows scroll if the content exceeds it.
        </p>
      </section>

      {/* Size */}
      <section>
        <h2 className="text-xl font-semibold mb-3">9. Size</h2>

        <div className="size-24 bg-indigo-500 text-white flex items-center justify-center rounded">
          size-24
        </div>

        <p className="mt-2 text-gray-600">
          <strong>size-*</strong> sets both width and height together.
        </p>
      </section>

      {/* Real Example */}
      <section>
        <h2 className="text-xl font-semibold mb-3">10. Real Example</h2>

        <div className="max-w-md bg-white rounded-lg shadow p-5">

          <img
            src="https://placehold.co/400x200"
            alt="Placeholder"
            className="w-full rounded mb-4"
          />

          <h3 className="text-xl font-bold">
            Tailwind CSS
          </h3>

          <p className="text-gray-600 mt-2">
            Width and height utilities help build responsive cards and layouts.
          </p>

        </div>
      </section>

      {/* Quick Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Quick Summary</h2>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>w-*</strong> → Width</li>
          <li><strong>h-*</strong> → Height</li>
          <li><strong>w-full</strong> → Full Width</li>
          <li><strong>h-screen</strong> → Full Screen Height</li>
          <li><strong>min-w-*</strong> → Minimum Width</li>
          <li><strong>max-w-*</strong> → Maximum Width</li>
          <li><strong>min-h-*</strong> → Minimum Height</li>
          <li><strong>max-h-*</strong> → Maximum Height</li>
          <li><strong>size-*</strong> → Width & Height Together</li>
        </ul>
      </section>

    </div>
  );
}

export default WidthHeight;