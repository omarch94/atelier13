import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import { Outlet,NavLink } from "react-router";
export default function Home() {
  return (
    <div>
      <div className="header">
        <h1>ISMO SHOP</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                end to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Acceuil
              </NavLink>
            </li>
            <li>
              <NavLink
                end to="categories"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                end to="Produits"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Produits
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}