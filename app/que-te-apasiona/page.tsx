"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";

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
      <Header />

      <div className="pt-14 sm:pt-16">
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
    </div>
  );
}
