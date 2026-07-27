import "../App.css";

function ScrollEvent(){

    function handleOnScroll(){
        console.log("Scrolling...");
    }

    return (
      <>
        <div
          style={{ height: "500px", overflow: "auto", border: "2px solid red" }}
          onScroll={handleOnScroll}
        >
          {/* Needs content taller than 500px to trigger scroll */}
          <div style={{ height: "1000px" }}>Long Content</div>
        </div>
      </>
    );
}

export default ScrollEvent;