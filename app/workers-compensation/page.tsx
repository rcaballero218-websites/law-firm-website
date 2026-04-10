"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function WorkersCompensationPage() {
  const [isSpanish, setIsSpanish] = useState(false);

  const content = useMemo(
    () => ({
      title: isSpanish ? "Accidente de Trabajo" : "Workers' Compensation",
      sections: [
        {
          title: isSpanish ? "Nuestro Compromiso" : "Our Commitment",
          imageSrc: "/lion.jpg",
          imageAlt: isSpanish ? "Símbolo de fortaleza" : "Lion symbol of strength",
          imageLeft: false,
          paragraphs: isSpanish
            ? [
                "Entendemos que un accidente de trabajo puede afectar cada parte de su vida. Nuestra firma está comprometida a brindarle atención personal, comunicación clara y representación sólida durante todo su caso. Trabajamos para que el proceso legal sea más fácil de entender, para que usted pueda concentrarse en su tratamiento y recuperación.",
                "Lo más importante es que usted siempre mantiene el control de su caso. Nuestra firma nunca aceptará una oferta de acuerdo sin su aprobación. Usted es nuestro jefe y nosotros trabajamos para usted. Trabajaremos con usted en cada paso para buscar el mejor resultado posible.",
              ]
            : [
                "We understand that a work accident can disrupt every part of your life. Our firm is committed to providing personal attention, clear communication, and strong representation throughout your case. We work to make the legal process easier to understand so that you can focus on your treatment and recovery.",
                "Most importantly, you are always in control of your case. Our law firm will never accept a settlement offer without your approval. You are our boss and we work for you. We will work with you every step of the way to pursue the best possible outcome.",
              ],
        },
        {
          title: isSpanish
            ? "Proceso de la Compensación Laboral"
            : "Process of Workers’ Compensation",
          imageSrc: "/courtroom-hero.png",
          imageAlt: isSpanish
            ? "Proceso de compensación laboral"
            : "Workers' compensation process guidance",
          imageLeft: true,
          paragraphs: isSpanish
            ? [
                "Todos los empleadores están obligados a tener seguro de compensación laboral que sea responsable de manejar su reclamo. Su abogado debe reportar su reclamo a la compañía de seguros correspondiente. En Maryland y D.C., su abogado también debe reportar su reclamo a una comisión o agencia gubernamental separada.",
                "Todos los reclamos de compensación laboral son controlados por una comisión o agencia gubernamental. En Maryland, todos los reclamos deben pasar por la Comisión de Compensación Laboral de Maryland (WCC). En D.C., todos los reclamos deben pasar por la Oficina de Compensación Laboral de D.C. (OWC). Estas agencias no son compañías de seguros, sino agencias gubernamentales que supervisan todo el proceso. Todas las disputas y aprobaciones de acuerdos deben pasar por estas agencias.",
                "Si usted se lesionó mientras trabajaba, puede tener derecho a beneficios de compensación laboral. No necesita demostrar que alguien tuvo la culpa del accidente, solo que usted era empleado y tuvo un accidente en el trabajo durante horas de trabajo. Es importante que reporte el accidente a su empleador de inmediato, ya sea en persona, por teléfono o por mensaje de texto. El retraso en reportar el accidente puede afectar negativamente su reclamo. Nuestra firma le guía en cada paso del proceso y se comunica directamente con la compañía de seguros y su empleador para que usted pueda concentrarse en su recuperación.",
                "Si se lesionó en un accidente de trabajo, puede tener derecho a compensación por sus lesiones, gastos médicos, salarios perdidos, reembolso de millaje y lesión permanente. Lidiar con compañías de seguros puede volverse abrumador rápidamente. Nuestra firma está aquí para guiarle en ese proceso y proteger sus intereses desde el principio hasta el final. Le ayudamos a reportar el accidente a la compañía de seguros de compensación laboral del empleador y a la WCC de Maryland o la OWC de D.C.",
                "Debe tener cuidado de no hablar con la compañía de seguros del empleador, porque pueden llamarle, grabar su conversación y aconsejarle que no busque tratamiento médico. Frecuentemente tengo clientes que retrasan su tratamiento porque el empleador o la compañía de seguros hacen promesas que nunca cumplen. Las declaraciones grabadas nunca son una buena idea y pueden perjudicar su reclamo. No cometa el error de pensar que el empleador o la compañía de seguros están para velar por sus mejores intereses.",
                "Una vez que la compañía de seguros sabe que usted está representado por un abogado, debe dejar de comunicarse directamente con usted. Por esa razón, es importante contratar un buen abogado temprano en el proceso.",
              ]
            : [
                "All employers are required to have workers' compensation insurance that is responsible for managing your claim. Your attorney should report your claim to the proper insurance company. In Maryland and D.C., your attorney is also required to report your claim to a separate government commission or agency.",
                "All workers' compensation claims are controlled by a commission or government agency. In Maryland, all claims must go through the Maryland Workers’ Compensation Commission (WCC). In D.C., all claims must go through the D.C. Office of Workers' Compensation (OWC). These agencies are not insurance companies, but government agencies that oversee the entire claims process. All disputes and settlement approvals must go through these agencies.",
                "If you have been injured while at work, you may be entitled to workers’ compensation benefits. You do not need to establish that someone was at fault for the accident, only that you were an employee and had an accident at work during work hours. It is important that you immediately report the accident to your employer, either in person, by phone, or by text. Delay in reporting the work accident to your employer could adversely affect your claim. Our firm guides you through every step of the workers’ compensation process and communicates directly with the insurance company and your employer so that you can focus on your recovery.",
                "If you were injured in a work accident, you may be entitled to compensation for your injuries, medical expenses, lost wages, mileage reimbursement, and permanent injury. Dealing with insurance companies can quickly become overwhelming. Our firm is here to guide you through that process and protect your interests from the very beginning to the end. We help you report the accident to the employer’s workers’ compensation insurance company, and to the Maryland WCC or the D.C. OWC.",
                "You must be careful not to speak with the employer’s insurance company, because they may call you, record their conversation with you, and advise you not to seek medical treatment. I often have clients who delay medical treatment because the employer or the insurance company makes promises that are never kept. Recorded statements are never a good idea and could come back and adversely affect your claim. Do not make the mistake of thinking that the employer and/or the insurance company are there to look after your best interests.",
                "Once the insurance company becomes aware that you are represented by a lawyer, they must stop communicating with you directly. For that reason, it is important that you retain a good lawyer early in the process.",
              ],
        },
        {
          title: isSpanish
            ? "Qué Hacer Después de un Accidente de Trabajo"
            : "What To Do After a Work Accident",
          imageSrc: "/lion.jpg",
          imageAlt: isSpanish
            ? "Guía después de un accidente de trabajo"
            : "Guidance after a work accident",
          imageLeft: false,
          paragraphs: isSpanish
            ? [
                "Después de un accidente, repórtelo de inmediato a su empleador y solicite tratamiento médico. Su salud y atención médica son prioridad. Si está lesionado o siente dolor, busque atención médica lo antes posible. Algunas lesiones y dolores no se sienten inmediatamente, sino que aparecen más tarde o empeoran con el tiempo. El tratamiento oportuno ayuda a proteger tanto su salud como su reclamo.",
                "Es muy importante que sepa que bajo la ley de Maryland y D.C., usted puede escoger su propio proveedor médico. No permita que su empleador o la compañía de seguros seleccione un médico por usted. El empleador puede llevarle a su clínica, lo cual está bien. Sin embargo, usted siempre puede cambiar de doctor y comenzar tratamiento con el médico de su elección.",
              ]
            : [
                "After an accident, immediately report the accident to your employer and request medical treatment. Your health and medical care are a priority. If you are injured or feel pain, seek medical attention as soon as possible. Some injuries and pain are not felt immediately, but develop later or become worse over time. Prompt treatment helps protect both your health and your claim.",
                "It is very important for you to know that under Maryland and D.C. law, you can choose your own healthcare provider. Do not allow your employer or the insurance company to select a doctor for you. The employer may take you to their clinic, which is fine. However, you can always switch doctors and begin medical treatment with the doctor of your choice.",
              ],
        },
        {
          title: isSpanish
            ? "Qué Cubre la Compensación Laboral"
            : "What Workers’ Compensation Covers",
          imageSrc: "/courtroom-hero.png",
          imageAlt: isSpanish
            ? "Beneficios cubiertos"
            : "Benefits available under workers' compensation",
          imageLeft: true,
          bullets: isSpanish
            ? [
                "Tratamiento médico relacionado con su lesión",
                "Beneficios temporales por pérdida de salario mientras no puede trabajar",
                "Rehabilitación vocacional, si es necesaria",
                "Reembolso de millaje relacionado con citas médicas",
                "Beneficios por incapacidad permanente",
              ]
            : [
                "Medical treatment related to your injury",
                "Temporary wage loss benefits while you are unable to work",
                "Vocational rehabilitation, if necessary",
                "Mileage reimbursement related to medical appointments",
                "Permanent disability benefits",
              ],
        },
        {
          title: isSpanish ? "Tratamiento Médico" : "Medical Treatment",
          imageSrc: "/lion.jpg",
          imageAlt: isSpanish ? "Tratamiento médico" : "Medical treatment",
          imageLeft: false,
          paragraphs: isSpanish
            ? [
                "Sus expedientes médicos juegan un papel crítico en determinar el valor y el éxito de su reclamo. Trabajamos para asegurar que su tratamiento esté debidamente documentado y que la compañía de seguros autorice y pague la atención necesaria.",
              ]
            : [
                "Your medical records play a critical role in determining the value and success of your claim. We work to ensure that your treatment is properly documented and that the insurance company authorizes and pays for necessary care.",
              ],
        },
        {
          title: isSpanish ? "Beneficios por Pérdida de Salario" : "Wage Loss Benefits",
          imageSrc: "/courtroom-hero.png",
          imageAlt: isSpanish ? "Pérdida de salario" : "Wage loss benefits",
          imageLeft: true,
          paragraphs: isSpanish
            ? [
                "Si su lesión le impide trabajar, puede tener derecho a beneficios de reemplazo salarial. Estos beneficios normalmente se calculan con base en su salario semanal promedio antes de la lesión. Nuestra oficina se asegura de que su información salarial sea presentada correctamente y de que usted reciba todos los beneficios a los que tiene derecho bajo la ley.",
              ]
            : [
                "If your injury prevents you from working, you may be entitled to wage replacement benefits. These benefits are typically calculated based on your average weekly wage prior to the injury. Our office ensures that your wage information is properly submitted and that you receive all benefits you are entitled to under the law.",
              ],
        },
        {
          title: isSpanish ? "Disputas y Audiencias" : "Disputes & Hearings",
          imageSrc: "/lion.jpg",
          imageAlt: isSpanish ? "Disputas y audiencias" : "Disputes and hearings",
          imageLeft: false,
          paragraphs: isSpanish
            ? [
                "La compañía de seguros puede negar su reclamo, negar tratamiento médico recomendado, negar reclamos por pérdida de salario o disputar la gravedad de sus lesiones. Cuando esto sucede, usted tiene derecho a solicitar una audiencia ante la WCC u OWC y presentar su caso ante un juez administrativo.",
                "Si no está satisfecho con la decisión de un juez administrativo, en Maryland puede apelar esa decisión ante la Corte de Circuito del condado donde usted vive. En D.C., puede solicitar una audiencia formal.",
                "En cada paso de este proceso, nuestra firma prepara su caso, reúne evidencia médica y aboga por usted.",
              ]
            : [
                "The insurance company may deny your claim, deny recommended medical treatment, deny wage loss claims, or dispute the extent of your injuries. When this happens, you have the right to request a hearing with the WCC or OWC and present your case to an administrative law judge.",
                "If you are not satisfied with the decision of an administrative law judge, in Maryland you can appeal that decision to the Circuit Court of the county in which you live. In D.C., you can request a formal hearing.",
                "At every step of this process, our firm prepares your case, gathers medical evidence, and advocates on your behalf.",
              ],
        },
        {
          title: isSpanish ? "Reclamos Contra Terceros" : "Third-Party Claims",
          imageSrc: "/courtroom-hero.png",
          imageAlt: isSpanish ? "Reclamo contra tercero" : "Third-party work accident claim",
          imageLeft: true,
          paragraphs: isSpanish
            ? [
                "Si su lesión laboral fue causada por alguien que no era su empleador ni compañero de trabajo, por ejemplo un subcontratista o un conductor negligente, usted también puede tener un reclamo separado por lesiones personales además de su caso de compensación laboral. Evaluamos todas las posibles fuentes de recuperación para maximizar su compensación.",
              ]
            : [
                "If your work-related injury was caused by someone other than your employer or co-worker, for example a subcontractor or negligent driver, you may also have a separate personal injury claim in addition to your workers’ compensation case. We evaluate all possible sources of recovery to maximize your compensation.",
              ],
        },
        {
          title: isSpanish
            ? "Fondo para Empleadores No Asegurados (UEF)"
            : "Uninsured Employers Fund (UEF)",
          imageSrc: "/lion.jpg",
          imageAlt: isSpanish ? "UEF" : "Uninsured Employers Fund claim representation",
          imageLeft: false,
          paragraphs: isSpanish
            ? [
                "Si usted se lesionó en el trabajo y su empleador no tiene seguro de compensación laboral, aún puede tener derecho a beneficios a través del Fondo para Empleadores No Asegurados de Maryland (UEF).",
                "El UEF es un fondo especial creado para proteger a los trabajadores lesionados cuando su empleador no ha mantenido el seguro de compensación laboral requerido. Aunque su empleador no haya cumplido la ley, usted todavía tiene derechos y aún puede recuperar compensación. Si su reclamo UEF es aceptado, puede tener derecho a los mismos beneficios que un reclamo normal de compensación laboral.",
                "Los reclamos UEF frecuentemente implican desafíos como empleadores negando responsabilidad, retrasos en beneficios o audiencias y procedimientos legales adicionales. Sin representación adecuada, los trabajadores lesionados pueden enfrentar obstáculos significativos para obtener la compensación que merecen.",
                "Si el empleador no asegurado es un subcontratista o contratista independiente, un buen abogado intentará encontrar cobertura con otros subcontratistas o contratistas independientes por encima del empleador, hasta llegar al contratista general. A estos se les llama empleadores estatutarios, una compañía que puede ser considerada responsable de proveer beneficios de compensación laboral aunque el trabajador lesionado no sea su empleado directo. La compañía de seguros del empleador estatutario se conoce como aseguradora estatutaria.",
              ]
            : [
                "If you were injured on the job and your employer does not have workers’ compensation insurance, you may still be entitled to benefits through the Maryland Uninsured Employers' Fund (UEF).",
                "The UEF is a special fund created to protect injured workers when their employer has failed to carry the required workers’ compensation insurance. Even if your employer did not follow the law, you still have rights, and you may still be able to recover compensation. If your UEF claim is accepted, you may be entitled to the same benefits as a standard workers’ compensation claim.",
                "UEF claims often involve challenges such as employers denying responsibility, delays in benefits, or additional hearings and legal procedures. Without proper representation, injured workers can face significant obstacles in obtaining the compensation they deserve.",
                "If the non-insured employer is a subcontractor or independent contractor, a good lawyer will attempt to find insurance coverage with other subcontractors or independent contractors above the employer, up to the general contractor. These are called statutory employers, a company that may be held responsible for providing workers’ compensation benefits, even if the injured worker is not its direct employee. The statutory employer’s insurance company is referred to as the statutory insurer.",
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
            poster={isSpanish ? "/WC-Spanish-CC-Cover.jpg" : "/WC-English-CC-Cover.jpg"}
            style={heroVideo}
            key={isSpanish ? "spanish" : "english"}
          >
            <source
              src={isSpanish ? "/WC-Spanish-CC.mp4" : "/WC-English-CC.mp4"}
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
  paragraphs?: string[];
  bullets?: string[];
}

function Section({
  title,
  paragraphs,
  bullets,
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