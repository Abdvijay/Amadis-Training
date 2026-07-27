import React, { useState } from "react";

export default function ClipBoardEvent() {
  const [value, setValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOnCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
    alert(`Copied text: "${window.getSelection()?.toString() || value}"`);
  };

  const handleOnCut = (e: React.ClipboardEvent<HTMLInputElement>) => {
    alert(`Cut text: "${window.getSelection()?.toString() || value}"`);
    setValue("");
  };

  const handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    alert(`Paste text: ${value}`);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"95vh"
      }}
    >
      <label htmlFor="clipboard-input">
        Highlight text inside and press <strong>Ctrl+C</strong> to copy or{" "}
        <strong>Ctrl+X</strong> to cut:
      </label>

      <input
        id="clipboard-input"
        type="text"
        value={value}
        onChange={handleOnChange}
        onCopy={handleOnCopy}
        onCut={handleOnCut}
        onPaste={handleOnPaste}
        style={{
          padding: "8px 12px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <span style={{ fontSize: "14px", color: "#666" }}>
        <strong>Current Value:</strong> {value}
      </span>
    </div>
  );
}