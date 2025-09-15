import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-orange-400">Recipe-Finder {new Date().getFullYear()}</h1>
            <p className="text-sm mt-1">
               Recipe Finder is your go-to app for discovering delicious recipes from various cuisines.</p>
          </div>

          <nav className="flex space-x-6">
            <a href="#" className="hover:text-orange-400 transition">Home</a>
            <a href="#" className="hover:text-orange-400 transition">About</a>
            <a href="#" className="hover:text-orange-400 transition">Contact</a>
            <a href="#" className="hover:text-orange-400 transition">Services</a>
          </nav>

          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target='_blank'
              aria-label="Facebook"
              className="hover:text-orange-400 transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12a10 10 0 10-11.63 9.88v-6.98h-2.7v-2.9h2.7V9.84c0-2.67 1.58-4.14 4-4.14 1.16 0 2.37.2 2.37.2v2.6h-1.33c-1.31 0-1.72.82-1.72 1.66v2h2.93l-.47 2.9h-2.46v6.98A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              target='_blank'
              aria-label="Twitter"
              className="hover:text-orange-400 transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 19c7.732 0 11.958-6.405 11.958-11.958 0-.18 0-.36-.013-.54A8.56 8.56 0 0022 4.56a8.15 8.15 0 01-2.356.646 4.14 4.14 0 001.81-2.29 8.22 8.22 0 01-2.61.996 4.1 4.1 0 00-7 3.74A11.64 11.64 0 013 4.28a4.05 4.05 0 001.27 5.47A4.07 4.07 0 012.8 9.5v.05a4.1 4.1 0 003.28 4.03 4.07 4.07 0 01-1.85.07 4.11 4.11 0 003.83 2.85A8.24 8.24 0 018 19z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              target='_blank'
              aria-label="Instagram"
              className="hover:text-orange-400 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <div className="bg-gray-800 text-gray-400 text-center text-xs py-3">
        <p>
          Terms of Service | Privacy Policy | Cookie Policy
        </p>
        <p className="mt-1">&copy; {new Date().getFullYear()} Recipe-Finder. All rights reserved.</p>
      </div>
    </>
  );
}
