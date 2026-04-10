"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function DivorceDomesticViolencePage() {
  const [isSpanish, setIsSpanish] = useState(false);

  const content = useMemo(
    () => ({
      title: isSpanish
        ? "Divorcio, Custodia, y Violencia Doméstica"
        : "Divorce, Custody, and Domestic Violence",
      
      sections: [
        {
          title: isSpanish ? "Resumen General" : "Overview",
          imageSrc: "/lion.jpg",
          imageAlt: isSpanish ? "Representación familiar" : "Family law representation",
          imageLeft: false,
          paragraphs: isSpanish
            ? [
                "Los asuntos de derecho de familia pueden ser algunos de los problemas legales más emocionales y difíciles que una persona enfrentará en su vida. Ya sea que usted esté lidiando con divorcio, custodia de hijos, manutención de hijos o violencia doméstica, el resultado puede afectar a su familia, sus finanzas y su tranquilidad por muchos años. Nuestra firma ofrece representación cuidadosa, fuerte y compasiva en estos asuntos serios.",
                "Entendemos que cada situación familiar es diferente. Nuestra meta es explicarle el proceso legal con claridad, proteger sus derechos y ayudarle a tomar decisiones informadas que sean en su mejor interés y en el mejor interés de sus hijos.",
              ]
            : [
                "Family law matters can be some of the most emotional and difficult legal issues a person will ever face. Whether you are dealing with divorce, child custody, child support, or domestic violence, the outcome can affect your family, your finances, and your peace of mind for years to come. Our firm provides thoughtful, strong, and compassionate representation in these serious matters.",
                "We understand that every family situation is different. Our goal is to explain the legal process clearly, protect your rights, and help you make informed decisions that are in your and your children’s best interests.",
              ],
        },
        {
          title: isSpanish ? "Divorcio" : "Divorce",
          imageSrc: "/courtroom-hero.png",
          imageAlt: isSpanish ? "Proceso de divorcio" : "Divorce legal process",
          imageLeft: true,
          paragraphs: isSpanish
            ? [
                "El divorcio implica mucho más que simplemente terminar un matrimonio. También puede incluir disputas relacionadas con custodia y visitas de hijos menores, manutención de hijos, división de propiedad marital, apoyo económico, pensión alimenticia, activos de retiro, deudas y otros asuntos familiares importantes. Incluso cuando ambas partes quieren un divorcio, pueden surgir desacuerdos sobre los términos y sobre cómo deben resolverse esos asuntos.",
                "Nuestra oficina ayuda a los clientes a entender sus opciones, prepara los documentos necesarios para la corte y trabaja hacia resoluciones justas y prácticas. Cuando es posible llegar a un acuerdo, trabajamos para lograrlo. Cuando el litigio es necesario, estamos preparados para representarle en la corte.",
                "Ayudamos a nuestros clientes a presentar su caso de forma clara y efectiva. Ya sea que usted esté buscando custodia, defendiéndose de acusaciones injustas o tratando de establecer un arreglo de crianza que funcione, nuestra firma trabaja para proteger su relación con su hijo y buscar un resultado estable y apropiado. Nuestra oficina ayuda a los clientes a entender estos asuntos y trabaja para asegurar que las cuestiones financieras se manejen de forma justa y de acuerdo con la ley.",
              ]
            : [
                "Divorce involves more than simply ending a marriage. It can also include disputes involving custody and visitation of minor children, child support, division of marital property, financial support, alimony, retirement assets, debts, and other important family issues. Even when both parties want a divorce, disagreements may arise regarding the terms and how those issues should be resolved.",
                "Our office helps clients understand their options, prepares the necessary court filings, and works toward fair and practical resolutions. When settlement is possible, we work to achieve it. When litigation is necessary, we are prepared to advocate for you in court.",
                "We help our clients present their case clearly and effectively. Whether you are seeking custody, defending against unfair allegations, or trying to establish a workable parenting arrangement, our firm works to protect your relationship with your child and pursue a stable, appropriate outcome. Our office helps clients understand these issues and works to ensure that financial matters are addressed fairly and in accordance with the law.",
              ],
        },
        {
          title: isSpanish
            ? "Violencia Doméstica y Órdenes de Protección"
            : "Domestic Violence & Protective Orders",
          imageSrc: "/lion.jpg",
          imageAlt: isSpanish ? "Órdenes de protección" : "Protective order representation",
          imageLeft: false,
          paragraphs: isSpanish
            ? [
                "Las situaciones de violencia doméstica requieren atención inmediata y seria. Si usted está en peligro o ha sido amenazado, acosado, agredido o abusado por un familiar, pareja íntima o miembro del hogar, puede necesitar protección legal de inmediato. Las cortes pueden emitir órdenes de protección que restrinjan el contacto, exijan que una persona se mantenga alejada de su hogar o lugar de trabajo y provean otros remedios importantes.",
                "Nuestra firma ayuda a clientes a solicitar órdenes de protección y también representa a quienes han sido acusados y necesitan una oportunidad justa para defenderse en la corte. Las alegaciones de violencia doméstica pueden tener consecuencias serias para inmigración, custodia, vivienda, empleo y la reputación de una persona.",
              ]
            : [
                "Domestic violence situations require immediate and serious attention. If you are in danger or have been threatened, harassed, assaulted, or abused by a family member, intimate partner, or household member, you may need legal protection right away. Courts may issue protective orders that restrict contact, require a person to stay away from your home or workplace, and provide other important relief.",
                "Our firm assists clients in seeking protective orders and also represents those who have been accused and need a fair opportunity to defend themselves in court. Allegations of domestic violence can have serious consequences for immigration, custody, housing, employment, and a person’s reputation.",
              ],
        },
        {
          title: isSpanish
            ? "Por Qué la Orientación Legal Temprana Importa"
            : "Why Early Legal Guidance Matters",
          imageSrc: "/courtroom-hero.png",
          imageAlt: isSpanish ? "Guía legal temprana" : "Legal strategy and guidance",
          imageLeft: true,
          paragraphs: isSpanish
            ? [
                "Lo que usted diga, lo que ponga por escrito y cómo responda en las primeras etapas de una disputa familiar puede afectar el resultado de su caso. Es importante contratar a un abogado con experiencia para representarle, especialmente cuando hay hijos, finanzas o seguridad personal de por medio.",
              ]
            : [
                "What you say, what you put in writing, and how you respond in the early stages of a family dispute can affect the outcome of your case. It is important to retain an experienced attorney to represent you, especially where children, finances, or personal safety are involved.",
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
            poster={isSpanish ? "/DIV-FAM-Spanish-CC-Cover.jpg" : "/DIV-English-CC-Cover.jpg"}
            style={heroVideo}
            key={isSpanish ? "spanish" : "english"}
          >
            <source
              src={isSpanish ? "/DIV-FAM-Spanish-CC.mp4" : "/DIV-English-CC.mp4"}
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
  imageSrc: string;
  imageAlt: string;
  imageLeft?: boolean;
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