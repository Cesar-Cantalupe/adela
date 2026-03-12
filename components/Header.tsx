"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.63443 1.37603C9.673 1.37603 9.91355 1.38419 10.7188 1.42088C11.4629 1.45554 11.8665 1.57989 12.1356 1.68386C12.4923 1.82248 12.7472 1.9876 13.0142 2.25465C13.2813 2.52171 13.4464 2.77653 13.585 3.13328C13.689 3.40237 13.8133 3.806 13.848 4.55008C13.8847 5.35531 13.8928 5.59586 13.8928 7.63443C13.8928 9.673 13.8847 9.91355 13.848 10.7188C13.8133 11.4629 13.689 11.8665 13.585 12.1356C13.4464 12.4923 13.2813 12.7472 13.0142 13.0142C12.7472 13.2813 12.4923 13.4464 12.1356 13.585C11.8665 13.689 11.4629 13.8133 10.7188 13.848C9.91355 13.8847 9.673 13.8928 7.63443 13.8928C5.59586 13.8928 5.35531 13.8847 4.55008 13.848C3.806 13.8133 3.40237 13.689 3.13328 13.585C2.77653 13.4464 2.52171 13.2813 2.25465 13.0142C1.9876 12.7472 1.82248 12.4923 1.68386 12.1356C1.57989 11.8665 1.45554 11.4629 1.42088 10.7188C1.38419 9.91355 1.37603 9.673 1.37603 7.63443C1.37603 5.59586 1.38419 5.35531 1.42088 4.55008C1.45554 3.806 1.57989 3.40237 1.68386 3.13328C1.82248 2.77653 1.9876 2.52171 2.25465 2.25465C2.52171 1.9876 2.77653 1.82248 3.13328 1.68386C3.40237 1.57989 3.806 1.45554 4.55008 1.42088C5.35531 1.38419 5.59586 1.37603 7.63443 1.37603ZM7.63443 0C5.56121 0 5.30027 0.00815437 4.48688 0.0468871C3.6735 0.0835813 3.11901 0.214049 2.63383 0.401598C2.13234 0.5973 1.70628 0.858236 1.28226 1.28226C0.858236 1.70628 0.5973 2.13234 0.401598 2.63383C0.212011 3.11901 0.0835812 3.6735 0.046887 4.48688C0.0101928 5.30027 0 5.56121 0 7.63443C0 9.70765 0.00815427 9.96859 0.046887 10.782C0.0835812 11.5954 0.214049 12.1499 0.401598 12.635C0.5973 13.1365 0.858236 13.5626 1.28226 13.9866C1.70628 14.4106 2.13234 14.6716 2.63383 14.8673C3.11901 15.0568 3.6735 15.1853 4.48688 15.222C5.30027 15.2587 5.56121 15.2689 7.63443 15.2689C9.70765 15.2689 9.96859 15.2607 10.782 15.222C11.5954 15.1853 12.1499 15.0548 12.635 14.8673C13.1365 14.6716 13.5626 14.4106 13.9866 13.9866C14.4106 13.5626 14.6716 13.1365 14.8673 12.635C15.0569 12.1499 15.1853 11.5954 15.222 10.782C15.2587 9.96859 15.2689 9.70765 15.2689 7.63443C15.2689 5.56121 15.2607 5.30027 15.222 4.48688C15.1853 3.6735 15.0548 3.11901 14.8673 2.63383C14.6716 2.13234 14.4106 1.70628 13.9866 1.28226C13.5626 0.858236 13.1365 0.5973 12.635 0.401598C12.1499 0.212011 11.5954 0.0835813 10.782 0.0468871C9.96859 0.0101929 9.70765 0 7.63443 0Z" fill="#1F191A"/>
      <path d="M7.63452 3.71429C5.46956 3.71429 3.71436 5.46949 3.71436 7.63445C3.71436 9.79941 5.46956 11.5546 7.63452 11.5546C9.79948 11.5546 11.5547 9.79941 11.5547 7.63445C11.5547 5.46949 9.79948 3.71429 7.63452 3.71429ZM7.63452 10.1806C6.22995 10.1806 5.09039 9.04106 5.09039 7.63649C5.09039 6.23192 6.22995 5.09236 7.63452 5.09236C9.03909 5.09236 10.1786 6.23192 10.1786 7.63649C10.1786 9.04106 9.03909 10.1806 7.63452 10.1806Z" fill="#1F191A"/>
      <path d="M11.7098 4.47467C12.2153 4.47467 12.6251 4.06487 12.6251 3.55936C12.6251 3.05384 12.2153 2.64404 11.7098 2.64404C11.2042 2.64404 10.7944 3.05384 10.7944 3.55936C10.7944 4.06487 11.2042 4.47467 11.7098 4.47467Z" fill="#1F191A"/>
    </svg>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#trabajando", label: "¿En qué estoy trabajando?" },
    { href: "#we-human-lab", label: "We Human Lab" },
    { href: "#red-communia", label: "Red Communia" },
    { href: "#libro", label: "¿Qué te apasiona?", accent: true },
    { href: "#contacto", label: "Contacto" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F9F1EF]/95 backdrop-blur"
    >
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Desktop: enlaces de navegación */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.2, duration: 0.4 }}
            >
              <Link
                href={item.href}
                className={`text-sm font-medium font-poppins leading-9 transition ${
                  item.accent ? "text-[#D49A89]" : "text-stone-900 hover:text-[#D49A89]"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop: redes sociales */}
        <motion.div
          className="hidden lg:flex items-center gap-4 xl:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <a href="https://www.linkedin.com/in/adelacavia" target="_blank" rel="noopener noreferrer" className="text-stone-950 hover:opacity-80" aria-label="LinkedIn">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_126_78)">
                <path d="M7.93753 6.06776C8.13568 5.84347 8.30045 5.61525 8.50445 5.42243C9.13422 4.82825 9.87774 4.52919 10.7448 4.53509C11.2216 4.53902 11.6944 4.57444 12.1534 4.70626C13.205 5.01122 13.8171 5.73723 14.1094 6.76819C14.3271 7.54145 14.3684 8.33431 14.3703 9.13119C14.3723 10.8114 14.3664 12.4917 14.3703 14.17C14.3703 14.3273 14.3271 14.3687 14.1721 14.3667C13.309 14.3588 12.4458 14.3588 11.5825 14.3667C11.4315 14.3667 11.3982 14.3214 11.3982 14.1778C11.4021 12.5802 11.404 10.9806 11.3982 9.38303C11.3982 8.98162 11.3707 8.58223 11.2589 8.19267C11.0529 7.47454 10.5408 7.11056 9.7914 7.14988C8.76738 7.205 8.23572 7.71258 8.10622 8.75537C8.07483 9.00525 8.06112 9.25317 8.06112 9.505C8.06112 11.0593 8.06112 12.6137 8.06504 14.168C8.06504 14.3234 8.02773 14.3687 7.86883 14.3667C6.99979 14.3588 6.13069 14.3608 5.2616 14.3667C5.12231 14.3667 5.08111 14.3293 5.08307 14.1896C5.087 11.1125 5.087 8.03333 5.08307 4.95613C5.08307 4.80464 5.13212 4.76922 5.27533 4.76922C6.10123 4.77513 6.92523 4.77513 7.75115 4.76922C7.90221 4.76922 7.94145 4.81644 7.93946 4.96204C7.93162 5.32996 7.93753 5.69788 7.93753 6.06581V6.06776Z" fill="#1F191A"/>
                <path d="M3.20949 9.5837C3.20949 11.1065 3.20753 12.6294 3.21341 14.1523C3.21341 14.3214 3.17221 14.3726 2.99761 14.3706C2.13441 14.3608 1.27318 14.3628 0.409979 14.3706C0.272652 14.3706 0.229492 14.3372 0.229492 14.1936C0.233416 11.1105 0.233416 8.02742 0.229492 4.94434C0.229492 4.81645 0.260881 4.7712 0.396246 4.7712C1.27121 4.7771 2.14618 4.77907 3.02115 4.7712C3.18987 4.7712 3.21145 4.83416 3.21145 4.97975C3.20753 6.51441 3.20949 8.04903 3.20949 9.58566V9.5837Z" fill="#1F191A"/>
                <path d="M3.44692 1.71763C3.44692 2.67384 2.67397 3.45297 1.72249 3.45297C0.782777 3.45297 0.00393835 2.67384 1.47233e-05 1.73338C-0.0039089 0.781105 0.776891 -0.0019638 1.72641 3.69951e-06C2.66808 3.69951e-06 3.44496 0.777167 3.44692 1.7196V1.71763Z" fill="#1F191A"/>
              </g>
              <defs>
                <clipPath id="clip0_126_78">
                  <rect width="14.3707" height="14.3707" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="https://instagram.com/adela.cavia" target="_blank" rel="noopener noreferrer" className="text-stone-950 hover:opacity-80" aria-label="Instagram">
            <IconInstagram />
          </a>
          <a href="https://x.com/Adel1ta" target="_blank" rel="noopener noreferrer" className="text-stone-950 hover:opacity-80" aria-label="X (Twitter)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/adela.cavia/" target="_blank" rel="noopener noreferrer" className="text-stone-950 hover:opacity-80" aria-label="Facebook">
            <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.64363 2.30816C6.32272 2.30816 7.47422 2.3166 7.47422 2.3166V0.00937324C7.47422 0.00937324 6.67281 -0.0117166 5.62676 0.00937324C4.57649 0.030463 1.99931 0.110604 1.99931 3.14753V5.10467H0V7.50469H1.99931V15H4.85909V7.50469H7.19584L7.47422 5.10467H4.85487V3.14753C4.85487 3.14753 4.96454 2.30816 5.64363 2.30816Z" fill="black"/>
            </svg>
          </a>
          <a href="mailto:adelacavia@gmail.com" className="text-stone-950 hover:opacity-80" aria-label="Email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </motion.div>

        {/* Mobile/Tablet: botón menú */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((o) => !o)}
          className="lg:hidden p-2 -m-2 text-stone-900 hover:text-[#D49A89] transition-colors rounded-md"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Panel móvil/tablet: todos los enlaces y redes */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-14 sm:top-16 bg-stone-900/20 backdrop-blur-sm lg:hidden z-40"
              onClick={closeMenu}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 right-0 top-14 sm:top-16 z-50 lg:hidden bg-[#F9F1EF] border-b border-stone-200/80 shadow-lg overflow-y-auto max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)]"
            >
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
                <ul className="flex flex-col gap-1 sm:gap-2">
                  {navItems.map((item, i) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`block py-3 sm:py-4 text-base sm:text-lg font-medium font-poppins transition ${
                          item.accent ? "text-[#D49A89]" : "text-stone-900 hover:text-[#D49A89]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-stone-200/80 flex flex-wrap items-center gap-4 sm:gap-6">
                  <span className="text-xs sm:text-sm font-medium text-stone-500 uppercase tracking-wider w-full sm:w-auto">Redes</span>
                  <a href="https://www.linkedin.com/in/adelacavia" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="text-stone-950 hover:opacity-80 p-1" aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_mob_78)">
                        <path d="M7.93753 6.06776C8.13568 5.84347 8.30045 5.61525 8.50445 5.42243C9.13422 4.82825 9.87774 4.52919 10.7448 4.53509C11.2216 4.53902 11.6944 4.57444 12.1534 4.70626C13.205 5.01122 13.8171 5.73723 14.1094 6.76819C14.3271 7.54145 14.3684 8.33431 14.3703 9.13119C14.3723 10.8114 14.3664 12.4917 14.3703 14.17C14.3703 14.3273 14.3271 14.3687 14.1721 14.3667C13.309 14.3588 12.4458 14.3588 11.5825 14.3667C11.4315 14.3667 11.3982 14.3214 11.3982 14.1778C11.4021 12.5802 11.404 10.9806 11.3982 9.38303C11.3982 8.98162 11.3707 8.58223 11.2589 8.19267C11.0529 7.47454 10.5408 7.11056 9.7914 7.14988C8.76738 7.205 8.23572 7.71258 8.10622 8.75537C8.07483 9.00525 8.06112 9.25317 8.06112 9.505C8.06112 11.0593 8.06112 12.6137 8.06504 14.168C8.06504 14.3234 8.02773 14.3687 7.86883 14.3667C6.99979 14.3588 6.13069 14.3608 5.2616 14.3667C5.12231 14.3667 5.08111 14.3293 5.08307 14.1896C5.087 11.1125 5.087 8.03333 5.08307 4.95613C5.08307 4.80464 5.13212 4.76922 5.27533 4.76922C6.10123 4.77513 6.92523 4.77513 7.75115 4.76922C7.90221 4.76922 7.94145 4.81644 7.93946 4.96204C7.93162 5.32996 7.93753 5.69788 7.93753 6.06581V6.06776Z" fill="#1F191A"/>
                        <path d="M3.20949 9.5837C3.20949 11.1065 3.20753 12.6294 3.21341 14.1523C3.21341 14.3214 3.17221 14.3726 2.99761 14.3706C2.13441 14.3608 1.27318 14.3628 0.409979 14.3706C0.272652 14.3706 0.229492 14.3372 0.229492 14.1936C0.233416 11.1105 0.233416 8.02742 0.229492 4.94434C0.229492 4.81645 0.260881 4.7712 0.396246 4.7712C1.27121 4.7771 2.14618 4.77907 3.02115 4.7712C3.18987 4.7712 3.21145 4.83416 3.21145 4.97975C3.20753 6.51441 3.20949 8.04903 3.20949 9.58566V9.5837Z" fill="#1F191A"/>
                        <path d="M3.44692 1.71763C3.44692 2.67384 2.67397 3.45297 1.72249 3.45297C0.782777 3.45297 0.00393835 2.67384 1.47233e-05 1.73338C-0.0039089 0.781105 0.776891 -0.0019638 1.72641 3.69951e-06C2.66808 3.69951e-06 3.44496 0.777167 3.44692 1.7196V1.71763Z" fill="#1F191A"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_mob_78">
                          <rect width="14.3707" height="14.3707" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="https://instagram.com/adela.cavia" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="text-stone-950 hover:opacity-80 p-1" aria-label="Instagram">
                    <IconInstagram />
                  </a>
                  <a href="https://x.com/Adel1ta" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="text-stone-950 hover:opacity-80 p-1" aria-label="X (Twitter)">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/adela.cavia/" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="text-stone-950 hover:opacity-80 p-1" aria-label="Facebook">
                    <svg width="10" height="18" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.64363 2.30816C6.32272 2.30816 7.47422 2.3166 7.47422 2.3166V0.00937324C7.47422 0.00937324 6.67281 -0.0117166 5.62676 0.00937324C4.57649 0.030463 1.99931 0.110604 1.99931 3.14753V5.10467H0V7.50469H1.99931V15H4.85909V7.50469H7.19584L7.47422 5.10467H4.85487V3.14753C4.85487 3.14753 4.96454 2.30816 5.64363 2.30816Z" fill="black"/>
                    </svg>
                  </a>
                  <a href="mailto:adelacavia@gmail.com" onClick={closeMenu} className="text-stone-950 hover:opacity-80 p-1" aria-label="Email">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* export function Hero() {
  const accent = "#D49A89";
  const ease = [0.22, 1, 0.36, 1] as const;

  const frases = [
    { text: "curiosa por naturaleza en un mundo con tanto por descubrir", delay: 0.45 },
    { text: "apasionada del conocimiento y de entender lo que mueve a las personas", delay: 0.55 },
    { text: "convencida de que todos podemos cambiar si nos los proponemos", delay: 0.6 },
    { text: "buscando siempre lo que une por sobre lo que separa", delay: 0.5 },
  ];

  const arrowSvgs = [
    <svg key="0" width={30} height={43} viewBox="0 0 30 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.6276 0.119354C34.9782 30.0216 12.3139 40.6119 0.0629883 42.1694" stroke={accent} /></svg>,
    <svg key="1" width={42} height={31} viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.495323 30.5512C4.66641 0.0426231 29.6375 -1.46266 41.6017 1.59828" stroke={accent} /></svg>,
    <svg key="2" width={47} height={27} viewBox="0 0 47 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M46.4557 24.1846C25.1998 5.77418 9.21546 13.8137 4.85643 16.3072C0.497396 18.8007 -1.98066 23.9697 4.24757 25.8734C10.4758 27.7772 26.5919 12.4487 7.13713 0.425317" stroke={accent} /></svg>,
    <svg key="3" width={47} height={27} viewBox="0 0 47 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.296461 5.6091C22.9431 22.279 38.2408 12.9993 42.3888 10.1686C46.5367 7.33782 48.5978 1.98884 42.2384 0.584138C35.879 -0.82056 21.027 15.7356 41.3725 26.1811" stroke={accent} /></svg>,
  ];

  return (
    <div
      data-layer="banner home"
      className="w-full overflow-hidden bg-[#F9F1EF]"
    >
      {/* Mobile & Tablet: texto arriba, imagen abajo pegada al borde */}
      <div className="relative w-full min-h-[100vh] lg:hidden flex flex-col pt-20 sm:pt-24 px-4 pb-0 sm:px-6">
        <div className="flex flex-col items-center flex-shrink-0 max-w-lg mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="font-poppins font-light text-black uppercase leading-tight tracking-wide text-3xl sm:text-4xl md:text-5xl text-center"
          >
            Adela Cavia Sáenz
          </motion.h1>

          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="mt-5 sm:mt-6 text-center font-swanky text-[15px] sm:text-base font-normal leading-relaxed text-[#D49A89]"
          >
            Curiosa por naturaleza en un mundo con tanto por descubrir. Apasionada del conocimiento y de entender lo que mueve a las personas. Convencida de que todos podemos cambiar si nos lo proponemos. Buscando siempre lo que une por sobre lo que separa.
          </motion.blockquote>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="relative w-full max-w-[320px] aspect-[384/589] sm:max-w-[360px] mx-auto mt-auto pt-8 sm:pt-10 pb-0 min-h-0"
        >
          <Image
            src="/images/hero/Adela Saenz Cavia25 2.png"
            alt="Adela Sáenz"
            fill
            className="object-cover object-top"
            unoptimized
          />
        </motion.div>
      </div>

      {/* Desktop: layout original con posiciones fijas */}
      <div className="relative hidden lg:block w-full max-w-[1474px] min-h-[746px] h-[746px] mx-auto bg-[#F9F1EF]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="absolute left-[285px] top-[293px] font-poppins font-light text-black text-8xl uppercase leading-[104.35px] tracking-[5.52px]"
          style={{ width: "1265.96px" }}
        >
          Adela
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="absolute left-[260px] top-[398px] font-poppins font-light text-black text-8xl uppercase leading-[104.35px] tracking-[5.52px]"
        >
          Cavia
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="absolute right-[350px] top-[293px] text-right font-poppins font-light text-black text-8xl uppercase leading-[104.35px] tracking-[5.52px]"
        >
          Sáenz
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="absolute left-[512.66px] top-[157px] w-96 h-[589px]"
        >
          <Image
            src="/images/hero/Adela Saenz Cavia25 2.png"
            alt="Adela Sáenz"
            fill
            className="object-cover object-top"
            unoptimized
          />
        </motion.div>

        {[
          { left: 976, top: 179 },
          { left: 1004, top: 483 },
          { left: 175, top: 569 },
          { left: 123, top: 203 },
        ].map((pos, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: frases[i].delay, ease }}
            className="absolute w-56 text-center font-swanky text-xl font-normal leading-5 text-[#D49A89]"
            style={{ left: pos.left, top: pos.top, maxWidth: "14rem" }}
          >
            {frases[i].text}
          </motion.p>
        ))}

        {[
          { left: 427, top: 540, delay: 0.7 },
          { left: 910, top: 183, delay: 0.65 },
          { left: 344, top: 226, delay: 0.72 },
          { left: 948, top: 425, delay: 0.68 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 0.8, delay: pos.delay, ease }}
            className="absolute"
            style={{ left: pos.left, top: pos.top }}
            aria-hidden
          >
            {arrowSvgs[i]}
          </motion.div>
        ))}
      </div>
    </div>
  );
}*/

  export function Hero() {
  const accent = "#D49A89";
  const ease = [0.22, 1, 0.36, 1] as const;

  const frases = [
    { text: "buscando siempre lo que une por sobre lo que separa", className: "left-[6%] top-[14%]" },
    { text: "curiosa por naturaleza en un mundo con tanto por descubrir", className: "right-[7%] top-[11%]" },
    { text: "convencida de que todos podemos cambiar si nos lo proponemos", className: "left-[9%] bottom-[18%]" },
    { text: "apasionada del conocimiento y de entender lo que mueve a las personas", className: "right-[7%] bottom-[24%]" },
  ];

  return (
    <div data-layer="banner home" className="w-full overflow-hidden bg-[#F9F1EF]">
      {/* Mobile & tablet */}
      <div className="relative w-full min-h-[100svh] lg:hidden flex flex-col pt-20 sm:pt-24 px-4 pb-0 sm:px-6">
        <div className="flex flex-col items-center flex-shrink-0 max-w-lg mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="font-poppins font-light text-black uppercase leading-tight tracking-wide text-3xl sm:text-4xl md:text-5xl text-center"
          >
            Adela Cavia Sáenz
          </motion.h1>

          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="mt-5 sm:mt-6 text-center font-swanky text-[15px] sm:text-base font-normal leading-relaxed text-[#D49A89]"
          >
            Curiosa por naturaleza en un mundo con tanto por descubrir. Apasionada del conocimiento y de entender lo que mueve a las personas. Convencida de que todos podemos cambiar si nos lo proponemos. Buscando siempre lo que une por sobre lo que separa.
          </motion.blockquote>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="relative w-full max-w-[320px] aspect-[384/589] sm:max-w-[360px] mx-auto mt-auto pt-8 sm:pt-10 pb-0 min-h-0"
        >
          <Image
            src="/images/hero/Adela Saenz Cavia25 2.png"
            alt="Adela Sáenz"
            fill
            className="object-cover object-top"
            unoptimized
          />
        </motion.div>
      </div>

      {/* Desktop responsive */}
      <div className="relative hidden lg:block w-full bg-[#F9F1EF]">
        <div className="relative max-w-[1474px] mx-auto min-h-[640px] xl:min-h-[746px] px-8 xl:px-12 pt-24 xl:pt-28 pb-8">
          {/* Frases decorativas solo en desktop amplio */}
          <div className="hidden xl:block">
            {frases.map((frase, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 + i * 0.08, ease }}
                className={`absolute w-56 text-center font-swanky text-xl font-normal leading-5 text-[#D49A89] ${frase.className}`}
              >
                {frase.text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="absolute left-[24%] top-[66%]"
              aria-hidden
            >
              <svg width={47} height={27} viewBox="0 0 47 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.4557 24.1846C25.1998 5.77418 9.21546 13.8137 4.85643 16.3072C0.497396 18.8007 -1.98066 23.9697 4.24757 25.8734C10.4758 27.7772 26.5919 12.4487 7.13713 0.425317" stroke={accent} />
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.74, ease }}
              className="absolute right-[29%] top-[18%]"
              aria-hidden
            >
              <svg width={42} height={31} viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.495323 30.5512C4.66641 0.0426231 29.6375 -1.46266 41.6017 1.59828" stroke={accent} />
              </svg>
            </motion.div>
          </div>

          <div className="grid grid-cols-[minmax(0,1fr)_340px_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_384px_minmax(0,1fr)] items-center gap-4 xl:gap-8">
            {/* Izquierda */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="text-right pr-2 xl:pr-4"
            >
              <div className="font-poppins font-light text-black uppercase leading-[0.92] tracking-[0.055em] text-[clamp(58px,6.4vw,88px)]">
                <div>Adela</div>
                <div>Cavia</div>
              </div>
            </motion.div>

            {/* Centro */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="relative w-[340px] h-[522px] xl:w-96 xl:h-[589px] mx-auto"
            >
              <Image
                src="/images/hero/Adela Saenz Cavia25 2.png"
                alt="Adela Sáenz"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </motion.div>

            {/* Derecha */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease }}
              className="text-left pl-2 xl:pl-4 self-start pt-[168px] xl:pt-[186px]"
            >
              <div className="font-poppins font-light text-black uppercase leading-[0.92] tracking-[0.055em] text-[clamp(58px,6.4vw,88px)] whitespace-nowrap">
                Sáenz
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
