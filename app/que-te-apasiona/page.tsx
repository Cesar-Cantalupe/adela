"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { AnimatedSection } from "@/components/AnimatedSection";


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
  {/* Trazo superior del mismo tono que la sección hero */}
  <div className="pointer-events-none absolute inset-x-0 top-[-34px] h-[210px] opacity-100">
    <svg
      viewBox="0 0 1440 230"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 28C155 145 360 150 520 40C640 -42 760 -8 878 58C1005 130 1110 168 1268 98C1350 62 1405 24 1460 -6"
        stroke="#F3E5E2"
        strokeWidth="34"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>

  {/* Decorativos superiores */}
  <div className="pointer-events-none absolute left-[24px] top-[14px] z-0 hidden md:block">
    <Image
      src="/images/libro/flechaseccion2.png"
      alt=""
      width={132}
      height={92}
      className="object-contain"
      unoptimized
    />
  </div>

  <div className="pointer-events-none absolute left-1/2 top-[10px] z-0 hidden md:block -translate-x-1/2">
    <Image
      src="/images/libro/garabato1.png"
      alt=""
      width={42}
      height={42}
      className="object-contain"
      unoptimized
    />
  </div>

  <div className="pointer-events-none absolute right-[42px] top-[62px] z-0 hidden md:block">
    <Image
      src="/images/libro/garabato2.png"
      alt=""
      width={48}
      height={48}
      className="object-contain"
      unoptimized
    />
  </div>

  <div className="relative z-10 mx-auto grid max-w-[1474px] grid-cols-1 gap-10 px-6 py-14 md:px-10 lg:grid-cols-[minmax(0,650px)_minmax(430px,1fr)] lg:items-start lg:px-[28px] lg:py-20 xl:grid-cols-[minmax(0,670px)_minmax(470px,1fr)]">
    {/* Columna izquierda */}
    <div className="max-w-[650px] lg:pl-[84px] xl:pl-[110px]">
      <div className="mb-10 flex items-start gap-7">
        <div className="relative h-[112px] w-[112px] flex-shrink-0">
          <Image
            src="/images/libro/maquinaconarbol.png"
            alt=""
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        <div className="max-w-[390px] pt-2">
          <p className="text-[14px] leading-[2.1] font-semibold font-poppins text-[#8C97A3]">
            El tema me interesa tanto, que escribí un libro
            <br />
            sobre ello: “¿Qué te apasiona?
            <br />
            Al encuentro de tu pasión”.
          </p>
        </div>
      </div>

      <div className="max-w-[660px] space-y-6 text-[13px] leading-[2.05] font-light font-poppins text-[#3B3434]">
        <p>
          No busco con este libro proponer una visión simplista de la pasión, del tipo
          “la tienes o no la tienes”. Lo que ofrezco es un mapa, un camino, una guía
          para intentar conectar con ella y recuperarla, una misión conquistadora
          para poseerla.
        </p>

        <p>
          Descubrir lo que nos apasiona puede ser un camino muy directo y llano
          para algunos, pero sinuoso y con vueltas para otros. Y eso no está mal.
          De lo que se trata es de poder saborear ambos procesos.
        </p>

        <p>
          También con este libro, quiero crear una conexión entre el propósito y el
          sentido profundo de la vida, el norte en nuestro mapa de la pasión. Lo que
          nos apasiona es ese motor que nos permite tener la energía para recorrer
          el camino con ilusión y entusiasmo durante toda la vida, más allá de las
          dificultades que, sin duda, surgirán.
        </p>

        <p>
          Pero, más allá de mis intenciones y deseos, este libro es tu viaje; yo solo
          estoy para guiarte y compartir algunos aprendizajes con la idea de que te
          los apropies, los adaptes y los uses de la forma más personal posible.
        </p>
      </div>
    </div>

    {/* Columna derecha */}
    <div className="flex items-center justify-center lg:justify-end lg:pr-[90px] xl:pr-[120px]">
      <div className="relative aspect-[560/560] w-full max-w-[500px] xl:max-w-[540px]">
        <Image
          src="/images/libro/libro-flotante.png"
          alt="Libro ¿Qué te apasiona?"
          fill
          className="object-contain drop-shadow-[0_18px_20px_rgba(0,0,0,0.16)]"
          sizes="(max-width: 1024px) 100vw, 540px"
          unoptimized
        />
      </div>
    </div>
  </div>
