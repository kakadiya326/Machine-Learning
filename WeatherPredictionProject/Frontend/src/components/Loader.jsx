import React from "react";
import { Loader2 } from "lucide-react";

const Loader = ({ text = "Processing..." }) => {
  return (
    <div className="loader-overlay glass-card">
      <div className="spinner"></div>
      <p style={{ color: "var(--text-main)", fontWeight: 600, fontSize: "0.95rem" }}>
        {text}
      </p>
    </div>
  );
};

export default Loader;