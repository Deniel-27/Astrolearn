"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((current) => !current);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <section className="pageOne">
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">
              <img
                src="/Image/Logo 1-A-2.png"
                alt="AstroLearn Logo Part A"
                className="logo-part logo-part-a"
              />
              <img
                src="/Image/Logo 1-B.png"
                alt="AstroLearn Logo Part B"
                className="logo-part logo-part-b"
              />
            </div>

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

        <section className="hero">
          <div className="hero-content">
            <h2 className="hero-title">
              Selamat Datang di <br /> Astro<span className="title2">Learn</span>
            </h2>
            <p className="hero-subtitle">
              Belajar Tata Surya jadi lebih seru, interaktif, dan menyenangkan!
            </p>
            <button className="btn-mulai">Mulai Petualangan!</button>
          </div>
        </section>
      </section>

      <section className="pageTwo" id="features">
        <div className="section-content">
          <div className="section-header">
            <h2>Jelajahi Fitur AstroLearn</h2>
            <p>
              Pilih area pembelajaran yang ingin kamu akses: materi, game, kuis,
              atau progres & badge.
            </p>
          </div>

          <div className="cards-grid">
            <article className="info-card card-materi">
              <div className="card-icon">📘</div>
              <h3 className="card-title">Materi</h3>
              <p className="card-text">
                Eksplorasi tata surya dan kenali setiap planet dengan cara seru
                dan interaktif.
              </p>
              <a href="#materi" className="card-btn" onClick={closeMenu}>
                Mulai
              </a>
            </article>

            <article className="info-card card-game">
              <div className="card-icon">🎮</div>
              <h3 className="card-title">Game</h3>
              <p className="card-text">
                Tantangan seru untuk susun planet pada orbitnya dan asah logika
                antariksa.
              </p>
              <a href="#game" className="card-btn" onClick={closeMenu}>
                Mulai
              </a>
            </article>

            <article className="info-card card-kuis">
              <div className="card-icon">🧠</div>
              <h3 className="card-title">Kuis</h3>
              <p className="card-text">
                Uji pemahamanmu tentang tata surya dengan pertanyaan yang
                menarik.
              </p>
              <a href="#kuis" className="card-btn" onClick={closeMenu}>
                Mulai
              </a>
            </article>

            <article className="info-card card-proses">
              <div className="card-icon">🏆</div>
              <h3 className="card-title">Proses & Badge</h3>
              <p className="card-text">
                Lihat skor, progres, dan badge yang telah kamu raih selama
                petualangan.
              </p>
              <a href="#prosesNbadge" className="card-btn" onClick={closeMenu}>
                Mulai
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
