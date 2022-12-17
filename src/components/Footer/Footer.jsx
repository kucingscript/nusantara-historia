import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="footer p-4 bg-neutral text-neutral-content mt-20">
      <div className="container flex justify-between items-center flex-col space-y-2 md:flex-row md:space-y-0">
        <div>
          <Link to="nav" smooth={true} duration={500}>
            <button className="btn btn-ghost text-primary text-xl">
              Nusantara
              <span className="text-neutral-content">Historia</span>
            </button>
          </Link>
        </div>

        <div>
          <p>
            Build with
            <span className="text-primary"> &#10084;</span> by Kelompok 1 -
            Technopreneur
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;