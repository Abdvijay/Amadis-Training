import React, { useState } from "react";

export default function AnimationEvent() {
  const [status, setStatus] = useState("Idle");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimationStart = (e: any) => {
    // e.animationName gives you the keyframe name
    setStatus(`Started: Running "${e.animationName}"`);
  };

  const handleAnimationEnd = (e: any) => {
    setStatus(`Ended: "${e.animationName}" finished!`);
    setIsAnimating(false); // Stop applying the class
  };

  const triggerAnimation = () => {
    if (!isAnimating) {
      setStatus("Waiting to start...");
      setIsAnimating(true);
    }
  };

  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h3>Animation Event Tracker</h3>
      <p>
        <strong>Current Status:</strong> {status}
      </p>

      {/* Button to start the animation */}
      <button
        onClick={triggerAnimation}
        disabled={isAnimating}
        style={{
          padding: "8px 16px",
          cursor: isAnimating ? "not-allowed" : "pointer",
        }}
      >
        {isAnimating ? "Animating..." : "Start Animation"}
      </button>

      {/* Box element listening to native CSS animation events */}
      <div
        onAnimationStart={handleAnimationStart}
        onAnimationEnd={handleAnimationEnd}
        className={isAnimating ? "pulse-box" : ""}
        style={{
          width: "120px",
          height: "120px",
          marginTop: "20px",
          backgroundColor: "#4F46E5",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        Box
      </div>

      {/* Keyframe Styles */}
      <style>{`
        .pulse-box {
          animation: pulseAnimation 2s ease-in-out;
        }

        @keyframes pulseAnimation {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            background-color: '#10B981';
          }
          100% {
            transform: scale(1) rotate(360deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}