function TransformTransition() {
  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold">Transforms & Transitions</h1>

      <p>
        Transform utilities change an element's appearance, while transition
        utilities animate those changes smoothly.
      </p>

      {/* Hover */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          1. Hover
        </h2>

        <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-800">
          Hover Me
        </button>

        <p className="mt-2 text-gray-600">
          <strong>hover:</strong> applies styles when the mouse is over the element.
        </p>
      </section>

      {/* Transition */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          2. Transition
        </h2>

        <button className="bg-green-600 text-white px-5 py-3 rounded transition hover:bg-green-800">
          transition
        </button>

        <p className="mt-2 text-gray-600">
          <strong>transition</strong> makes property changes smooth.
        </p>
      </section>

      {/* Duration */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          3. Duration
        </h2>

        <button className="bg-purple-600 text-white px-5 py-3 rounded transition duration-700 hover:bg-purple-900">
          duration-700
        </button>

        <p className="mt-2 text-gray-600">
          Controls how long the animation takes.
        </p>
      </section>

      {/* Delay */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          4. Delay
        </h2>

        <button className="bg-orange-600 text-white px-5 py-3 rounded transition delay-300 hover:bg-orange-900">
          delay-300
        </button>

        <p className="mt-2 text-gray-600">
          Waits before starting the transition.
        </p>
      </section>

      {/* Ease */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          5. Ease
        </h2>

        <button className="bg-pink-600 text-white px-5 py-3 rounded transition duration-700 ease-in-out hover:bg-pink-900">
          ease-in-out
        </button>

        <p className="mt-2 text-gray-600">
          Controls the animation speed curve.
        </p>
      </section>

      {/* Scale */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          6. Scale
        </h2>

        <div className="w-40 p-8 bg-blue-500 text-white rounded text-center transition duration-800 hover:scale-110">
          Hover Me
        </div>

        <p className="mt-2 text-gray-600">
          <strong>scale-110</strong> enlarges the element.
        </p>
      </section>

      {/* Rotate */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          7. Rotate
        </h2>

        <div className="w-40 p-8 bg-green-500 text-white rounded text-center transition duration-300 hover:rotate-12">
          Rotate
        </div>

        <p className="mt-2 text-gray-600">
          Rotates the element on hover.
        </p>
      </section>

      {/* Translate */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          8. Translate
        </h2>

        <div className="w-40 p-8 bg-red-500 text-white rounded text-center transition duration-300 hover:-translate-y-10">
          Move Up
        </div>

        <p className="mt-2 text-gray-600">
          Moves the element along the X or Y axis.
        </p>
      </section>

      {/* Skew */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          9. Skew
        </h2>

        <div className="w-40 p-8 bg-yellow-500 rounded text-center transition duration-300 hover:skew-x-10">
          Skew
        </div>

        <p className="mt-2 text-gray-600">
          Tilts the element.
        </p>
      </section>

      {/* Transform Origin */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          10. Transform Origin
        </h2>

        <div className="w-40 p-8 bg-indigo-500 text-white rounded text-center origin-top-left transition duration-300 hover:rotate-12">
          origin-top-left
        </div>

        <p className="mt-2 text-gray-600">
          Changes the point from which the transform starts.
        </p>
      </section>

      {/* Card Example */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          11. Hover Card
        </h2>

        <div className="max-w-sm border rounded-xl shadow-md p-6 transition duration-300 hover:shadow-2xl hover:-translate-y-5 hover:shadow-red-500/50">

          <h3 className="text-xl font-bold mb-2">
            Tailwind CSS
          </h3>

          <p className="text-gray-600">
            Hover over this card to see the animation.
          </p>

        </div>
      </section>

      {/* Button Example */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          12. Animated Button
        </h2>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300 hover:scale-105 hover:bg-black hover:text-white">
          Get Started
        </button>
      </section>

      {/* Image Example */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          13. Image Zoom
        </h2>

        <div className="overflow-hidden rounded-lg w-fit">

          <img
            src="https://placehold.co/350x200"
            alt="Placeholder"
            className="transition duration-500 hover:scale-110"
          />

        </div>

        <p className="mt-2 text-gray-600">
          A common zoom effect used in galleries and product cards.
        </p>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Quick Summary
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>hover:</strong> Hover state</li>
          <li><strong>transition</strong> → Smooth animation</li>
          <li><strong>duration-*</strong> → Animation duration</li>
          <li><strong>delay-*</strong> → Animation delay</li>
          <li><strong>ease-*</strong> → Animation speed curve</li>
          <li><strong>scale-*</strong> → Resize element</li>
          <li><strong>rotate-*</strong> → Rotate element</li>
          <li><strong>translate-*</strong> → Move element</li>
          <li><strong>skew-*</strong> → Tilt element</li>
          <li><strong>origin-*</strong> → Transform starting point</li>
        </ul>
      </section>

    </div>
  );
}

export default TransformTransition;