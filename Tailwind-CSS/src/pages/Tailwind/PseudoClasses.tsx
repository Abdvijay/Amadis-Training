function PseudoClasses() {
  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold">Pseudo Classes</h1>

      <p>
        Pseudo classes apply styles based on an element's state, such as hover,
        focus, active or checked.
      </p>

      {/* Hover */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          1. hover:
        </h2>

        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-800">
          Hover Me
        </button>

        <p className="mt-2 text-gray-600">
          Changes styles when the mouse is over the element.
        </p>
      </section>

      {/* Focus */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          2. focus:
        </h2>

        <input
          type="text"
          placeholder="Click here"
          className="border p-3 rounded w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none"
        />

        <p className="mt-2 text-gray-600">
          Applied when an input receives focus.
        </p>
      </section>

      {/* Active */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          3. active:
        </h2>

        <button className="bg-green-600 text-white px-6 py-3 rounded active:scale-95">
          Click Me
        </button>

        <p className="mt-2 text-gray-600">
          Applied while the mouse button is pressed.
        </p>
      </section>

      {/* Visited */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          4. visited:
        </h2>

        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 visited:text-purple-600"
        >
          Tailwind CSS Website
        </a>

        <p className="mt-2 text-gray-600">
          Changes the color after visiting the link.
        </p>
      </section>

      {/* Disabled */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          5. disabled:
        </h2>

        <button
          disabled
          className="bg-gray-500 text-white px-6 py-3 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Disabled Button
        </button>

        <p className="mt-2 text-gray-600">
          Styles disabled elements.
        </p>
      </section>

      {/* Checked */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          6. checked:
        </h2>

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            className="accent-blue-600"
          />

          Accept Terms

        </label>

        <p className="mt-2 text-gray-600">
          The checkbox changes appearance when checked.
        </p>
      </section>

      {/* First */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          7. first:
        </h2>

        <ul>

          <li className="first:bg-blue-500 first:text-white p-2">
            Apple
          </li>

          <li className="p-2">
            Orange
          </li>

          <li className="p-2">
            Mango
          </li>

        </ul>

        <p className="mt-2 text-gray-600">
          Styles only the first child.
        </p>
      </section>

      {/* Last */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          8. last:
        </h2>

        <ul>

          <li className="p-2">
            HTML
          </li>

          <li className="p-2">
            CSS
          </li>

          <li className="last:bg-green-600 last:text-white p-2">
            React
          </li>

        </ul>

        <p className="mt-2 text-gray-600">
          Styles only the last child.
        </p>
      </section>

      {/* Odd Even */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          9. odd: & even:
        </h2>

        <table className="w-full border">

          <tbody>

            <tr className="odd:bg-gray-100">
              <td className="p-3">Row 1</td>
            </tr>

            <tr className="even:bg-gray-200">
              <td className="p-3">Row 2</td>
            </tr>

            <tr className="odd:bg-gray-100">
              <td className="p-3">Row 3</td>
            </tr>

            <tr className="even:bg-gray-200">
              <td className="p-3">Row 4</td>
            </tr>

          </tbody>

        </table>

        <p className="mt-2 text-gray-600">
          Creates zebra-striped rows.
        </p>
      </section>

      {/* Group Hover */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          10. group-hover:
        </h2>

        <div className="group border rounded-lg p-6 hover:bg-blue-600 transition">

          <h3 className="text-xl font-bold group-hover:text-white">
            React
          </h3>

          <p className="text-gray-600 group-hover:text-gray-200">
            Hover over the entire card.
          </p>

        </div>

        <p className="mt-2 text-gray-600">
          Child elements react when the parent is hovered.
        </p>
      </section>

      {/* Peer */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          11. peer
        </h2>

        <input
          type="checkbox"
          className="peer"
        />

        <span className="ml-3 hidden peer-checked:inline text-green-600 font-semibold">
          ✔ Accepted
        </span>

        <p className="mt-2 text-gray-600">
          Styles one element based on another element's state.
        </p>
      </section>

      {/* Real Login Form */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          12. Login Form Example
        </h2>

        <div className="max-w-md border rounded-lg p-6 space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="border rounded w-full p-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="border rounded w-full p-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 outline-none"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 active:scale-95 transition">
            Login
          </button>

        </div>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Quick Summary
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>hover:</strong> Mouse hover</li>
          <li><strong>focus:</strong> Input focus</li>
          <li><strong>active:</strong> Mouse click</li>
          <li><strong>visited:</strong> Visited link</li>
          <li><strong>disabled:</strong> Disabled elements</li>
          <li><strong>checked:</strong> Checked checkbox/radio</li>
          <li><strong>first:</strong> First child</li>
          <li><strong>last:</strong> Last child</li>
          <li><strong>odd:</strong> Odd elements</li>
          <li><strong>even:</strong> Even elements</li>
          <li><strong>group-hover:</strong> Parent hover affects children</li>
          <li><strong>peer:</strong> Sibling reacts to another element's state</li>
        </ul>
      </section>

    </div>
  );
}

export default PseudoClasses;