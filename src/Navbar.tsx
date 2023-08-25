import { useState, useEffect } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState<string>(
    window.location.pathname
  );
  console.log(activeLink);

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveLink(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="underline">
        <a className={`anchor ${activeLink === "/" ? "active" : ""}`} href="/">
          Beranda
        </a>
        <a
          className={`anchor ${activeLink === "/post" ? "active" : ""}`}
          href="/post"
        >
          Postingan
        </a>
        <a
          className={`anchor ${activeLink === "/friend" ? "active" : ""}`}
          href="/friend"
        >
          Teman
        </a>
        <a
          className={`anchor ${activeLink === "/follower" ? "active" : ""}`}
          href="/follower"
        >
          Follower
        </a>
        <div className="dropdown">
          <button
            className={`dropbtn ${
              activeLink.includes("/other") ? "active" : ""
            } `}
          >
            Lainnya
          </button>
          {/* svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="15"
            viewBox="0 0 24 24"
            id="keyboard-arrow-down"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
          </svg>
          {/* Dropdown */}
          <div className="dropdown-content">
            <a href="/other/persinggahan">Persinggahan</a>
            <a href="/other/olahraga">Olahraga</a>
            <a href="/other/musik">Musik</a>
            <a href="/other/film">Film</a>
            <a href="/other/acara">Acara Tv</a>
            <a href="/other/buku">Buku</a>
            <a href="/other/aplikasi">Aplikasi dan Game</a>
            <a href="/other/suka">Suka</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
