import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

function About() {
  return (
    <section name="tentang" className="h-screen w-full mt-32">
      <div className="container h-full flex justify-center items-center flex-col">
        <h1
          className="text-3xl md:text-5xl text-primary font-bold tracking-wider"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          TENTANG KAMI
        </h1>
        <p
          className="text-neutral-content text-justify md:text-center text-md md:text-lg my-4 px-4 max-w-6xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Kami yakin dan percaya bahwa dengan mempelajari sejarah, masa depan
          dunia akan menjadi lebih baik. Ketika kita mengambil pengalaman di
          masa lalu, kita akan siap untuk menghadapi masa depan yang penuh
          dengan ketidakpastian.
        </p>
        <Link
          to="faq"
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
    </section>
  );
}

export default About;
