import * as React from "react";

export const TabSelector = ({ isActive, children, onClick }) => (
  <button
    className={`mx-1 items-center px-3 py-1 font-medium text-sm cursor-pointer whitespace-nowrap ${
      isActive ? "bg-gray-400 rounded my-1 text-grey-200" : "text-gray-600"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);
