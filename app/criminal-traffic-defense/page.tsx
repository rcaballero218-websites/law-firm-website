"use client";

import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";

export default function CriminalTrafficPage() {
  const [isSpanish, setIsSpanish] = useState(false);

  const content = useMemo(
    () => ({
      title: isSpanish
        ? "Casos Criminales y de Tráfico"
        : "Criminal & Traffic Cases",
      sections: [
        {
          title: isSpanish ? "Nuestro Compromiso" : "Our Commitment",
          paragraphs: isSpanish
            ? [
                "Entendemos que enfrentar un cargo criminal o una infracción de tráfico grave puede ser estresante y abrumador. Nuestra firma está comprometida a brindarle atención personal, comunicación clara y representación sólida durante todo su caso.",
                "Lo más importante es que usted siempre mantiene el control de su caso. Trabajamos con usted en cada paso del proceso para proteger sus derechos, explicarle sus opciones y buscar el mejor resultado posible.",
              ]
            : [
                "We understand that facing a criminal charge or serious traffic offense can be stressful and overwhelming. Our firm is committed to providing personal attention, clear communication, and strong representation throughout your case.",
                "Most importantly, you remain in control of your case. We work with you through every step of the process to protect your rights, explain your options, and pursue the best possible outcome.",
              ],
        },
        {
          title: isSpanish
            ? "Desde el Inicio de su Caso"
            : "From the Beginning of Your Case",
          paragraphs: isSpanish
            ? [
                "Desde el momento en que usted contrata nuestra oficina, comenzamos a proteger sus derechos y su futuro. Revisamos las citaciones, cargos, reportes policiales, declaraciones de testigos y toda la evidencia disponible.",
                "También solicitamos y obtenemos el descubrimiento del gobierno, es decir, la evidencia que el gobierno planea usar en su contra y la evidencia que pueda ayudarle en su defensa. Revisamos esa información con usted y analizamos cuidadosamente los hechos de su caso.",
              ]
            : [
                "From the moment you retain our office, we begin protecting your rights and your future. We review the charging documents, citations, police reports, witness statements, and all available evidence.",
                "We also request and obtain discovery from the government, meaning the evidence the government intends to use against you and any evidence that may help your defense. We review that information with you and carefully analyze the facts of your case.",
              ],
        },
        {
          title: isSpanish
            ? "Casos Criminales"
            : "Criminal Cases",
          paragraphs: isSpanish
            ? [
                "Una condena criminal puede afectar su libertad, su empleo, su reputación y su futuro. Dependiendo del cargo, las consecuencias pueden incluir cárcel, libertad condicional, multas, antecedentes penales permanentes y otras sanciones.",
                "Nuestra firma le asesora sobre sus derechos, posibles defensas, negociaciones con el fiscal, mociones previas al juicio y preparación para juicio cuando sea necesario. Cada caso es diferente, y evaluamos cuidadosamente los hechos y la ley aplicable para desarrollar la mejor estrategia posible.",
              ]
            : [
                "A criminal conviction can affect your freedom, your employment, your reputation, and your future. Depending on the charge, the consequences may include jail, probation, fines, a permanent criminal record, and other penalties.",
                "Our firm advises you on your rights, potential defenses, negotiations with the prosecutor, pretrial motions, and trial preparation when necessary. Every case is different, and we carefully evaluate the facts and applicable law to develop the strongest strategy possible.",
              ],
        },
        {
          title: isSpanish
            ? "Casos de Tráfico y Licencia"
            : "Traffic Cases & License Issues",
          paragraphs: isSpanish
            ? [
                "Las infracciones de tráfico serias pueden resultar en puntos, suspensión o revocación de licencia, aumento en primas de seguro y, en algunos casos, tiempo en la cárcel. Muchas personas no se dan cuenta del impacto que una citación o condena puede tener en su historial de manejo.",
                "Representamos a clientes en casos de exceso de velocidad grave, manejo imprudente, manejar con licencia suspendida, conducir sin licencia, cargos relacionados con DUI/DWI, y otras infracciones que pueden afectar su privilegio de conducir.",
              ]
            : [
                "Serious traffic offenses can result in points, license suspension or revocation, increased insurance premiums, and in some cases even jail time. Many people do not realize the impact that a citation or conviction can have on their driving record.",
                "We represent clients in serious speeding cases, reckless driving, driving while suspended, driving without a license, DUI/DWI-related charges, and other offenses that can affect your privilege to drive.",
              ],
        },
        {
          title: isSpanish
            ? "Qué Hacer Después de Ser Acusado"
            : "What To Do After Being Charged",
          paragraphs: isSpanish
            ? [
                "Si ha sido acusado de un delito o recibió una citación de tráfico seria, es importante actuar rápido. No haga declaraciones innecesarias y no asuma que explicar su versión resolverá el problema. Lo que usted diga puede ser usado en su contra.",
                "Conserve copias de sus documentos, tome nota de fechas importantes de corte y busque asesoría legal lo antes posible. Una intervención temprana puede marcar una gran diferencia en el resultado de su caso.",
              ]
            : [
                "If you have been charged with a crime or received a serious traffic citation, it is important to act quickly. Do not make unnecessary statements, and do not assume that explaining your side will resolve the situation. What you say may be used against you.",
                "Keep copies of your documents, note all important court dates, and seek legal advice as soon as possible. Early intervention can make a significant difference in the outcome of your case.",
              ],
        },
        {
          title: isSpanish
            ? "Cómo Podemos Ayudar"
            : "How We Can Help",
          paragraphs: isSpanish
            ? [
                "Nuestra firma prepara su caso cuidadosamente desde el principio. Analizamos la legalidad de la parada, el arresto o la investigación, revisamos la evidencia del gobierno y exploramos defensas posibles y oportunidades para reducir o desestimar los cargos cuando los hechos y la ley lo permitan.",
                "Le acompañamos en audiencias, negociaciones y juicio si es necesario. Nuestro objetivo es proteger sus derechos y minimizar el impacto del caso en su vida.",
              ]
            : [
                "Our firm prepares your case carefully from the start. We analyze the legality of the stop, arrest, or investigation, review the government’s evidence, and explore possible defenses and opportunities to reduce or dismiss charges when the facts and law support it.",
                "We stand with you at hearings, in negotiations, and at trial when necessary. Our goal is to protect your rights and minimize the impact of the case on your life.",
              ],
        },
        {
          title: isSpanish ? "Casos Que Manejamos" : "Cases We Handle",
          bullets: isSpanish
            ? [
                "Cargos criminales",
                "DUI / DWI",
                "Infracciones de tráfico graves",
                "Manejar con licencia suspendida",
                "Manejar sin licencia",
                "Cargos relacionados con puntos y suspensión de licencia",
              ]
            : [
                "Criminal charges",
                "DUI / DWI",
                "Serious traffic offenses",
                "Driving while suspended",
                "Driving without a license",
                "Point-related and license suspension matters",
              ],
        },
        {
          title: isSpanish
            ? "Orientación Clara y Atención Personal"
            : "Clear Guidance & Personal Attention",
          paragraphs: isSpanish
            ? [
                "Sabemos que un cargo criminal o una infracción de tráfico puede causar mucha preocupación. Nuestra meta es explicarle el proceso de manera clara, responder sus preguntas y ayudarle a tomar decisiones informadas con confianza.",
                "Nuestro compromiso es brindarle atención personalizada y representación sólida durante cada etapa de su caso.",
              ]
            : [
                "We understand that a criminal charge or traffic offense can cause a great deal of worry. Our goal is to explain the process clearly, answer your questions, and help you make informed decisions with confidence.",
                "Our commitment is to provide personal attention and strong representation during every stage of your case.",
              ],
        },
      ],
    }),
    [isSpanish]
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "#f5f1e8",
        fontFamily: 'Georgia, "Times New Roman", serif',
        padding: "0 20px 60px",
      }}
    >
      <Navbar
        isSpanish={isSpanish}
        onToggleLanguage={() => setIsSpanish((prev) => !prev)}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", paddingTop: "60px" }}>
        <h1 style={titleStyle}>{content.title}</h1>

        <p
          style={{
            ...p,
            textAlign: "center",
            textIndent: 0,
            maxWidth: "900px",
            margin: "0 auto 36px",
          }}
        ></p>

        <div style={{ maxWidth: "900px", margin: "40px auto" }}>
          <iframe
            width="100%"
            height="500"
            src={
              isSpanish
                ? "https://www.youtube.com/embed/SxuFv1U5ugg"
                : "https://www.youtube.com/embed/aMBEaAByBPc"
            }
            title={
              isSpanish
                ? "Casos Criminales y de Tráfico en Maryland"
                : "Criminal and Traffic Cases in Maryland"
            }
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "12px" }}
            key={isSpanish ? "criminal-spanish-video" : "criminal-english-video"}
          ></iframe>
        </div>

        {content.sections.map((section) => (
          <Section key={section.title} {...section} />
        ))}
      </div>
    </main>
  );
}

