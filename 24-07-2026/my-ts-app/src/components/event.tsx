import "../App.css";

function Event() {
  function handleClick() {
    console.log("Handle Click Event");
  }

  const handleDoubleClick = () => {
    console.log("Handle Double Click Event");
  };

  const handleMouseOver = () => {
    console.log("Handle Mouse Over Event");
  };

  const handleMouseLeave = () => {
    console.log("Hanlde Mouse Leave Event");
  };

  const handleMouseMove = () => {
    console.log("Handle Mouse Move Event");
  }

  const handleMouseDown = () => {
    console.log("Handle Mouse Down Event");
  }

  const handleMouseUp = () => {
    console.log("Handle Mouse Up Event");
  }

  return (
    <>
      <button className="btn" onClick={handleClick}>onClick Event</button>
      <button className="btn" onDoubleClick={handleDoubleClick}>onDoubleClick Event</button>
      <button className="btn" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>onMouseOver/Leave Event</button>
      <button className="btn" onMouseMove={handleMouseMove}>onMouseMove Event</button>
      <button className="btn" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>OnMouseDown/Up Event</button>
    </>
  );
}

export default Event;