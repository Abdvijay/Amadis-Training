function Typography() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Typography</h1>

      <p>
        Typography is used to style text such as font size, weight, alignment,
        decoration, line height, letter spacing and font family.
      </p>

      {/* Font Size */}
      <section>
        <h2 className="text-xl font-semibold mb-3">1. Font Size</h2>

        <p className="text-xs">text-xs</p>
        <p className="text-sm">text-sm</p>
        <p className="text-base">text-base (Default)</p>
        <p className="text-lg">text-lg</p>
        <p className="text-xl">text-xl</p>
        <p className="text-2xl">text-2xl</p>
        <p className="text-4xl">text-4xl</p>

        <p className="mt-2 text-gray-600">
          Use <strong>text-*</strong> to change font size.
        </p>
      </section>

      {/* Font Weight */}
      <section>
        <h2 className="text-xl font-semibold mb-3">2. Font Weight</h2>

        <p className="font-thin">font-thin</p>
        <p className="font-light">font-light</p>
        <p className="font-normal">font-normal</p>
        <p className="font-medium">font-medium</p>
        <p className="font-semibold">font-semibold</p>
        <p className="font-bold">font-bold</p>
        <p className="font-extrabold">font-extrabold</p>

        <p className="mt-2 text-gray-600">
          Use <strong>font-*</strong> to change font weight.
        </p>
      </section>

      {/* Text Alignment */}
      <section>
        <h2 className="text-xl font-semibold mb-3">3. Text Alignment</h2>

        <p className="text-left border p-2 mb-2">text-left</p>

        <p className="text-center border p-2 mb-2">text-center</p>

        <p className="text-right border p-2">text-right</p>

        <p className="mt-2 text-gray-600">Align text left, center or right.</p>
      </section>

      {/* Text Decoration */}
      <section>
        <h2 className="text-xl font-semibold mb-3">4. Text Decoration</h2>

        <p className="underline">underline</p>

        <p className="line-through">line-through</p>

        <p className="overline">overline</p>

        <p className="no-underline">no-underline</p>

        <p className="mt-2 text-gray-600">Add or remove text decorations.</p>
      </section>

      {/* Text Transform */}
      <section>
        <h2 className="text-xl font-semibold mb-3">5. Text Transform</h2>

        <p className="uppercase">uppercase text</p>

        <p className="lowercase">LOWERCASE TEXT</p>

        <p className="capitalize">welcome to capitalize tailwind css</p>

        <p className="mt-2 text-gray-600">Change the letter case.</p>
      </section>

      {/* Line Height */}
      <section>
        <h2 className="text-xl font-semibold mb-3">6. Line Height</h2>

        <p className="leading-none border p-2 mb-2">
          leading-none
          <br />
          Second Line
        </p>

        <p className="leading-loose border p-2">
          leading-loose
          <br />
          Second Line
        </p>

        <p className="mt-2 text-gray-600">
          Use <strong>leading-*</strong> to control line spacing.
        </p>
      </section>

      {/* Letter Spacing */}
      <section>
        <h2 className="text-xl font-semibold mb-3">7. Letter Spacing</h2>

        <p className="tracking-tight">tracking-tight</p>

        <p className="tracking-normal">tracking-normal</p>

        <p className="tracking-wide">tracking-wide</p>

        <p className="tracking-widest">tracking-widest</p>

        <p className="mt-2 text-gray-600">
          Use <strong>tracking-*</strong> to change space between letters.
        </p>
      </section>

      {/* Font Family */}
      <section>
        <h2 className="text-xl font-semibold mb-3">8. Font Family</h2>

        <p className="font-sans">font-sans</p>

        <p className="font-serif">font-serif</p>

        <p className="font-mono">font-mono</p>

        <p className="mt-2 text-gray-600">
          Tailwind provides Sans, Serif and Monospace fonts by default.
        </p>
      </section>

      {/* Real Example */}
      <section>
        <h2 className="text-xl font-semibold mb-3">9. Real Example</h2>

        <div className="border rounded-lg p-5 bg-white shadow hover:bg-violet-300">
          <h3 className="text-2xl font-bold mb-2">React UI Playground</h3>

          <p className="text-gray-600 leading-relaxed">
            Learn Tailwind CSS step by step with practical examples and build
            real-world UI components.
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Quick Summary</h2>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>text-*</strong> → Font Size
          </li>
          <li>
            <strong>font-*</strong> → Font Weight
          </li>
          <li>
            <strong>text-left | center | right</strong> → Alignment
          </li>
          <li>
            <strong>underline | line-through | overline</strong> → Decoration
          </li>
          <li>
            <strong>uppercase | lowercase | capitalize</strong> → Text Transform
          </li>
          <li>
            <strong>leading-*</strong> → Line Height
          </li>
          <li>
            <strong>tracking-*</strong> → Letter Spacing
          </li>
          <li>
            <strong>font-sans | serif | mono</strong> → Font Family
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Typography;