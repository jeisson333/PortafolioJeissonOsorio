import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Experiencia Laboral
          </h2>
          <p className="lg:max-w-[610px] lg:mx-auto text-headingColor font-[500] text-[17px] leading-7">
            Con más de cinco años de experiencia en tecnología, he destacado en
            roles clave en empresas líderes como Main Core, Global Hitss y
            Sonda. Mi experiencia abarca desde el desarrollo de software y
            gestión de bases de datos hasta el trabajo en equipos ágiles, con
            énfasis en metodologías como Scrum. Me he destacado por mi capacidad
            para enfrentar desafíos tecnológicos y culminar proyectos de manera
            efectiva.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/*vertical line running the middle*/}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
              {/*left card*/}
              <div className="mt-6 sm:mt-0 sm:mb-120">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Desarrollador Backend <br /> Main Core
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          desarrollar y mantener API y servicios web con Node.js
                          y Spring Boot, así como en gestionar bases de datos
                          como PostgreSQL, PL/SQL y Oracle, optimizando su
                          rendimiento. Automatización de procesos y el monitoreo
                          continuo para mejorar el rendimiento. También colabore
                          efectivamente en equipos ágiles utilizando Scrum.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="Cero03" />
                    </figure>
                  </div>
                </div>
              </div>

              {/*right card*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Analista de Soporte <br /> Global Hitss
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Realice el monitoreo de servicios prepago de Claro,
                          identificando y resolviendo incidentes con middleware,
                          PL/SQL y UNIX. Automatizé este proceso utilizando
                          Node.js y Python, fortaleciendo mis habilidades
                          técnicas y contribuyendo a la eficiencia operativa.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="Cero03" />
                    </figure>
                  </div>
                </div>
              </div>

              {/*left card*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Analista de Sistemas <br /> Sonda
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Durante mi tiempo como Analista de Sistemas en Sonda,
                          brindé soporte integral a los aplicativos
                          corporativos, garantizando su funcionamiento óptimo.
                          Proporcioné soporte técnico, gestioné correos
                          corporativos y manejé casos, fortaleciendo mis
                          habilidades en resolución de problemas y trabajo en
                          equipo en un entorno dinámico.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  flex items-center justify-center">
                    <figure>
                      <img src={appsImg} alt="Cero03" />
                    </figure>
                  </div>
                </div>
              </div>

              {/*right card*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Practicante de Sistemas <br /> Adecco
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Durante mi práctica en Adecco, me centré en el
                          desarrollo de software en Java, participando
                          activamente en proyectos clave y aplicando las mejores
                          prácticas para asegurar eficiencia y calidad. Colaboré
                          estrechamente con el equipo para abordar desafíos
                          técnicos y contribuir al éxito de los proyectos,
                          fortaleciendo mis habilidades en un entorno laboral.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  flex items-center justify-center">
                    <figure>
                      <img src={uiImg} alt="Cero03" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
