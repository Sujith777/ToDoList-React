import React from "react";
import ChecklistIcon from "@mui/icons-material/Checklist";

function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-text">
          <ChecklistIcon
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          TODO List
        </span>
      </div>
    </nav>
  );
}

export default Header;
