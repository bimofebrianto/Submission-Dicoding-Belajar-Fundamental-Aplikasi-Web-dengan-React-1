import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1>Catatanku</h1>
      </Link>
      <Link to="/archives">
        <h1>Arsip Catatan</h1>
      </Link>
    </header>
  );
};
export default Header;
