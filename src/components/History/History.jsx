import { useState } from "react";

import Tokoh from "./Tokoh";
import Peristiwa from "./Peristiwa";
import Mitologi from "./Mitologi";

function History() {
  const [activeTab, setActiveTab] = useState("tab2");

  return (
    <section name="sejarah" className="min-h-screen w-full relative">
      <div className="container h-full">
        <h1
          className="text-center text-5xl text-primary font-bold tracking-wider mt-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          JAS MERAH
        </h1>
        <p
          className="text-center text-neutral-content text-md"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Jangan Sesekali Melupakan Sejarah
        </p>

        <div className="flex justify-center items-center mt-16">
          <div className="tabs tabs-boxed">
            <a
              className={
                activeTab === "tab1"
                  ? "tab tab-active tab-sm md:tab-md"
                  : "tab tab-sm md:tab-md"
              }
              onClick={() => setActiveTab("tab1")}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              PERISTIWA
            </a>
            <a
              className={
                activeTab === "tab2"
                  ? "tab tab-active tab-sm md:tab-md"
                  : "tab tab-sm md:tab-md"
              }
              onClick={() => setActiveTab("tab2")}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              TOKOH
            </a>
            <a
              className={
                activeTab === "tab3"
                  ? "tab tab-active tab-sm md:tab-md"
                  : "tab tab-sm md:tab-md"
              }
              onClick={() => setActiveTab("tab3")}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              MITOLOGI
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
            {activeTab === "tab1" ? (
              <Peristiwa />
            ) : activeTab === "tab2" ? (
              <Tokoh />
            ) : (
              <Mitologi />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
