function Grid() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Grid</h1>

      <p>
        Grid is used to arrange items in rows and columns. It is commonly used
        for dashboards, image galleries, product cards and layouts.
      </p>

      {/* Grid */}
      <section>
        <h2 className="text-xl font-semibold mb-3">1. grid</h2>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-500 text-white p-5">1</div>
          <div className="bg-blue-500 text-white p-5">2</div>
          <div className="bg-blue-500 text-white p-5">3</div>
        </div>

        <p className="mt-2 text-gray-600">
          <strong>grid</strong> creates a grid container.
        </p>
      </section>

      {/* Columns */}
      <section>
        <h2 className="text-xl font-semibold mb-3">2. grid-cols-*</h2>

        <div className="grid grid-cols-4 gap-3">
          <div className="bg-green-500 text-white p-4">1</div>
          <div className="bg-green-500 text-white p-4">2</div>
          <div className="bg-green-500 text-white p-4">3</div>
          <div className="bg-green-500 text-white p-4">4</div>
        </div>

        <p className="mt-2 text-gray-600">
          <strong>grid-cols-4</strong> creates 4 equal columns.
        </p>
      </section>

      {/* Rows */}
      <section>
        <h2 className="text-xl font-semibold mb-3">3. grid-rows-*</h2>

        <div className="grid grid-rows-3 gap-2 h-50 w-50">
          <div className="bg-red-500 text-white p-4">Row 1</div>
          <div className="bg-red-500 text-white p-4">Row 2</div>
          <div className="bg-red-500 text-white p-4">Row 3</div>
        </div>

        <p className="mt-2 text-gray-600">
          <strong>grid-rows-3</strong> creates 3 rows.
        </p>
      </section>

      {/* Gap */}
      <section>
        <h2 className="text-xl font-semibold mb-3">4. gap</h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-purple-500 text-white p-5">A</div>
          <div className="bg-purple-500 text-white p-5">B</div>
          <div className="bg-purple-500 text-white p-5">C</div>
        </div>

        <p className="mt-2 text-gray-600">
          <strong>gap</strong> adds space between grid items.
        </p>
      </section>

      {/* Column Span */}
      <section>
        <h2 className="text-xl font-semibold mb-3">5. col-span</h2>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-orange-500 text-white p-5 col-span-2">
            col-span-2
          </div>

          <div className="bg-orange-300 p-5">Normal</div>
        </div>

        <p className="mt-2 text-gray-600">
          <strong>col-span-2</strong> occupies two columns.
        </p>
      </section>

      {/* Row Span */}
      <section>
        <h2 className="text-xl font-semibold mb-3">6. row-span</h2>

        <div className="grid grid-cols-2 grid-rows-2 gap-3 h-64">
          <div className="bg-cyan-500 text-white p-5 row-span-2">
            row-span-2
          </div>

          <div className="bg-cyan-300 p-5">Box</div>

          <div className="bg-cyan-300 p-5">Box</div>
        </div>

        <p className="mt-2 text-gray-600">
          <strong>row-span-2</strong> occupies two rows.
        </p>
      </section>

      {/* Dashboard Cards */}
      <section>
        <h2 className="text-xl font-semibold mb-3">7. Dashboard Cards</h2>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-blue-500 text-white p-6 rounded">Users</div>

          <div className="bg-green-500 text-white p-6 rounded">Orders</div>

          <div className="bg-yellow-500 text-white p-6 rounded">Revenue</div>

          <div className="bg-red-500 text-white p-6 rounded">Reports</div>
        </div>
      </section>

      {/* Product Grid */}
      <section>
        <h2 className="text-xl font-semibold mb-3">8. Product Grid</h2>

        <div className="grid grid-cols-3 gap-5">
          <div className="border rounded p-5">Product 1</div>

          <div className="border rounded p-5">Product 2</div>

          <div className="border rounded p-5">Product 3</div>
        </div>
      </section>

      {/* Image Gallery */}
      <section>
        <h2 className="text-xl font-semibold mb-3">9. Image Gallery</h2>

        <div className="grid grid-cols-4 gap-3">
          <div className="bg-gray-300 h-24 rounded"></div>
          <div className="bg-gray-300 h-24 rounded"></div>
          <div className="bg-gray-300 h-24 rounded"></div>
          <div className="bg-gray-300 h-24 rounded"></div>
        </div>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Quick Summary</h2>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>grid</strong> → Create Grid Layout
          </li>
          <li>
            <strong>grid-cols-*</strong> → Number of Columns
          </li>
          <li>
            <strong>grid-rows-*</strong> → Number of Rows
          </li>
          <li>
            <strong>gap-*</strong> → Space Between Items
          </li>
          <li>
            <strong>col-span-*</strong> → Span Multiple Columns
          </li>
          <li>
            <strong>row-span-*</strong> → Span Multiple Rows
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Grid;