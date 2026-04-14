"use client";

import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";

export default function AutoAccidentsPage() {
  const [isSpanish, setIsSpanish] = useState(false);

  const content = useMemo(
    () => ({
      title: isSpanish ? "Accidentes de Auto" : "Auto Accidents",

      sections: [
        {
          title: isSpanish ? "Nuestro Compromiso" : "Our Commitment",
          paragraphs: isSpanish
            ? [
                "Entendemos que un accidente de auto puede afectar cada parte de su vida. Nuestra firma está comprometida a brindarle atención personal, comunicación clara y representación sólida durante todo su caso. Trabajamos para que el proceso legal sea más fácil de entender, para que usted pueda concentrarse en su tratamiento y recuperación.",
                "Lo más importante es que usted siempre mantiene el control de su caso. Hay firmas de abogados que hacen que usted firme un contrato que les da el derecho absoluto de aceptar una oferta y luego entregarle su cheque sin presentarle primero la oferta de acuerdo. Nuestra firma nunca aceptará una oferta de acuerdo sin su aprobación. Usted es nuestro jefe y nosotros trabajamos para usted. Trabajaremos con usted en cada paso para buscar el mejor resultado posible.",
              ]
            : [
                "We understand that a car accident can disrupt every part of your life. Our firm is committed to providing personal attention, clear communication, and strong representation throughout your case. We work to make the legal process easier to understand so that you can focus on your treatment and recovery.",
                "Most importantly, you are always in control of your case. There are law firms that have you sign a retainer agreement that gives them the absolute right to accept an offer and then give you your settlement check without presenting the settlement offer to you. Our law firm will never accept a settlement offer without your approval. You are our boss and we work for you. We will work with you every step of the way to pursue the best possible outcome.",
              ],
        },
        {
          title: isSpanish
            ? "Proceso de un Caso de Accidente de Auto"
            : "Process of an Auto Accident Case",
          paragraphs: isSpanish
            ? [
                "Si usted sufrió lesiones en un accidente automovilístico en Maryland o Washington, D.C., puede tener derecho a compensación por sus lesiones, gastos médicos, salarios perdidos, dolor y sufrimiento pasados y futuros, lesión permanente y otros daños relacionados. Después de un accidente, lidiar con compañías de seguros puede volverse abrumador rápidamente. Nuestra firma está aquí para guiarle en ese proceso y proteger sus intereses desde el principio hasta el final. Le ayudamos con los daños a la propiedad, el auto de alquiler, el almacenamiento y, si aplica, el proceso de PIP.",
                "Debe tener cuidado de no hablar con la compañía de seguros del conductor culpable porque pueden llamarle, grabar la conversación y aconsejarle que no busque tratamiento médico. Frecuentemente tengo clientes que retrasan su tratamiento médico porque las compañías de seguros hacen promesas que nunca cumplen. Las declaraciones grabadas nunca son una buena idea y pueden perjudicar su reclamo. No cometa el error de pensar que las compañías de seguros están para velar por sus mejores intereses.",
                "Una vez que la compañía de seguros sabe que usted está representado por un abogado, debe dejar de comunicarse directamente con usted. Por esa razón, es importante contratar un buen abogado temprano en el proceso.",
              ]
            : [
                "If you were injured in an automobile accident in Maryland or Washington, D.C., you may be entitled to compensation for your injuries, medical expenses, lost wages, past and future pain and suffering, permanent injury, and other related damages. After an accident, dealing with insurance companies can quickly become overwhelming. Our firm is here to guide you through that process and protect your interests from the very beginning to the end. We help you with the property damage, rental car, storage, and, if applicable, the PIP process.",
                "You must be careful not to speak with the insurance company for the at-fault driver because they may call you, record their conversation with you, and advise you not to seek medical treatment. I often have clients who delay medical treatment because insurance companies make promises that are never kept. Recorded statements are never a good idea and could come back and adversely affect your claim. Do not make the mistake of thinking that insurance companies are there to look after your best interests.",
                "Once the insurance company becomes aware that you are represented by a lawyer, they must stop communicating with you directly. For that reason, it is important that you retain a good lawyer early in the process.",
              ],
        },
        {
          title: isSpanish
            ? "Qué Hacer Después de un Accidente"
            : "What To Do After an Accident",
          paragraphs: isSpanish
            ? [
                "Después de un accidente, su salud es lo primero. Si está lesionado o siente dolor, busque atención médica lo antes posible. Algunas lesiones y dolores no se sienten inmediatamente, sino que aparecen más tarde o empeoran con el tiempo. El tratamiento oportuno ayuda a proteger tanto su salud como su reclamo.",
                "También es importante reportar el accidente a la policía, tomar y conservar fotografías y videos de los vehículos y sus placas en la escena del accidente, obtener información de testigos cuando sea posible y guardar registros de atención médica, recetas, tiempo perdido en el trabajo y otros gastos. Estos detalles suelen ser importantes para demostrar el valor de un reclamo.",
              ]
            : [
                "After an accident, your health comes first. If you are injured or feel pain, seek medical attention as soon as possible. Some injuries and pain are not felt immediately, but develop later, or become worse over time. Prompt treatment helps protect both your health and your claim.",
                "It is also important to report the accident to the police, take and preserve photographs and videos of the cars and license plates of the vehicles involved at the scene, obtain witness information when possible, and keep records of medical care, prescriptions, missed time from work, and other expenses. These details often become important when proving the value of a claim.",
              ],
        },
        {
          title: isSpanish
            ? "Reclamo por Daños a la Propiedad"
            : "Property Damage Claim",
          paragraphs: isSpanish
            ? [
                "Una vez que usted contrata a un buen abogado, este debe comunicarse de inmediato con la compañía de seguros de la persona culpable y confirmar que aceptan responsabilidad. Lo primero que un cliente desea es confirmación de que la compañía de seguros acepta responsabilidad y comienza a pagar por los daños sufridos.",
                "El primer reclamo es el de daños a la propiedad. Esto incluye obtener un estimado de daños. Normalmente recomendamos que los clientes obtengan un estimado independiente de un concesionario o taller privado. No dependa únicamente del estimado de la compañía de seguros. Su estimado puede ser intencionalmente bajo porque ellos son quienes van a pagar. La compañía de seguros que acepta responsabilidad también es responsable de pagar remolque, almacenamiento y un auto de alquiler si su vehículo estará en el taller.",
              ]
            : [
                "Once you retain a good lawyer, he or she must immediately contact the insurance company for the person at fault and confirm that they are responsible and liable. The first thing that a client wants is confirmation that the insurance company accepts responsibility and begins to pay for the damage suffered.",
                "The first claim is the property damage claim. This includes obtaining a property damage estimate. We normally recommend that clients obtain an independent property damage estimate from a dealership or private repair shop. Do not depend solely on the insurance company’s property damage estimate. Their estimate may be intentionally low because they are the ones paying for it. The insurance company that accepts responsibility is also responsible for paying towing, storage, and providing a rental car for you if your car will be in the repair shop.",
              ],
        },
        {
          title: isSpanish
            ? "Tratamiento Médico y Documentación"
            : "Medical Treatment and Documentation",
          paragraphs: isSpanish
            ? [
                "Si está lesionado y necesita tratamiento médico, también puede presentar un reclamo por lesiones corporales. La fuerza de ese reclamo depende de los registros médicos relacionados con su tratamiento. El tratamiento médico oportuno y adecuado, la constancia en el tratamiento y reportes médicos precisos ayudan a aumentar el valor de su reclamo por lesiones personales.",
                "Usted debe asegurarse de que su abogado le proporcione el consejo legal correcto respecto a su reclamo por lesiones personales.",
              ]
            : [
                "If you are injured and require medical treatment, you can also make a bodily injury claim. The strength of your bodily injury claim depends on the medical records related to your treatment. Prompt and appropriate medical treatment, consistency of treatment, and accurate medical reports help increase the value of your personal injury claim.",
                "You must be sure that your attorney provides the correct legal advice regarding your personal injury claim.",
              ],
        },
        {
          title: isSpanish ? "Negociaciones de Acuerdo" : "Settlement Negotiations",
          paragraphs: isSpanish
            ? [
                "Una vez que su tratamiento médico haya terminado y su médico le dé de alta, nuestra firma se compromete a solicitar y organizar rápidamente los reportes médicos, facturas médicas, documentación de salarios perdidos y otros documentos de apoyo necesarios para presentar su reclamo de forma efectiva. Luego preparamos un paquete de demanda y lo enviamos a la compañía de seguros para su revisión. Normalmente toma aproximadamente de cuatro a seis semanas para que la compañía revise nuestra demanda y comience las negociaciones.",
                "Las compañías de seguros no siempre hacen ofertas justas al principio. Nuestro trabajo es luchar por el valor completo de su reclamo y asesorarle durante todo el proceso de negociación. Usted siempre tiene el control de aceptar o rechazar una oferta de acuerdo.",
              ]
            : [
                "Once your medical treatment has completed and your doctor releases you from care, our firm is committed to promptly requesting and organizing the medical reports, medical bills, lost wage documentation, and other supporting documents needed to present your claim effectively. We then prepare a demand package and forward it to the insurance company for review. It usually takes approximately four to six weeks for the insurance company to review our settlement demand and begin settlement negotiations.",
                "Insurance companies do not always make fair offers at the beginning. Our job is to advocate for the full value of your claim and to advise you throughout the negotiation process. You are always in control of whether to accept or reject a settlement offer.",
              ],
        },
        {
          title: isSpanish
            ? "Reclamos de Conductor Sin Seguro o con Seguro Insuficiente"
            : "Uninsured and Underinsured Motorist Claims",
          paragraphs: isSpanish
            ? [
                "Si el conductor culpable no tiene seguro o no tiene suficiente seguro al momento del accidente, o huye de la escena y no se puede obtener información personal o de seguro, la ley de Maryland y D.C. le permite presentar un reclamo de conductor sin seguro o con seguro insuficiente con su propia compañía de seguros. A muchos clientes no les gusta tener que involucrar a su propia aseguradora, pero desafortunadamente puede ser la única manera de recuperar dinero.",
              ]
            : [
                "If the at-fault driver does not have insurance or does not have sufficient insurance at the time of the accident, or flees the scene and no insurance or personal information can be obtained, Maryland and D.C. law permit you to make an uninsured or underinsured motorist claim with your own insurance company. Clients may not like having to involve their insurance company, but unfortunately it may be the only way to recover money.",
              ],
        },
        {
          title: isSpanish
            ? "Protección Contra Lesiones Personales (PIP)"
            : "Personal Injury Protection (PIP)",
          paragraphs: isSpanish
            ? [
                "Dependiendo de la póliza y las circunstancias, su compañía de seguros también puede tener Protección Contra Lesiones Personales, comúnmente llamada PIP, o beneficios de Med Pay disponibles para ayudar a pagar facturas médicas y salarios perdidos. PIP o Med Pay puede proporcionar alivio financiero temprano mientras el reclamo de responsabilidad todavía está siendo investigado o negociado.",
                "Muchos clientes no conocen estos beneficios. Nuestra oficina revisa estas opciones cuidadosamente con usted para determinar toda posible fuente de recuperación.",
              ]
            : [
                "Depending on the policy and circumstances, your insurance company may also have Personal Injury Protection, commonly called PIP, or Med Pay benefits available to help pay medical bills and lost wages. PIP or Med Pay may provide early financial relief while the liability claim is still being investigated or negotiated.",
                "Many clients are not aware of these benefits. Our office reviews these options with you carefully to determine every possible source of recovery.",
              ],
        },
        {
          title: isSpanish
            ? "Cuándo Puede Ser Necesaria una Demanda"
            : "When a Lawsuit May Be Necessary",
          paragraphs: isSpanish
            ? [
                "Si la compañía de seguros niega responsabilidad o se rehúsa a hacer una oferta justa, presentar una demanda civil en la corte puede ser la única opción restante. El que un caso deba presentarse depende de muchos factores, incluyendo responsabilidad, lesiones, cobertura de seguro, evidencia disponible y el costo probable del litigio.",
                "Una vez que se presenta la demanda civil y el demandado ha sido debidamente notificado, la compañía de seguros puede cambiar su posición y aceptar responsabilidad o aumentar su oferta de acuerdo. Nuestro papel es evaluar las fortalezas y debilidades de su reclamo y ayudarle a tomar la mejor decisión según los hechos de su caso.",
              ]
            : [
                "If the insurance company denies liability or refuses to make a fair offer, filing a civil suit in court may be the only remaining option. Whether a case should be filed depends on many factors, including liability, injuries, insurance coverage, available evidence, and the likely cost of litigation.",
                "Once a civil suit is filed and the defendant has been properly served, the insurance company may change its position and accept liability or increase its settlement offer. Our role is to evaluate the strengths and weaknesses of your claim and help you make the best decision based on the facts of your case.",
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

        <div style={{ maxWidth: "900px", margin: "40px auto" }}>
          <iframe
            width="100%"
            height="500"
            src={
              isSpanish
                ? "https://www.youtube.com/embed/OtCiScRfGGo"
                : "https://www.youtube.com/embed/XN9prHeVt7I"
            }
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "12px" }}
            key={isSpanish ? "auto-spanish-video" : "auto-english-video"}
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
  paragraphs: string[];
}

function Section({ title, paragraphs }: SectionProps) {
  return (
    <section style={sectionWrap}>
      <h2 style={h2}>{title}</h2>

      {paragraphs.map((text, index) => (
        <p key={index} style={p}>
          {text}
        </p>
      ))}
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

const sectionWrap: React.CSSProperties = {
  marginBottom: "34px",
  background: "linear-gradient(180deg, #141414, #101010)",
  border: "1px solid rgba(212, 175, 55, 0.10)",
  borderRadius: "22px",
  padding: "34px 34px 30px",
  boxShadow: "0 14px 34px rgba(0, 0, 0, 0.24)",
};