</section>


        {/* MANIFIESTO CENTRAL */}
<section className="relative overflow-hidden bg-[#F4F3F1]">
  {/* Formas laterales */}
  <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-[260px] md:block opacity-45">
    <Image
      src="/images/libro/formasizquierdas.png"
      alt=""
      fill
      className="object-cover object-left-top"
      unoptimized
    />
  </div>

  <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[340px] md:block opacity-45">
    <Image
      src="/images/libro/formasderecha.png"
      alt=""
      fill
      className="object-cover object-right-top"
      unoptimized
    />
  </div>

  <div className="relative z-10 mx-auto max-w-[980px] px-6 py-20 text-center md:px-10 lg:py-24">
    <h2 className="text-[48px] leading-none tracking-[0.18em] font-light font-poppins uppercase text-[#7E7474] sm:text-[41px]">
      LO QUE TE APASIONA
    </h2>

    <p className="mt-4 text-[28px] leading-none font-swanky text-[#4A403F]">
      un viaje al centro de ti mismo
    </p>

    <div className="mx-auto mt-12 max-w-[550px] space-y-8 text-[13px] leading-[2.15] font-light font-poppins text-[#3B3434]">
      <p>
        Deseo que este libro te inspire y pueda contribuir a tu transformación, la
        que necesites para ir descubriendo y poniendo en práctica lo que te
        apasiona.
      </p>

      <p>
        La mayoría de las historias que comparto en el libro son personales o de
        gente cercana a las que conozco, quiero, admiro y cuyas vidas me resultan,
        de una forma u otra, inspiradoras. Sus historias son inspiradoras, pero
        detrás de ellas hay personas comunes, como cada uno de nosotros.
      </p>

      <p>
        Elegí hacerlo de esta manera porque, muchas veces, las narrativas de éxito
        de personas muy destacadas pueden tener una influencia avasallante y
        hacernos creer que eso le pasa solo a gente “especial”. Y a mí me gustaría
        que sientas, al ir leyendo, que son cosas que nos pasan a todos. Este es el
        motivo de la elección.
      </p>
    </div>
  </div>
</section>

