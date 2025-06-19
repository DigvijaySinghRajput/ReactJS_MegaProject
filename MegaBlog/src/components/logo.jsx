import React from "react";

function Logo({ className = "" }) {
  return (
    <img
      src="/logo.png" // Your logo file in public folder or assets
      alt="App Logo"
      className={className}
    />
  );
}

export default Logo;
