import React, { useState } from "react";
export default function DragDrop() {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [droppedItems, setDroppedItems] = useState<string[]>([]);
  
  // 1. Fires continuously while dragging the item
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(true);
    console.log("Item is being dragged...");
  };
  
  // 2. REQUIRED: Prevent default behavior so dropping is allowed
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Unlocks the drop zone!
  };
  
  // 3. Fires when the item is dropped inside the target zone
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const newItem = `Item #${droppedItems.length + 1}`;
    setDroppedItems((prev) => [...prev, newItem]);
    alert(`Successfully dropped ${newItem}!`);
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* DRAGGABLE ELEMENT */}
      <div
        draggable
        onDrag={handleDrag}
        style={{
          width: "120px",
          height: "120px",
          backgroundColor: isDragging ? "#f59e0b" : "#3b82f6",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          cursor: "grab",
          fontWeight: "bold",
        }}
      >
        Drag Me
      </div>
      {/* DROP ZONE ELEMENT */}
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          width: "220px",
          minHeight: "120px",
          border: "2px dashed #0284c7",
          backgroundColor: "#e0f2fe",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <strong>Drop Zone</strong>
        {droppedItems.length === 0 ? (
          <p style={{ color: "#64748b", fontSize: "12px" }}>Drop items here</p>
        ) : (
          droppedItems.map((item, idx) => <div key={idx}>{item}</div>)
        )}
      </div>
    </div>
  );
}