{/* TEMAS DEL LIBRO */}
<section className="relative overflow-hidden bg-[#FBFBF8]">
  {/* Forma de fondo inferior */}
  <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[92%] opacity-60 md:h-[360px] lg:h-[400px]">
    <Image
      src="/images/libro/forma1.png"
      alt=""
      fill
      className="object-contain object-left-bottom"
      unoptimized
    />
  </div>

  <div className="relative z-10 mx-auto max-w-[860px] px-6 py-16 md:px-10 lg:py-20">
    {/* Título manuscrito */}
    <div className="mb-14 text-center">
      <p className="mx-auto max-w-[500px] text-[27px] leading-[1.35] font-swanky text-[#8E99A8]">
        El libro plantea una aventura para ir al
        <br />
        encuentro de lo que te apasiona y
        <br />
        recorre estos temas:
      </p>
    </div>

    {/* Tabla de temas */}
    <div className="mx-auto max-w-[720px] border-t border-[#C8CED3]">
      {/* Fila 1 */}
      <div className="grid grid-cols-1 gap-5 py-6 md:grid-cols-[230px_minmax(0,1fr)] md:gap-8 border-b border-[#C8CED3]">
        <div>
          <p className="text-[12px] leading-[1.15] font-poppins uppercase tracking-[0.04em] text-[#D2BE61]">
            Sobre la aventura de <br /> descubrir y hacer lo <br /> que te apasiona
          </p>
        </div>
        <div className="space-y-1 text-[12px] leading-[1.9] font-light font-poppins text-[#3B3434]">
          <p>– Cómo usar este libro</p>
          <p>Preparándonos para transitar el camino: Amigarte, Gratitud, Reconocimiento (AGR)</p>
          <p>Breve historia de la pasión</p>
        </div>
      </div>

      {/* Fila 2 */}
      <div className="grid grid-cols-1 gap-5 py-6 md:grid-cols-[230px_minmax(0,1fr)] md:gap-8 border-b border-[#C8CED3]">
        <div>
          <p className="text-[12px] leading-[1.15] font-poppins uppercase tracking-[0.04em] text-[#D9A8A0]">
            Primera parte.
            <br />
            El método 3. El
            <br />
            camino. Hacia el
            <br />
            descubrimiento de lo que
            <br />
            te apasiona
          </p>
        </div>
        <div className="space-y-1 text-[12px] leading-[1.9] font-light font-poppins text-[#3B3434]">
          <p>Reconectar con nuestra identidad profunda</p>
          <p>Las emociones que alientan y obstruyen el camino hacia el</p>
          <p>descubrimiento y realización de lo que nos apasiona</p>
        </div>
      </div>

      {/* Fila 3 */}
      <div className="grid grid-cols-1 gap-5 py-6 md:grid-cols-[230px_minmax(0,1fr)] md:gap-8">
        <div>
          <p className="text-[12px] leading-[1.15] font-poppins uppercase tracking-[0.04em] text-[#9AA6B5]">
            Segunda parte.
            <br />
            Conectar con la pasión
          </p>
        </div>
        <div className="space-y-1 text-[12px] leading-[1.9] font-light font-poppins text-[#3B3434]">
          <p>Formas de encontrar la pasión</p>
          <p>(Re)encontrarnos con nuestra pasión</p>
          <p>¿Seguir tu pasión o buscar tu pasión?</p>
          <p>Mentores y guías</p>
          <p>El impacto de tu pasión en los demás y en tu comunidad</p>
          <p>¿Qué te apasiona?</p>
        </div>
      </div>
    </div>

    {/* Ejercicios del libro */}
    <div className="mt-20 text-center">
      <h3 className="text-[26px] leading-none font-swanky text-[#8E99A8]">
        Ejercicios del libro
      </h3>

      <p className="mx-auto mt-8 max-w-[500px] text-[13px] leading-[2.05] font-light font-poppins text-[#3B3434]">
        Si lo estás leyendo verás que en algunos momentos hay referencia a
        ejercicios y actividades que remiten a mi página web. Acá encontrarás
        esos ejercicios, que los dejo abiertos a todos para que puedan
        “asomarse” al libro y si les divierte y atrapa, leerlo completo.
      </p>
    </div>
  </div>
