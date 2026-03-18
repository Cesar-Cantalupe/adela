"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { AnimatedSection } from "@/components/AnimatedSection";

function Squiggle({ className, stroke = "#E7D6D0" }: { className?: string; stroke?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M-40 90C90 30 160 170 270 120C370 75 420 10 520 55C610 95 670 170 840 120" stroke={stroke} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AudioPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); } else { audioRef.current.play(); }
    setPlaying((prev) => !prev);
  };

  const bars = [
    10,18,28,22,36,26,40,30,20,34,28,42,32,24,38,28,44,34,26,38,
    30,42,32,22,36,28,40,30,20,34,26,38,30,42,28,18,32,24,36,28,12
  ];

  return (
    <div className="mt-6 flex items-center gap-3 bg-[#ECDCDA] rounded-full px-3 py-2.5 max-w-[380px]">
      <audio ref={audioRef} src={src} onEnded={() => setPlaying(false)} />
      <button type="button" onClick={toggle} className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#C88C73] text-white transition hover:opacity-90">
        {playing ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><rect x="1" y="1" width="3.5" height="10" rx="1" /><rect x="7.5" y="1" width="3.5" height="10" rx="1" /></svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M2.5 1.5l8 4.5-8 4.5V1.5z" /></svg>
        )}
      </button>
      <div className="flex items-center justify-between flex-1 h-[36px]">
        {bars.map((h, i) => (
          <div key={i} className="rounded-full bg-white/80 flex-shrink-0" style={{ width: "2px", height: `${h}px`, opacity: playing ? 1 : 0.85 }} />
        ))}
      </div>
    </div>
  );
}

