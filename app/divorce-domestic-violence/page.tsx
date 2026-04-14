"use client";

import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";

export default function FamilyLawPage() {
  const [isSpanish, setIsSpanish] = useState(false);

  const content = useMemo(
    () => ({
      title: isSpanish
        ? "Divorcio, Custodia y Violencia Doméstica"
        : "Divorce, Child Custody & Domestic Violence",
      sections: [
        {
          title: isSpanish ? "Nuestro Compromiso" : "Our Commitment",
          paragraphs: isSpanish
            ? [
                "Entendemos que los casos de divorcio, custodia y violencia doméstica pueden afectar profundamente su vida, su familia y su tranquilidad. Nuestra firma está comprometida a brindarle atención personal, comunicación clara y representación sólida durante todo su caso.",
                "Lo más importante es que usted siempre mantiene el control de su caso. Nuestra oficina le orientará en cada paso del proceso para que pueda tomar decisiones informadas y proteger sus derechos y los de su familia.",
              ]
            : [
                "We understand that divorce, custody, and domestic violence cases can deeply affect your life, your family, and your peace of mind. Our firm is committed to providing personal attention, clear communication, and strong representation throughout your case.",
                "Most importantly, you remain in control of your case. Our office will guide you through every step of the process so that you can make informed decisions and protect your rights and the well-being of your family.",
              ],
        },
        {
          title: isSpanish ? "Divorcio y Separación" : "Divorce & Separation",
          paragraphs: isSpanish
            ? [
                "El divorcio y la separación pueden implicar asuntos complejos relacionados con bienes, deudas, apoyo económico y el cuidado de los hijos. Es importante entender sus derechos desde el principio para evitar errores que puedan afectar el resultado de su caso.",
                "Nuestra firma le ayuda a entender sus opciones, preparar los documentos necesarios y presentar su caso de manera clara y efectiva ante la corte cuando sea necesario.",
              ]
            : [
                "Divorce and separation can involve complex issues relating to property, debt, financial support, and the care of children. It is important to understand your rights from the beginning to avoid mistakes that may affect the outcome of your case.",
                "Our firm helps you understand your options, prepare the necessary filings, and present your case clearly and effectively in court when necessary.",
              ],
        },
        {
          title: isSpanish ? "Custodia de Hijos y Visitas" : "Child Custody & Visitation",
          paragraphs: isSpanish
            ? [
                "Los casos de custodia y visitas suelen ser emocionalmente difíciles. La corte se enfoca en el interés superior del menor, y es importante presentar los hechos de su caso de manera organizada y persuasiva.",
                "Le ayudamos con asuntos de custodia física y legal, horarios de visitas, modificaciones de custodia y disputas entre padres relacionadas con la crianza de los hijos.",
              ]
            : [
                "Custody and visitation cases are often emotionally difficult. The court focuses on the best interests of the child, and it is important to present the facts of your case in an organized and persuasive way.",
                "We help clients with physical and legal custody issues, visitation schedules, custody modifications, and parenting disputes.",
              ],
        },
        {
          title: isSpanish
            ? "Violencia Doméstica y Órdenes de Protección"
            : "Domestic Violence & Protective Orders",
          paragraphs: isSpanish
            ? [
                "Si usted está enfrentando una situación de violencia doméstica, puede ser necesario solicitar una orden de protección para resguardar su seguridad y la de sus hijos. También podemos representar a personas que han sido acusadas injustamente y necesitan defenderse en este tipo de procedimientos.",
                "Estos casos suelen avanzar rápidamente. Por eso es importante actuar sin demora, reunir la información relevante y obtener asesoría legal lo antes posible.",
              ]
            : [
                "If you are facing a domestic violence situation, it may be necessary to seek a protective order to protect your safety and the safety of your children. We also represent individuals who have been wrongly accused and need to defend themselves in these proceedings.",
                "These cases often move quickly. For that reason, it is important to act without delay, gather the relevant information, and obtain legal advice as soon as possible.",
              ],
        },
        {
          title: isSpanish ? "Qué Puede Hacer Nuestra Firma" : "How Our Firm Can Help",
          paragraphs: isSpanish
            ? [
                "Nuestra firma ofrece representación legal con experiencia y dedicación en asuntos de familia. Le ayudamos a preparar su caso, reunir la documentación necesaria, responder a solicitudes de la otra parte y comparecer en audiencias y juicios.",
                "Cada caso es diferente. Evaluamos cuidadosamente los hechos, explicamos sus opciones legales y trabajamos con usted para buscar el mejor resultado posible según sus objetivos y circunstancias.",
              ]
            : [
                "Our firm provides experienced and dedicated representation in family law matters. We help you prepare your case, gather necessary documentation, respond to filings from the other side, and appear in hearings and trials.",
                "Every case is different. We carefully evaluate the facts, explain your legal options, and work with you to pursue the best possible outcome based on your goals and circumstances.",
              ],
        },
        {
          title: isSpanish ? "Asuntos Que Manejamos" : "Matters We Handle",
          bullets: isSpanish
            ? [
                "Divorcio y separación",
                "Custodia de hijos y visitas",
                "Manutención de menores",
                "Órdenes de protección",
                "Modificaciones de custodia y visitas",
                "Desacatos y cumplimiento de órdenes judiciales",
              ]
            : [
                "Divorce and separation",
                "Child custody and visitation",
                "Child support",
                "Protective orders",
                "Custody and visitation modifications",
                "Contempt and enforcement of court orders",
              ],
        },
        {
          title: isSpanish ? "Orientación Clara y Atención Personal" : "Clear Guidance & Personal Attention",
          paragraphs: isSpanish
            ? [
                "Sabemos que este tipo de casos puede ser abrumador. Nuestra meta es explicarle el proceso de manera clara, responder sus preguntas y ayudarle a tomar decisiones informadas con confianza.",
                "Nuestro compromiso es brindarle atención personalizada y representación sólida durante todo el proceso.",
              ]
            : [
                "We understand that these cases can feel overwhelming. Our goal is to explain the process clearly, answer your questions, and help you make informed decisions with confidence.",
                "Our commitment is to provide personal attention and strong representation throughout the process.",
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
                ? "https://www.youtube.com/embed/4tETySg7yFs"
                : "https://www.youtube.com/embed/MkfNSZtH1a8"
            }
            title={
              isSpanish
                ? "Divorcio, Custodia y Violencia Doméstica en Maryland"
                : "Divorce, Child Custody and Domestic Violence in Maryland"
            }
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "12px" }}
            key={isSpanish ? "family-spanish-video" : "family-english-video"}
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