</section>



  {/* ACTIVIDAD 1 */}
        <section className="relative overflow-hidden bg-[#F6F3EA]">
          <div className="mx-auto max-w-[1474px] px-6 py-14 md:px-10 lg:px-[72px] lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_80px_minmax(0,1fr)] lg:gap-12">
              <div>
                <h3 className="text-[28px] leading-[1.1] tracking-[0.08em] font-light font-poppins uppercase text-[#D2C26A]">
                  Actividad 1
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
  {openEmocional ? (
    <>
      <Squiggle
        className="pointer-events-none absolute bottom-0 right-0 h-full w-full opacity-15"
        stroke="#E3DBCF"
      />

      <div className="mx-auto max-w-[1474px] px-6 py-14 md:px-10 lg:px-[72px] lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <div className="mb-8 flex items-start justify-between gap-6">
              <h3 className="text-[28px] leading-[1.1] tracking-[0.08em] font-light font-poppins uppercase text-[#D1BA64]">
                ACTIVIDAD SOBRE
                <br />
                TU UNIVERSO
                <br />
                EMOCIONAL
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
          </div>

          <div className="max-w-[620px]">
            <p className="text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
              La siguiente actividad es enfocarte en alguna situación que percibas que te
              está trabando y observarla como si fueras otra persona. Este ejercicio te
              permite tener otra perspectiva.
            </p>

            <div className="mt-8 space-y-4 text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
              <p className="font-medium">
                Luego de identificar la situación:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Reconoce lo que estás sintiendo, poniéndole nombre.</li>
                <li>Intenta entender con qué se conecta y las causas subyacentes.</li>
                <li>Valida esas emociones que aparecen, dales un espacio y acepta que tienen una razón de ser.</li>
                <li>Busca herramientas para gestionarlas de manera más asertiva.</li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => setOpenEmocional(false)}
              className="mt-6 inline-flex h-8 items-center justify-center bg-[#C6A62A] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90"
            >
              Ver menos
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="mx-auto max-w-[1474px] px-6 py-14 md:px-10 lg:px-[72px] lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_80px_minmax(0,1fr)] lg:gap-12">
        <div>
          <h3 className="text-[28px] leading-[1.1] tracking-[0.08em] font-light font-poppins uppercase text-[#D1BA64]">
            ACTIVIDAD SOBRE
            <br />
            TU UNIVERSO
            <br />
            EMOCIONAL
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
            Para identificar las emociones y los sentimientos que estamos experimentando te
            propongo una herramienta llamada “Medidor emocional”. Además, la siguiente
            actividad te invita a enfocarte en una situación que percibas como trabante y
            observarla como si fueras otra persona.
          </p>

          <button
            type="button"
            onClick={() => setOpenEmocional(true)}
            className="mt-6 inline-flex h-8 items-center justify-center bg-[#C6A62A] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  )}
</section>

{/* ACTIVIDAD 2 */}
<section className="relative overflow-hidden bg-[#F3EFE7]">
  <AnimatePresence initial={false} mode="wait">
    {openEmocional ? (
      <motion.div
        key="expanded"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        <Squiggle
          className="pointer-events-none absolute bottom-0 right-0 h-full w-full opacity-15"
          stroke="#E3DBCF"
        />

        <div className="mx-auto max-w-[1474px] px-6 py-14 md:px-10 lg:px-[72px] lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* Columna izquierda */}
            <div>
              <div className="mb-8 flex items-start justify-between gap-6">
                <h3 className="text-[28px] leading-[1.1] tracking-[0.08em] font-light font-poppins uppercase text-[#D1BA64]">
                  ACTIVIDAD SOBRE
                  <br />
                  TU UNIVERSO
                  <br />
                  EMOCIONAL
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
                propongo una herramienta llamada "Medidor emocional". Es un diseño elaborado
                por la Universidad de Yale en el marco del proyecto RULER. El mismo mide los
                fenómenos emocionales en dos ejes: uno relativo a la energía, alta o baja; y
                otro relativo a la sensación, negativa o de displacer y positiva o de bienestar.
              </p>

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

                
                <a  href="/images/libro/medidor-emocional.png"
                  download="medidor-emocional.png"
                  className="mt-6 inline-flex h-8 items-center justify-center bg-[#C6A62A] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90"
                >
                  Descargar
                </a>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="max-w-[620px]">
              <p className="text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
                La siguiente actividad es enfocarte en alguna situación que percibas que te
                está trabando y observarla como si fueras otra persona. Este ejercicio te
                permite tener otra perspectiva (obsérvala como si estuvieras escuchando a una
                amiga o amigo e intentando ayudarla/o con esa situación).
              </p>

              <div className="mt-8 space-y-4 text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
                <p className="font-medium">
                  Luego de identificar la situación:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    Reconoce lo que estás sintiendo, poniéndole nombre (podemos sentir muchas
                    cosas, porque el universo emocional es complejo, así que indaga más allá
                    de lo primero que aparezca).
                  </li>
                  <li>
                    Intenta entender con qué se conecta, y las causas subyacentes y las
                    consecuencias de esas emociones que estás sintiendo.
                  </li>
                  <li>
                    Valida esas emociones que aparecen, dales un espacio y acepta que tienen
                    una razón de ser.
                  </li>
                  <li>
                    Y luego de todo eso, busca herramientas para gestionarlas de manera más
                    asertiva: hablándolo con alguien, haciendo ejercicios de respiración y de
                    conexión corporal, meditando, haciendo ejercicio, dibujando o escribiendo
                    lo que aparece. Cosas que te den bienestar y placer y te conecten con
                    asuntos positivos de la misma situación.
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setOpenEmocional(false)}
                className="mt-6 inline-flex h-8 items-center justify-center bg-[#C6A62A] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90"
              >
                Ver menos
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    ) : (
      <motion.div
        key="collapsed"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="mx-auto max-w-[1474px] px-6 py-14 md:px-10 lg:px-[72px] lg:py-16"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_80px_minmax(0,1fr)] lg:gap-12">
          <div>
            <h3 className="text-[28px] leading-[1.1] tracking-[0.08em] font-light font-poppins uppercase text-[#D1BA64]">
              ACTIVIDAD SOBRE
              <br />
              TU UNIVERSO
              <br />
              EMOCIONAL
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
              Para identificar las emociones y los sentimientos que estamos experimentando te
              propongo una herramienta llamada "Medidor emocional". Además, la siguiente
              actividad te invita a enfocarte en una situación que percibas como trabante y
              observarla como si fueras otra persona.
            </p>

            <button
              type="button"
              onClick={() => setOpenEmocional(true)}
              className="mt-6 inline-flex h-8 items-center justify-center bg-[#C6A62A] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90"
            >
              Ver más
            </button>
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
        <motion.div
          key="expanded"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative h-12 w-12 mb-8">
            <Image
              src="/images/libro/icono-mapa.png"
              alt=""
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          <p className="-rotate-[2deg] text-[24px] leading-[1.15] font-swanky text-[#8A99A8]">
            Desarrollando nuestra
            <br />
            regulación emocional:
          </p>

          <h3 className="mt-6 text-[24px] leading-[1.18] tracking-[0.03em] font-light font-poppins uppercase text-[#8A99A8]">
            <span className="block">Del miedo y la frustración</span>
            <span className="block">a la resiliencia y la esperanza</span>
          </h3>

          <p className="mt-8 max-w-[600px] text-[13px] leading-7 font-light font-poppins text-[#3B3434]">
            Hemos llegado hasta este punto y nos parece importante hacer un
            reconocimiento. Un reconocimiento íntimo y personal por haber hecho el
            recorrido propuesto hasta acá y por haber atravesado todo este proceso
            de descubrimiento personal.
          </p>

          <div className="mt-10 relative aspect-[930/620] w-full max-w-[760px]">
            <Image
              src="/images/libro/diploma.png"
              alt="Diploma de reconocimiento"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 760px"
              unoptimized
            />
          </div>

          
       <a     href="/images/libro/diploma.pdf"
            download="diploma-de-reconocimiento.pdf"
            className="mt-6 inline-flex h-8 items-center justify-center bg-[#C6A62A] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90"
          >
            Descargar diploma
          </a>

          <button
            type="button"
            onClick={() => setOpenDiploma(false)}
            className="mt-4 inline-flex h-8 items-center justify-center bg-[#8A99A8] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90"
          >
            Ver menos
          </button>
        </motion.div>
      ) : (
        <motion.div
          key="collapsed"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_80px_minmax(0,1fr)] lg:gap-12"
        >
          <div>
            <p className="-rotate-[2deg] origin-left text-[24px] leading-[1.15] font-swanky text-[#8A99A8]">
              Desarrollando nuestra
              <br />
              regulación emocional:
            </p>
            <h3 className="mt-8 text-[24px] leading-[1.18] tracking-[0.03em] font-light font-poppins uppercase text-[#8A99A8]">
              <span className="block whitespace-nowrap">Del miedo y la frustración</span>
              <span className="block whitespace-nowrap">a la resiliencia y la esperanza</span>
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
              Hemos llegado hasta este punto y nos parece importante hacer un
              reconocimiento. Un reconocimiento íntimo y personal por haber hecho el
              recorrido propuesto hasta acá y por haber atravesado todo este proceso
              de descubrimiento personal.
            </p>

            <button
              type="button"
              onClick={() => setOpenDiploma(true)}
              className="mt-6 inline-flex h-8 items-center justify-center bg-[#8A99A8] px-5 text-[11px] uppercase tracking-[0.12em] text-white font-poppins transition hover:opacity-90"
            >
              Ver más
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</section>

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
          src="/images/Gastro-Session-4-28 1.png"
          alt="Contacto"
          fill
          className="object-cover"
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
    </div>
  );
}
