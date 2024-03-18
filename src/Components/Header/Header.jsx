import React, { useRef, useEffect } from "react";
import { RiBearSmileFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targeAttr = e.target.getAttribute("href");
    const location = document.querySelector(targeAttr).offsetTop;
    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  const handleButtonClick = () => {
    const numeroWhatsApp = "3112520134";
    const url = `https://wa.me/${numeroWhatsApp}`;
    window.open(url, "_blank");
  };

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              J<RiBearSmileFill />
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Jeisson Osorio
              </h2>
              <p className="text-smallTextColor text-[16px] font-[500]">
                personal
              </p>
            </div>
          </div>
          {/*menu start*/}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#about"
                >
                  Quien Soy
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#services"
                >
                  Experiencia
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#portfolio"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#contact"
                >
                  Contactame
                </a>
              </li>
            </ul>
          </div>
          {/*menu right*/}
          <div className="flex items-center gap-4">
            <button
              onClick={handleButtonClick}
              className="flex items-center gap-2 text-smallTextColor font-[600] border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300 "
            >
              <FaWhatsapp />
              Hablemos
            </button>
            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
