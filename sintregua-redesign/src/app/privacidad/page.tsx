import { COMPANY_INFO } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidad | Sin Tregua Radio",
  description: "Política de privacidad y protección de datos de Sin Tregua Radio",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-neutral-cream">
      <Navbar />

      {/* Hero pequeño */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-levante-azul-deep to-levante-azul relative overflow-hidden">
        <div className="absolute inset-0 bg-granota-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-hero-md text-white mb-4">
            Política de Privacidad
          </h1>
          <p className="text-white/70 text-lg">
            Información sobre el tratamiento de sus datos personales
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Intro */}
            <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
              <p className="text-neutral-muted leading-relaxed">
                En Europa y en España existen normas de protección de datos pensadas para proteger su información personal de obligado cumplimiento para nuestra entidad.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                Por ello, es muy importante para nosotros que entienda perfectamente qué vamos a hacer con los datos personales que le pedimos.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                Así, seremos transparentes y le daremos el control de sus datos, con un lenguaje sencillo y opciones claras que le permitirán decidir qué haremos con su información personal.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                Por favor, si una vez leída la presente información le queda alguna duda, no dude en preguntarnos.
              </p>
              <p className="text-neutral-dark font-semibold mt-4">
                Muchas gracias por su colaboración.
              </p>
            </div>

            {/* Quiénes somos */}
            <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
              <h2 className="font-display font-bold text-2xl text-levante-azul-deep mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-levante-granate rounded-full" />
                ¿Quiénes somos?
              </h2>
              <div className="space-y-3">
                <p className="text-neutral-dark">
                  <strong>Nuestra marca:</strong> {COMPANY_INFO.name}, registrada en la Oficina Española de Patentes y Marcas con el número {COMPANY_INFO.trademark.split(" - ")[1]}
                </p>
                <p className="text-neutral-dark">
                  <strong>Nuestra empresa:</strong> {COMPANY_INFO.legalName}
                </p>
                <p className="text-neutral-dark">
                  <strong>Nuestro CIF / NIF:</strong> {COMPANY_INFO.cif}
                </p>
                <p className="text-neutral-dark">
                  <strong>Nuestra actividad principal:</strong> {COMPANY_INFO.activity}
                </p>
                <p className="text-neutral-dark">
                  <strong>Nuestra dirección:</strong> {COMPANY_INFO.address}
                </p>
                <p className="text-neutral-dark">
                  <strong>Correo electrónico de contacto:</strong>{" "}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-levante-azul hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Uso de datos */}
            <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
              <h2 className="font-display font-bold text-2xl text-levante-azul-deep mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-levante-granate rounded-full" />
                ¿Para qué vamos a usar sus datos?
              </h2>
              <p className="text-neutral-muted leading-relaxed">
                Con carácter general, sus datos personales serán usados para poder relacionarnos con usted y poder prestarle nuestros servicios.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                Asimismo, también pueden ser usados para otras actividades, como enviarle publicidad o promocionar nuestras actividades.
              </p>
            </div>

            {/* Por qué necesitamos datos */}
            <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
              <h2 className="font-display font-bold text-2xl text-levante-azul-deep mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-levante-granate rounded-full" />
                ¿Por qué necesitamos usar sus datos?
              </h2>
              <p className="text-neutral-muted leading-relaxed">
                Sus datos personales son necesarios para poder relacionarnos con usted y poder prestarle nuestros servicios.
              </p>
            </div>

            {/* Quién conocerá los datos */}
            <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
              <h2 className="font-display font-bold text-2xl text-levante-azul-deep mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-levante-granate rounded-full" />
                ¿Quién va a conocer la información que le pedimos?
              </h2>
              <p className="text-neutral-muted leading-relaxed">
                Con carácter general, sólo el personal de nuestra entidad que esté debidamente autorizado podrá tener conocimiento de la información que le pedimos.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                De igual modo, podrán tener conocimiento de su información personal aquellas entidades que necesiten tener acceso a la misma para que podamos prestarle nuestros servicios.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                Asimismo, tendrán conocimiento de su información aquellas entidades públicas o privadas a las cuales estemos obligados a facilitar sus datos personales con motivo del cumplimiento de alguna ley.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                En el caso de que, al margen de los supuestos comentados, necesitemos dar a conocer su información personal a otras entidades, le solicitaremos previamente su permiso a través de opciones claras que le permitirán decidir a este respecto.
              </p>
            </div>

            {/* Protección de datos */}
            <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
              <h2 className="font-display font-bold text-2xl text-levante-azul-deep mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-levante-granate rounded-full" />
                ¿Cómo vamos a proteger sus datos?
              </h2>
              <p className="text-neutral-muted leading-relaxed">
                Protegeremos sus datos con medidas de seguridad eficaces en función de los riesgos que conlleve el uso de su información.
              </p>
            </div>

            {/* Conservación de datos */}
            <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
              <h2 className="font-display font-bold text-2xl text-levante-azul-deep mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-levante-granate rounded-full" />
                ¿Durante cuánto tiempo vamos a conservar sus datos?
              </h2>
              <p className="text-neutral-muted leading-relaxed">
                Conservaremos sus datos durante nuestra relación y mientras nos obliguen las leyes. Una vez finalizados los plazos legales aplicables, procederemos a eliminarlos de forma segura y respetuosa con el medio ambiente.
              </p>
            </div>

            {/* Derechos */}
            <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
              <h2 className="font-display font-bold text-2xl text-levante-azul-deep mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-levante-granate rounded-full" />
                ¿Cuáles son sus derechos de protección de datos?
              </h2>
              <p className="text-neutral-muted leading-relaxed">
                En cualquier momento puede dirigirse a nosotros para saber qué información tenemos sobre usted, rectificarla si fuese incorrecta y eliminarla una vez finalizada nuestra relación, en el caso de que ello sea legalmente posible.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                También tiene derecho a solicitar el traspaso de su información a otra entidad. Este derecho se llama "portabilidad" y puede ser útil en determinadas situaciones.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                Para solicitar alguno de estos derechos, deberá realizar una solicitud escrita a nuestra dirección, junto con una fotocopia de su DNI, para poder identificarle.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                Para saber más sobre sus derechos de protección de datos, puede consultar la página web de la{" "}
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-levante-azul hover:underline"
                >
                  Agencia Española de Protección de Datos (www.aepd.es)
                </a>
                .
              </p>
            </div>

            {/* Retirar consentimiento */}
            <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
              <h2 className="font-display font-bold text-2xl text-levante-azul-deep mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-levante-granate rounded-full" />
                ¿Puede retirar su consentimiento si cambia de opinión en un momento posterior?
              </h2>
              <p className="text-neutral-muted leading-relaxed">
                Usted puede retirar su consentimiento si cambia de opinión sobre el uso de sus datos en cualquier momento.
              </p>
            </div>

            {/* Reclamaciones */}
            <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
              <h2 className="font-display font-bold text-2xl text-levante-azul-deep mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-levante-granate rounded-full" />
                En caso de que entienda que sus derechos han sido desatendidos, ¿dónde puede formular una reclamación?
              </h2>
              <p className="text-neutral-muted leading-relaxed">
                En caso de que entienda que sus derechos han sido desatendidos por nuestra entidad, puede formular una reclamación en la Agencia Española de Protección de Datos.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                Formular una reclamación en la Agencia Española de Protección de Datos no conlleva ningún coste y no es necesaria la asistencia de abogado ni procurador.
              </p>
            </div>

            {/* Otros fines */}
            <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
              <h2 className="font-display font-bold text-2xl text-levante-azul-deep mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-levante-granate rounded-full" />
                ¿Usaremos sus datos para otros fines?
              </h2>
              <p className="text-neutral-muted leading-relaxed">
                Nuestra política es no usar sus datos para otras finalidades distintas a las que le hemos explicado. Si, no obstante, necesitásemos usar sus datos para actividades distintas, siempre le solicitaremos previamente su permiso a través de opciones claras que le permitirán decidir al respecto.
              </p>
            </div>

            {/* Tratamiento por terceros */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h2 className="font-display font-bold text-2xl text-levante-azul-deep mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-levante-granate rounded-full" />
                Tratamiento de datos por cuenta de terceros
              </h2>
              <p className="text-neutral-muted leading-relaxed">
                {COMPANY_INFO.legalName} accederá a datos personales responsabilidad del USUARIO con la finalidad de prestarle sus servicios de radiodifusión, tratamiento que durará mientras siga vigente la relación de prestación de servicios existente entre las partes y en el que se respetarán en todo momento las instrucciones del USUARIO. {COMPANY_INFO.legalName} únicamente tratará los datos estrictamente necesarios para dar cumplimiento a sus obligaciones propias derivadas del contrato de prestación de servicios existente entre las partes. En concreto, y sin carácter limitativo o excluyente, accederá a los siguientes tipos de datos de los clientes del ORGANIZADOR: nombre, apellidos y correo electrónico.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                Asimismo, {COMPANY_INFO.legalName} se compromete, mientras dure la relación e incluso una vez haya finalizado la misma, a tratar los referidos datos personales guardando la debida confidencialidad y secreto sobre los mismos, adoptando para ello las medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo, de conformidad con lo establecido en el artículo 32 del Reglamento (UE) 2016/679.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                {COMPANY_INFO.legalName} no podrá subcontratar ninguna de las prestaciones que formen parte del objeto de este contrato que comporten el tratamiento de datos personales, salvo los servicios auxiliares necesarios para el normal funcionamiento de la relación existente entre las partes.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                Por otro lado, {COMPANY_INFO.legalName} asistirá al USUARIO para que este pueda cumplir con su obligación de responder a las solicitudes que tengan por objeto el ejercicio de los derechos de los interesados.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                {COMPANY_INFO.legalName} notificará al USUARIO, sin dilación indebida, y en cualquier caso antes del plazo máximo de 24 horas, y por correo electrónico a la dirección indicada, las violaciones de la seguridad de los datos personales a su cargo de las que tenga conocimiento, juntamente con toda la información relevante para la documentación y comunicación de la incidencia. Además, {COMPANY_INFO.legalName} apoyará al USUARIO en la realización de las evaluaciones de impacto relativas a la protección de datos y en las consultas previas a la autoridad de control, cuando procedan.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                Una vez finalice la prestación de los servicios de tratamiento, {COMPANY_INFO.legalName} devolverá todos los datos personales una vez finalice la prestación de los servicios objeto de contrato, conservando una copia debidamente bloqueada durante el tiempo en que puedan surgir responsabilidades derivadas de la relación existente entre las partes.
              </p>
              <p className="text-neutral-muted leading-relaxed mt-4">
                Por último, {COMPANY_INFO.legalName} se compromete a poner a disposición del USUARIO toda la información necesaria para demostrar el cumplimiento de las obligaciones existentes en materia de protección de datos de carácter personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
