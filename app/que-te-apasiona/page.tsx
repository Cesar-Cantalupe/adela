"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M7.63443 1.37603C9.673 1.37603 9.91355 1.38419 10.7188 1.42088C11.4629 1.45554 11.8665 1.57989 12.1356 1.68386C12.4923 1.82248 12.7472 1.9876 13.0142 2.25465C13.2813 2.52171 13.4464 2.77653 13.585 3.13328C13.689 3.40237 13.8133 3.806 13.848 4.55008C13.8847 5.35531 13.8928 5.59586 13.8928 7.63443C13.8928 9.673 13.8847 9.91355 13.848 10.7188C13.8133 11.4629 13.689 11.8665 13.585 12.1356C13.4464 12.4923 13.2813 12.7472 13.0142 13.0142C12.7472 13.2813 12.4923 13.4464 12.1356 13.585C11.8665 13.689 11.4629 13.8133 10.7188 13.848C9.91355 13.8847 9.673 13.8928 7.63443 13.8928C5.59586 13.8928 5.35531 13.8847 4.55008 13.848C3.806 13.8133 3.40237 13.689 3.13328 13.585C2.77653 13.4464 2.52171 13.2813 2.25465 13.0142C1.9876 12.7472 1.82248 12.4923 1.68386 12.1356C1.57989 11.8665 1.45554 11.4629 1.42088 10.7188C1.38419 9.91355 1.37603 9.673 1.37603 7.63443C1.37603 5.59586 1.38419 5.35531 1.42088 4.55008C1.45554 3.806 1.57989 3.40237 1.68386 3.13328C1.82248 2.77653 1.9876 2.52171 2.25465 2.25465C2.52171 1.9876 2.77653 1.82248 3.13328 1.68386C3.40237 1.57989 3.806 1.45554 4.55008 1.42088C5.35531 1.38419 5.59586 1.37603 7.63443 1.37603ZM7.63443 0C5.56121 0 5.30027 0.00815437 4.48688 0.0468871C3.6735 0.0835813 3.11901 0.214049 2.63383 0.401598C2.13234 0.5973 1.70628 0.858236 1.28226 1.28226C0.858236 1.70628 0.5973 2.13234 0.401598 2.63383C0.212011 3.11901 0.0835812 3.6735 0.046887 4.48688C0.0101928 5.30027 0 5.56121 0 7.63443C0 9.70765 0.00815427 9.96859 0.046887 10.782C0.0835812 11.5954 0.214049 12.1499 0.401598 12.635C0.5973 13.1365 0.858236 13.5626 1.28226 13.9866C1.70628 14.4106 2.13234 14.6716 2.63383 14.8673C3.11901 15.0568 3.6735 15.1853 4.48688 15.222C5.30027 15.2587 5.56121 15.2689 7.63443 15.2689C9.70765 15.2689 9.96859 15.2607 10.782 15.222C11.5954 15.1853 12.1499 15.0548 12.635 14.8673C13.1365 14.6716 13.5626 14.4106 13.9866 13.9866C14.4106 13.5626 14.6716 13.1365 14.8673 12.635C15.0569 12.1499 15.1853 11.5954 15.222 10.782C15.2587 9.96859 15.2689 9.70765 15.2689 7.63443C15.2689 5.56121 15.2607 5.30027 15.222 4.48688C15.1853 3.6735 15.0548 3.11901 14.8673 2.63383C14.6716 2.13234 14.4106 1.70628 13.9866 1.28226C13.5626 0.858236 13.1365 0.5973 12.635 0.401598C12.1499 0.212011 11.5954 0.0835813 10.782 0.0468871C9.96859 0.0101929 9.70765 0 7.63443 0Z" fill="currentColor" />
      <path d="M7.63452 3.71429C5.46956 3.71429 3.71436 5.46949 3.71436 7.63445C3.71436 9.79941 5.46956 11.5546 7.63452 11.5546C9.79948 11.5546 11.5547 9.79941 11.5547 7.63445C11.5547 5.46949 9.79948 3.71429 7.63452 3.71429ZM7.63452 10.1806C6.22995 10.1806 5.09039 9.04106 5.09039 7.63649C5.09039 6.23192 6.22995 5.09236 7.63452 5.09236C9.03909 5.09236 10.1786 6.23192 10.1786 7.63649C10.1786 9.04106 9.03909 10.1806 7.63452 10.1806Z" fill="currentColor" />
      <path d="M11.7098 4.47467C12.2153 4.47467 12.6251 4.06487 12.6251 3.55936C12.6251 3.05384 12.2153 2.64404 11.7098 2.64404C11.2042 2.64404 10.7944 3.05384 10.7944 3.55936C10.7944 4.06487 11.2042 4.47467 11.7098 4.47467Z" fill="currentColor" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <path d="M7.93753 6.06776C8.13568 5.84347 8.30045 5.61525 8.50445 5.42243C9.13422 4.82825 9.87774 4.52919 10.7448 4.53509C11.2216 4.53902 11.6944 4.57444 12.1534 4.70626C13.205 5.01122 13.8171 5.73723 14.1094 6.76819C14.3271 7.54145 14.3684 8.33431 14.3703 9.13119C14.3723 10.8114 14.3664 12.4917 14.3703 14.17C14.3703 14.3273 14.3271 14.3687 14.1721 14.3667C13.309 14.3588 12.4458 14.3588 11.5825 14.3667C11.4315 14.3667 11.3982 14.3214 11.3982 14.1778C11.4021 12.5802 11.404 10.9806 11.3982 9.38303C11.3982 8.98162 11.3707 8.58223 11.2589 8.19267C11.0529 7.47454 10.5408 7.11056 9.7914 7.14988C8.76738 7.205 8.23572 7.71258 8.10622 8.75537C8.07483 9.00525 8.06112 9.25317 8.06112 9.505C8.06112 11.0593 8.06112 12.6137 8.06504 14.168C8.06504 14.3234 8.02773 14.3687 7.86883 14.3667C6.99979 14.3588 6.13069 14.3608 5.2616 14.3667C5.12231 14.3667 5.08111 14.3293 5.08307 14.1896C5.087 11.1125 5.087 8.03333 5.08307 4.95613C5.08307 4.80464 5.13212 4.76922 5.27533 4.76922C6.10123 4.77513 6.92523 4.77513 7.75115 4.76922C7.90221 4.76922 7.94145 4.81644 7.93946 4.96204C7.93162 5.32996 7.93753 5.69788 7.93753 6.06581V6.06776Z" fill="currentColor" />
      <path d="M3.20949 9.5837C3.20949 11.1065 3.20753 12.6294 3.21341 14.1523C3.21341 14.3214 3.17221 14.3726 2.99761 14.3706C2.13441 14.3608 1.27318 14.3628 0.409979 14.3706C0.272652 14.3706 0.229492 14.3372 0.229492 14.1936C0.233416 11.1105 0.233416 8.02742 0.229492 4.94434C0.229492 4.81645 0.260881 4.7712 0.396246 4.7712C1.27121 4.7771 2.14618 4.77907 3.02115 4.7712C3.18987 4.7712 3.21145 4.83416 3.21145 4.97975C3.20753 6.51441 3.20949 8.04903 3.20949 9.58566V9.5837Z" fill="currentColor" />
      <path d="M3.44692 1.71763C3.44692 2.67384 2.67397 3.45297 1.72249 3.45297C0.782777 3.45297 0.00393835 2.67384 1.47233e-05 1.73338C-0.0039089 0.781105 0.776891 -0.0019638 1.72641 3.69951e-06C2.66808 3.69951e-06 3.44496 0.777167 3.44692 1.7196V1.71763Z" fill="currentColor" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" aria-hidden>
      <path d="M5.64363 2.30816C6.32272 2.30816 7.47422 2.3166 7.47422 2.3166V0.00937324C7.47422 0.00937324 6.67281 -0.0117166 5.62676 0.00937324C4.57649 0.030463 1.99931 0.110604 1.99931 3.14753V5.10467H0V7.50469H1.99931V15H4.85909V7.50469H7.19584L7.47422 5.10467H4.85487V3.14753C4.85487 3.14753 4.96454 2.30816 5.64363 2.30816Z" fill="currentColor" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function Squiggle({
  className,
  stroke = "#E7D6D0",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M-40 90C90 30 160 170 270 120C370 75 420 10 520 55C610 95 670 170 840 120"
        stroke={stroke}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


const temas = [
  {
    title: "Primera parte.",
    subtitle: "Sobre la aventura de descubrir y hacer lo que te apasiona",
  },
  {
    title: "Segunda parte.",
    subtitle: "El método 3. El inicio del camino. Hacia el descubrimiento de lo que te apasiona",
  },
  {
    title: "Tercera parte.",
    subtitle: "Conectar con la pasión",
  },
  {
    title: "Cuarta parte.",
    subtitle:
      "Formas de encontrar la pasión · (Re)encontrarnos con nuestra pasión · ¿Seguir tu pasión o buscar tu pasión? · Mentores y guías · El impacto de tu pasión en los demás y en tu comunidad",
  },
  {
    title: "Quinta parte.",
    subtitle:
      "¿Qué te apasiona? · Cómo usar este libro · Preparándonos para transitar el camino: AGR · Breve historia de la pasión · Reconectar con nuestra identidad profunda · Las emociones que alientan y obstruyen el camino",
  },
];

export default function QueTeApasionaPage() {
  const [openVisualizacion, setOpenVisualizacion] = useState(false);
  const [openEmocional, setOpenEmocional] = useState(false);
  const [openDiploma, setOpenDiploma] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#2D2626]">
      {/* Header específico de esta página */}
      <header className="sticky top-0 z-50 bg-[#F7EEEC]/95 backdrop-blur border-b border-[#EADBD6]">
        <div className="mx-auto flex h-14 max-w-[1474px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <nav className="hidden items-center gap-8 lg:flex">
            <Link href="/#sobre-mi" className="text-[14px] font-medium font-poppins text-[#231F20] hover:text-[#D49A89] transition">
              Sobre mi
            </Link>
            <Link href="/#we-human-lab" className="text-[14px] font-medium font-poppins text-[#231F20] hover:text-[#D49A89] transition">
              We Human Lab
            </Link>
            <Link href="/#contacto" className="text-[14px] font-medium font-poppins text-[#231F20] hover:text-[#D49A89] transition">
              Contacto
            </Link>
            <a href="#hero-libro" className="text-[14px] font-medium font-poppins text-[#D49A89]">
              ¿Qué te apasiona?
            </a>
          </nav>

          <div className="ml-auto flex items-center gap-5 text-[#231F20]">
            <a href="https://www.linkedin.com/in/adelacavia" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
              <IconLinkedIn />
            </a>
            <a href="https://instagram.com/adela.cavia" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
              <IconInstagram />
            </a>
            <a href="https://x.com/Adel1ta" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
              <IconX />
            </a>
            <a href="https://www.facebook.com/adela.cavia/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
              <IconFacebook />
            </a>
            <a href="mailto:adelacavia@gmail.com" className="hover:opacity-70 transition">
              <IconMail />
            </a>
          </div>
        </div>
      </header>

   {/* HERO */}
<section
  id="hero-libro"
  className="relative min-h-screen overflow-hidden bg-[#F3E5E2]"
>
  <div className="mx-auto grid min-h-screen max-w-[1474px] grid-cols-1 items-center gap-10 px-6 py-10 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-[72px] lg:py-12">
    {/* Columna izquierda */}
    <div className="relative z-10 max-w-[520px] lg:ml-[40px] xl:ml-[80px]">
      <h1 className="text-[#231F20] font-poppins font-light uppercase tracking-[0.16em] leading-[0.95] text-[54px] sm:text-[64px] lg:text-[76px] xl:text-[88px]">
        ¿QUÉ TE
        <br />
        APASIONA?
      </h1>

      <div className="relative mt-10 max-w-[520px]">
        <p className="text-[#D49A89] font-swanky text-[22px] leading-[1.45] sm:text-[24px] lg:text-[26px]">
          Siempre me ha interesado entender el motor
          <br />
          que mueve a las personas a hacer las cosas
          <br />
          que hacen: algunos llaman a esto “sentido de
          <br />
        <span className="inline-block w-full text-center">
    vida”, otros “propósito” y otros “pasión”.
        </span>
        </p>

        <div className="absolute -right-[68px] top-[53%] hidden lg:block">
          <Image
            src="/images/libro/flecha1.png"
            alt=""
            width={58}
            height={58}
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    </div>

    {/* Columna derecha */}
    <div className="relative flex items-center justify-center lg:justify-start">
      <div className="relative w-full max-w-[560px] xl:max-w-[620px]">
        <div className="relative aspect-[700/620] w-full">
          <Image
            src="/images/libro/libro-hero.png"
            alt="Libro ¿Qué te apasiona?"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 620px"
            unoptimized
          />
        </div>
      </div>
    </div>
  </div>

  {/* Botón flotante abajo a la derecha */}
  <a
    href="https://www.galernaweb.com/productos/que-te-apasiona/"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute bottom-8 right-8 z-20 flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#C88C73] text-white text-[15px] uppercase tracking-[0.08em] font-poppins shadow-[0_10px_25px_rgba(0,0,0,0.14)] transition hover:opacity-90 md:bottom-10 md:right-10"
  >
    Comprar
  </a>
</section>

      {/* INTRO 2 COLUMNAS */}
      <section className="relative overflow-hidden bg-[#FBFBF8]">
        <Squiggle className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-20" stroke="#E8D9D3" />

        <div className="mx-auto grid max-w-[1474px] grid-cols-1 gap-10 px-6 py-14 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-[72px] lg:py-16">
          <div className="max-w-[620px]">
            <div className="mb-6 flex items-start gap-5">
              <div className="relative h-20 w-20 flex-shrink-0">
                <Image
                  src="/images/19 1.png"
                  alt=""
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              <p className="text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
                El tema me interesa tanto, que escribí un libro sobre ello:
                <br />
                <span className="font-medium">
                  “¿Qué te apasiona? Al encuentro de tu pasión”.
                </span>
              </p>
            </div>

            <div className="space-y-5 text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
              <p>
                No busco con este libro proponer una visión simplista de la pasión, del tipo
                “la tienes o no la tienes”. Lo que ofrezco es un mapa, un camino, una guía
                para intentar conectar con ella y recuperarla, una misión conquistadora para
                poseerla.
              </p>
              <p>
                Descubrir lo que nos apasiona puede ser un camino muy directo y llano para
                algunos, pero sinuoso y con vueltas para otros. Y eso no está mal. De lo que
                se trata es de poder saborear ambos procesos.
              </p>
              <p>
                También con este libro, quiero crear una conexión entre el propósito y el
                sentido profundo de la vida, el norte en nuestro mapa de la pasión. Lo que nos
                apasiona es ese motor que nos permite tener la energía para recorrer el camino
                con ilusión y entusiasmo durante toda la vida, más allá de las dificultades que,
                sin duda, surgirán.
              </p>
              <p>
                Pero, más allá de mis intenciones y deseos, este libro es tu viaje; yo solo
                estoy para guiarte y compartir algunos aprendizajes con la idea de que te los
                apropies, los adaptes y los uses de la forma más personal posible.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative aspect-[760/470] w-full max-w-[520px]">
              <Image
                src="/images/libro/libro-flotante.png"
                alt="Libro ¿Qué te apasiona?"
                fill
                className="object-contain drop-shadow-[0_18px_22px_rgba(0,0,0,0.12)]"
                sizes="(max-width: 1024px) 100vw, 520px"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* MANIFIESTO CENTRAL */}
      <section className="relative overflow-hidden bg-[#F4F3F1]">
        <Squiggle className="pointer-events-none absolute bottom-0 left-0 h-full w-full opacity-15" stroke="#E8DDD9" />

        <div className="mx-auto max-w-[900px] px-6 py-16 text-center md:px-10 lg:py-20">
          <h2 className="text-[34px] leading-none tracking-[0.22em] font-light font-poppins uppercase text-[#595050] sm:text-[42px]">
            LO QUE TE APASIONA
          </h2>

          <p className="mt-2 text-[14px] font-light font-poppins uppercase tracking-[0.18em] text-[#7E7474]">
            un viaje al centro de ti mismo
          </p>

          <div className="mx-auto mt-8 max-w-[760px] space-y-5 text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
            <p>
              Deseo que este libro te inspire y pueda contribuir a tu transformación, la que
              necesites para ir descubriendo y poniendo en práctica lo que te apasiona.
            </p>
            <p>
              La mayoría de las historias que comparto en el libro son personales o de gente
              cercana a las que conozco, quiero, admiro y cuyas vidas me resultan, de una
              forma u otra, inspiradoras. Sus historias son inspiradoras, pero detrás de ellas
              hay personas comunes, como cada uno de nosotros.
            </p>
            <p>
              Elegí hacerlo de esta manera porque, muchas veces, las narrativas de éxito de
              personas muy destacadas pueden tener una influencia avasallante y hacernos creer
              que eso le pasa solo a gente “especial”. Y a mí me gustaría que sientas, al ir
              leyendo, que son cosas que nos pasan a todos. Este es el motivo de la elección.
            </p>
          </div>
        </div>
      </section>

      {/* TEMAS DEL LIBRO */}
      <section className="relative overflow-hidden bg-[#FBFBF8]">
        <div className="mx-auto max-w-[1474px] px-6 py-14 md:px-10 lg:px-[72px] lg:py-16">
          <div className="mb-10 text-center">
            <p className="text-[14px] leading-7 font-light font-poppins text-[#817676]">
              El libro plantea una aventura para ir al encuentro de lo que te apasiona y
              recorre estos temas:
            </p>
          </div>

          <div className="mx-auto max-w-[1020px] divide-y divide-[#E9E2DD] border-t border-[#E9E2DD]">
            {temas.map((tema) => (
              <div
                key={tema.title + tema.subtitle}
                className="grid grid-cols-1 gap-4 py-5 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10"
              >
                <div>
                  <p className="text-[13px] leading-6 font-poppins text-[#D1BA64]">
                    {tema.title}
                  </p>
                </div>
                <div>
                  <p className="text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
                    {tema.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVIDAD 1 */}
      <section className="relative overflow-hidden bg-[#F6F3EA]">
        <div className="mx-auto max-w-[1474px] px-6 py-14 md:px-10 lg:px-[72px] lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_80px_minmax(0,1fr)] lg:gap-12">
            <div>
              <h3 className="text-[28px] leading-[1.1] tracking-[0.08em] font-light font-poppins uppercase text-[#D2C26A]">
                Actividad
                <br />
                Visualización
              </h3>
            </div>

            <div className="flex items-start justify-start lg:justify-center">
              <div className="relative h-12 w-12">
                <Image
                  src="/images/libro/icono-mapa.png"
                  alt=""
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            <div className="max-w-[760px]">
              <p className="text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
                En esta etapa del camino te propongo reconstruir y recuperar tus redes
                interiores. Esas personas que te habitan y te constituyen en la persona que
                eres hoy. Para ello, puedes hacer una especie de visualización. Necesitas un
                momento de calma. Silencio y paz.
              </p>

              <AnimatePresence initial={false}>
                {openVisualizacion && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 space-y-4 text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
                      <p>
                        Te propongo, entonces, que hagas una lista de las diez o quince
                        personas que te inspiran.
                      </p>
                      <p>
                        Enlista sus nombres. Pueden ser personas que conozcas o no, pueden ser
                        personas famosas o alguien cercano, alguien que esté vivo o que ya no
                        esté de manera física.
                      </p>
                      <p>
                        ¿Qué es lo que te inspira de esas personas? ¿Qué enseñanzas te han
                        dejado? ¿En qué momentos de tu vida recurres a ellas para tomar de sus
                        energías o aprendizajes?
                      </p>
                      <p>
                        Una vez hayas hecho esta pequeña visualización, te invito a que tomes
                        tu cuaderno y escribas todo lo que aparece.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setOpenVisualizacion((prev) => !prev)}
                className="mt-6 inline-flex h-8 items-center justify-center bg-[#C88C73] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90"
              >
                {openVisualizacion ? "Ver menos" : "Ver más"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVIDAD 2 */}
      <section className="relative overflow-hidden bg-[#F3EFE7]">
        <Squiggle className="pointer-events-none absolute bottom-0 right-0 h-full w-full opacity-15" stroke="#E3DBCF" />

        <div className="mx-auto max-w-[1474px] px-6 py-14 md:px-10 lg:px-[72px] lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <div className="mb-8 flex items-start justify-between gap-6">
                <h3 className="max-w-[420px] text-[28px] leading-[1.18] tracking-[0.04em] font-light font-poppins uppercase text-[#D1BA64]">
                  Actividad sobre tu universo emocional
                </h3>

                <div className="relative h-12 w-12 flex-shrink-0">
                  <Image
                    src="/images/libro/icono-mapa.png"
                    alt=""
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>

              <p className="text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
                Para identificar las emociones y los sentimientos que estamos experimentando te
                propongo una herramienta llamada “Medidor emocional”. Es un diseño elaborado
                por la Universidad de Yale en el marco del proyecto RULER.
              </p>

              <AnimatePresence initial={false}>
                {openEmocional && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-8">
                      <div className="relative aspect-[560/470] w-full max-w-[520px]">
                        <Image
                          src="/images/libro/medidor-emocional.png"
                          alt="Medidor emocional"
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 520px"
                          unoptimized
                        />
                      </div>

                      <a
                        href="#"
                        className="mt-6 inline-flex h-8 items-center justify-center bg-[#C6A62A] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90"
                      >
                        Descargar
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="max-w-[620px]">
              <p className="text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
                La siguiente actividad es enfocarte en alguna situación que percibas que te
                está trabando y observarla como si fueras otra persona. Este ejercicio te
                permite tener otra perspectiva.
              </p>

              <AnimatePresence initial={false}>
                {openEmocional && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-8 space-y-4 text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
                      <p className="font-medium">
                        Luego de identificar la situación:
                      </p>
                      <ul className="list-disc space-y-2 pl-5">
                        <li>
                          Reconoce lo que estás sintiendo, poniéndole nombre.
                        </li>
                        <li>
                          Intenta entender con qué se conecta y las causas subyacentes.
                        </li>
                        <li>
                          Valida esas emociones que aparecen, dales un espacio y acepta que
                          tienen una razón de ser.
                        </li>
                        <li>
                          Busca herramientas para gestionarlas de manera más asertiva.
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setOpenEmocional((prev) => !prev)}
                className="mt-6 inline-flex h-8 items-center justify-center bg-[#C6A62A] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90"
              >
                {openEmocional ? "Ver menos" : "Ver más"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVIDAD 3 / DIPLOMA */}
      <section className="relative overflow-hidden bg-[#EFF0F2]">
        <Squiggle className="pointer-events-none absolute bottom-0 left-0 h-full w-full opacity-10" stroke="#DADDE2" />

        <div className="mx-auto max-w-[1100px] px-6 py-14 text-center md:px-10 lg:py-16">
          <div className="mx-auto mb-6 relative h-12 w-12">
            <Image
              src="/images/libro/icono-mapa.png"
              alt=""
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          <p className="text-[14px] font-swanky text-[#8A8686]">
            Desarrollando nuestra regulación emocional:
          </p>

          <h3 className="mx-auto mt-3 max-w-[820px] text-[34px] leading-[1.2] tracking-[0.08em] font-light font-poppins uppercase text-[#7A7F86] md:text-[48px]">
            Del miedo y la frustración a la resiliencia y la esperanza.
          </h3>

          <p className="mx-auto mt-6 max-w-[720px] text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
            Hemos llegado hasta este punto y nos parece importante hacer un reconocimiento.
            Un reconocimiento íntimo y personal por haber hecho el recorrido propuesto hasta
            acá y por haber atravesado todo este proceso de descubrimiento personal.
          </p>

          <AnimatePresence initial={false}>
            {openDiploma && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="overflow-hidden"
              >
                <div className="mt-10">
                  <div className="relative mx-auto aspect-[930/620] w-full max-w-[760px]">
                    <Image
                      src="/images/libro/diploma.png"
                      alt="Diploma de reconocimiento"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 760px"
                      unoptimized
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex h-8 items-center justify-center bg-[#C6A62A] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90"
            >
              Descargar diploma
            </a>

            <button
              type="button"
              onClick={() => setOpenDiploma((prev) => !prev)}
              className="inline-flex h-8 items-center justify-center bg-[#7D90A0] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90"
            >
              {openDiploma ? "Ver menos" : "Ver más"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
