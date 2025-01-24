"use client";

import React from "react";
import { Search } from "lucide-react";

function HeaderSearch() {
  const handleSearch = () => {
    // another requirements

    alert("search button clicked");
  };

  return (
    <button onClick={() => handleSearch()}>
      <Search className="w-6 h-6"></Search>
    </button>
  );
}

export default HeaderSearch;
