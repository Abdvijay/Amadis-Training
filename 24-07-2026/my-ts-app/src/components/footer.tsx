import "../styles/footer.css";
import { useState } from "react";

function Footer() {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1,2,3]);

  function increaseCount() {
    const nextCount = count + 1;
    if (nextCount > 0) {
      setCount(nextCount);
      setActive(true);
    }
  }

  function decreaseCount() {
    if (count <= 0) {
      setCount(0);
      setActive(false);
      return;
    }
    const nextCount = count - 1;
    setCount(nextCount);

    if (nextCount === 0) {
      setActive(false);
    }
  }

  return (
    <>
      <div>{numbers.map(num => (<p key={num}>{num}</p>))}</div>
      <div className={active ? "container" : "not-active"}>
        <h1>{count < 0 ? 0 : count}</h1>
        <div>
          <button onClick={increaseCount}>Increase</button>
          <button onClick={decreaseCount}>Decrease</button>
        </div>
      </div>
    </>
  );
}

export default Footer;