interface SectionProps {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

function Section({ title, paragraphs, bullets }: SectionProps) {
  return (
    <section style={sectionWrap}>
      <div>
        <h2 style={h2}>{title}</h2>
        <div
          style={{
            width: "100%",
            height: "2px",
            background: "rgba(212, 175, 55, 0.75)",
            marginBottom: "20px",
          }}
        />

        {paragraphs?.map((paragraph, index) => (
          <p key={index} style={p}>
            {paragraph}
          </p>
        ))}

        {bullets && (
          <ul style={ul}>
            {bullets.map((bullet, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

const titleStyle: React.CSSProperties = {
  color: "#d4af37",
  fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
  lineHeight: 1.08,
  letterSpacing: "0.02em",
  fontWeight: 700,
  textAlign: "center",
  margin: "0 0 14px",
  textTransform: "none",
};

const p: React.CSSProperties = {
  color: "#cbc3b7",
  fontSize: "1.1rem",
  lineHeight: 1.85,
  marginBottom: "18px",
  textIndent: "2.2em",
};

const h2: React.CSSProperties = {
  color: "#d4af37",
  fontSize: "clamp(1.65rem, 2.4vw, 2.15rem)",
  lineHeight: 1.2,
  letterSpacing: "0.015em",
  fontWeight: 700,
  margin: "0 0 18px",
};

const ul: React.CSSProperties = {
  color: "#d2cbc0",
  lineHeight: 1.9,
  paddingLeft: "1.4rem",
  margin: "6px 0 0",
  fontSize: "1.08rem",
};

const sectionWrap: React.CSSProperties = {
  marginBottom: "34px",
  background: "linear-gradient(180deg, #141414, #101010)",
  border: "1px solid rgba(212, 175, 55, 0.10)",
  borderRadius: "22px",
  padding: "34px 34px 30px",
  boxShadow: "0 14px 34px rgba(0, 0, 0, 0.24)",
};