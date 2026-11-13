import React from 'react';

function NotFound() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-24 text-center">
      <h1 className="font-serif text-8xl font-bold tracking-tight text-accent mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
      <p className="text-muted mb-8 max-w-sm mx-auto">The page you are looking for does not exist.</p>
      { }
      <a
        href="#"
        className="bg-accent hover:bg-accent-hover active:scale-95 text-white rounded-lg px-6 py-3 inline-block font-medium shadow-sm transition"
      >
        Back to Home
      </a>
    </main>
  );
}

export default NotFound;