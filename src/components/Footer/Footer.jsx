import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="w-full p-4 bg-neutral text-neutral-content mt-28">
      <div className="flex justify-between items-center text-sm flex-col space-y-2 md:flex-row md:space-y-0">
        <div>
          <Link to="nav" smooth={true} duration={500}>
            <button className="btn btn-ghost text-primary text-[18px]">
              Nusantara
              <span className="text-neutral-content">Historia</span>
            </button>
          </Link>
        </div>

        <div>
          <p className="text-center md:text-right">
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
