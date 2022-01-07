import React from "react";

export default function Icon({ children}) {
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className="bi bi-sort-up-alt ml-2"
      viewBox="0 0 16 16"
    >
      {children}
    </svg>
  );
}
