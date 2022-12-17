import { useNavigate } from "react-router-dom";
import { data } from "../data";

function SubTokoh({ index }) {
  const navigate = useNavigate();

  return (
    <>
      {data[index].map((img, index) => {
        return (
          <div
            className="card shadow-2xl m-5 pt-5 rounded-xl"
            key={index}
            data-aos={img.aos}
            data-aos-delay={img.delay}
          >
            <figure>
              <img
                src={img.img}
                alt={img.name}
                className="w-16 h-16 rounded-full object-cover border-2 md:w-24 md:h-24 md:border-4 border-primary"
              />
            </figure>
            <div className="card-body -mt-5 text-center">
              <h2 className="card-title text-primary mx-auto capitalize">
                {img.name}
              </h2>
              <p className="text-neutral-content text-sm capitalize">
                {img.text}
              </p>
              <button
                onClick={() => navigate(img.path)}
                className="btn btn-primary rounded-full btn-sm w-1/2 mx-auto mt-3"
              >
                Baca
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SubTokoh;
