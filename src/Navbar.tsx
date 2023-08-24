import  { useState, useEffect } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveLink(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);


  return (
    <nav className="navbar">
      <div className="underline">
      <a className={`anchor ${activeLink === '/' ? 'active' : ''}`} href="/">Beranda</a>
      <a className={`anchor ${activeLink === '/post' ? 'active' : ''}`} href="/post">Postingan</a>
      <a className={`anchor ${activeLink === '/other' ? 'active' : ''}`} href="/other">Lainnya</a>
      <a className={`anchor ${activeLink === '/follower' ? 'active' : ''}`} href="/follower">Follower</a>
      </div>
    </nav>
  );
}

export default Navbar;
