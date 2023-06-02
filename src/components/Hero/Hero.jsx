import { useEffect } from "react";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

import { Navbar, History, About, Faq, Contact, Footer, Top } from "../";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <section name="beranda" className="w-full h-screen relative">
        <div className="h-full flex justify-center items-center">
          <div className="hero min-h-screen bg-hero bg-center bg-fixed">
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
              <div>
                <h1
                  className="mb-3 text-3xl md:text-5xl font-bold"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="text-primary">Nusantara</span> Historia
                </h1>
                <p
                  className="mb-4 text-md md:text-[19px]"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Melestarikan Nusantara Dengan Konsep Berbeda
                </p>
                <Link
                  to="sejarah"
                  smooth={true}
                  duration={500}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <button className="btn btn-primary group">
                    Explore
                    <span className="group-hover:rotate-90 duration-300">
                      <HiArrowNarrowRight className="ml-3" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <History />
      <About />
      <Faq />
      <Contact />
      <Footer />
      <Top />
    </>
  );
}

export default Hero;
