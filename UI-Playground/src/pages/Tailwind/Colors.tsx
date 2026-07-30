function Colors() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Colors</h1>

      <p>
        Tailwind provides utility classes to apply text colors, background
        colors, hover effects, color shades, transparency and gradients.
      </p>

      {/* Text Colors */}
      <section>
        <h2 className="text-xl font-semibold mb-3">1. Text Colors</h2>

        <p className="text-red-500">text-red-500</p>
        <p className="text-green-500">text-green-500</p>
        <p className="text-blue-500">text-blue-500</p>
        <p className="text-yellow-500">text-yellow-500</p>
        <p className="text-purple-500">text-purple-500</p>

        <p className="mt-2 text-gray-600">
          Use <strong>text-*</strong> to change the text color.
        </p>
      </section>

      {/* Background Colors */}
      <section>
        <h2 className="text-xl font-semibold mb-3">2. Background Colors</h2>

        <div className="bg-red-500 text-white p-3 rounded mb-2">bg-red-500</div>

        <div className="bg-green-500 text-white p-3 rounded mb-2">
          bg-green-500
        </div>

        <div className="bg-blue-500 text-white p-3 rounded mb-2">
          bg-blue-500
        </div>

        <div className="bg-purple-500 text-white p-3 rounded">
          bg-purple-500
        </div>

        <p className="mt-2 text-gray-600">
          Use <strong>bg-*</strong> to change the background color.
        </p>
      </section>

      {/* Color Shades */}
      <section>
        <h2 className="text-xl font-semibold mb-3">3. Color Shades</h2>

        <div className="space-y-2">
          <div className="bg-blue-100 p-2 rounded">bg-blue-100</div>
          <div className="bg-blue-300 p-2 rounded">bg-blue-300</div>
          <div className="bg-blue-500 text-white p-2 rounded">bg-blue-500</div>
          <div className="bg-blue-700 text-white p-2 rounded">bg-blue-700</div>
          <div className="bg-blue-900 text-white p-2 rounded">bg-blue-900</div>
        </div>

        <p className="mt-2 text-gray-600">
          Smaller numbers are lighter. Bigger numbers are darker.
        </p>
      </section>

      {/* Hover Colors */}
      <section>
        <h2 className="text-xl font-semibold mb-3">4. Hover Colors</h2>

        <button className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded">
          Hover Me
        </button>

        <p className="mt-2 text-gray-600">
          <strong>hover:</strong> changes the style when the mouse is over the
          element.
        </p>
      </section>

      {/* Transparency */}
      <section>
        <h2 className="text-xl font-semibold mb-3">5. Transparency</h2>

        <div className="bg-red-500 text-white p-2 rounded mb-2">
          bg-red-500/100
        </div>

        <div className="bg-red-500/75 text-white p-2 rounded mb-2">
          bg-red-500/75
        </div>

        <div className="bg-red-500/50 text-white p-2 rounded mb-2">
          bg-red-500/50
        </div>

        <div className="bg-red-500/25 text-white p-2 rounded">
          bg-red-500/25
        </div>

        <p className="mt-2 text-gray-600">
          Use <strong>/value</strong> to control transparency.
        </p>
      </section>

      {/* Gradient */}
      <section>
        <h2 className="text-xl font-semibold mb-3">6. Gradient Background</h2>

        <div className="bg-linear-to-r from-blue-500 to-purple-500 text-white p-5 rounded">
          Blue → Purple Gradient
        </div>

        <p className="mt-2 text-gray-600">
          Gradients are created using <strong>from</strong>, <strong>to</strong>
          and a direction like <strong>bg-gradient-to-r</strong>.
        </p>
      </section>

      {/* Real Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-3">7. Real Examples</h2>

        <div className="bg-white p-5 rounded shadow border space-y-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded">
            Save
          </button>

          <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded ml-3">
            Delete
          </button>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded ml-3">
            Update
          </button>
        </div>
      </section>

      {/* Quick Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Quick Summary</h2>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>text-*</strong> → Text Color
          </li>
          <li>
            <strong>bg-*</strong> → Background Color
          </li>
          <li>
            <strong>hover:bg-*</strong> → Hover Background
          </li>
          <li>
            <strong>100 → 900</strong> → Light to Dark Shades
          </li>
          <li>
            <strong>/50</strong> → Transparency
          </li>
          <li>
            <strong>bg-gradient-to-r</strong> → Gradient Background
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Colors;