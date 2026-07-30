function Flex() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Flexbox</h1>

      <p>
        Flexbox is used to arrange elements horizontally or vertically and
        control their alignment, spacing and sizing.
      </p>

      {/* flex */}
      <section>
        <h2 className="text-xl font-semibold mb-3">1. display: flex</h2>

        <div className="flex gap-3">
          <div className="bg-blue-500 text-white p-4">Box 1</div>
          <div className="bg-blue-500 text-white p-4">Box 2</div>
          <div className="bg-blue-500 text-white p-4">Box 3</div>
        </div>

        <p className="mt-2 text-gray-600">
          <strong>flex</strong> displays items in a row.
        </p>
      </section>

      {/* flex-col */}
      <section>
        <h2 className="text-xl font-semibold mb-3">2. flex-col</h2>

        <div className="flex flex-col gap-3">
          <div className="bg-green-500 text-white p-4">Box 1</div>
          <div className="bg-green-500 text-white p-4">Box 2</div>
          <div className="bg-green-500 text-white p-4">Box 3</div>
        </div>

        <p className="mt-2 text-gray-600">
          <strong>flex-col</strong> changes the direction from row to column.
        </p>
      </section>

      {/* justify-content */}
      <section>
        <h2 className="text-xl font-semibold mb-3">3. justify-content</h2>

        <div className="flex justify-between bg-gray-200 p-4 rounded">
          <div className="bg-purple-500 text-white p-3">A</div>
          <div className="bg-purple-500 text-white p-3">B</div>
          <div className="bg-purple-500 text-white p-3">C</div>
        </div>

        <p className="mt-2 text-gray-600">
          <strong>justify-between</strong> pushes items to both ends.
        </p>
      </section>

      {/* align-items */}
      <section>
        <h2 className="text-xl font-semibold mb-3">4. align-items</h2>

        <div className="flex items-center h-40 bg-gray-200 rounded p-4">
          <div className="bg-red-500 text-white p-4">Box</div>
        </div>

        <p className="mt-2 text-gray-600">
          <strong>items-center</strong> vertically centers items.
        </p>
      </section>

      {/* justify-center */}
      <section>
        <h2 className="text-xl font-semibold mb-3">5. justify-center</h2>

        <div className="flex justify-center bg-gray-200 p-4 rounded">
          <div className="bg-indigo-500 text-white p-4">Center</div>
        </div>

        <p className="mt-2 text-gray-600">Centers items horizontally.</p>
      </section>

      {/* center both */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          6. Center Horizontally & Vertically
        </h2>

        <div className="flex justify-center items-center h-40 bg-gray-200 rounded">
          <div className="bg-pink-500 text-white p-4">Center</div>
        </div>

        <p className="mt-2 text-gray-600">
          Combine <strong>justify-center</strong> and{" "}
          <strong>items-center</strong>.
        </p>
      </section>

      {/* gap */}
      <section>
        <h2 className="text-xl font-semibold mb-3">7. gap</h2>

        <div className="flex gap-8">
          <div className="bg-yellow-500 p-4">1</div>
          <div className="bg-yellow-500 p-4">2</div>
          <div className="bg-yellow-500 p-4">3</div>
        </div>

        <p className="mt-2 text-gray-600">
          <strong>gap</strong> adds space between flex items.
        </p>
      </section>

      {/* flex-wrap */}
      <section>
        <h2 className="text-xl font-semibold mb-3">8. flex-wrap</h2>

        <div className="flex flex-wrap gap-3">
          <div className="bg-cyan-500 p-6">1</div>
          <div className="bg-cyan-500 p-6">2</div>
          <div className="bg-cyan-500 p-6">3</div>
          <div className="bg-cyan-500 p-6">4</div>
          <div className="bg-cyan-500 p-6">5</div>
          <div className="bg-cyan-500 p-6">6</div>
        </div>

        <p className="mt-2 text-gray-600">
          Items automatically move to the next line when needed.
        </p>
      </section>

      {/* grow */}
      <section>
        <h2 className="text-xl font-semibold mb-3">9. grow</h2>

        <div className="flex gap-3">
          <div className="bg-orange-500 p-4">A</div>

          <div className="grow bg-orange-500 p-4">grow</div>

          <div className="bg-orange-500 p-4">C</div>
        </div>

        <p className="mt-2 text-gray-600">
          <strong>grow</strong> lets an item take the remaining space.
        </p>
      </section>

      {/* shrink */}
      <section>
        <h2 className="text-xl font-semibold mb-3">10. shrink-0</h2>

        <div className="flex w-64 border p-2 gap-2">
          <div className="shrink-0 bg-teal-500 text-white p-3">Logo</div>

          <div className="bg-gray-300 p-3">Long content that can shrink.</div>
        </div>

        <p className="mt-2 text-gray-600">
          <strong>shrink-0</strong> prevents an item from shrinking.
        </p>
      </section>

      {/* basis */}
      <section>
        <h2 className="text-xl font-semibold mb-3">11. basis</h2>

        <div className="flex gap-3">
          <div className="basis-1/4 bg-lime-500 p-4">25%</div>

          <div className="basis-3/4 bg-lime-300 p-4">75%</div>
        </div>

        <p className="mt-2 text-gray-600">
          <strong>basis</strong> defines the initial width of a flex item.
        </p>
      </section>

      {/* Real Example */}
      <section>
        <h2 className="text-xl font-semibold mb-3">12. Real Navbar Example</h2>

        <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded">
          <h3 className="font-bold">My Website</h3>

          <div className="flex gap-6">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Quick Summary</h2>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>flex</strong> → Display items in a row
          </li>
          <li>
            <strong>flex-col</strong> → Display items in a column
          </li>
          <li>
            <strong>justify-*</strong> → Horizontal alignment
          </li>
          <li>
            <strong>items-*</strong> → Vertical alignment
          </li>
          <li>
            <strong>gap-*</strong> → Space between items
          </li>
          <li>
            <strong>flex-wrap</strong> → Wrap items to the next line
          </li>
          <li>
            <strong>grow</strong> → Fill remaining space
          </li>
          <li>
            <strong>shrink-0</strong> → Prevent shrinking
          </li>
          <li>
            <strong>basis-*</strong> → Initial width of a flex item
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Flex;