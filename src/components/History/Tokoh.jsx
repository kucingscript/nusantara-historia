import { useState } from "react";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import SubTokoh from "./SubTokoh";

function Tokoh() {
  const [isRead, setIsRead] = useState(false);

  return (
    <>
      <SubTokoh index={0} />

      <div className="w-40 md:w-48 absolute -bottom-12">
        <button
          className="btn btn-ghost btn-md w-full text-primary border-primary group"
          onClick={() => setIsRead(!isRead)}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {isRead ? (
            <>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowLeft className="mr-3" />
              </span>
              Lebih Sedikit
            </>
          ) : (
            <>
              Lebih Banyak
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </>
          )}
        </button>
      </div>
      {isRead ? <SubTokoh index={1} /> : ""}
    </>
  );
}

export default Tokoh;
