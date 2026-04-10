"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function CriminalTrafficDefensePage() {
  const [isSpanish, setIsSpanish] = useState(false);

  const content = useMemo(
    () => ({
      title: isSpanish
        ? "Casos Criminal y Tráffico"
        : "Criminal & Traffic Cases",
      
      sections: [
        {
          title: isSpanish ? "Nuestro Compromiso" : "Our Commitment",
          imageSrc: "/lion.jpg",
          imageAlt: isSpanish ? "Fuerza y defensa" : "Strength and advocacy",
          imageLeft: false,
          paragraphs: isSpanish
            ? [
                "Ser acusado de un delito criminal o de una infracción seria de tránsito puede ser abrumador y estresante. Una condena puede afectar su libertad, su licencia de conducir, sus tarifas de seguro, su empleo y su futuro. Nuestra firma brinda representación experimentada para clientes que enfrentan asuntos criminales y de tránsito en Maryland y Washington, D.C.",
                "Desde el momento en que usted contrata nuestra oficina, trabajamos para proteger sus derechos y su libertad. Revisamos los documentos de cargo y las citaciones de tránsito, declaraciones de testigos, reportes policiales y toda la evidencia disponible. Analizamos los hechos del caso y solicitamos y obtenemos todo el descubrimiento de parte del gobierno, incluyendo la evidencia que el gobierno pretende usar en su contra y la evidencia que puede ayudarle. Revisamos ese descubrimiento con usted, hablamos con los testigos que pueden testificar en su contra y con los que pueden ayudar en su defensa.",
                "Tengo 35 años de experiencia manejando casos criminales serios, incluyendo homicidio y violación. Le ayudaré a tomar decisiones informadas sobre su caso y le daré atención cuidadosa y personal.",
              ]
            : [
                "Being charged with a criminal offense or serious traffic violation can be overwhelming and stressful. A conviction can affect your freedom, your driver’s license, your insurance rates, your employment, and your future. Our firm provides experienced representation for clients facing criminal and traffic matters in Maryland and Washington, D.C.",
                "From the moment you retain our office, we work to protect your rights and your freedom. We review the charging documents and traffic citations, witness statements, police reports, and all available evidence. We analyze the facts of the case and request and obtain all discovery from the government, including the evidence that the government intends to use against you and the evidence that may help you. We review this discovery with you, speak to witnesses who may testify against you, and speak to witnesses who may help in your defense.",
                "I have 35 years of experience handling serious criminal cases, including murder and rape. I will help you make informed decisions about your case, and I will give you careful and personal attention.",
              ],
        },
        {
          title: isSpanish ? "Cargos Criminales" : "Criminal Charges",
          imageSrc: "/courtroom-hero.png",
          imageAlt: isSpanish ? "Cargos criminales" : "Defense against criminal charges",
          imageLeft: true,
          paragraphs: isSpanish
            ? [
                "Los cargos criminales pueden incluir asalto, robo, delitos relacionados con drogas, violaciones de libertad condicional y otras alegaciones de delitos menores o mayores. Aun cuando un caso parezca menor, las consecuencias pueden ser serias. Una condena criminal puede resultar en cárcel, libertad condicional, multas y un récord permanente.",
                "Nuestra oficina trabaja para identificar defensas, atacar debilidades en el caso del Estado y buscar el mejor resultado posible con base en los hechos, la evidencia disponible y sus objetivos.",
              ]
            : [
                "Criminal charges may include assault, theft, drug-related offenses, probation violations, and other misdemeanor or felony allegations. Even when a case appears minor, the consequences can be serious. A criminal conviction may result in jail time, probation, fines, and a permanent record.",
                "Our office works to identify defenses, challenge weaknesses in the State’s case, and pursue the best possible result based on the facts, the available evidence, and your goals.",
              ],
        },
        {
          title: isSpanish ? "Infracciones de Tránsito" : "Traffic Offenses",
          imageSrc: "/lion.jpg",
          imageAlt: isSpanish ? "Asuntos de tránsito" : "Traffic offense representation",
          imageLeft: false,
          paragraphs: isSpanish
            ? [
                "Los asuntos de tránsito pueden tener consecuencias mucho mayores que una simple multa. Ciertas violaciones pueden causar puntos en su récord de manejo, aumento en las primas de seguro, suspensión de la licencia o incluso exposición a cárcel. Representamos a clientes en una amplia gama de asuntos de tránsito, incluyendo exceso de velocidad, manejo temerario, conducir sin licencia, conducir con licencia suspendida y otras citaciones serias.",
                "En muchos casos, la meta no es solo evitar una condena, sino también proteger sus privilegios de manejo y minimizar el impacto a largo plazo en su récord.",
              ]
            : [
                "Traffic matters can carry consequences far beyond a fine. Certain violations may lead to points on your driving record, increased insurance premiums, license suspension, or even jail exposure. We represent clients in a wide range of traffic matters, including speeding, reckless driving, driving without a license, driving while suspended, and other serious citations.",
                "In many cases, the goal is not only to avoid a conviction, but also to protect your driving privileges and minimize the long-term impact on your record.",
              ],
        },
        {
          title: isSpanish ? "Defensa de DUI / DWI" : "DUI / DWI Defense",
          imageSrc: "/courtroom-hero.png",
          imageAlt: isSpanish ? "Defensa DUI" : "DUI and DWI defense",
          imageLeft: true,
          paragraphs: isSpanish
            ? [
                "Las citaciones de tránsito son manejadas por una corte de ley. La evidencia en contra de un acusado a menudo incluye observaciones policiales, pruebas de sobriedad en el campo, pruebas de aliento, pruebas de sangre, grabaciones de cámaras corporales y declaraciones supuestamente hechas por el conductor y testigos. Una condena puede implicar multas, puntos, consecuencias para la licencia, libertad condicional y posible encarcelamiento.",
                "Nuestra oficina revisa cada parte de la parada y del arresto para determinar si el oficial tenía derecho a detenerle o acercarse a usted, si tenía causa probable para arrestarle, si su desempeño en las pruebas de sobriedad fue realmente deficiente y si la evidencia es suficiente para encontrarle culpable más allá de duda razonable.",
                "Los cargos relacionados con alcohol o conducción bajo influencia requieren atención inmediata y frecuentemente implican un procedimiento legal separado sobre la posible suspensión de su licencia por parte del MVA. Muchas veces el oficial que le expidió la citación también toma su licencia plástica de Maryland y le entrega una licencia temporal.",
                "Es importante que usted sepa que, para evitar una posible suspensión de su licencia, debe dentro de 30 días firmar y completar la parte de atrás de la licencia temporal y enviar un cheque por $150.00 pagadero al Maryland State Treasurer a la Office of Administrative Hearings.",
              ]
            : [
                "Traffic citations are handled by a court of law. The evidence against an accused often involves police observations, field sobriety tests, breath testing, blood testing, body camera footage, and statements allegedly made by the driver and witnesses. A conviction can carry fines, points, license consequences, probation, and possible incarceration.",
                "Our office reviews every part of the stop and arrest to determine whether the police officer had a right to stop or approach you, whether the officer had probable cause to arrest you, whether your performance on the field sobriety tests was poor, and whether the evidence is sufficient to find you guilty beyond a reasonable doubt.",
                "Charges involving alcohol or impaired driving require immediate attention and often involve a separate legal proceeding concerning the possible suspension of your driver’s license by the MVA. Often, the police officer who wrote the citation also takes your Maryland plastic driver’s license and provides you with a temporary license.",
                "It is important for you to know that, in order to avoid a possible suspension of your license, you must, within 30 days, sign and complete the back of the temporary license and send a check for $150.00 made payable to the Maryland State Treasurer to the Office of Administrative Hearings.",
              ],
        },
        {
          title: isSpanish ? "Protegiendo Sus Derechos" : "Protecting Your Rights",
          imageSrc: "/lion.jpg",
          imageAlt: isSpanish ? "Protección de derechos" : "Protecting your rights",
          imageLeft: false,
          paragraphs: isSpanish
            ? [
                "Si ha sido acusado de un delito o de una infracción seria de tránsito, es importante que sepa que usted no está obligado a hablar con la policía ni a responder sus preguntas. Muchas veces, la peor evidencia en contra de un acusado son las declaraciones o admisiones que hace antes de su arresto.",
                "Es importante contratar a un abogado tan pronto como usted sea arrestado o acusado para que sus derechos estén protegidos. Ayudamos a nuestros clientes a entender los cargos, las posibles sanciones, las defensas disponibles y las opciones realistas para resolver el caso.",
              ]
            : [
                "If you have been charged with a crime or serious traffic offense, it is important for you to know that you are not required to speak with or answer questions asked by the police. Often, the worst evidence against an accused is the statements or admissions that the accused makes prior to his or her arrest.",
                "It is important to retain an attorney as soon as you are arrested or charged so that your rights are protected. We help clients understand the charges, the possible penalties, the available defenses, and the realistic options for resolving the case.",
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
        >
        </p>

        <div style={heroWrap}>
          <video
            controls
            preload="metadata"
            poster={isSpanish ? "/CRIM-TRAF-Spanish-CC-Cover.jpg" : "/CRIM-TRAF-English-CC-Cover.jpg"}
            style={heroVideo}
            key={isSpanish ? "spanish" : "english"}
          >
            <source
              src={isSpanish ? "/CRIM-TRAF-Spanish-CC.mp4" : "/CRIM-TRAF-English-CC.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
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
  paragraphs: string[];
}

function Section({
  title,
  paragraphs,
}: SectionProps) {
  return (
    <section style={sectionWrap}>
      <div>
        <h2 style={h2}>{title}</h2>
          <div
            style={{
              width: "1020px",
              height: "2px",
              background: "rgba(212, 175, 55, 0.75)",
              marginBottom: "20px",
            }}
          />

        {paragraphs.map((paragraph, index) => (
          <p key={index} style={p}>
            {paragraph}
          </p>
        ))}
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

const heroWrap: React.CSSProperties = {
  marginBottom: "42px",
  borderRadius: "20px",
  overflow: "hidden",
  border: "1px solid rgba(212, 175, 55, 0.14)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.28)",
};

const heroImage: React.CSSProperties = {
  width: "100%",
  height: "auto",
  display: "block",
  objectFit: "cover",
  maxHeight: "480px",
};

const sectionWrap: React.CSSProperties = {
  marginBottom: "34px",
  background: "linear-gradient(180deg, #141414, #101010)",
  border: "1px solid rgba(212, 175, 55, 0.10)",
  borderRadius: "22px",
  padding: "34px 34px 30px",
  boxShadow: "0 14px 34px rgba(0, 0, 0, 0.24)",
};

const heroVideo: React.CSSProperties = {
  width: "100%",
  height: "auto",
  display: "block",
  objectFit: "cover",
  maxHeight: "520px",
  background: "#000",
};