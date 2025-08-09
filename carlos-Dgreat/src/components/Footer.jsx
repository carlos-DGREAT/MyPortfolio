import { useEffect, useState } from "react";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-gradient-to-b from-red-950 via-stone-950 to-red-950 text-primary-content p-10">
      <aside className="flex flex-col items-center space-y-2">
        <img
          src="/footer-2.png"
          alt="Logo"
          className="h-25 w-25 object-contain"
        />
        <p className="font-bold text-center">
          CRLS.DGREAT
        </p>
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>
    </footer>
  );
}
