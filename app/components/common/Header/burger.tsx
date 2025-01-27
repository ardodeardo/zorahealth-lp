"use client";

import React from "react";

function HeaderBurger() {
  const handleSidebar = () => {
    // another requirements

    alert("burger button clicked");
  };

  return (
    <button aria-label="sidebar" onClick={() => handleSidebar()}>
      <span className="grid gap-y-2">
        <span className="h-[2px] bg-black w-6"></span>
        <span className="h-[2px] bg-black w-6"></span>
      </span>
    </button>
  );
}

export default HeaderBurger;
