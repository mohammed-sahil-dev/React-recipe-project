import React from 'react';
import { Link } from 'react-router';

function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card/90 backdrop-blur border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        { }
        <Link to="/" className="flex items-center gap-2 font-serif font-bold text-2xl tracking-tight text-accent">
          <svg className="w-7 h-7 stroke-current fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M3 12h18a9 9 0 0 1-18 0z" />
            <path d="M8 8c0-1.5 1-2 1-3.5" />
            <path d="M12 8c0-1.5 1-2 1-3.5" />
            <path d="M16 8c0-1.5 1-2 1-3.5" />
          </svg>
          RecipeFinder
        </Link>
        { }
        <Link to="/" className="text-text hover:text-accent hover:bg-accent/10 font-medium text-sm px-4 py-2 rounded-full transition-colors">
          Home
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;