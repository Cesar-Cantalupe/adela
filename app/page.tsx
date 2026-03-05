import Image from "next/image";
import Link from "next/link";
import { Header, Hero } from "@/components/Header";
import { InstagramFeed } from "@/components/InstagramFeed";

export default function Home() {
  return (
    <div className="w-full min-h-screen relative bg-white overflow-hidden">
      <Header />
      <Hero />

      {/* Sobre mí - full responsive, columna izquierda = altura de la imagen */}
      <section id="sobre-mi" className="relative w-full bg-white overflow-hidden">
        <div className="relative max-w-[1474px] mx-auto">
          {/* Overlays: cubren la sección sin altura fija */}
          <div className="absolute inset-0 opacity-30 bg-white -z-10 pointer-events-none" />
          <div className="absolute inset-0 opacity-30 bg-orange-300/25 -z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 md:items-stretch gap-8 md:gap-12 px-6 py-12 md:px-[181px] md:py-16">
            {/* Columna izquierda: misma altura que la imagen (grid la iguala) */}
            <div className="flex flex-col min-h-0">
              <h2 className="text-red-400 text-5xl md:text-6xl font-light font-poppins uppercase tracking-[2.87px] leading-tight mb-4 md:mb-6">
                Sobre mí
              </h2>
              <p className="text-black text-sm font-light font-poppins leading-7 max-w-[475px] flex-1">
                Trabajé por más de 25 años en el mundo corporativo liderando equipos y desafíos muy diversos. Un día sentí que quería probar cosas nuevas e inicié este camino de transformación que me hace muy feliz. Me especialicé en el entrenamiento de competencias socioemocionales (human skills), en neurociencias aplicadas a la educación de adultos y en el desarrollo de herramientas para promover la capacidad de resiliencia. Desde entonces facilito procesos de cambio de personas y equipos con la idea de contribuir a generar nuevos liderazgos, más humanos y sustentables.
              </p>
              <Link
                href="#mas"
                className="inline-flex items-center justify-center w-28 h-8 mt-6 md:mt-8 bg-[#E6CC76] text-neutral-800 text-sm font-medium font-poppins leading-7 hover:bg-[#d4b96a] transition flex-shrink-0"
              >
                Leer más
              </Link>
            </div>

            {/* Columna derecha: imagen define la altura de la fila */}
            <div className="relative w-full min-h-0 aspect-[631/423]">
              <Image
                src="/images/sobre-mi/Adela Saenz Cavia62Gaudi 1.png"
                alt="Adela - Sobre mí"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ¿En qué estoy trabajando? */}
      <section className="relative py-24 bg-white">
        <div className="max-w-[1474px] mx-auto px-6">
          {/* Imagen decorativa + título centrados */}
          <div className="flex flex-col items-center text-center mb-12">
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
          </div>

          {/* Contenedor más angosto para cada fila */}
          <div className="max-w-[900px] mx-auto space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-[#A9B8C3] pb-8">
              <div className="relative flex-shrink-0">
                <Image src="/images/trabajando/07 1.png" alt="Experiencias de aprendizaje" width={95} height={95} className="object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-stone-900 text-base font-light font-poppins uppercase tracking-wide mb-2">
                  EXPERIENCIAS DE APRENDIZAJE HUMAN SKILLS ACTIVE LEARNING
                </h3>
                <p className="text-black text-xs font-light font-poppins leading-6">
                  Genero experiencias de aprendizaje activo a medida para equipos y organizaciones, buscando contribuir a nuevos estilos de trabajo y liderazgo, y enfocándome en el desarrollo de las llamadas Human Skills o Brain Capital Skills (algunas de las competencias que organismos como el World Economic Forum han definido como las habilidades del futuro — en realidad, ya del presente).
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image src="/images/trabajando/BOTON EXPERIENCIAS.png" alt="" width={31} height={31} className="object-contain" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-[#A9B8C3] pb-8">
              <div className="relative flex-shrink-0">
                <Image src="/images/trabajando/11 1.png" alt="Procesos de cambio cultural" width={98} height={98} className="object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-stone-900 text-base font-light font-poppins uppercase tracking-wide mb-2">
                  Procesos de cambio cultural y desarrollo de culturas de bienestar
                </h3>
                <p className="text-black text-xs font-light font-poppins leading-6">
                  Las culturas organizacionales pueden ser aceleradores del cambio o el obstáculo intangible más poderoso. <span className="text-yellow-600">En equipo con otros profesionales</span>, contribuimos a transformar culturas, desarrollando un recorrido que hemos probado con éxito. Especializados en el bienestar humano, gran parte de nuestro foco es contribuir a que las organizaciones desarrollen culturas de bienestar sustentable.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image src="/images/trabajando/BOTON ASESOR Y FACILIT.png" alt="" width={31} height={31} className="object-contain" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative flex-shrink-0">
                <Image src="/images/trabajando/15 1.png" alt="Coaching y Mentoreo" width={85} height={85} className="object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-stone-900 text-base font-light font-poppins uppercase tracking-wide mb-2">
                  Coaching y Mentoreo
                </h3>
                <p className="text-black text-xs font-light font-poppins leading-6 text-justify">
                  Basada en una formación sólida, pero con una gran experiencia personal en liderar proyectos y personas en organizaciones diversas, acompaño procesos de desarrollo para personas en situación de liderazgo a través de la mentoría o el coaching.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image src="/images/trabajando/BOTON COACHING Y MENTOREO.png" alt="" width={31} height={31} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Human Lab */}
      <section id="we-human-lab" className="relative overflow-hidden bg-[#E6CC76]/25">
        <div className="relative max-w-[1474px] mx-auto px-6 py-12 md:py-16 lg:py-24 text-center">
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
            Mi proyecto personal
          </p>
          <h2 className="text-yellow-600 text-3xl sm:text-4xl font-light font-poppins uppercase tracking-widest leading-tight mb-8 md:mb-12">
            WE HUMAN LAB
          </h2>
          <p className="text-black text-sm font-light font-poppins leading-7 max-w-[504px] mx-auto text-center mb-8 md:mb-10">
            La IA puede hacer arte, puede escribir &quot;al estilo&quot; de Borges y generar canciones, pero nunca será Van Gogh o Frida, nunca escribirá &quot;Las ruinas circulares&quot; o &quot;Funes el memorioso&quot;, y no podrá crear una ópera como Aida o &quot;My Universe&quot; como BTS y Coldplay pudieron hacerlo.
            <br /><br />
            A medida que la IA generativa asume muchas tareas cotidianas y entendemos que el mundo del trabajo está cambiando por completo debido a los avances de la tecnología, potenciar, cultivar y entrenar las competencias que nos hacen humanos será nuestro verdadero diferencial.
          </p>
          <Link
            href="#we-human-lab-mas"
            className="inline-flex items-center justify-center min-w-[7rem] h-8 px-4 bg-[#E6CC76] text-neutral-800 text-sm font-medium font-poppins leading-7 hover:bg-[#d4b96a] transition"
          >
            Leer más
          </Link>
        </div>
      </section>

      {/* Red Communia */}
      <section id="red-communia" className="relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start gap-8 lg:gap-12 mb-8 lg:mb-12">
            <div className="order-2 lg:order-1">
              <h2 className="text-yellow-600 text-3xl sm:text-4xl font-light font-poppins uppercase tracking-widest leading-tight mb-2">
                RED COMMUNIA
              </h2>
              <p className="text-stone-700 text-xl sm:text-2xl font-swanky font-normal leading-tight">
                Mi red de trabajo
              </p>
            </div>
            <p className="text-black text-sm font-light font-poppins leading-7 max-w-[604px] order-1 lg:order-2 lg:max-w-none">
              Muchos de los proyectos que desarrollamos e implementamos requieren de un gran equipo. Para ello, armé RedCommunia, una red colaborativa de trabajo conformada por psicólogos, pedagogos, sociólogos, counselors y coaches cuya filosofía es la iteración, exploración e integración de ideas, conocimientos y abordajes.
            </p>
          </div>

          <div className="relative overflow-hidden -mx-6 px-6 py-8 md:py-10">
            <div className="absolute inset-0 -z-10">
              <Image src="/images/trabajando/Vector 39.png" alt="" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 opacity-30 bg-orange-300/25 -z-10" />
            <div className="relative flex flex-wrap justify-center gap-6 sm:gap-4 md:gap-6 lg:flex-nowrap lg:justify-between lg:gap-4">
            {[
              "Ercilia Braun",
              "Adela Saénz Cavia",
              "Miguel Espeche",
              "Osvaldo Rivolt",
              "María Eugenia Barrio",
              "Lucía Franchi",
              "Fabiana García Lago",
            ].map((name, i) => (
              <div key={name} className="flex flex-col items-center flex-shrink-0">
                <div className={`relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-stone-400 overflow-hidden ${i === 6 ? "bg-zinc-300" : "bg-stone-100"}`}>
                  <Image
                    src="https://placehold.co/133x128"
                    alt={name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <span className={`mt-2 text-base sm:text-xl font-swanky font-normal capitalize leading-tight text-center ${i === 1 ? "text-yellow-600" : "text-black"}`}>
                  {name}
                </span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué te apasiona? / Mi libro */}
      <section className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-0">
        <div className="mx-auto flex flex-col lg:flex-row">
          {/* Imagen del libro */}
          <div className="w-full aspect-[490/583] lg:w-[380px] xl:w-[490px] lg:flex-shrink-0 lg:aspect-[490/583] relative">
            <Image
              src="/images/Adela Saenz Cavia137 2.png"
              alt="Libro ¿Qué te apasiona?"
              width={490}
              height={583}
              className="w-full h-full object-cover object-top shadow-[0px_0px_23.5px_1px_rgba(0,0,0,0.05)]"
              unoptimized
            />
          </div>
          {/* Zona de contenido con fondo rosa - texto centrado verticalmente */}
          <div className="relative flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-center min-h-0 px-4 sm:px-6 lg:px-8 xl:px-12 xl:pl-[min(6rem,97px)] py-8 sm:py-10 lg:py-12">
            <div className="absolute inset-0 bg-rose-100/70 opacity-30 shadow-[0px_4px_5.1px_0px_rgba(0,0,0,0.25)] pointer-events-none" aria-hidden />
            <div className="relative z-10 flex flex-wrap items-center justify-center lg:justify-center gap-6 lg:gap-8 w-full">
              <div className="flex flex-col justify-center w-full min-w-0 max-w-[480px]">
                <h2 className="text-stone-900 text-2xl sm:text-3xl lg:text-4xl font-light font-poppins uppercase tracking-widest leading-tight mb-2">
                  ¿Qué te apasiona?
                </h2>
                <p className="text-red-400 text-xl sm:text-2xl font-swanky font-normal tracking-wide leading-none origin-top-left -rotate-[2.31deg] mb-4 sm:mb-6">
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
              {/* Imagen decorativa - al lado del texto, hace wrap si hace falta */}
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
          </div>
        </div>
      </section>

      {/* Mi trabajo con líderes sociales */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-[1474px] mx-auto relative px-6 md:px-[123px]">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[152px] items-start">
            {/* Columna izquierda: título, ilustración, párrafo, botón */}
            <div className="flex flex-col max-w-[478px]">
              <h2 className="text-stone-900 text-4xl font-light font-poppins uppercase leading-[52px] tracking-widest max-w-[656px] mb-8">
                MI TRABAJO CON LÍDERES SOCIALES
              </h2>
              <div className="w-32 h-32 relative flex-shrink-0 mb-8">
                <Image src="/images/19 1.png" alt="" width={128} height={128} className="w-32 h-32 object-cover" />
              </div>
              <p className="text-stone-900 text-sm font-light font-poppins leading-7 max-w-[478px] mb-8">
                Como me moviliza mucho la desigualdad, he diseñado, implementado y medido el impacto individual y comunitario de programas de entrenamiento socioemocional con referentes y líderes sociales de barrios populares, especialmente en la ciudad de Buenos Aires y el conurbano, pero también en Córdoba y Santiago del Estero. Los programas buscan acelerar la transformación social contribuyendo a la formación de liderazgos sociales.
              </p>
              <Link
                href="#lideres"
                className="inline-flex items-center justify-center w-28 h-8 bg-[#E6CC76] text-neutral-800 text-sm font-medium font-poppins leading-7 hover:bg-[#d4b96a] transition"
              >
                Leer más
              </Link>
            </div>
            {/* Columna derecha: imagen (sobresale por arriba como en el diseño) */}
            <div className="relative w-full mt-8 md:mt-0 md:-mt-4 order-first md:order-none md:max-w-[720px]">
              <div className="relative w-full aspect-[720/783] max-w-[720px] ml-0 md:ml-auto">
                <Image
                  src="/images/Adela Saenz Cavia9 1.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 720px"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publicaciones y charlas */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-[1474px] mx-auto px-6 relative">
          <div className="absolute inset-0 opacity-30 bg-white pointer-events-none -z-10" aria-hidden />
          {/* Header: icono, título y enlaces */}
          <div className="flex flex-col items-center text-center mb-10 md:mb-12">
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
                href="https://www.lanacion.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-w-[7rem] h-8 px-4 bg-red-200 text-stone-600 hover:bg-red-300 text-sm font-medium font-poppins leading-7 transition"
              >
                LA NACIÓN
              </Link>
              <Link
                href="https://linktr.ee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-w-[7rem] h-8 px-4 bg-red-200 text-stone-600 hover:bg-red-300 text-sm font-medium font-poppins leading-7 transition"
              >
                LINKTREE
              </Link>
            </div>
          </div>

          {/* Galería: masonry con CSS columns (ancho limitado para evitar pixelado) */}
          <div className="relative w-full max-w-[900px] mx-auto columns-2 md:columns-3 gap-4 space-y-4">
            <div className="break-inside-avoid mb-4">
              <div className="relative w-full aspect-[256/384] overflow-hidden">
                <Image src="/images/galeria/1.png" alt="Publicación 1" fill className="object-cover" sizes="(max-width: 768px) 45vw, 280px" />
              </div>
            </div>
            <div className="break-inside-avoid mb-4">
              <div className="relative w-full aspect-[288/384] overflow-hidden">
                <Image src="/images/galeria/2.png" alt="Publicación 2" fill className="object-cover" sizes="(max-width: 768px) 45vw, 280px" />
              </div>
            </div>
            <div className="break-inside-avoid mb-4">
              <div className="relative w-full aspect-[456/288] overflow-hidden">
                <Image src="/images/galeria/3.png" alt="Publicación 3" fill className="object-cover" sizes="(max-width: 768px) 90vw, 280px" />
              </div>
            </div>
            <div className="break-inside-avoid mb-4">
              <div className="relative w-full aspect-[384/288] overflow-hidden">
                <Image src="/images/galeria/4.png" alt="Publicación 4" fill className="object-cover" sizes="(max-width: 768px) 45vw, 280px" />
              </div>
            </div>
            <div className="break-inside-avoid mb-4">
              <div className="relative w-full aspect-[224/288] overflow-hidden">
                <Image src="/images/galeria/5.png" alt="Publicación 5" fill className="object-cover" sizes="(max-width: 768px) 45vw, 280px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aprendizaje socioemocional */}
      <section id="ase" className="relative w-full min-h-[746px] bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-orange-300/25 pointer-events-none" aria-hidden />
        <div className="relative max-w-[1474px] mx-auto px-6 py-12 md:py-16 lg:px-[114px] lg:pt-[132px] lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12 xl:gap-[188px] items-start">
            {/* Columna izquierda: título, icono, texto, botón */}
            <div className="flex flex-col min-w-0">
              <h2 className="text-yellow-600 text-3xl sm:text-4xl font-light font-poppins uppercase leading-[52px] tracking-widest max-w-[800px] mb-6">
                Aprendizaje socioemocional (ASE / SEL)
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
              </div>
              <Link
                href="#ase"
                className="inline-flex items-center justify-center w-28 h-8 bg-orange-300 text-neutral-800 text-sm font-medium font-poppins leading-7 hover:opacity-90 transition"
              >
                Leer más
              </Link>
            </div>

            {/* Columna derecha: imagen con overlay y botón play */}
            <div className="relative w-full max-w-[507px] aspect-[507/526] mx-auto lg:mx-0 lg:ml-auto">
              <Image
                src="/images/Captura de Pantalla 2026-02-25 a la(s) 11.09.04 1.png"
                alt="Aprendizaje socioemocional"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 507px"
              />
              <div className="absolute inset-0 bg-[#E6CC76]/46 pointer-events-none" aria-hidden />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Image
                  src="/images/Capa_1 (2).png"
                  alt="Reproducir"
                  width={72}
                  height={73}
                  className="object-contain w-[72px] h-[73px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram - últimas 3 publicaciones */}
      <section className="relative w-full min-h-[496px] bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-red-400 pointer-events-none -z-10" aria-hidden />
        <div className="relative max-w-[1474px] mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col items-center">
            <a
              href="https://instagram.com/Adela.Cavia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-red-400 text-xs font-medium font-poppins leading-9 tracking-wide hover:opacity-80 transition"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M7.63443 1.37603C9.673 1.37603 9.91355 1.38419 10.7188 1.42088C11.4629 1.45554 11.8665 1.57989 12.1356 1.68386C12.4923 1.82248 12.7472 1.9876 13.0142 2.25465C13.2813 2.52171 13.4464 2.77653 13.585 3.13328C13.689 3.40237 13.8133 3.806 13.848 4.55008C13.8847 5.35531 13.8928 5.59586 13.8928 7.63443C13.8928 9.673 13.8847 9.91355 13.848 10.7188C13.8133 11.4629 13.689 11.8665 13.585 12.1356C13.4464 12.4923 13.2813 12.7472 13.0142 13.0142C12.7472 13.2813 12.4923 13.4464 12.1356 13.585C11.8665 13.689 11.4629 13.8133 10.7188 13.848C9.91355 13.8847 9.673 13.8928 7.63443 13.8928C5.59586 13.8928 5.35531 13.8847 4.55008 13.848C3.806 13.8133 3.40237 13.689 3.13328 13.585C2.77653 13.4464 2.52171 13.2813 2.25465 13.0142C1.9876 12.7472 1.82248 12.4923 1.68386 12.1356C1.57989 11.8665 1.45554 11.4629 1.42088 10.7188C1.38419 9.91355 1.37603 9.673 1.37603 7.63443C1.37603 5.59586 1.38419 5.35531 1.42088 4.55008C1.45554 3.806 1.57989 3.40237 1.68386 3.13328C1.82248 2.77653 1.9876 2.52171 2.25465 2.25465C2.52171 1.9876 2.77653 1.82248 3.13328 1.68386C3.40237 1.57989 3.806 1.45554 4.55008 1.42088C5.35531 1.38419 5.59586 1.37603 7.63443 1.37603ZM7.63443 0C5.56121 0 5.30027 0.00815437 4.48688 0.0468871C3.6735 0.0835813 3.11901 0.21405 2.63383 0.401598C2.13234 0.5973 1.70628 0.858236 1.28226 1.28226C0.858236 1.70628 0.5973 2.13234 0.401598 2.63383C0.212011 3.11901 0.0835812 3.6735 0.046887 4.48688C0.0101928 5.30027 0 5.56121 0 7.63443C0 9.70765 0.00815427 9.96859 0.046887 10.782C0.0835812 11.5954 0.214049 12.1499 0.401598 12.635C0.5973 13.1365 0.858236 13.5626 1.28226 13.9866C1.70628 14.4106 2.13234 14.6716 2.63383 14.8673C3.11901 15.0568 3.6735 15.1853 4.48688 15.222C5.30027 15.2587 5.56121 15.2689 7.63443 15.2689C9.70765 15.2689 9.96859 15.2607 10.782 15.222C11.5954 15.1853 12.1499 15.0548 12.635 14.8673C13.1365 14.6716 13.5626 14.4106 13.9866 13.9866C14.4106 13.5626 14.6716 13.1365 14.8673 12.635C15.0569 12.1499 15.1853 11.5954 15.222 10.782C15.2587 9.96859 15.2689 9.70765 15.2689 7.63443C15.2689 5.56121 15.2607 5.30027 15.222 4.48688C15.1853 3.6735 15.0548 3.11901 14.8673 2.63383C14.6716 2.13234 14.4106 1.70628 13.9866 1.28226C13.5626 0.858236 13.1365 0.5973 12.635 0.401598C12.1499 0.212011 11.5954 0.0835813 10.782 0.0468871C9.96859 0.0101929 9.70765 0 7.63443 0Z" fill="#C58770"/>
                <path d="M7.63452 3.71387C5.46956 3.71387 3.71436 5.46907 3.71436 7.63403C3.71436 9.79899 5.46956 11.5542 7.63452 11.5542C9.79948 11.5542 11.5547 9.79899 11.5547 7.63403C11.5547 5.46907 9.79948 3.71387 7.63452 3.71387ZM7.63452 10.1802C6.22995 10.1802 5.09039 9.04064 5.09039 7.63607C5.09039 6.2315 6.22995 5.09194 7.63452 5.09194C9.03909 5.09194 10.1786 6.2315 10.1786 7.63607C10.1786 9.04064 9.03909 10.1802 7.63452 10.1802Z" fill="#C58770"/>
                <path d="M11.7095 4.47419C12.215 4.47419 12.6248 4.06439 12.6248 3.55887C12.6248 3.05336 12.215 2.64355 11.7095 2.64355C11.204 2.64355 10.7942 3.05336 10.7942 3.55887C10.7942 4.06439 11.204 4.47419 11.7095 4.47419Z" fill="#C58770"/>
              </svg>
              @Adela.Cavia
            </a>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 mb-6">
              <InstagramFeed />
            </div>
            <a
              href="https://instagram.com/Adela.Cavia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-36 h-6 bg-[#C58770] text-white text-xs font-normal font-poppins leading-5 hover:bg-[#b07860] transition"
            >
              VER EN MI INSTAGRAM
            </a>
          </div>
        </div>
      </section>

      {/* Contacto - Form section */}
      <section id="contacto" className="relative w-full bg-white overflow-hidden">
        <div className="w-full">
          {/* Contenido principal: imagen izquierda + form derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0">
            {/* Imagen izquierda - menos alto, cover */}
            <div className="relative w-full h-full min-h-[750px]">
              <Image
                src="/images/Gastro-Session-4-28 1.png"
                alt="Contacto"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            {/* Columna derecha: título + form */}
            <div className="flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-12 lg:py-16">
              <div className="flex items-start gap-4 mb-8">
                <h2 className="text-red-400 text-3xl font-normal font-swanky leading-[96px] tracking-wider">
                  ¡Enviame un mensaje!
                </h2>
                <div className="relative w-28 h-28 flex-shrink-0">
                  <Image
                    src="/images/19 2.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <form className="space-y-4 w-full max-w-[462px]">
                <div>
                  <label className="block text-black/70 text-base font-light font-poppins leading-7">Nombre y Apellido</label>
                  <svg className="w-full h-px mt-1" viewBox="0 0 462 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.25H462" stroke="#C58770" strokeWidth="0.5" />
                  </svg>
                </div>
                <div>
                  <label className="block text-black/70 text-base font-light font-poppins leading-7">E-mail</label>
                  <svg className="w-full h-px mt-1" viewBox="0 0 462 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.25H462" stroke="#C58770" strokeWidth="0.5" />
                  </svg>
                </div>
                <div>
                  <label className="block text-black/70 text-base font-light font-poppins leading-7">Mensaje</label>
                  <svg className="w-full h-px mt-1" viewBox="0 0 462 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.25H462" stroke="#C58770" strokeWidth="0.5" />
                  </svg>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-24 h-8 bg-[#C58770] flex items-center justify-center text-white text-sm font-medium font-poppins uppercase leading-7 hover:bg-[#b07860] transition"
                >
                  enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full h-28 bg-[#C58770] flex flex-wrap items-center justify-center gap-8 md:gap-16 py-6 px-6">
        <a href="https://linkedin.com" className="text-orange-100 text-lg font-poppins hover:text-white transition">Usuario Linkedin</a>
        <a href="https://instagram.com" className="text-orange-100 text-lg font-poppins hover:text-white transition">@cuenta instagram</a>
        <a href="https://x.com" className="text-orange-100 text-lg font-poppins hover:text-white transition">@cuenta X</a>
        <a href="https://facebook.com" className="text-orange-100 text-lg font-poppins hover:text-white transition">cuenta facebook</a>
        <a href="mailto:contacto@example.com" className="text-orange-100 text-lg font-poppins hover:text-white transition">@mail</a>
      </footer>
    </div>
  );
}
