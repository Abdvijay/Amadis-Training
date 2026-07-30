function Shadow() {
  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold">Shadow</h1>

      <p>
        Tailwind provides shadow utilities to add depth and elevation to
        elements such as cards, buttons and images.
      </p>

      {/* shadow-sm */}
      <section>
        <h2 className="text-xl font-semibold mb-3">1. Small Shadow</h2>

        <div className="shadow-sm p-5 bg-white rounded">
          shadow-sm
        </div>

        <p className="mt-2 text-gray-600">
          A light shadow for subtle elevation.
        </p>
      </section>

      {/* shadow */}
      <section>
        <h2 className="text-xl font-semibold mb-3">2. Default Shadow</h2>

        <div className="shadow p-5 bg-white rounded">
          shadow
        </div>

        <p className="mt-2 text-gray-600">
          Default shadow used for many UI components.
        </p>
      </section>

      {/* shadow-md */}
      <section>
        <h2 className="text-xl font-semibold mb-3">3. Medium Shadow</h2>

        <div className="shadow-md p-5 bg-white rounded">
          shadow-md
        </div>

        <p className="mt-2 text-gray-600">
          A stronger shadow than the default.
        </p>
      </section>

      {/* shadow-lg */}
      <section>
        <h2 className="text-xl font-semibold mb-3">4. Large Shadow</h2>

        <div className="shadow-lg p-5 bg-white rounded">
          shadow-lg
        </div>

        <p className="mt-2 text-gray-600">
          Gives a more noticeable elevation.
        </p>
      </section>

      {/* shadow-xl */}
      <section>
        <h2 className="text-xl font-semibold mb-3">5. Extra Large Shadow</h2>

        <div className="shadow-xl p-5 bg-white rounded">
          shadow-xl
        </div>

        <p className="mt-2 text-gray-600">
          Suitable for dialogs and important cards.
        </p>
      </section>

      {/* shadow-2xl */}
      <section>
        <h2 className="text-xl font-semibold mb-3">6. Extra Extra Large Shadow</h2>

        <div className="shadow-2xl p-5 bg-white rounded">
          shadow-2xl
        </div>

        <p className="mt-2 text-gray-600">
          One of the strongest built-in shadows.
        </p>
      </section>

      {/* shadow-inner */}
      <section>
        <h2 className="text-xl font-semibold mb-3">7. Inner Shadow</h2>

        <div className="shadow-inner p-5 bg-gray-200 rounded">
          shadow-inner
        </div>

        <p className="mt-2 text-gray-600">
          Creates a shadow inside the element.
        </p>
      </section>

      {/* Colored Shadow */}
      <section>
        <h2 className="text-xl font-semibold mb-3">8. Colored Shadow</h2>

        <div className="shadow-2xl shadow-red-500/50 p-5 bg-white rounded">
          shadow-blue-500/50
        </div>

        <p className="mt-2 text-gray-600">
          Apply a color to the shadow.
        </p>
      </section>

      {/* Hover Shadow */}
      <section>
        <h2 className="text-xl font-semibold mb-3">9. Hover Shadow</h2>

        <button className="bg-blue-600 text-white px-5 py-3 rounded shadow hover:shadow-2xl transition">
          Hover Me
        </button>

        <p className="mt-2 text-gray-600">
          Shadow changes when the mouse hovers over the element.
        </p>
      </section>

      {/* Card Example */}
      <section>
        <h2 className="text-xl font-semibold mb-3">10. Card Example</h2>

        <div className="shadow-lg rounded-xl bg-white p-6">

          <h3 className="text-xl font-bold mb-2">
            React UI Playground
          </h3>

          <p className="text-gray-600">
            Cards usually combine rounded corners with shadows.
          </p>

        </div>
      </section>

      {/* Button Example */}
      <section>
        <h2 className="text-xl font-semibold mb-3">11. Button Example</h2>

        <button className="bg-green-600 text-white px-5 py-3 rounded-lg shadow-md hover:shadow-xl transition">
          Save
        </button>
      </section>

      {/* Image Example */}
      <section>
        <h2 className="text-xl font-semibold mb-3">12. Image Example</h2>

        <img
          src="https://placehold.co/300x180"
          alt="Placeholder"
          className="rounded-xl shadow-xl"
        />

        <p className="mt-2 text-gray-600">
          Images often use shadows to stand out.
        </p>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Quick Summary
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>shadow-sm</strong> → Small Shadow</li>
          <li><strong>shadow</strong> → Default Shadow</li>
          <li><strong>shadow-md</strong> → Medium Shadow</li>
          <li><strong>shadow-lg</strong> → Large Shadow</li>
          <li><strong>shadow-xl</strong> → Extra Large Shadow</li>
          <li><strong>shadow-2xl</strong> → Strong Shadow</li>
          <li><strong>shadow-inner</strong> → Inner Shadow</li>
          <li><strong>shadow-blue-500/50</strong> → Colored Shadow</li>
          <li><strong>hover:shadow-xl</strong> → Hover Effect</li>
        </ul>
      </section>

    </div>
  );
}

export default Shadow;