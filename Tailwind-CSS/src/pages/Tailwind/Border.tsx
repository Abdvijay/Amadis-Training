function Border() {
  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold">Border</h1>

      <p>
        Tailwind provides utilities to add borders, change border width,
        border color and create rounded corners.
      </p>

      {/* Border */}
      <section>
        <h2 className="text-xl font-semibold mb-3">1. Border</h2>

        <div className="border p-4 mb-2">
          border
        </div>

        <div className="border-2 p-4 mb-2">
          border-2
        </div>

        <div className="border-4 p-4">
          border-4
        </div>

        <p className="mt-2 text-gray-600">
          Use <strong>border</strong>, <strong>border-2</strong>,
          <strong> border-4</strong> to change border thickness.
        </p>
      </section>

      {/* Border Colors */}
      <section>
        <h2 className="text-xl font-semibold mb-3">2. Border Colors</h2>

        <div className="border-2 border-red-500 p-4 mb-2">
          border-red-500
        </div>

        <div className="border-2 border-green-500 p-4 mb-2">
          border-green-500
        </div>

        <div className="border-2 border-blue-500 p-4 mb-2">
          border-blue-500
        </div>

        <div className="border-2 border-purple-500 p-4">
          border-purple-500
        </div>

        <p className="mt-2 text-gray-600">
          Use <strong>border-color</strong> utilities to change border color.
        </p>
      </section>

      {/* Individual Borders */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          3. Individual Borders
        </h2>

        <div className="border-t-4 border-red-500 p-4 mb-2">
          border-t-4
        </div>

        <div className="border-r-4 border-green-500 p-4 mb-2">
          border-r-4
        </div>

        <div className="border-b-4 border-blue-500 p-4 mb-2">
          border-b-4
        </div>

        <div className="border-l-4 border-purple-500 p-4">
          border-l-4
        </div>

        <p className="mt-2 text-gray-600">
          Apply borders to specific sides.
        </p>
      </section>

      {/* Rounded */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          4. Rounded Corners
        </h2>

        <div className="border p-4 rounded-none mb-2">
          rounded-none
        </div>

        <div className="border p-4 rounded mb-2">
          rounded
        </div>

        <div className="border p-4 rounded-md mb-2">
          rounded-md
        </div>

        <div className="border p-4 rounded-lg mb-2">
          rounded-lg
        </div>

        <div className="border p-4 rounded-xl mb-2">
          rounded-xl
        </div>

        <div className="border p-4 rounded-2xl">
          rounded-2xl
        </div>

        <p className="mt-2 text-gray-600">
          Increase the radius for smoother corners.
        </p>
      </section>

      {/* Rounded Full */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          5. Rounded Full
        </h2>

        <div className="size-24 rounded-full bg-blue-500 text-white flex items-center justify-center">
          Avatar
        </div>

        <p className="mt-2 text-gray-600">
          <strong>rounded-full</strong> creates a perfect circle.
        </p>
      </section>

      {/* Individual Radius */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          6. Individual Rounded Corners
        </h2>

        <div className="border rounded-t-xl p-4 mb-2">
          rounded-t-xl
        </div>

        <div className="border rounded-b-xl p-4 mb-2">
          rounded-b-xl
        </div>

        <div className="border rounded-l-xl p-4 mb-2">
          rounded-l-xl
        </div>

        <div className="border rounded-r-xl p-4">
          rounded-r-xl
        </div>

        <p className="mt-2 text-gray-600">
          Round only selected sides.
        </p>
      </section>

      {/* Real Card */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          7. Card Example
        </h2>

        <div className="border rounded-xl p-6 bg-white">

          <h3 className="text-xl font-bold mb-2">
            Tailwind CSS
          </h3>

          <p className="text-gray-600">
            Cards commonly use borders with rounded corners.
          </p>

        </div>
      </section>

      {/* Button Example */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          8. Button Example
        </h2>

        <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white">
          Click Me
        </button>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Quick Summary
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>border</strong> → Default Border</li>
          <li><strong>border-2</strong> → Border Width</li>
          <li><strong>border-red-500</strong> → Border Color</li>
          <li><strong>border-t</strong> → Top Border</li>
          <li><strong>border-r</strong> → Right Border</li>
          <li><strong>border-b</strong> → Bottom Border</li>
          <li><strong>border-l</strong> → Left Border</li>
          <li><strong>rounded</strong> → Rounded Corners</li>
          <li><strong>rounded-full</strong> → Circle</li>
          <li><strong>rounded-t-xl</strong> → Top Corners Only</li>
        </ul>
      </section>

    </div>
  );
}

export default Border;