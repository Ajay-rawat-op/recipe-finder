import React from "react";

export default function Footer() {
  return (
    <footer className="font-merienda text-gray-700 py-6 mt-10 text-center  dark:text-white-400 text-gray-800 dark:text-gray-200">
      &copy; {new Date().getFullYear()} Tasty Bites. All rights reserved.
    </footer>
  );
}
