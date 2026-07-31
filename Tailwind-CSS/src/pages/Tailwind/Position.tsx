function Position() {
  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold">Position</h1>

      <p>
        Position utilities control how an element is placed inside its parent
        or within the browser window.
      </p>

      {/* Static */}
      <section>
        <h2 className="text-xl font-semibold mb-3">1. Static (Default)</h2>

        <div className="static border p-4 bg-blue-100">
          static
        </div>

        <p className="mt-2 text-gray-600">
          Every element is <strong>static</strong> by default.
        </p>
      </section>

      {/* Relative */}
      <section>
        <h2 className="text-xl font-semibold mb-3">2. Relative</h2>

        <div className="relative border h-32 bg-gray-100">
          <div className="relative top-4 left-6 bg-green-500 text-white p-2 w-fit">
            relative
          </div>
        </div>

        <p className="mt-2 text-gray-600">
          Moves relative to its original position.
        </p>
      </section>

      {/* Absolute */}
      <section>
        <h2 className="text-xl font-semibold mb-3">3. Absolute</h2>

        <div className="relative h-40 border bg-gray-100">

          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-2 rounded">
            absolute
          </div>

        </div>

        <p className="mt-2 text-gray-600">
          Positioned relative to the nearest parent having
          <strong> relative</strong>.
        </p>
      </section>

      {/* Fixed */}
      <section>
        <h2 className="text-xl font-semibold mb-3">4. Fixed</h2>

        <button className="fixed bottom-5 right-5 bg-blue-600 text-white px-7 py-3 rounded-full shadow-lg hover:bg-amber-50 hover:text-black font-bold">
          Help
        </button>

        <p className="mt-2 text-gray-600">
          Fixed elements stay in the same position while scrolling.
        </p>
      </section>

      {/* Sticky */}
      <section>
        <h2 className="text-xl font-semibold mb-3">5. Sticky</h2>

        <div className="sticky top-0 bg-yellow-400 p-3 rounded">
          Sticky Header
        </div>

        <p className="mt-2 text-gray-600">
          Sticks to the top when scrolling.
        </p>
      </section>

      {/* Top Right Bottom Left */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          6. top / right / bottom / left
        </h2>

        <div className="relative h-40 border bg-gray-100">

          <div className="absolute top-0 left-0 bg-red-500 text-white p-2">
            top-0 left-0
          </div>

          <div className="absolute top-0 right-0 bg-green-500 text-white p-2">
            top-0 right-0
          </div>

          <div className="absolute bottom-0 left-0 bg-blue-500 text-white p-2">
            bottom-0 left-0
          </div>

          <div className="absolute bottom-0 right-0 bg-purple-500 text-white p-2">
            bottom-0 right-0
          </div>

        </div>

        <p className="mt-2 text-gray-600">
          These utilities control the position from each side.
        </p>
      </section>

      {/* Z Index */}
      <section>
        <h2 className="text-xl font-semibold mb-3">7. Z Index</h2>

        <div className="relative h-40">

          <div className="absolute left-6 top-6 size-24 bg-red-500 z-10 flex items-center justify-center text-white">
            z-10
          </div>

          <div className="absolute left-16 top-16 size-24 bg-blue-500 z-20 flex items-center justify-center text-white">
            z-20
          </div>

        </div>

        <p className="mt-2 text-gray-600">
          Higher <strong>z-index</strong> appears above lower values.
        </p>
      </section>

      {/* Notification Badge */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          8. Notification Badge
        </h2>

        <div className="relative w-fit">

          <button className="bg-blue-600 text-white px-5 py-3 rounded">
            Notifications
          </button>

          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs size-6 rounded-full flex items-center justify-center">
            5
          </span>

        </div>

      </section>

      {/* Profile Avatar */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          9. Online Status
        </h2>

        <div className="relative w-fit">

          <div className="size-24 rounded-full bg-gray-300"></div>

          <div className="absolute bottom-1 right-1 size-5 rounded-full bg-green-500 border-2 border-white"></div>

        </div>

      </section>

      {/* Card Ribbon */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          10. Card Ribbon
        </h2>

        <div className="relative border rounded-lg p-6">

          <span className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg">
            NEW
          </span>

          <h3 className="text-xl font-bold">
            React UI Playground
          </h3>

          <p className="mt-2 text-gray-600">
            Learn Tailwind CSS with examples.
          </p>

        </div>

      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Quick Summary
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>static</strong> → Default Position</li>
          <li><strong>relative</strong> → Move from Original Position</li>
          <li><strong>absolute</strong> → Position Inside Parent</li>
          <li><strong>fixed</strong> → Fixed on Screen</li>
          <li><strong>sticky</strong> → Sticks While Scrolling</li>
          <li><strong>top / right / bottom / left</strong> → Position Utilities</li>
          <li><strong>z-10 / z-20</strong> → Layer Order</li>
        </ul>
      </section>

    </div>
  );
}

export default Position;