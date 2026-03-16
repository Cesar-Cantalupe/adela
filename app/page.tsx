"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header, Hero } from "@/components/Header";
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [sobreMiExpanded, setSobreMiExpanded] = useState(false);
  const [expandedTrabajando, setExpandedTrabajando] = useState<Record<number, boolean>>({ 0: false, 1: false, 2: false });
  const [aseExpanded, setAseExpanded] = useState(false);
  const [lideresExpanded, setLideresExpanded] = useState(false);
  const [weHumanLabExpanded, setWeHumanLabExpanded] = useState(false);
  const [aseVideoPlaying, setAseVideoPlaying] = useState(false);
  const aseVideoRef = useRef<HTMLVideoElement>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const gallerySliderRef = useRef<HTMLDivElement>(null);

const TOTAL_GALLERIES = 3;

const scrollToGallery = (index: number) => {
  const el = gallerySliderRef.current;
  if (!el) return;

  const slides = el.querySelectorAll("[data-gallery-slide]");
  const target = slides[index] as HTMLElement | undefined;
  if (!target) return;

  el.scrollTo({
    left: target.offsetLeft,
    behavior: "smooth",
  });

  setGalleryIndex(index);
};

  const partnerLogos = [
  // Logos originales (logosnegros)
  { src: "/images/logosnegros/Axion.png", alt: "Axion" },
  { src: "/images/logosnegros/biogenesis_bago_recolor.png", alt: "Bago" },
  { src: "/images/logosnegros/elea.png", alt: "Elea" },
  { src: "/images/logosnegros/cac_recolor.png", alt: "Cac" },
  { src: "/images/logosnegros/endeavor.png", alt: "Endeavor" },
  { src: "/images/logosnegros/icba.png", alt: "Icba" },
  { src: "/images/logosnegros/ksfilms_recolor.png", alt: "Ksfilms" },
  { src: "/images/logosnegros/lanacion.png", alt: "La Nación" },
  { src: "/images/logosnegros/mundo sano.png", alt: "Mundo Sano" },
  { src: "/images/logosnegros/nextel_recolor.png", alt: "Nextel" },
  { src: "/images/logosnegros/quilmes_recolor.png", alt: "Quilmes" },
  { src: "/images/logosnegros/san_miguel_recolor.png", alt: "San Miguel" },
  { src: "/images/logosnegros/sanofi_recolor.png", alt: "Sanofi" },
  { src: "/images/logosnegros/unilever_recolor.png", alt: "Unilever" },
  { src: "/images/logosnegros/ceva_recolor.png", alt: "ceva" },
  { src: "/images/logosnegros/insud.png", alt: "insud" },
  // Nuevos logos (images/logos)
  { src: "/images/logos/ba.png", alt: "Aerolíneas Argentinas" },
  { src: "/images/logos/arcerol.png", alt: "Arcerol" },
  { src: "/images/logos/chevron.png", alt: "Chevron" },
  { src: "/images/logos/comafi.png", alt: "Comafi" },
  { src: "/images/logos/dow.png", alt: "Dow" },
  { src: "/images/logos/ford.png", alt: "Ford" },
  { src: "/images/logos/lenovo.png", alt: "Lenovo" },
  { src: "/images/logos/mercadolibre.png", alt: "Mercado Libre" },
  { src: "/images/logos/personal.png", alt: "Personal" },
  { src: "/images/logos/siemens.png", alt: "Siemens" },
  { src: "/images/logos/ypf.png", alt: "YPF" },
];

  
  // Contact form state
  const [contactNombre, setContactNombre] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMensaje, setContactMensaje] = useState("");
  const [contactLoading, setContactLoading] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);

/*  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactError(null);
    setContactSuccess(false);
    setContactLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: contactNombre.trim(),
          email: contactEmail.trim(),
          mensaje: contactMensaje.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setContactError(data.error ?? "Error al enviar. Intentá de nuevo.");
        return;
      }
      setContactSuccess(true);
      setContactNombre("");
      setContactEmail("");
      setContactMensaje("");
    } catch {
      setContactError("Error de conexión. Intentá de nuevo.");
    } finally {
      setContactLoading(false);
    }
  }; */

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
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(object),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      setContactError(data.message || "Error al enviar. Intentá de nuevo.");
      return;
    }

    setContactSuccess(true);
    setContactNombre("");
    setContactEmail("");
    setContactMensaje("");
  } catch {
    setContactError("Error de conexión. Intentá de nuevo.");
  } finally {
    setContactLoading(false);
  }
};

  useEffect(() => {
    if (aseVideoPlaying && aseVideoRef.current) {
      aseVideoRef.current.play();
    }
  }, [aseVideoPlaying]);

