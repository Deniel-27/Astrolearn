"use client";

import { useState } from "react";

export default function Home() {

  // STATE MENU MOBILE
  const [menuOpen, setMenuOpen] = useState(false);

  // TOGGLE MENU
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // CLOSE MENU
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* PAGE ONE */}
      <section className="pageOne">

        {/* NAVIGATION BAR */}
        <nav className="navbar">

          <div className="nav-container">

            {/* LOGO */}
            <div className="logo">
              <img
                src="/Astrolearn/apps/web/public/Image/logo.png"
                width="auto"
                height="55"
                alt="AstroLearn Logo"
              />
            </div>

            {/* MENU */}
            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

              <li>
                <a href="#materi" onClick={closeMenu}>
                  Materi
                </a>
              </li>

              <li>
                <a href="#kuis" onClick={closeMenu}>
                  Kuis
                </a>
              </li>

              <li>
                <a href="#game" onClick={closeMenu}>
                  Game
                </a>
              </li>

              <li>
                <a href="#progres" onClick={closeMenu}>
                  Progres
                </a>
              </li>

              <li>
                <a href="#prosesNbadge" onClick={closeMenu}>
                  Proses & Badge
                </a>
              </li>

            </ul>

            {/* HAMBURGER */}
            <div
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

        </nav>

        {/* HERO SECTION */}
        <section className="hero">

          <div className="hero-content">

            <h2 className="hero-title">
              Selamat Datang di <br />
              Astro<span className="title2">Learn</span>
            </h2>

            <p className="hero-subtitle">
              Belajar Tata Surya jadi lebih seru,
              interaktif, dan menyenangkan!
            </p>

            <button className="btn-mulai">
              Mulai Petualangan!
            </button>

          </div>

        </section>

      </section>

      {/* PAGE TWO */}
      <section className="pageTwo"></section>
    </>
  );
}