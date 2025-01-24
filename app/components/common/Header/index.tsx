import React from "react";

import HeaderMenu from "./menu";
import HeaderSearch from "./search";
import HeaderBurger from "./burger";

function Header() {
  return (
    <header
      id="c-header"
      className="c-header w-full sticky top-0 left-0 z-50 py-6 border-b border-[#F0EDE2]"
    >
      <div className="container mx-auto">
        <div className="flex gap-x-9 w-full justify-end">
          <HeaderMenu></HeaderMenu>

          {/* splitted. assuming need client interaction */}
          <HeaderSearch></HeaderSearch>

          {/* splitted. assuming need client interaction */}
          <HeaderBurger></HeaderBurger>
        </div>
      </div>
    </header>
  );
}

export default Header;
