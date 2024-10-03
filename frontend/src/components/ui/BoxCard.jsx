import React from "react";

export default function BoxCard({ children, className = "" }) {
  return (
    <div
      className={`border border-darkGrey p-8 transition-colors hover:border-scarlet ${className}`}
    >
      {children}
    </div>
  );
}
