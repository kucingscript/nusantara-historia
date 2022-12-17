import { dataFaq } from "../data";

function Request() {
  return (
    <section name="faq" className="h-screen w-full -mt-40">
      <div className="container w-full h-full flex justify-center items-center flex-col">
        <h1
          className="text-center text-4xl text-primary font-bold tracking-wider my-16 md:text-5xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          F A Q
        </h1>
        <div className="flex justify-between leading-6 text-[16px] w-full md:w-1/2 md:leading-7">
          <div className="flex flex-col">
            {dataFaq[0].map((faq, index) => {
              return (
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow"
                  key={index}
                  data-aos={faq.aos}
                  data-aos-delay={faq.delay}
                >
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title">{faq.main}</div>
                  <div className="collapse-content peer-checked:text-primary text-justify">
                    <p>{faq.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Request;