export default function QueTeApasionaPage() {
  const [openVisualizacion, setOpenVisualizacion] = useState(false);
  const [openEmocional, setOpenEmocional] = useState(false);
  const [openDiploma, setOpenDiploma] = useState(false);
  const [contactNombre, setContactNombre] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMensaje, setContactMensaje] = useState("");
  const [contactLoading, setContactLoading] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactError(null);
    setContactSuccess(false);
    setContactLoading(true);
    try {
      const object = {
        access_key: "0f8526b4-fa54-4a6b-a317-4334f3e53a65",
        subject: "Nuevo mensaje desde la web de Adela",
        name: contactNombre.trim(),
        email: contactEmail.trim(),
        message: contactMensaje.trim(),
        botcheck: "",
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(object),
      });
      const data = await res.json();
      if (!res.ok || !data.success) { setContactError(data.message || "Error al enviar. Intentá de nuevo."); return; }
      setContactSuccess(true);
      setContactNombre(""); setContactEmail(""); setContactMensaje("");
    } catch { setContactError("Error de conexión. Intentá de nuevo."); }
    finally { setContactLoading(false); }
  };

  return (
    <div className="min-h-screen bg-white text-[#2D2626]">
      <Header />
      <div className="pt-14 sm:pt-16">

        {/* HERO */}
        <section id="hero-libro" className="relative min-h-screen overflow-hidden bg-[#F3E5E2]">
          <div className="mx-auto grid min-h-screen max-w-[1474px] grid-cols-1 items-center gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-10 md:gap-10 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-[72px] lg:py-12">
            <AnimatedSection className="relative z-10 w-full max-w-[520px] lg:ml-[40px] xl:ml-[80px]" direction="right" delay={0.1}>
              <h1 className="text-[#231F20] font-poppins font-light uppercase tracking-[0.12em] sm:tracking-[0.16em] leading-[0.95] text-[36px] sm:text-[54px] md:text-[64px] lg:text-[76px] xl:text-[88px]">
                ¿QUÉ TE<br />APASIONA?
              </h1>
              <div className="relative mt-6 sm:mt-8 lg:mt-10 max-w-[520px]">
                <p className="text-[#D49A89] font-swanky text-base leading-[1.5] sm:text-[20px] sm:leading-[1.45] md:text-[22px] lg:text-[26px]">
                  Siempre me ha interesado entender el motor<br />
                  que mueve a las personas a hacer las cosas<br />
                  que hacen: algunos llaman a esto &quot;sentido de<br />
                  <span className="block w-full text-left sm:inline-block sm:text-center">vida&quot;, otros &quot;propósito&quot; y otros &quot;pasión&quot;.</span>
                </p>
                <div className="absolute -right-[68px] top-[53%] hidden lg:block">
                  <Image src="/images/libro/flecha1.png" alt="" width={58} height={58} className="object-contain" unoptimized />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="relative flex items-center justify-center lg:justify-start" direction="left" delay={0.15}>
              <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[560px] xl:max-w-[620px]">
                <div className="relative aspect-[700/620] w-full">
                  <Image src="/images/libro/libro-hero.png" alt="Libro ¿Qué te apasiona?" fill className="object-contain" sizes="(max-width: 640px) 320px, (max-width: 768px) 420px, (max-width: 1024px) 100vw, 620px" unoptimized />
                </div>
              </div>
            </AnimatedSection>
          </div>
          <a href="https://www.galernaweb.com/productos/que-te-apasiona/" target="_blank" rel="noopener noreferrer" className="absolute bottom-5 right-5 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#C88C73] text-white text-xs uppercase tracking-[0.08em] font-poppins shadow-[0_10px_25px_rgba(0,0,0,0.14)] transition hover:opacity-90 sm:bottom-6 sm:right-6 sm:h-20 sm:w-20 sm:text-sm md:bottom-8 md:right-8 md:h-[90px] md:w-[90px] md:text-[13px] lg:bottom-10 lg:right-10 lg:h-[110px] lg:w-[110px] lg:text-[15px]">
            Comprar
          </a>
        </section>

        {/* INTRO 2 COLUMNAS */}
        <section className="relative overflow-hidden bg-[#FBFBF8]">
          <div className="pointer-events-none absolute inset-x-0 top-[-34px] h-[210px] opacity-100">
            <svg viewBox="0 0 1440 230" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M10 28C155 145 360 150 520 40C640 -42 760 -8 878 58C1005 130 1110 168 1268 98C1350 62 1405 24 1460 -6" stroke="#F3E5E2" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="pointer-events-none absolute left-[24px] top-[14px] z-0 hidden md:block">
            <Image src="/images/libro/flechaseccion2.png" alt="" width={132} height={92} className="object-contain" unoptimized />
          </div>
          <div className="pointer-events-none absolute left-1/2 top-[10px] z-0 hidden md:block -translate-x-1/2">
            <Image src="/images/libro/garabato1.png" alt="" width={42} height={42} className="object-contain" unoptimized />
          </div>
          <div className="pointer-events-none absolute right-[42px] top-[62px] z-0 hidden md:block">
            <Image src="/images/libro/garabato2.png" alt="" width={48} height={48} className="object-contain" unoptimized />
          </div>
          <div className="relative z-10 mx-auto grid max-w-[1474px] grid-cols-1 gap-10 px-6 py-14 md:px-10 lg:grid-cols-[minmax(0,650px)_minmax(430px,1fr)] lg:items-start lg:px-[28px] lg:py-20 xl:grid-cols-[minmax(0,670px)_minmax(470px,1fr)]">
            <AnimatedSection className="max-w-[650px] lg:pl-[84px] xl:pl-[110px]" direction="right" delay={0.1}>
              <div className="mb-10 flex items-start gap-7">
                <div className="relative h-[112px] w-[112px] flex-shrink-0">
                  <Image src="/images/libro/maquinaconarbol.png" alt="" fill className="object-contain" unoptimized />
                </div>
                <div className="max-w-[390px] pt-2">
                  <p className="text-[14px] leading-[2.1] font-semibold font-poppins text-[#8C97A3]">
                    El tema me interesa tanto, que escribí un libro<br />sobre ello: "¿Qué te apasiona?<br />Al encuentro de tu pasión".
                  </p>
                </div>
              </div>
              <div className="max-w-[660px] space-y-6 text-[13px] leading-[2.05] font-light font-poppins text-[#3B3434]">
                <p>No busco con este libro proponer una visión simplista de la pasión, del tipo "la tienes o no la tienes". Lo que ofrezco es un mapa, un camino, una guía para intentar conectar con ella y recuperarla, una misión conquistadora para poseerla.</p>
                <p>Descubrir lo que nos apasiona puede ser un camino muy directo y llano para algunos, pero sinuoso y con vueltas para otros. Y eso no está mal. De lo que se trata es de poder saborear ambos procesos.</p>
                <p>También con este libro, quiero crear una conexión entre el propósito y el sentido profundo de la vida, el norte en nuestro mapa de la pasión. Lo que nos apasiona es ese motor que nos permite tener la energía para recorrer el camino con ilusión y entusiasmo durante toda la vida, más allá de las dificultades que, sin duda, surgirán.</p>
                <p>Pero, más allá de mis intenciones y deseos, este libro es tu viaje; yo solo estoy para guiarte y compartir algunos aprendizajes con la idea de que te los apropies, los adaptes y los uses de la forma más personal posible.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection className="flex items-center justify-center lg:justify-end lg:pr-[90px] xl:pr-[120px]" direction="left" delay={0.15}>
              <div className="relative aspect-[560/560] w-full max-w-[500px] xl:max-w-[540px]">
                <Image src="/images/libro/libro-flotante.png" alt="Libro ¿Qué te apasiona?" fill className="object-contain drop-shadow-[0_18px_20px_rgba(0,0,0,0.16)]" sizes="(max-width: 1024px) 100vw, 540px" unoptimized />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* MANIFIESTO CENTRAL */}
        <section className="relative overflow-hidden bg-[#F4F3F1]">
          <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-[260px] md:block opacity-45">
            <Image src="/images/libro/formasizquierdas.png" alt="" fill className="object-cover object-left-top" unoptimized />
          </div>
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[340px] md:block opacity-45">
            <Image src="/images/libro/formasderecha.png" alt="" fill className="object-cover object-right-top" unoptimized />
          </div>
          <AnimatedSection className="relative z-10 mx-auto max-w-[980px] px-6 py-20 text-center md:px-10 lg:py-24" delay={0.1}>
            <h2 className="text-[48px] leading-none tracking-[0.18em] font-light font-poppins uppercase text-[#7E7474] sm:text-[41px]">LO QUE TE APASIONA</h2>
            <p className="mt-4 text-[28px] leading-none font-swanky text-[#4A403F]">un viaje al centro de ti mismo</p>
            <div className="mx-auto mt-12 max-w-[550px] space-y-8 text-[13px] leading-[2.15] font-light font-poppins text-[#3B3434]">
              <p>Deseo que este libro te inspire y pueda contribuir a tu transformación, la que necesites para ir descubriendo y poniendo en práctica lo que te apasiona.</p>
              <p>La mayoría de las historias que comparto en el libro son personales o de gente cercana a las que conozco, quiero, admiro y cuyas vidas me resultan, de una forma u otra, inspiradoras. Sus historias son inspiradoras, pero detrás de ellas hay personas comunes, como cada uno de nosotros.</p>
              <p>Elegí hacerlo de esta manera porque, muchas veces, las narrativas de éxito de personas muy destacadas pueden tener una influencia avasallante y hacernos creer que eso le pasa solo a gente "especial". Y a mí me gustaría que sientas, al ir leyendo, que son cosas que nos pasan a todos. Este es el motivo de la elección.</p>
            </div>
          </AnimatedSection>
        </section>

        {/* TEMAS DEL LIBRO */}
        <section className="relative overflow-hidden bg-[#FBFBF8]">
          <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[92%] opacity-60 md:h-[360px] lg:h-[400px]">
            <Image src="/images/libro/forma1.png" alt="" fill className="object-contain object-left-bottom" unoptimized />
          </div>
          <div className="relative z-10 mx-auto max-w-[860px] px-6 py-16 md:px-10 lg:py-20">
            <AnimatedSection className="mb-14 text-center" delay={0.1}>
              <p className="mx-auto max-w-[500px] text-[27px] leading-[1.35] font-swanky text-[#8E99A8]">
                El libro plantea una aventura para ir al<br />encuentro de lo que te apasiona y<br />recorre estos temas:
              </p>
            </AnimatedSection>
            <div className="mx-auto max-w-[720px] border-t border-[#C8CED3]">
              {[
                {
                  color: "text-[#D2BE61]",
                  label: <>Sobre la aventura de <br /> descubrir y hacer lo <br /> que te apasiona</>,
                  items: ["– Cómo usar este libro", "Preparándonos para transitar el camino: Amigarte, Gratitud, Reconocimiento (AGR)", "Breve historia de la pasión"],
                },
                {
                  color: "text-[#D9A8A0]",
                  label: <>Primera parte.<br />El método 3. El<br />camino. Hacia el<br />descubrimiento de lo que<br />te apasiona</>,
                  items: ["Reconectar con nuestra identidad profunda", "Las emociones que alientan y obstruyen el camino hacia el", "descubrimiento y realización de lo que nos apasiona"],
                },
                {
                  color: "text-[#9AA6B5]",
                  label: <>Segunda parte.<br />Conectar con la pasión</>,
                  items: ["Formas de encontrar la pasión", "(Re)encontrarnos con nuestra pasión", "¿Seguir tu pasión o buscar tu pasión?", "Mentores y guías", "El impacto de tu pasión en los demás y en tu comunidad", "¿Qué te apasiona?"],
                },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`grid grid-cols-1 gap-5 py-6 md:grid-cols-[230px_minmax(0,1fr)] md:gap-8 ${i < 2 ? "border-b border-[#C8CED3]" : ""}`}
                >
                  <p className={`text-[12px] leading-[1.15] font-poppins uppercase tracking-[0.04em] ${row.color}`}>{row.label}</p>
                  <div className="space-y-1 text-[12px] leading-[1.9] font-light font-poppins text-[#3B3434]">
                    {row.items.map((item, j) => <p key={j}>{item}</p>)}
                  </div>
                </motion.div>
              ))}
            </div>
            <AnimatedSection className="mt-20 text-center" delay={0.1}>
              <h3 className="text-[26px] leading-none font-swanky text-[#8E99A8]">Ejercicios del libro</h3>
              <p className="mx-auto mt-8 max-w-[500px] text-[13px] leading-[2.05] font-light font-poppins text-[#3B3434]">
                Si lo estás leyendo verás que en algunos momentos hay referencia a ejercicios y actividades que remiten a mi página web. Acá encontrarás esos ejercicios, que los dejo abiertos a todos para que puedan "asomarse" al libro y si les divierte y atrapa, leerlo completo.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ACTIVIDAD 1 */}
        <section className="relative overflow-hidden bg-[#F6F3EA]">
          <AnimatePresence initial={false} mode="wait">
            {openVisualizacion ? (
              <motion.div key="expanded" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45, ease: "easeInOut" }}>
                <div className="mx-auto max-w-[1474px] px-6 py-14 md:px-10 lg:px-[72px] lg:py-16">
                  <div className="mb-10 flex items-center gap-6">
                    <h3 className="text-[28px] leading-[1.1] tracking-[0.08em] font-light font-poppins uppercase text-[#D2C26A]">Visualización</h3>
                    <div className="relative h-12 w-12 flex-shrink-0">
                      <Image src="/images/libro/icono-mapa.png" alt="" fill className="object-contain" unoptimized />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:items-start">
                    <AnimatedSection direction="right" delay={0.05}>
                      <div className="space-y-4 text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
                        <p>En esta etapa del camino te propongo reconstruir y recuperar tus redes interiores. Esas personas que te habitan y te constituyen en la persona que eres hoy.</p>
                        <p>Para ello, puedes hacer una especie de visualización.</p>
                        <p>Necesitas un momento de calma. Silencio y paz.</p>
                      </div>
                      <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
                      <div className="mt-8 space-y-3 text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Una vez hayas hecho esta pequeña visualización, te invito a que tomes tu cuaderno y escribas todo lo que aparece.</li>
                          <li>¿Qué dice lo que escribiste de ti? ¿Qué experiencias y aprendizajes has recuperado? ¿Qué utilidad crees que tendrán en este camino que estamos recorriendo juntos?</li>
                          <li>Cuando hayas terminado con esta actividad, realiza la segunda: reflexionar sobre las personas que te inspiran. Las personas nos pueden inspirar de muchas maneras diferentes. Por sus ejemplos de vida, por sus enseñanzas, por algún asunto puntual que hemos conocido de ellas, por la forma en que hacían algo (por ejemplo, por la forma en que lideraban). En fin, puede haber muchas razones.</li>
                        </ul>
                      </div>
                    </AnimatedSection>
                    <AnimatedSection direction="left" delay={0.1}>
                      <div className="space-y-4 text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
                        <p>Te propongo, entonces, que hagas una lista de las diez o quince personas que te inspiran:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Enlista sus nombres (pueden ser personas que conozcas o no, pueden ser personas famosas o alguien cercano, alguien que esté vivo o que ya no esté de manera física)… Puedes poner cualquier nombre en esta lista.</li>
                          <li>¿Qué es lo que te inspira de esas personas?</li>
                          <li>¿Qué enseñanzas te han dejado?</li>
                          <li>¿En qué momentos de tu vida recurres a ellas para tomar de sus energías o aprendizajes?</li>
                        </ul>
                      </div>
                      <button type="button" onClick={() => setOpenVisualizacion(false)} className="mt-8 inline-flex h-8 items-center justify-center bg-[#C88C73] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90">
                        Ver menos
                      </button>
                    </AnimatedSection>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div key="collapsed" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45, ease: "easeInOut" }} className="mx-auto max-w-[1474px] px-6 py-14 md:px-10 lg:px-[72px] lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_80px_minmax(0,1fr)] lg:gap-12">
                  <div>
                    <h3 className="text-[28px] leading-[1.1] tracking-[0.08em] font-light font-poppins uppercase text-[#D2C26A]">Actividad 1<br />Visualización</h3>
                  </div>
                  <div className="flex items-start justify-start lg:justify-center">
                    <div className="relative h-12 w-12">
                      <Image src="/images/libro/icono-mapa.png" alt="" fill className="object-contain" unoptimized />
                    </div>
                  </div>
                  <div className="max-w-[760px]">
                    <p className="text-[13px] leading-7 font-light font-poppins text-[#3B3434]">En esta etapa del camino te propongo reconstruir y recuperar tus redes interiores. Esas personas que te habitan y te constituyen en la persona que eres hoy. Para ello, puedes hacer una especie de visualización. Necesitas un momento de calma. Silencio y paz.</p>
                    <button type="button" onClick={() => setOpenVisualizacion(true)} className="mt-6 inline-flex h-8 items-center justify-center bg-[#C88C73] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90">Ver más</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ACTIVIDAD 2 */}
        <section className="relative overflow-hidden bg-[#F3EFE7]">
          <AnimatePresence initial={false} mode="wait">
            {openEmocional ? (
              <motion.div key="expanded" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45, ease: "easeInOut" }}>
                <Squiggle className="pointer-events-none absolute bottom-0 right-0 h-full w-full opacity-15" stroke="#E3DBCF" />
                <div className="mx-auto max-w-[1474px] px-6 py-14 md:px-10 lg:px-[72px] lg:py-16">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:items-start">
                    <AnimatedSection direction="right" delay={0.05}>
                      <div className="mb-8 flex items-start justify-between gap-6">
                        <h3 className="text-[28px] leading-[1.1] tracking-[0.08em] font-light font-poppins uppercase text-[#D1BA64]">ACTIVIDAD SOBRE<br />TU UNIVERSO<br />EMOCIONAL</h3>
                        <div className="relative h-12 w-12 flex-shrink-0">
                          <Image src="/images/libro/icono-mapa.png" alt="" fill className="object-contain" unoptimized />
                        </div>
                      </div>
                      <p className="text-[13px] leading-7 font-light font-poppins text-[#3B3434]">Para identificar las emociones y los sentimientos que estamos experimentando te propongo una herramienta llamada "Medidor emocional". Es un diseño elaborado por la Universidad de Yale en el marco del proyecto RULER. El mismo mide los fenómenos emocionales en dos ejes: uno relativo a la energía, alta o baja; y otro relativo a la sensación, negativa o de displacer y positiva o de bienestar.</p>
                      <div className="mt-8">
                        <div className="relative aspect-[560/470] w-full max-w-[520px]">
                          <Image src="/images/libro/medidor-emocional.png" alt="Medidor emocional" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 520px" unoptimized />
                        </div>
                        <a href="/images/libro/medidor-emocional.png" download="medidor-emocional.png" className="mt-6 inline-flex h-8 items-center justify-center bg-[#C6A62A] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90">Descargar</a>
                      </div>
                    </AnimatedSection>
                    <AnimatedSection direction="left" delay={0.1}>
                      <div className="max-w-[620px] lg:pt-[calc(28px*1.1*3+2.5rem)]">
                        <p className="text-[13px] leading-7 font-light font-poppins text-[#3B3434]">La siguiente actividad es enfocarte en alguna situación que percibas que te está trabando y observarla como si fueras otra persona. Este ejercicio te permite tener otra perspectiva (obsérvala como si estuvieras escuchando a una amiga o amigo e intentando ayudarla/o con esa situación).</p>
                        <div className="mt-8 space-y-4 text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
                          <p className="font-medium">Luego de identificar la situación:</p>
                          <ul className="list-disc space-y-3 pl-5">
                            <li>Reconoce lo que estás sintiendo, poniéndole nombre (podemos sentir muchas cosas, porque el universo emocional es complejo, así que indaga más allá de lo primero que aparezca).</li>
                            <li>Intenta entender con qué se conecta, y las causas subyacentes y las consecuencias de esas emociones que estás sintiendo.</li>
                            <li>Valida esas emociones que aparecen, dales un espacio y acepta que tienen una razón de ser.</li>
                            <li>Y luego de todo eso, busca herramientas para gestionarlas de manera más asertiva: hablándolo con alguien, haciendo ejercicios de respiración y de conexión corporal, meditando, haciendo ejercicio, dibujando o escribiendo lo que aparece. Cosas que te den bienestar y placer y te conecten con asuntos positivos de la misma situación.</li>
                          </ul>
                        </div>
                        <button type="button" onClick={() => setOpenEmocional(false)} className="mt-6 inline-flex h-8 items-center justify-center bg-[#C6A62A] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90">Ver menos</button>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div key="collapsed" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45, ease: "easeInOut" }} className="mx-auto max-w-[1474px] px-6 py-14 md:px-10 lg:px-[72px] lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_80px_minmax(0,1fr)] lg:gap-12">
                  <div>
                    <h3 className="text-[28px] leading-[1.1] tracking-[0.08em] font-light font-poppins uppercase text-[#D1BA64]">ACTIVIDAD SOBRE<br />TU UNIVERSO<br />EMOCIONAL</h3>
                  </div>
                  <div className="flex items-start justify-start lg:justify-center">
                    <div className="relative h-12 w-12">
                      <Image src="/images/libro/icono-mapa.png" alt="" fill className="object-contain" unoptimized />
                    </div>
                  </div>
                  <div className="max-w-[760px]">
                    <p className="text-[13px] leading-7 font-light font-poppins text-[#3B3434]">Para identificar las emociones y los sentimientos que estamos experimentando te propongo una herramienta llamada "Medidor emocional". Además, la siguiente actividad te invita a enfocarte en una situación que percibas como trabante y observarla como si fueras otra persona.</p>
                    <button type="button" onClick={() => setOpenEmocional(true)} className="mt-6 inline-flex h-8 items-center justify-center bg-[#C6A62A] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90">Ver más</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ACTIVIDAD 3 / DIPLOMA */}
        <section className="relative overflow-hidden bg-[#EFF0F2]">
          <div className="mx-auto max-w-[1474px] px-6 py-14 md:px-10 lg:px-[72px] lg:py-16">
            <AnimatePresence initial={false} mode="wait">
              {openDiploma ? (
                <motion.div key="expanded" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45, ease: "easeInOut" }} className="flex flex-col items-center text-center">
                  <AnimatedSection delay={0.05}>
                    <div className="relative h-12 w-12 mb-8">
                      <Image src="/images/libro/icono-mapa.png" alt="" fill className="object-contain" unoptimized />
                    </div>
                    <p className="-rotate-[2deg] text-[24px] leading-[1.15] font-swanky text-[#8A99A8]">Desarrollando nuestra<br />regulación emocional:</p>
                    <h3 className="mt-6 text-[24px] leading-[1.18] tracking-[0.03em] font-light font-poppins uppercase text-[#8A99A8]">
                      <span className="block">Del miedo y la frustración</span>
                      <span className="block">a la resiliencia y la esperanza</span>
                    </h3>
                    <p className="mt-8 max-w-[600px] text-[13px] leading-7 font-light font-poppins text-[#3B3434]">Hemos llegado hasta este punto y nos parece importante hacer un reconocimiento. Un reconocimiento íntimo y personal por haber hecho el recorrido propuesto hasta acá y por haber atravesado todo este proceso de descubrimiento personal.</p>
                    <div className="mt-10 relative aspect-[930/620] w-full max-w-[760px]">
                      <Image src="/images/libro/diploma.png" alt="Diploma de reconocimiento" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 760px" unoptimized />
                    </div>
                    <a href="/images/libro/diploma.pdf" download="diploma-de-reconocimiento.pdf" className="mt-6 inline-flex h-8 items-center justify-center bg-[#C6A62A] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90">Descargar diploma</a>
                    <button type="button" onClick={() => setOpenDiploma(false)} className="mt-4 inline-flex h-8 items-center justify-center bg-[#8A99A8] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90">Ver menos</button>
                  </AnimatedSection>
                </motion.div>
              ) : (
                <motion.div key="collapsed" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45, ease: "easeInOut" }} className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_80px_minmax(0,1fr)] lg:gap-12">
                  <div>
                    <p className="-rotate-[2deg] origin-left text-[24px] leading-[1.15] font-swanky text-[#8A99A8]">Desarrollando nuestra<br />regulación emocional:</p>
                    <h3 className="mt-8 text-[24px] leading-[1.18] tracking-[0.03em] font-light font-poppins uppercase text-[#8A99A8]">
                      <span className="block whitespace-nowrap">Del miedo y la frustración</span>
                      <span className="block whitespace-nowrap">a la resiliencia y la esperanza</span>
                    </h3>
                  </div>
                  <div className="flex items-start justify-start lg:justify-center">
                    <div className="relative h-12 w-12">
                      <Image src="/images/libro/icono-mapa.png" alt="" fill className="object-contain" unoptimized />
                    </div>
                  </div>
                  <div className="max-w-[760px]">
                    <p className="text-[13px] leading-7 font-light font-poppins text-[#3B3434]">Hemos llegado hasta este punto y nos parece importante hacer un reconocimiento. Un reconocimiento íntimo y personal por haber hecho el recorrido propuesto hasta acá y por haber atravesado todo este proceso de descubrimiento personal.</p>
                    <button type="button" onClick={() => setOpenDiploma(true)} className="mt-6 inline-flex h-8 items-center justify-center bg-[#8A99A8] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90">Ver más</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Contacto - mismo contenido que home */}
        <section id="contacto" className="relative w-full bg-white overflow-hidden">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0">
              <AnimatedSection
                className="relative w-full h-full min-h-[240px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[500px] xl:min-h-[530px] 2xl:min-h-[850px]"
                direction="right"
                delay={0.05}
              >
                <Image
                  src="/images/imagen-contacto2.jpg"
                  alt="Contacto"
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                />
              </AnimatedSection>

              <AnimatedSection
                className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-9 2xl:px-16 py-6 sm:py-8 lg:py-8 xl:py-9 2xl:py-16"
                direction="left"
                delay={0.15}
              >
                <div className="flex items-start gap-2 sm:gap-3 xl:gap-3.5 mb-4 sm:mb-5 xl:mb-6 2xl:mb-8">
                  <h2 className="text-[#C58770] text-2xl sm:text-[26px] md:text-[28px] lg:text-[30px] 2xl:text-3xl font-normal font-swanky leading-none tracking-wider">
                    ¡Enviame un mensaje!
                  </h2>
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-[88px] xl:h-[88px] 2xl:w-28 2xl:h-28 flex-shrink-0">
                    <Image src="/images/19 2.png" alt="" fill className="object-contain" />
                  </div>
                </div>

                <form
                  className="space-y-3 w-full max-w-full sm:max-w-[360px] md:max-w-[400px] xl:max-w-[408px] 2xl:max-w-[462px]"
                  onSubmit={handleContactSubmit}
                >
                  <div>
                    <label htmlFor="nombre" className="block text-black/70 text-sm xl:text-[15px] 2xl:text-base font-light font-poppins leading-6 xl:leading-7">Nombre y Apellido</label>
                    <input id="nombre" type="text" name="nombre" placeholder=" " value={contactNombre} onChange={(e) => setContactNombre(e.target.value)} required disabled={contactLoading} className="w-full mt-1 py-2 bg-transparent border-0 border-b border-[#C58770]/50 focus:border-[#C58770] focus:outline-none text-sm xl:text-[15px] 2xl:text-base text-black font-light font-poppins leading-6 xl:leading-7 placeholder:text-black/40 disabled:opacity-60" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-black/70 text-sm xl:text-[15px] 2xl:text-base font-light font-poppins leading-6 xl:leading-7">E-mail</label>
                    <input id="email" type="email" name="email" placeholder=" " value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required disabled={contactLoading} className="w-full mt-1 py-2 bg-transparent border-0 border-b border-[#C58770]/50 focus:border-[#C58770] focus:outline-none text-sm xl:text-[15px] 2xl:text-base text-black font-light font-poppins leading-6 xl:leading-7 placeholder:text-black/40 disabled:opacity-60" />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-black/70 text-sm xl:text-[15px] 2xl:text-base font-light font-poppins leading-6 xl:leading-7">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" placeholder=" " rows={2} value={contactMensaje} onChange={(e) => setContactMensaje(e.target.value)} required disabled={contactLoading} className="w-full mt-1 py-2 bg-transparent border-0 border-b border-[#C58770]/50 focus:border-[#C58770] focus:outline-none text-sm xl:text-[15px] 2xl:text-base text-black font-light font-poppins leading-6 xl:leading-7 placeholder:text-black/40 resize-y min-h-[70px] xl:min-h-[90px] 2xl:min-h-[100px] disabled:opacity-60" />
                  </div>
                  {contactError && <p className="text-red-600 text-sm font-poppins">{contactError}</p>}
                  {contactSuccess && <p className="text-green-700 text-sm font-poppins">Mensaje enviado correctamente.</p>}
                  <button type="submit" disabled={contactLoading} className="mt-4 xl:mt-5 2xl:mt-6 w-24 h-8 bg-[#C58770] flex items-center justify-center text-white text-sm font-medium font-poppins uppercase leading-7 hover:bg-[#b07860] transition disabled:opacity-60 disabled:cursor-not-allowed">
                    {contactLoading ? "..." : "enviar"}
                  </button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Footer - mismo contenido que home */}
        <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="w-full min-h-24 sm:h-28 bg-[#C58770] flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 py-5 sm:py-6 px-4 sm:px-6">
          <a href="https://www.linkedin.com/in/adelacavia" target="_blank" rel="noopener noreferrer" className="text-orange-100 text-sm sm:text-base md:text-lg font-poppins hover:text-white transition">LinkedIn</a>
          <a href="https://instagram.com/adela.cavia" target="_blank" rel="noopener noreferrer" className="text-orange-100 text-sm sm:text-base md:text-lg font-poppins hover:text-white transition">@adela.cavia</a>
          <a href="https://x.com/Adel1ta" target="_blank" rel="noopener noreferrer" className="text-orange-100 text-sm sm:text-base md:text-lg font-poppins hover:text-white transition">@Adel1ta</a>
          <a href="https://www.facebook.com/adela.cavia/" target="_blank" rel="noopener noreferrer" className="text-orange-100 text-sm sm:text-base md:text-lg font-poppins hover:text-white transition">Facebook</a>
          <a href="mailto:adelacavia@gmail.com" className="text-orange-100 text-sm sm:text-base md:text-lg font-poppins hover:text-white transition break-all">adelacavia@gmail.com</a>
        </motion.footer>

      </div>
    </div>
  );
}
