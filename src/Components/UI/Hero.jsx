import React from "react";
import heroImg from "../../assets/images/JeissonOsorio.svg";
import CountUp from "react-countup";
import { RiAppsFill } from "react-icons/ri";

import rutaCV from "../../assets/data/cvJeissonOsorio.pdf";
const Hero = () => {
  const handleDownloadClick = () => {
    const a = document.createElement("a");
    a.href = rutaCV;
    a.download = "cvJeissonOsorio.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify sm:flex-col md:flex-row">
          {/* hero left content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Bienvenido
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              Hola, Soy Jeisson Osorio <br /> Ingeniero de sistemas{" "}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line"></i> Contratame
                </button>
              </a>
              <button
                onClick={handleDownloadClick}
                className="text-smallTextColor font-[600] text[16px] border-b border-solid border-smallTextColor"
              >
                Descargar CV
              </button>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[16px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <RiAppsFill />
              </span>
              Soy un desarrollador de aplicaciones web con experiencia en
              tecnologías modernas como JavaScript, React, Node.js y Express. Me
              especializo en la creación de soluciones innovadoras y eficientes
              para proyectos web, combinando mi pasión por el desarrollo
              frontend y backend. Comprometido con mantenerme actualizado, busco
              constantemente mejorar mis habilidades y contribuir al éxito de
              los equipos de desarrollo.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Sígueme:
              </span>
              <span>
                <a
                  href="#instagram"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  {" "}
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="#github"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="#linkedin"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-linkedin-box-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/*hero left end */}
          {/*hero img*/}
          <div className="basis-1/3 mt-10 sm:mt-0"></div>
          <figure className="flex items-center justify-center">
            <img src={heroImg} alt="foto de Jeisson Osorio" />
          </figure>
          {/*hero img end*/}

          {/*hero content right*/}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={5} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={90} duration={4} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={2} duration={5} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happy Clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={5} duration={3} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
          </div>
          {/*hero content right end*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;
