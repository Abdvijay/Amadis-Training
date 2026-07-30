function Spacing() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Spacing</h1>

      <p>
        Spacing is used to add <strong>padding</strong> (inside space) and
        <strong> margin</strong> (outside space).
      </p>

      {/* p */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Padding (p)</h2>

        <div className="bg-blue-500 text-white p-2 mb-2">p-2</div>
        <div className="bg-blue-500 text-white p-4 mb-2">p-4</div>
        <div className="bg-blue-500 text-white p-8">p-8</div>
      </section>

      {/* m */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Margin (m)</h2>

        <div className="bg-green-500 text-white m-2">m-2</div>
        <div className="bg-green-500 text-white m-4">m-4</div>
        <div className="bg-green-500 text-white m-8">m-8</div>
      </section>

      {/* px */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Horizontal Padding (px)</h2>

        <button className="bg-purple-500 text-white px-8 py-2 rounded">
          px-8
        </button>
      </section>

      {/* py */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Vertical Padding (py)</h2>

        <button className="bg-red-500 text-white px-4 py-6 rounded">
          py-6
        </button>
      </section>

      {/* pt pb pl pr */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Individual Padding</h2>

        <div className="bg-orange-500 text-white pt-8 mb-2">
          pt-8 (Top Padding)
        </div>

        <div className="bg-orange-500 text-white pb-8 mb-2">
          pb-8 (Bottom Padding)
        </div>

        <div className="bg-orange-500 text-white pl-8 mb-2">
          pl-8 (Left Padding)
        </div>

        <div className="bg-orange-500 text-white pr-8">
          pr-8 (Right Padding)
        </div>
      </section>

      {/* mt mr mb ml */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Individual Margin</h2>

        <div className="bg-teal-500 text-white mt-8">mt-8 (Top Margin)</div>

        <div className="bg-teal-500 text-white mr-8">mr-8 (Right Margin)</div>

        <div className="bg-teal-500 text-white mb-8">mb-8 (Bottom Margin)</div>

        <div className="bg-teal-500 text-white ml-8">ml-8 (Left Margin)</div>
      </section>

      {/* mx my */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Horizontal & Vertical Margin
        </h2>

        <div className="bg-pink-500 text-white mx-8 mb-3">
          mx-8 (Left & Right Margin)
        </div>

        <div className="bg-pink-500 text-white my-8">
          my-8 (Top & Bottom Margin)
        </div>
      </section>
    </div>
  );
}

export default Spacing;