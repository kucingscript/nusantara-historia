const NavbarEnd = () => {
  return (
    <>
      <button
        data-set-theme="coffee"
        data-act-class="ACTIVECLASS"
        className="btn btn-xs btn-circle bg-[#DC944C] hover:bg-[#DC944C]"
        data-aos="fade-down"
        data-aos-delay="200"
      ></button>
      <button
        data-set-theme="forest"
        data-act-class="ACTIVECLASS"
        className="btn btn-xs btn-circle bg-[#1EB854] hover:bg-[#1EB854] mx-2 md:mx-4"
        data-aos="fade-down"
        data-aos-delay="300"
      ></button>
    </>
  );
};

export default NavbarEnd;