// Auto-avance de galería cada 4 segundos, bloque por bloque
useEffect(() => {
  const interval = setInterval(() => {
    setGalleryIndex((prev) => {
      const next = (prev + 1) % TOTAL_GALLERIES;
      scrollToGallery(next);
      return next;
    });
  }, 4000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="w-full min-h-screen relative bg-white overflow-hidden">
      <Header />
      <Hero />

      {/* Sobre mí - colapsado: texto + imagen en 2 columnas; expandido: título + 2 columnas de texto + Leer menos + imagen abajo */}
      <section id="sobre-mi" className="relative w-full bg-white overflow-hidden">
        <div className="relative max-w-[1474px] mx-auto">
          <div className="absolute inset-0 opacity-30 bg-white -z-10 pointer-events-none" />
          <div className="absolute inset-0 opacity-30 bg-orange-300/25 -z-10 pointer-events-none" />

          {!sobreMiExpanded ? (
            /* Vista colapsada: texto izquierda, imagen derecha */
            <div className="grid grid-cols-1 md:grid-cols-2 md:items-stretch gap-8 md:gap-12 px-6 py-12 md:px-[130px] md:py-16">
              <AnimatedSection className="flex flex-col min-h-0" direction="right" delay={0.1}>
                <h2 className="text-[#C58770] text-5xl md:text-6xl font-light font-poppins uppercase tracking-[2.87px] leading-tight mb-4 md:mb-6">
                  Sobre mí
                </h2>
                <p className="text-black text-sm font-light font-poppins leading-7 max-w-[475px] flex-1">
                  Trabajé  por más de 25 años en el mundo corporativo liderando equipos y desafíos muy diversos. Un día sentí que quería probar cosas nuevas e inicié este camino de transformación que me hace muy feliz. Me especialicé en el entrenamiento de competencias socioemocionales (human skills), en neurociencias aplicadas a la educación de adultos y en el desarrollo de herramientas para promover la capacidad de resiliencia. Desde entonces facilito procesos de cambio de personas y equipos con la idea de contribuir a generar nuevos liderazgos, más humanos y sustentables.
                </p>
                <button
                  type="button"
                  onClick={() => setSobreMiExpanded(true)}
                  className="inline-flex items-center justify-center w-28 h-8 mt-6 md:mt-8 bg-[#E6CC76] text-neutral-800 text-sm font-medium font-poppins leading-7 hover:bg-[#d4b96a] transition flex-shrink-0"
                >
                  Leer más
                </button>
              </AnimatedSection>
              <AnimatedSection className="relative w-full min-h-0 aspect-[631/423]" direction="left" delay={0.15}>
                <Image
                  src="/images/sobre-mi/Adela Saenz Cavia62Gaudi 1.png"
                  alt="Adela - Sobre mí"
                  fill
                  className="object-cover"
                />
              </AnimatedSection>
            </div>
          ) : (
            /* Vista expandida: título, 2 columnas de texto, Leer menos, imagen abajo */
            <div className="px-6 py-12 md:px-[181px] md:py-16 flex flex-col">
              <h2 className="text-[#C58770] text-5xl md:text-6xl font-light font-poppins uppercase tracking-[2.87px] leading-tight mb-4 md:mb-6">
                Sobre mí
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-10">
                <div className="text-black text-sm font-light font-poppins leading-7 max-w-[520px]">
                  <p className="mb-4">
                    Trabajé por más de 25 años en el mundo corporativo liderando equipos y desafíos muy diversos. Un día sentí que quería probar cosas nuevas e inicié este camino de transformación que me hace muy feliz. Me especialicé en el entrenamiento de competencias socioemocionales (human skills), en neurociencias aplicadas a la educación de adultos y en el desarrollo de herramientas para promover la capacidad de resiliencia. Desde entonces facilito procesos de cambio de personas y equipos con la idea de contribuir a generar nuevos liderazgos, más humanos y sustentables.
                  </p>
                  <p className="mb-4">
                    Me encanta aprender cosas nuevas. Mi carrera de grado es la Ciencia Política, pero desde entonces he hecho 2 maestrías (una en Comunicación y la otra en Inteligencia emocional y psicología positiva), muchos postgrados (los últimos en Educación emocional, Neuroeducación y Psicología organizacional). También soy Coach certificada y Counselor Laboral. Y estoy a punto de defender mi tesis para acceder al grado de Doctora en Psicología, con foco en psicología social.
                  </p>
                  <p>
                    Creo que, en un mundo en cambio constante (ya lo dijo el filósofo), la flexibilidad cognitiva y emocional es clave y que todos debemos entrenar al máximo aquello que nos hace humanos (algo que estudio y desarrollo en el proyecto: We human) y que defino como &quot;human skills&quot; y que te cuento más abajo en detalle.
                  </p>
                </div>
                <div className="text-black text-sm font-light font-poppins leading-7 max-w-[520px]">
                  <p className="mb-4">
                    Me moviliza mucho la desigualdad social, por lo que mi propósito personal es generar puentes entre personas diversas con el objetivo de compartir y multiplicar aprendizajes con impacto social. Para responder a esta inquietud tan grande, diseño y desarrollo programas de entrenamiento para líderes sociales de barrios populares, cuyo impacto es multiplicador y me asombra muchísimo.
                  </p>
                  <p className="mb-4">
                    Además, y con la idea de socializar estos aprendizajes y conocimientos, soy divulgadora en diferentes medios de comunicación y en redes sociales y he producido trabajos académicos vinculados al impacto positivo que tiene el entrenamiento emocional y para la resiliencia en diferentes ámbitos.
                  </p>
                  <p>
                    Represento en Buenos Aires a la{" "}
                    <a href="https://rieeb.com" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-80">RIEEB – Red Internacional de Educación emocional y bienestar</a> de la que también soy formadora y colaboro con organizaciones sociales cuyas causas comparto: soy mentora de{" "}
                    <a href="https://vocesvitales.org.ar/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-80">Voces Vitales</a>, la ONG global dedicada al empoderamiento de las mujeres, y colaboro activamente con{" "}
                    <a href="https://portalril.org/ar/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-80">RIL – Red de Innovación Local</a>, con{" "}
                    <a href="https://potenciaargentina.org/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-80">Potencia+</a> y con la fundación{" "}
                    <a href="https://www.ensenaporargentina.org/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-80">Enseña por Argentina</a>.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSobreMiExpanded(false)}
                className="inline-flex items-center justify-center w-28 h-8 mb-8 md:mb-10 bg-orange-300 text-neutral-800 text-sm font-medium font-poppins leading-7 hover:bg-orange-400 transition flex-shrink-0"
              >
                Leer menos
              </button>
              <div className="relative w-full aspect-[1474/586] max-w-full">
                <Image
                  src="/images/sobre-mi/Adela Saenz Cavia62Gaudi 1.png"
                  alt="Adela - Sobre mí"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ¿En qué estoy trabajando? */}
      <section id="trabajando" className="relative py-12 xl:py-16 2xl:py-24 bg-white">
        <div className="max-w-[1474px] mx-auto px-6">
          {/* Imagen decorativa + título centrados */}
          <AnimatedSection className="flex flex-col items-center text-center mb-12" delay={0.1}>
            <Image
              src="/images/trabajando/07 2 (1).png"
              alt=""
              width={131}
              height={131}
              className="object-contain mb-4"
            />
            <h2 className="text-stone-900 text-4xl font-light font-poppins uppercase tracking-widest">
              ¿en qué estoy trabajando?
            </h2>
          </AnimatedSection>

          {/* Contenedor más angosto para cada fila */}
          <div className="max-w-[900px] mx-auto space-y-8">
            <AnimatedStagger staggerChildren={0.15} className="space-y-8">
              <AnimatedItem>
                <div className="flex flex-col md:flex-row gap-6 items-start border-b border-[#A9B8C3] pb-8">
                  <div className="relative flex-shrink-0">
                    <Image src="/images/trabajando/07 1.png" alt="Experiencias de aprendizaje" width={95} height={95} className="object-contain" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-3">
                    <h3 className="text-stone-900 text-base font-light font-poppins uppercase tracking-wide mb-2">
                      Experiencias de aprendizaje – Human skills active learning
                    </h3>
                    <p className="text-black text-xs font-light font-poppins leading-6">
                      Genero experiencias de aprendizaje activo a medida para equipos y organizaciones, buscando contribuir a nuevos estilos de trabajo y liderazgo, y enfocándome en el desarrollo de las llamadas Human Skills o Brain Capital Skills (algunas de las competencias que organismos como el World Economic Forum han definido como las habilidades del futuro — en realidad, ya del presente).
                    </p>
                    <AnimatePresence>
                      {expandedTrabajando[0] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden space-y-3"
                        >
                          <p className="text-black text-xs font-light font-poppins leading-6">
                            En un formato ágil y muy activo, enseñamos y ponemos en práctica herramientas para entrenar nuestra capacidad de regulación y co-regulación emocional, pensamiento crítico y funciones ejecutivas, diversidad y trabajo colaborativo, resiliencia individual y grupal, optimismo y emociones de bienestar, empatía, compasión y apreciación positiva, narrativa personal y propósito y liderazgo consciente, entre otras.
                          </p>
                          <p className="text-black text-xs font-light font-poppins leading-6 font-medium">
                            Algunas de las experiencias de aprendizaje que más instrumentamos:
                          </p>
                          <ul className="text-black text-xs font-light font-poppins leading-6 list-disc pl-5 space-y-1">
                            <li>Regulación y co-regulación emocional (gobernar nuestras emociones para sacar su máximo potencial y lograr mejores climas de trabajo)</li>
                            <li>Capturar oportunidades en contextos desafiantes (la conexión entre la resiliencia individual y de equipos, el liderazgo y el trabajo en la diversidad)</li>
                            <li>Future making (empoderar a las personas en el marco de las organizaciones para el desarrollo de sus propias carreras)</li>
                            <li>Inteligencia colectiva y contagio emocional (para desarrollar el trabajo colaborativo desde la inteligencia emocional en el marco de equipos diversos y multigeneracionales)</li>
                            <li>Liderazgo consciente: liderarme a mí mismo para poder liderar a otros (vinculado al propósito y generar estilos de liderazgo más humanos y colaborativos)</li>
                            <li>Empatía, compasión y apreciación positiva (generando climas laborales positivos y mayor motivación en los equipos)</li>
                            <li>Narrativa personal y grupal, liderazgo y propósito (somos lo que nos contamos. El poder de la narrativa para la construcción y el cambio personal y grupal)</li>
                            <li>Desarrollo de fortalezas personales (no solo tenemos que trabajar lo que no nos sale bien, sino llevar al máximo potencial nuestras fortalezas)</li>
                            <li>Neurociencia del Bienestar: aplicado a personas y equipos (herramientas concretas de la ciencia para aprender a generarnos emociones de bienestar)</li>
                            <li>Neurociencia del cambio (todos podemos ser, si nos lo proponemos, escultores de nuestro propio cerebro y de nuestra emocionalidad)</li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <button
                    type="button"
                    onClick={() => setExpandedTrabajando((prev) => ({ ...prev, 0: !prev[0] }))}
                    className="flex-shrink-0 p-1 text-black hover:opacity-70 transition-opacity"
                    aria-expanded={expandedTrabajando[0]}
                    aria-label={expandedTrabajando[0] ? "Cerrar sección" : "Desplegar más contenido"}
                  >
                    <Image
                      src={expandedTrabajando[0] ? "/images/chevron/experiencias-abierto.svg" : "/images/chevron/experiencias-cerrado.svg"}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </button>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <div className="flex flex-col md:flex-row gap-6 items-start border-b border-[#A9B8C3] pb-8">
                  <div className="relative flex-shrink-0">
                    <Image src="/images/trabajando/11 1.png" alt="Procesos de cambio cultural" width={98} height={98} className="object-contain" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-3">
                    <h3 className="text-stone-900 text-base font-light font-poppins uppercase tracking-wide mb-2">
                      Procesos de cambio cultural y desarrollo de culturas de bienestar
                    </h3>
                    <p className="text-black text-xs font-light font-poppins leading-6">
                      Las culturas organizacionales pueden ser aceleradores del cambio o el obstáculo intangible más poderoso. <Link href="#red-communia" className="text-yellow-600 underline hover:opacity-90">En equipo con otros profesionales</Link>, contribuimos a transformar culturas, desarrollando un recorrido que hemos probado con éxito. Especializados en el bienestar humano, gran parte de nuestro foco es contribuir a que las organizaciones desarrollen culturas de bienestar sustentable.
                    </p>
                    <AnimatePresence>
                      {expandedTrabajando[1] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden space-y-3"
                        >
                          <p className="text-black text-xs font-light font-poppins leading-6">
                            Hacemos un diagnóstico de la cultura actual, identificando problemas y desafíos clave de líderes, personas y procesos, y en equipo con la organización y con los responsables del área de Personas, desarrollamos e instrumentamos programas de aceleración dinámicos y flexibles para generar culturas en las que el bienestar sea parte de la ecuación. Empezando siempre por los líderes, los verdaderos promotores del cambio.
                          </p>
                          <ul className="text-black text-xs font-light font-poppins leading-6 list-disc pl-5 space-y-1">
                            <li>Identificamos y entrenamos a &quot;hackers&quot; internos que, por su rol o estilo, contribuyen a potenciar la transformación desde adentro.</li>
                            <li>Acompañamos todo el proceso con experiencias de aprendizaje, coaching y mentoría con las personas clave.</li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <button
                    type="button"
                    onClick={() => setExpandedTrabajando((prev) => ({ ...prev, 1: !prev[1] }))}
                    className="flex-shrink-0 p-1 text-black hover:opacity-70 transition-opacity"
                    aria-expanded={expandedTrabajando[1]}
                    aria-label={expandedTrabajando[1] ? "Cerrar sección" : "Desplegar más contenido"}
                  >
                    <Image
                      src={expandedTrabajando[1] ? "/images/chevron/proceso-abierto.svg" : "/images/chevron/proceso-cerrado.svg"}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </button>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="relative flex-shrink-0">
                    <Image src="/images/trabajando/15 1.png" alt="Coaching y Mentoreo" width={85} height={85} className="object-contain" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-3">
                    <h3 className="text-stone-900 text-base font-light font-poppins uppercase tracking-wide mb-2">
                      Coaching y Mentoreo
                    </h3>
                    <p className="text-black text-xs font-light font-poppins leading-6 text-justify">
                      Basada en una formación sólida, pero con una gran experiencia personal en liderar proyectos y personas en organizaciones diversas, acompaño procesos de desarrollo para personas en situación de liderazgo a través de la mentoría o el coaching.
                    </p>
                    <AnimatePresence>
                      {expandedTrabajando[2] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden space-y-3"
                        >
                          <p className="text-black text-xs font-light font-poppins leading-6 text-justify">
                            El entrenamiento o coaching personal contribuye a que los ejecutivos y equipos de trabajo, en el marco de las organizaciones, refuercen su desarrollo profesional y personal, generando cambios de perspectiva y desplegando su potencial.
                          </p>
                          <p className="text-black text-xs font-light font-poppins leading-6 text-justify">
                            Es un proceso que facilita el aprendizaje y promueve cambios cognitivos, emocionales y conductuales que expanden la capacidad de acción en función de metas propuestas.
                          </p>
                          <p className="text-black text-xs font-light font-poppins leading-6 text-justify">
                            Se utiliza para acompañar retos profesionales complejos y cambios estratégicos y es útil para identificar y disminuir el GAP entre la situación actual versus la ideal definida por la persona o por la empresa para su rol, a través del desarrollo de un plan con acciones concretas de trabajo.
                          </p>
                          <p className="text-black text-xs font-light font-poppins leading-6 text-justify">
                            Cada proceso se diseña en función de las necesidades individuales o grupales y de los objetivos que se consensúan.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <button
                    type="button"
                    onClick={() => setExpandedTrabajando((prev) => ({ ...prev, 2: !prev[2] }))}
                    className="flex-shrink-0 p-1 text-black hover:opacity-70 transition-opacity"
                    aria-expanded={expandedTrabajando[2]}
                    aria-label={expandedTrabajando[2] ? "Cerrar sección" : "Desplegar más contenido"}
                  >
                    <Image
                      src={expandedTrabajando[2] ? "/images/chevron/coaching-abierto.svg" : "/images/chevron/coaching-cerrado.svg"}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </button>
                </div>
              </AnimatedItem>
            </AnimatedStagger>
          </div>
        </div>
      </section>

      {/* We Human Lab */}
      <section id="we-human-lab" className="relative overflow-hidden bg-[#E6CC76]/25">
        <AnimatedSection className="relative max-w-[1474px] mx-auto px-6 py-10 xl:py-14 2xl:py-24 text-center" delay={0.1}>
          <div className="w-20 h-20 sm:w-24 sm:h-24 relative mx-auto mb-6 md:mb-8">
            <Image
              src="/images/We Human 1.png"
              alt="We Human Lab"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-stone-700 text-xl sm:text-2xl font-swanky font-normal leading-tight mb-1 md:mb-2">
            We Human LAB – mi proyecto personal
          </p>
          <h2 className="text-yellow-600 text-3xl sm:text-4xl font-light font-poppins uppercase tracking-widest leading-tight mb-8 md:mb-12">
            WE HUMAN LAB
          </h2>
          <AnimatePresence mode="wait">
            {!weHumanLabExpanded ? (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mb-8 md:mb-10"
              >
                <p className="text-black text-sm font-light font-poppins leading-7 max-w-[504px] mx-auto text-center">
                  La IA puede hacer arte, puede escribir &quot;al estilo&quot; de Borges y generar canciones, pero nunca será Van Gogh o Frida, nunca escribirá &quot;Las ruinas circulares&quot; o &quot;Funes el memorioso&quot;, y no podrá crear una ópera como Aida o &quot;My Universe&quot; como BTS y Coldplay pudieron hacerlo.
                  <br /><br />
                  A medida que la IA generativa asume muchas tareas cotidianas y entendemos que el mundo del trabajo está cambiando por completo debido a los avances de la tecnología, potenciar, cultivar y entrenar las competencias que nos hacen humanos será nuestro verdadero diferencial.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="expanded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mb-8 md:mb-10 max-w-[1000px] mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
                  <div className="text-black text-sm font-light font-poppins leading-7 space-y-4 text-center md:text-left">
                    <p>
                      La IA puede hacer arte, puede escribir &quot;al estilo&quot; de Borges y generar canciones, pero nunca será Van Gogh o Frida, nunca escribirá &quot;Las ruinas circulares&quot; o &quot;Funes el memorioso&quot;, y no podrá crear una ópera como Aida o &quot;My Universe&quot; como BTS y Coldplay pudieron hacerlo.
                    </p>
                    <p>
                      A medida que la IA generativa asume muchas tareas cotidianas y entendemos que el mundo del trabajo está cambiando por completo debido a los avances de la tecnología, potenciar, cultivar y entrenar las competencias que nos hacen humanos será nuestro verdadero diferencial.
                    </p>
                    <p>
                      Al menos por el momento, hay cosas que la IA no puede hacer: no puede sentir, crear de la nada ni tener pensamiento crítico y ético. No puede liderar equipos diversos, no puede diagnosticar problemas de la nada, no puede empatizar (realmente empatizar) ni tener compasión. No siente curiosidad, ni tampoco miedo (y sabemos que el miedo es un gran motor del desarrollo). Y claro, tampoco puede experimentar el amor.
                    </p>
                    <p>
                      Estas son cosas puramente humanas.
                    </p>
                  </div>
                  <div className="text-black text-sm font-light font-poppins leading-7 space-y-4 text-center md:text-left">
                    <p>
                      Y las tenemos que llevar a nuestra máxima expresión.
                    </p>
                    <p>
                      La IA asume de manera genial tareas, analiza datos masivos y encuentra patrones de una manera que los humanos no podemos lograr. Pero cuando los problemas son complejos (y espinosos), demandan pensamiento crítico, creatividad genuina y trabajo colaborativo. Vivimos en un mundo demasiado complejo como para que pocas personas tengan las respuestas y por eso la colaboración seguirá siendo (lo fue desde el inicio de la humanidad, como detectó Darwin) la herramienta más valiosa de supervivencia.
                    </p>
                    <p>
                      La transformación que estamos atravesando es de la economía del conocimiento a la economía relacional. Y requerirá que todos podamos desarrollar esas capacidades de vincularnos en la diversidad y en entornos complejos y cambiantes, en los que podamos expresar, debatir y cooperar sobre pensamientos divergentes con empatía y escucha genuina, con colaboración y agilidad emocional y social.
                    </p>
                    <p>
                      En este proyecto personal me propongo estudiar, analizar, compartir, divulgar y contribuir a entrenar estas competencias.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            type="button"
            onClick={() => setWeHumanLabExpanded((prev) => !prev)}
            className="inline-flex items-center justify-center min-w-[7rem] h-8 px-4 bg-[#E6CC76] text-neutral-800 text-sm font-medium font-poppins leading-7 hover:bg-[#d4b96a] transition"
          >
            {weHumanLabExpanded ? "Leer menos" : "Leer más"}
          </button>
        </AnimatedSection>
      </section>

      {/* Red Communia */}
      <section id="red-communia" className="relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start gap-8 lg:gap-12 mb-8 lg:mb-12">
            <AnimatedSection className="order-2 lg:order-1" direction="right" delay={0.1}>
              <h2 className="text-yellow-600 text-3xl sm:text-4xl font-light font-poppins uppercase tracking-widest leading-tight mb-2">
                RED COMMUNIA
              </h2>
              <p className="text-stone-700 text-xl sm:text-2xl font-swanky font-normal leading-tight">
                RedCommunia – mi red de trabajo
              </p>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2 lg:max-w-none" direction="left" delay={0.15}>
              <p className="text-black text-sm font-light font-poppins leading-7 max-w-[604px] lg:max-w-none">
                Muchos de los proyectos que desarrollamos e implementamos requieren de un gran equipo. Para ello, armé{" "}
                <a
                  href="https://www.redcommunia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 font-normal underline hover:opacity-90"
                >
                  RedCommunia
                </a>
                , una red colaborativa de trabajo conformada por psicólogos, pedagogos, sociólogos, counselors y coaches cuya filosofía es la iteración, exploración e integración de ideas, conocimientos y abordajes.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection className="relative overflow-hidden -mx-6 px-6 py-8 md:py-10" delay={0.2}>
            <div className="relative flex flex-wrap justify-center gap-6 sm:gap-4 md:gap-6 lg:flex-nowrap lg:justify-between lg:gap-4">
            {[
              { name: "Ercilia Braun", image: "/images/red/ercilia.png", link: "https://www.linkedin.com/in/ercilia-braun-629409a/?originalSubdomain=ar" },
              { name: "Adela Saénz Cavia", image: "/images/red/adela.png", link: "https://www.linkedin.com/in/adelacavia/" },
              { name: "Miguel Espeche", image: "/images/red/miguel.png", link: "https://www.linkedin.com/in/miguel-espeche-520106b/" },
              { name: "Osvaldo Rivolt", image: "/images/red/osvaldo.png", link: "https://www.linkedin.com/in/osvaldo-a-rivolt-465ba12b/" },
              { name: "María Eugenia Barrio", image: "/images/red/maria.png", link: "https://www.linkedin.com/in/maiu-barrio-234a941b8/" },
              { name: "Lucía Franchi", image: "/images/red/lucia.png", link: "https://www.linkedin.com/in/lucia-franchi32405/" },
              { name: "Fabiana García Lago", image: "/images/red/fabiana.png", link: "https://www.linkedin.com/in/fabiana-garcia-lago-248a8a13b/" },
            ].map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col items-center flex-shrink-0"
              >
                {person.link ? (
                  <a
                    href={person.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    <div className={`relative w-32 h-32 rounded-full border border-stone-400 overflow-hidden flex items-center justify-center ${i === 6 ? "bg-zinc-300" : "bg-stone-100"}`}>
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={128}
                        height={128}
                        className="w-full h-full min-w-full min-h-full object-cover object-center"
                      />
                    </div>
                    <span className="mt-2 text-base sm:text-xl font-swanky font-normal leading-tight text-center text-black group-hover:text-yellow-600 transition-colors">
                      {person.name}
                    </span>
                  </a>
                ) : (
                  <>
                    <div className={`relative w-32 h-32 rounded-full border border-stone-400 overflow-hidden flex items-center justify-center ${i === 6 ? "bg-zinc-300" : "bg-stone-100"}`}>
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={128}
                        height={128}
                        className="w-full h-full min-w-full min-h-full object-cover object-center"
                      />
                    </div>
                    <span className="mt-2 text-base sm:text-xl font-swanky font-normal leading-tight text-center text-black cursor-default">
                      {person.name}
                    </span>
                  </>
                )}
              </motion.div>
            ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ¿Qué te apasiona? / Mi libro */}
      <section id="libro" className="relative overflow-hidden bg-[#FFF9FA] py-8 sm:py-12 lg:py-0">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row px-6 sm:px-8 lg:px-12 xl:px-16 bg-[#FFF9FA]">
          {/* Imagen del libro */}
          <AnimatedSection className="w-full aspect-[490/583] lg:w-[380px] xl:w-[490px] lg:flex-shrink-0 lg:aspect-[490/583] relative bg-[#FFF9FA]" direction="right" delay={0.1}>
            <Image
              src="/images/libro.png"
              alt="Libro ¿Qué te apasiona?"
              width={490}
              height={583}
              className="w-full h-full object-cover object-top"
              unoptimized
            />
          </AnimatedSection>
          {/* Zona de contenido con fondo rosa - texto centrado verticalmente */}
          <AnimatedSection className="relative flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-center min-h-0 px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-10 lg:py-12 bg-[#FFF9FA]" direction="left" delay={0.15}>
            <div className="absolute inset-0 bg-[#FFF9FA] pointer-events-none" aria-hidden />
            <div className="relative z-10 flex flex-nowrap items-center justify-center lg:justify-center gap-6 lg:gap-8 w-full">
              <div className="flex flex-col justify-center w-full min-w-0 max-w-[580px]">
                <h2 className="text-stone-900 text-2xl sm:text-3xl lg:text-4xl font-light font-poppins uppercase tracking-widest leading-tight mb-2">
                  ¿Qué te apasiona?
                </h2>
                <p className="text-[#C58770] text-xl sm:text-2xl font-swanky font-normal tracking-wide leading-none origin-top-left -rotate-[2.31deg] mb-4 sm:mb-6">
                  Mi libro
                </p>
                <div className="text-justify text-black text-sm font-light font-poppins leading-7 mb-6 sm:mb-8">
                  Siempre me ha interesado entender el motor que mueve a las personas a hacer las cosas que hacen: algunos llaman a esto sentido de vida, otros &quot;propósito&quot; y otros &quot;pasión&quot;.
                  <br /><br />
                  El tema me interesa tanto, que escribí un libro sobre ello: <strong className="font-bold"><span className="block"></span><span className="block">&quot;¿Qué te apasiona?</span><span className="block">Al encuentro de tu pasión&quot;.</span></strong>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="#libro"
                    className="inline-flex items-center justify-center w-28 h-8 bg-[#C58770] text-white text-sm font-medium font-poppins uppercase hover:bg-[#b07860] transition"
                  >
                    Conocé más
                  </Link>
                  <a
                    href="https://www.galernaweb.com/productos/que-te-apasiona/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-28 h-8 bg-[#C58770] text-white text-sm font-medium font-poppins uppercase hover:bg-[#b07860] transition"
                  >
                    COMPRAR
                  </a>
                </div>
              </div>
              {/* Imagen decorativa - siempre en fila junto al texto del libro */}
              <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44">
                <Image
                  src="/images/07 2 (2).png"
                  alt=""
                  width={174}
                  height={174}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mi trabajo con líderes sociales */}
<section className="relative bg-white overflow-hidden">
  <div className="relative max-w-[1474px] mx-auto">
    <AnimatePresence mode="wait">
{!lideresExpanded ? (
  <motion.div
    key="lideres-collapsed"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    className="px-6 py-8 md:py-10 lg:pl-[72px] lg:pr-0 2xl:pl-[92px]"
  >
    <div className="grid grid-cols-1 lg:grid-cols-[460px_minmax(0,1fr)] lg:gap-6 xl:gap-8 2xl:grid-cols-[540px_minmax(0,1fr)] 2xl:gap-10 items-stretch">
      {/* Columna izquierda */}
      <div className="flex flex-col min-w-0 max-w-[460px] pt-0 2xl:max-w-[540px] 2xl:pt-2">
        <h2 className="text-stone-900 text-[30px] 2xl:text-4xl font-light font-poppins uppercase leading-[40px] 2xl:leading-[52px] tracking-[0.18em] max-w-[390px] 2xl:max-w-[460px] mb-6 2xl:mb-8">
          MI TRABAJO CON LÍDERES SOCIALES
        </h2>

        <div className="w-20 h-20 relative flex-shrink-0 mb-6 2xl:w-24 2xl:h-24 2xl:mb-8">
          <Image
            src="/images/19 1.png"
            alt=""
            width={96}
            height={96}
            className="w-full h-full object-contain"
          />
        </div>

        <p className="text-stone-900 text-[13px] 2xl:text-sm font-light font-poppins leading-[1.9] max-w-[430px] 2xl:max-w-[500px] mb-6 2xl:mb-8">
          Como me moviliza mucho la desigualdad, he diseñado,
          implementado y medido el impacto individual y comunitario de
          programas de entrenamiento socioemocional con referentes y
          líderes sociales de barrios populares, especialmente en la
          ciudad de Buenos Aires y el conurbano, pero también en Córdoba y
          Santiago del Estero. Los programas buscan acelerar la
          transformación social contribuyendo a la formación de
          liderazgos sociales.
        </p>

        <button
          type="button"
          onClick={() => setLideresExpanded(true)}
          className="inline-flex items-center justify-center w-28 h-8 bg-[#E6CC76] text-neutral-800 text-sm font-medium font-poppins leading-7 hover:bg-[#d4b96a] transition"
        >
          Leer más
        </button>
      </div>

      {/* Columna derecha */}
      <div className="relative w-full mt-8 lg:mt-[-10%]">
        <div className="relative w-full h-full min-h-[520px] lg:min-h-[560px] xl:min-h-[620px] 2xl:min-h-[760px] overflow-hidden">
          <Image
            src="/images/Adela Saenz Cavia9 1.png"
            alt=""
            fill
            className="object-cover object-[center_18%]"
            sizes="(max-width: 1024px) 100vw, 980px"
            unoptimized
          />
        </div>
      </div>
    </div>
  </motion.div>
) : (
        <motion.div
          key="lideres-expanded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="px-6 py-10 md:py-12 lg:px-[92px]"
        >
          {/* Desktop expandido */}
          <div className="hidden md:block">
            {/* Fila 1: título + árbol */}
            <div className="grid md:grid-cols-[540px_minmax(0,1fr)] gap-x-16 xl:gap-x-20 items-start mb-6">
              <div>
                <h2 className="text-stone-900 text-4xl font-light font-poppins uppercase leading-[52px] tracking-widest max-w-[460px]">
                  MI TRABAJO CON LÍDERES SOCIALES
                </h2>
              </div>

              <div className="flex justify-end">
                <div className="w-20 h-20 relative">
                  <Image
                    src="/images/19 1.png"
                    alt=""
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Fila 2: texto */}
            <div className="grid md:grid-cols-[540px_minmax(0,1fr)] gap-x-16 xl:gap-x-20 items-start">
              <div className="text-stone-900 text-sm font-light font-poppins leading-7 max-w-[500px] space-y-8">
                <p>
                  Como me moviliza mucho la desigualdad, he diseñado,
                  implementado y medido el impacto individual y comunitario de
                  programas de entrenamiento socioemocional con referentes y
                  líderes sociales de barrios populares, especialmente en la
                  ciudad de Buenos Aires y el conurbano, pero también en Córdoba
                  y Santiago del Estero. Los programas buscan acelerar la
                  transformación social contribuyendo a la formación de
                  liderazgos sociales.
                </p>

                <p>
                  Sabemos que las competencias emocionales y sociales se pueden
                  entrenar y hacerlo con personas que tienen tanto impacto social
                  comunitario y que, además, muchas de ellas han nacido y viven
                  en entornos de vulneración de derechos, es no solo un desafío
                  personal, sino también un proyecto que me llena de ilusión y
                  de esperanza.
                </p>

                <p>
                  Los resultados alcanzados en estos programas, por los que han
                  pasado más de 400 referentes y líderes comunitarios, son
                  alucinantes y muy positivos y así lo refieren ellos/as
                  mismos/as ya que estos proyectos se miden y evalúan (y son
                  parte de mi tesis de doctorado en Psicología social).
                </p>

                <p>
                  Algunos de los programas que hemos implementado, como el
                  programa &quot;Mujeres al frente&quot; realizado en Ciudad de
                  Buenos Aires y que lleva ya 8 ediciones o el programa
                  &quot;Con voz popular&quot; que cumplió su 5ta edición u otros
                  programas como el realizado con espacios comunitarios del
                  Conurbano (Quilmes, Florencio Varela, La Matanza, José C Paz,
                  Polvorines, Alto San Isidro) han mostrado resultados preciosos
                  que se condensan en algunas de las palabras que los mismos
                  referentes nos dicen:
                </p>
              </div>

              <div className="text-stone-900 text-sm font-light font-poppins leading-7 max-w-[620px]">
                <div className="space-y-8">
                  <p>
                    &quot;En este programa aprendí a desnudar mi alma. Fue
                    difícil, pero me permitió aceptarme como soy, reconocer,
                    además de mis partes oscuras, también mi lado luminoso,
                    reconocer mis fortalezas y desde allí abrirme al
                    aprendizaje...&quot; – referente Barrio Villa Itatí,
                    Quilmes.
                  </p>

                  <p>
                    &quot;En nuestros encuentros empecé a conocer mi
                    interioridad, a conectarme con mi debilidad y a validarla, a
                    hablar de lo que nos frustra y de qué podemos hacer para
                    gestionar esa frustración. Y dejarme finalmente habitar por
                    el amor y por esa sensación de sentirme parte de algo más
                    grande&quot; – referenta social Barrio Almafuerte, La
                    Matanza.
                  </p>

                  <p>
                    La idea es que, desde ese aprendizaje, generado
                    colaborativamente, los referentes y educadores sociales
                    puedan hacerse cargo del poder que tienen y que, poniendo en
                    valor su muy rico universo emocional, éste se convierta en su
                    motor para la acción.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setLideresExpanded(false)}
                  className="inline-flex items-center justify-center w-28 h-8 bg-[#E6CC76] text-neutral-800 text-sm font-medium font-poppins leading-7 hover:bg-[#d4b96a] transition mt-8"
                >
                  Leer menos
                </button>
              </div>
            </div>

            {/* Fila 3: imagen horizontal */}
            <div className="mt-8 relative w-full h-[240px] md:h-[280px] xl:h-[340px] 2xl:h-[415px] overflow-hidden">
              <Image
                src="/images/Adela Saenz Cavia9 1.png"
                alt=""
                fill
                className="object-cover object-[center_22%]"
                sizes="(max-width: 1024px) 100vw, 1280px"
                unoptimized
              />
            </div>
          </div>

          {/* Mobile expandido */}
          <div className="md:hidden">
            <h2 className="text-stone-900 text-4xl font-light font-poppins uppercase leading-[52px] tracking-widest max-w-[460px] mb-8">
              MI TRABAJO CON LÍDERES SOCIALES
            </h2>

            <div className="w-20 h-20 relative mb-8 ml-auto">
              <Image
                src="/images/19 1.png"
                alt=""
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </div>

            <div className="text-stone-900 text-sm font-light font-poppins leading-7 space-y-4">
              <p>
                Como me moviliza mucho la desigualdad, he diseñado,
                implementado y medido el impacto individual y comunitario de
                programas de entrenamiento socioemocional con referentes y
                líderes sociales de barrios populares, especialmente en la
                ciudad de Buenos Aires y el conurbano, pero también en Córdoba y
                Santiago del Estero. Los programas buscan acelerar la
                transformación social contribuyendo a la formación de liderazgos
                sociales.
              </p>
              <p>
                Sabemos que las competencias emocionales y sociales se pueden
                entrenar y hacerlo con personas que tienen tanto impacto social
                comunitario y que, además, muchas de ellas han nacido y viven en
                entornos de vulneración de derechos, es no solo un desafío
                personal, sino también un proyecto que me llena de ilusión y de
                esperanza.
              </p>
              <p>
                Los resultados alcanzados en estos programas, por los que han
                pasado más de 400 referentes y líderes comunitarios, son
                alucinantes y muy positivos y así lo refieren ellos/as
                mismos/as ya que estos proyectos se miden y evalúan (y son parte
                de mi tesis de doctorado en Psicología social).
              </p>
              <p>
                Algunos de los programas que hemos implementado, como el
                programa &quot;Mujeres al frente&quot; realizado en Ciudad de
                Buenos Aires y que lleva ya 8 ediciones o el programa
                &quot;Con voz popular&quot; que cumplió su 5ta edición u otros
                programas como el realizado con espacios comunitarios del
                Conurbano (Quilmes, Florencio Varela, La Matanza, José C Paz,
                Polvorines, Alto San Isidro) han mostrado resultados preciosos
                que se condensan en algunas de las palabras que los mismos
                referentes nos dicen:
              </p>
              <p>
                &quot;En este programa aprendí a desnudar mi alma. Fue difícil,
                pero me permitió aceptarme como soy, reconocer, además de mis
                partes oscuras, también mi lado luminoso, reconocer mis
                fortalezas y desde allí abrirme al aprendizaje...&quot; –
                referente Barrio Villa Itatí, Quilmes.
              </p>
              <p>
                &quot;En nuestros encuentros empecé a conocer mi interioridad, a
                conectarme con mi debilidad y a validarla, a hablar de lo que
                nos frustra y de qué podemos hacer para gestionar esa
                frustración. Y dejarme finalmente habitar por el amor y por esa
                sensación de sentirme parte de algo más grande&quot; – referenta
                social Barrio Almafuerte, La Matanza.
              </p>
              <p>
                La idea es que, desde ese aprendizaje, generado
                colaborativamente, los referentes y educadores sociales puedan
                hacerse cargo del poder que tienen y que, poniendo en valor su
                muy rico universo emocional, éste se convierta en su motor para
                la acción.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setLideresExpanded(false)}
              className="inline-flex items-center justify-center w-28 h-8 bg-[#E6CC76] text-neutral-800 text-sm font-medium font-poppins leading-7 hover:bg-[#d4b96a] transition mt-8"
            >
              Leer menos
            </button>

            <div className="mt-8 relative w-full h-[240px] overflow-hidden">
              <Image
                src="/images/Adela Saenz Cavia9 1.png"
                alt=""
                fill
                className="object-cover object-[center_14%]"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</section>


      {/* Publicaciones y charlas */}
      <section className="relative py-12 xl:py-16 2xl:py-24 bg-white overflow-hidden">
        <div className="max-w-[1474px] mx-auto px-6 relative">
          <div className="absolute inset-0 opacity-30 bg-white pointer-events-none -z-10" aria-hidden />
          {/* Header: icono, título y enlaces */}
          <AnimatedSection className="flex flex-col items-center text-center mb-10 md:mb-12" delay={0.1}>
            <div className="w-16 h-16 md:w-20 md:h-20 relative mb-4">
              <Image
                src="/images/galeria/15 1 (1).png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-stone-700 text-2xl font-swanky font-normal leading-tight mb-4">
              Publicaciones y charlas
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="https://www.lanacion.com.ar/autor/adela-saenz-cavia-13016/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-w-[7rem] h-8 px-4 bg-red-200 text-[#966452] hover:bg-red-300 text-sm font-medium font-poppins leading-7 transition"
              >
                LA NACIÓN
              </Link>
              <Link
                href="https://linktr.ee/Adela.Cavia?utm_source=linktree_profile_share&ltsid=c0955618-bdcc-459b-be9c-9f925a9bdd40"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-w-[7rem] h-8 px-4 bg-red-200 text-[#966452] hover:bg-red-300 text-sm font-medium font-poppins leading-7 transition"
              >
                LINKTREE
              </Link>
            </div>
          </AnimatedSection>

          {/* Slider de galerías: cada slide es un grid completo; el scroll cambia de galería */}
            <div className="relative w-full max-w-[760px] lg:max-w-[738px] 2xl:max-w-[900px] mx-auto py-4 lg:py-6 2xl:py-0">
            <div
              ref={gallerySliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-8 pb-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onScroll={(e) => {
                const el = e.currentTarget;
                const slides = Array.from(el.querySelectorAll("[data-gallery-slide]")) as HTMLElement[];
              
                if (!slides.length) return;
              
                const currentScroll = el.scrollLeft;
                let closestIndex = 0;
                let closestDistance = Infinity;
              
                slides.forEach((slide, index) => {
                  const distance = Math.abs(slide.offsetLeft - currentScroll);
                  if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                  }
                });
              
                setGalleryIndex(closestIndex);
              }}
            >
              {[
                [
                  { src: "/images/galeria/1.png", alt: "Publicación 1", aspect: "aspect-[256/384]" },
                  { src: "/images/galeria/2.png", alt: "Publicación 2", aspect: "aspect-[288/384]" },
                  { src: "/images/galeria/3.png", alt: "Publicación 3", aspect: "aspect-[456/288]" },
                  { src: "/images/galeria/4.png", alt: "Publicación 4", aspect: "aspect-[384/288]" },
                  { src: "/images/galeria/5.png", alt: "Publicación 5", aspect: "aspect-[224/288]" },
                ],
                [
                  { src: "/images/galeria2/DSC06604%202.png", alt: "Galería 2 - 1", aspect: "aspect-[256/384]" },
                  { src: "/images/galeria2/Visualizar%201%20(1).png", alt: "Galería 2 - 2", aspect: "aspect-[288/384]" },
                  { src: "/images/galeria2/DSC04123%201%20(1).png", alt: "Galería 2 - 3", aspect: "aspect-[456/288]" },
                  { src: "/images/galeria2/DSC06604%201%20(1).png", alt: "Galería 2 - 4", aspect: "aspect-[384/288]" },
                  { src: "/images/galeria2/IMG_0362%201%20(1).png", alt: "Galería 2 - 5", aspect: "aspect-[224/288]" },
                ],
                [
                  { src: "/images/galeria3/Visualizar%203%20(1).png", alt: "Galería 3 - 1", aspect: "aspect-[256/384]" },
                  { src: "/images/galeria3/Visualizar%201%20(2).png", alt: "Galería 3 - 2", aspect: "aspect-[288/384]" },
                  { src: "/images/galeria3/DSC04123%201%20(2).png", alt: "Galería 3 - 3", aspect: "aspect-[456/288]" },
                  { src: "/images/galeria3/IMG_0362%201%20(2).png", alt: "Galería 3 - 4", aspect: "aspect-[384/288]" },
                  { src: "/images/galeria3/DSC06604%201%20(2).png", alt: "Galería 3 - 5", aspect: "aspect-[224/288]" },
                ],
              ].map((items, galleryIdx) => (
                    <div
                      key={galleryIdx}
                      data-gallery-slide
                      className="flex-shrink-0 w-full max-w-[760px] lg:max-w-[738px] 2xl:max-w-[900px] snap-center"
                      style={{ scrollSnapAlign: "center" }}
                    >
                  <AnimatedStagger staggerChildren={0.1} delayChildren={0.15} className="relative w-full columns-2 md:columns-3 gap-4 space-y-4">
                    {items.map((item, i) => (
                      <AnimatedItem key={i} className="break-inside-avoid mb-4">
                        <motion.div
                          className={`relative w-full ${item.aspect} overflow-hidden`}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 45vw, 280px" />
                        </motion.div>
                      </AnimatedItem>
                    ))}
                  </AnimatedStagger>
                </div>
              ))}
            </div>
            {/* Controles: flechas y puntos */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                type="button"
                onClick={() => scrollToGallery(Math.max(0, galleryIndex - 1))}
                disabled={galleryIndex === 0}
                className="p-2 text-[#C58770] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#C58770]/10 rounded transition"
                aria-label="Galería anterior"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <div className="flex gap-2">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => scrollToGallery(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition ${galleryIndex === idx ? "bg-[#C58770]" : "bg-[#C58770]/40 hover:bg-[#C58770]/60"}`}
                    aria-label={`Ir a galería ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
              onClick={() => scrollToGallery(Math.min(TOTAL_GALLERIES - 1, galleryIndex + 1))}
                disabled={galleryIndex === 2}
                className="p-2 text-[#C58770] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#C58770]/10 rounded transition"
                aria-label="Galería siguiente"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Aprendizaje socioemocional */}
      <section id="ase" className="relative w-full min-h-[560px] xl:min-h-[640px] 2xl:min-h-[746px] bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-orange-300/25 pointer-events-none" aria-hidden />
        <div className="relative max-w-[1474px] mx-auto px-6 py-12 md:py-16 lg:px-[114px] lg:pt-[72px] xl:pt-[96px] 2xl:pt-[132px] lg:pb-12 xl:pb-14 2xl:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12 xl:gap-[188px] items-start">
            {/* Columna izquierda */}
            <AnimatedSection className="flex flex-col min-w-0" direction="right" delay={0.1}>
              <h2 className="text-yellow-600 text-3xl sm:text-4xl font-light font-poppins uppercase leading-[52px] tracking-widest max-w-[800px] mb-6">
                Aprendizaje socioemocional <br /> (ASE / SEL)
              </h2>
              <div className="w-28 h-28 relative flex-shrink-0 mb-6">
                <Image src="/images/08 1.png" alt="" width={118} height={118} className="object-contain" />
              </div>
              <div className="max-w-[600px] text-black text-sm font-light font-poppins leading-7 mb-8">
                El aprendizaje socioemocional marca la diferencia. Lo sabemos por las{" "}
                <Link
                  href="https://www.researchgate.net/profile/Joseph-Durlak/publication/372370421_The_state_of_evidence_for_social_and_emotional_learning_A_contemporary_meta-analysis_of_universal_school-based_SEL_interventions/links/64b557c08de7ed28baa48223/The-state-of-evidence-for-social-and-emotional-learning-A-contemporary-meta-analysis-of-universal-school-based-SEL-interventions.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 font-normal underline hover:opacity-90"
                >
                  investigaciones
                </Link>
                <span className="text-yellow-600 font-normal">,</span>{" "}
                que demuestran que una educación que promueve el aprendizaje socioemocional tiene un impacto positivo en las habilidades, actitudes y comportamiento, en el rendimiento académico, el bienestar emocional, los vínculos y los climas de aula, entre otros.
                <AnimatePresence>
                  {aseExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <br />
                      Muchas escuelas están implementando el aprendizaje socioemocional como una forma de contribuir a un mejor aprendizaje.
                      <br /><br />
                      Como formadora en educación emocional, he diseñado, instrumentado y medido la aplicación de estos programas en el ámbito escolar. Posiblemente el ejemplo que más orgullo me genera es el programa que instrumentamos en el marco de las escuelas públicas del Municipio de Vicente López.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button
                type="button"
                onClick={() => setAseExpanded((prev) => !prev)}
                className="inline-flex items-center justify-center w-28 h-8 bg-orange-300 text-neutral-800 text-sm font-medium font-poppins leading-7 hover:opacity-90 transition"
              >
                {aseExpanded ? "Leer menos" : "Leer más"}
              </button>
            </AnimatedSection>

            {/* Columna derecha: portada con botón play → al click reproducir video */}
            <AnimatedSection className="relative w-full max-w-[507px] aspect-[507/620] min-h-[420px] mx-auto lg:mx-0 lg:ml-auto overflow-hidden rounded-none" direction="left" delay={0.15}>
              {/* Video (visible solo cuando está reproduciendo) */}
              <video
                ref={aseVideoRef}
                src="/video/video.mp4"
                poster="/images/Captura%20de%20Pantalla%202026-02-25%20a%20la(s)%2011.09.04%201.png"
                className={`absolute inset-0 w-full h-full object-cover ${aseVideoPlaying ? "z-10" : "z-0 opacity-0 pointer-events-none"}`}
                controls
                playsInline
                onEnded={() => setAseVideoPlaying(false)}
                onClick={(e) => e.stopPropagation()}
              />
              {/* Portada + overlay + botón play (visible cuando el video no está reproduciendo) */}
              <button
                type="button"
                onClick={() => setAseVideoPlaying(true)}
                className={`absolute inset-0 z-20 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6CC76] focus-visible:ring-offset-2 ${aseVideoPlaying ? "pointer-events-none opacity-0" : ""}`}
                aria-label="Reproducir video"
              >
                <Image
                  src="/images/Captura de Pantalla 2026-02-25 a la(s) 11.09.04 1.png"
                  alt="Aprendizaje socioemocional"
                  fill
                  className="object-cover object-center pointer-events-none"
                  sizes="(max-width: 1024px) 100vw, 507px"
                />
                <div className="absolute inset-0 bg-[#E6CC76]/46 pointer-events-none" aria-hidden />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Image
                    src="/images/Capa_1 (2).png"
                    alt=""
                    width={72}
                    height={73}
                    className="object-contain w-[72px] h-[73px]"
                  />
                </div>
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

{/* Logos carousel */}
<section className="relative w-full overflow-hidden py-8 md:py-10 bg-[#E6E6E6]">
  <div className="max-w-[1474px] mx-auto px-6">
    <AnimatedSection className="mb-6 text-center" delay={0.08}>
      <p className="text-stone-700 text-xl md:text-2xl font-swanky font-normal leading-tight">
        Clientes
      </p>
    </AnimatedSection>

    <div className="relative overflow-hidden logos-fade">
      <div className="logos-track">
        {[...partnerLogos, ...partnerLogos].map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex-shrink-0 w-[170px] h-[80px] flex items-center justify-center bg-transparent"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={170}
              height={80}
              className="w-[170px] h-[80px] object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  </div>

  <style jsx>{`
    .logos-fade {
      mask-image: linear-gradient(
        to right,
        transparent 0%,
        black 8%,
        black 92%,
        transparent 100%
      );
      -webkit-mask-image: linear-gradient(
        to right,
        transparent 0%,
        black 8%,
        black 92%,
        transparent 100%
      );
    }

    .logos-track {
      display: flex;
      align-items: center;
      gap: 32px;
      width: max-content;
      animation: logosMarquee 50s linear infinite;
    }

    .logos-track:hover {
      animation-play-state: paused;
    }

    @keyframes logosMarquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-50% - 16px));
      }
    }

    @media (max-width: 768px) {
      .logos-track {
        gap: 20px;
        animation-duration: 20s;
      }
    }
  `}</style>
</section>

      
      {/* Proyectos con toda Iberoamérica - Mapa */}
      <section className="relative w-full bg-[#EFEFEF] overflow-hidden">
        <div className="w-full relative h-[280px] md:h-[360px] xl:h-[560px] 2xl:h-[700px] overflow-hidden">
          <Image
            src="/images/mapa.png"
            alt="Proyectos con toda Iberoamérica"
            fill
            className="object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 1474px"
          />
          <div className="absolute left-1/2 top-[50px] -translate-x-1/2 w-full max-w-[320px] px-4 text-center">
            <h2 className="text-stone-700 text-2xl font-swanky font-normal leading-tight">
              Proyectos con toda Iberoamérica
            </h2>
          </div>
        </div>
      </section>

      

      {/* Instagram - últimas 3 publicaciones (oculto por ahora) */}
      {false && (
      <section className="relative w-full bg-[#EBD5CD] overflow-hidden">
        <div className="relative max-w-[1474px] mx-auto px-6 py-12 md:py-16">
          <AnimatedSection className="flex flex-col items-center" delay={0.1}>
            <a
              href="https://instagram.com/Adela.Cavia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#C58770] text-[16px] font-medium font-poppins leading-9 tracking-wide hover:opacity-80 transition"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M7.63443 1.37603C9.673 1.37603 9.91355 1.38419 10.7188 1.42088C11.4629 1.45554 11.8665 1.57989 12.1356 1.68386C12.4923 1.82248 12.7472 1.9876 13.0142 2.25465C13.2813 2.52171 13.4464 2.77653 13.585 3.13328C13.689 3.40237 13.8133 3.806 13.848 4.55008C13.8847 5.35531 13.8928 5.59586 13.8928 7.63443C13.8928 9.673 13.8847 9.91355 13.848 10.7188C13.8133 11.4629 13.689 11.8665 13.585 12.1356C13.4464 12.4923 13.2813 12.7472 13.0142 13.0142C12.7472 13.2813 12.4923 13.4464 12.1356 13.585C11.8665 13.689 11.4629 13.8133 10.7188 13.848C9.91355 13.8847 9.673 13.8928 7.63443 13.8928C5.59586 13.8928 5.35531 13.8847 4.55008 13.848C3.806 13.8133 3.40237 13.689 3.13328 13.585C2.77653 13.4464 2.52171 13.2813 2.25465 13.0142C1.9876 12.7472 1.82248 12.4923 1.68386 12.1356C1.57989 11.8665 1.45554 11.4629 1.42088 10.7188C1.38419 9.91355 1.37603 9.673 1.37603 7.63443C1.37603 5.59586 1.38419 5.35531 1.42088 4.55008C1.45554 3.806 1.57989 3.40237 1.68386 3.13328C1.82248 2.77653 1.9876 2.52171 2.25465 2.25465C2.52171 1.9876 2.77653 1.82248 3.13328 1.68386C3.40237 1.57989 3.806 1.45554 4.55008 1.42088C5.35531 1.38419 5.59586 1.37603 7.63443 1.37603ZM7.63443 0C5.56121 0 5.30027 0.00815437 4.48688 0.0468871C3.6735 0.0835813 3.11901 0.21405 2.63383 0.401598C2.13234 0.5973 1.70628 0.858236 1.28226 1.28226C0.858236 1.70628 0.5973 2.13234 0.401598 2.63383C0.212011 3.11901 0.0835812 3.6735 0.046887 4.48688C0.0101928 5.30027 0 5.56121 0 7.63443C0 9.70765 0.00815427 9.96859 0.046887 10.782C0.0835812 11.5954 0.214049 12.1499 0.401598 12.635C0.5973 13.1365 0.858236 13.5626 1.28226 13.9866C1.70628 14.4106 2.13234 14.6716 2.63383 14.8673C3.11901 15.0568 3.6735 15.1853 4.48688 15.222C5.30027 15.2587 5.56121 15.2689 7.63443 15.2689C9.70765 15.2689 9.96859 15.2607 10.782 15.222C11.5954 15.1853 12.1499 15.0548 12.635 14.8673C13.1365 14.6716 13.5626 14.4106 13.9866 13.9866C14.4106 13.5626 14.6716 13.1365 14.8673 12.635C15.0569 12.1499 15.1853 11.5954 15.222 10.782C15.2587 9.96859 15.2689 9.70765 15.2689 7.63443C15.2689 5.56121 15.2607 5.30027 15.222 4.48688C15.1853 3.6735 15.0548 3.11901 14.8673 2.63383C14.6716 2.13234 14.4106 1.70628 13.9866 1.28226C13.5626 0.858236 13.1365 0.5973 12.635 0.401598C12.1499 0.212011 11.5954 0.0835813 10.782 0.0468871C9.96859 0.0101929 9.70765 0 7.63443 0Z" fill="#C58770"/>
                <path d="M7.63452 3.71387C5.46956 3.71387 3.71436 5.46907 3.71436 7.63403C3.71436 9.79899 5.46956 11.5542 7.63452 11.5542C9.79948 11.5542 11.5547 9.79899 11.5547 7.63403C11.5547 5.46907 9.79948 3.71387 7.63452 3.71387ZM7.63452 10.1802C6.22995 10.1802 5.09039 9.04064 5.09039 7.63607C5.09039 6.2315 6.22995 5.09194 7.63452 5.09194C9.03909 5.09194 10.1786 6.2315 10.1786 7.63607C10.1786 9.04064 9.03909 10.1802 7.63452 10.1802Z" fill="#C58770"/>
                <path d="M11.7095 4.47419C12.215 4.47419 12.6248 4.06439 12.6248 3.55887C12.6248 3.05336 12.215 2.64355 11.7095 2.64355C11.204 2.64355 10.7942 3.05336 10.7942 3.55887C10.7942 4.06439 11.204 4.47419 11.7095 4.47419Z" fill="#C58770"/>
              </svg>
              @Adela.Cavia
            </a>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 mb-6">
              <div className="relative w-[260px] h-[320px] md:w-[340px] md:h-[420px] flex-shrink-0">
                <Image
                  src="/images/instagram/image%201.png"
                  alt="Instagram Adela Cavia 1"
                  fill
                  className="object-cover"
                  sizes="340px"
                />
              </div>
              <div className="relative w-[260px] h-[320px] md:w-[340px] md:h-[420px] flex-shrink-0">
                <Image
                  src="/images/instagram/image%204.png"
                  alt="Instagram Adela Cavia 2"
                  fill
                  className="object-cover"
                  sizes="340px"
                />
              </div>
              <div className="relative w-[260px] h-[320px] md:w-[340px] md:h-[420px] flex-shrink-0">
                <Image
                  src="/images/instagram/image%205.png"
                  alt="Instagram Adela Cavia 3"
                  fill
                  className="object-cover"
                  sizes="340px"
                />
              </div>
            </div>
            <a
              href="https://instagram.com/Adela.Cavia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-w-0 px-5 h-9 bg-[#C58770] text-white text-lg font-normal font-poppins leading-5 whitespace-nowrap hover:bg-[#b07860] transition"
            >
              VER EN MI INSTAGRAM
            </a>
          </AnimatedSection>
        </div>
      </section>
      )}

{/* Contacto - Form section */}
<section id="contacto" className="relative w-full bg-white overflow-hidden">
  <div className="w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0">
      {/* Imagen izquierda */}
      <AnimatedSection
        className="relative w-full h-full min-h-[420px] lg:min-h-[500px] xl:min-h-[530px] 2xl:min-h-[850px]"
        direction="right"
        delay={0.05}
      >
        <Image
          src="/images/imagen-contacto2.jpg"
          alt="Contacto"
          fill
          className="object-contain object-center"
          sizes="100vw"
        />
      </AnimatedSection>

      {/* Columna derecha: título + form */}
      <AnimatedSection
        className="flex flex-col items-center justify-center px-6 md:px-8 lg:px-10 xl:px-9 2xl:px-16 py-8 lg:py-8 xl:py-9 2xl:py-16"
        direction="left"
        delay={0.15}
      >
        <div className="flex items-start gap-3 xl:gap-3.5 mb-5 xl:mb-6 2xl:mb-8">
          <h2 className="text-[#C58770] text-[28px] lg:text-[30px] xl:text-[30px] 2xl:text-3xl font-normal font-swanky leading-none 2xl:leading-[96px] tracking-wider">
            ¡Enviame un mensaje!
          </h2>

          <div className="relative w-20 h-20 xl:w-[88px] xl:h-[88px] 2xl:w-28 2xl:h-28 flex-shrink-0">
            <Image
              src="/images/19 2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        <form
          className="space-y-3 xl:space-y-3.5 w-full max-w-[400px] xl:max-w-[408px] 2xl:max-w-[462px]"
          onSubmit={handleContactSubmit}
        >
          <div>
            <label
              htmlFor="nombre"
              className="block text-black/70 text-sm xl:text-[15px] 2xl:text-base font-light font-poppins leading-6 xl:leading-7"
            >
              Nombre y Apellido
            </label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              placeholder=" "
              value={contactNombre}
              onChange={(e) => setContactNombre(e.target.value)}
              required
              disabled={contactLoading}
              className="w-full mt-1 py-2 bg-transparent border-0 border-b border-[#C58770]/50 focus:border-[#C58770] focus:outline-none text-sm xl:text-[15px] 2xl:text-base text-black font-light font-poppins leading-6 xl:leading-7 placeholder:text-black/40 disabled:opacity-60"
            />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-black/70 text-sm xl:text-[15px] 2xl:text-base font-light font-poppins leading-6 xl:leading-7"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder=" "
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
              disabled={contactLoading}
              className="w-full mt-1 py-2 bg-transparent border-0 border-b border-[#C58770]/50 focus:border-[#C58770] focus:outline-none text-sm xl:text-[15px] 2xl:text-base text-black font-light font-poppins leading-6 xl:leading-7 placeholder:text-black/40 disabled:opacity-60"
            />
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="block text-black/70 text-sm xl:text-[15px] 2xl:text-base font-light font-poppins leading-6 xl:leading-7"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder=" "
              rows={2}
              value={contactMensaje}
              onChange={(e) => setContactMensaje(e.target.value)}
              required
              disabled={contactLoading}
              className="w-full mt-1 py-2 bg-transparent border-0 border-b border-[#C58770]/50 focus:border-[#C58770] focus:outline-none text-sm xl:text-[15px] 2xl:text-base text-black font-light font-poppins leading-6 xl:leading-7 placeholder:text-black/40 resize-y min-h-[70px] xl:min-h-[90px] 2xl:min-h-[100px] disabled:opacity-60"
            />
          </div>

          {contactError && (
            <p className="text-red-600 text-sm font-poppins">{contactError}</p>
          )}

          {contactSuccess && (
            <p className="text-green-700 text-sm font-poppins">
              Mensaje enviado correctamente.
            </p>
          )}

          <button
            type="submit"
            disabled={contactLoading}
            className="mt-4 xl:mt-5 2xl:mt-6 w-24 h-8 bg-[#C58770] flex items-center justify-center text-white text-sm font-medium font-poppins uppercase leading-7 hover:bg-[#b07860] transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {contactLoading ? "..." : "enviar"}
          </button>
        </form>
      </AnimatedSection>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="w-full h-28 bg-[#C58770] flex flex-wrap items-center justify-center gap-8 md:gap-16 py-6 px-6"
      >
        <a href="https://www.linkedin.com/in/adelacavia" target="_blank" rel="noopener noreferrer" className="text-orange-100 text-lg font-poppins hover:text-white transition">LinkedIn</a>
        <a href="https://instagram.com/adela.cavia" target="_blank" rel="noopener noreferrer" className="text-orange-100 text-lg font-poppins hover:text-white transition">@adela.cavia</a>
        <a href="https://x.com/Adel1ta" target="_blank" rel="noopener noreferrer" className="text-orange-100 text-lg font-poppins hover:text-white transition">@Adel1ta</a>
        <a href="https://www.facebook.com/adela.cavia/" target="_blank" rel="noopener noreferrer" className="text-orange-100 text-lg font-poppins hover:text-white transition">Facebook</a>
        <a href="mailto:adelacavia@gmail.com" className="text-orange-100 text-lg font-poppins hover:text-white transition">adelacavia@gmail.com</a>
      </motion.footer>
    </div>
  );
}
