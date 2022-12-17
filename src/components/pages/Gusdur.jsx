import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Swal from "sweetalert2";
import { FaHistory } from "react-icons/fa";
import { data } from "./data";

function Gusdur() {
  Swal.fire("Abdurrahman Wahid", "Presiden Keempat Indonesia", "info");

  return (
    <div className="w-full min-h-screen text-white">
      <VerticalTimeline lineColor="#641AE6">
        {data[4].map((item, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#641AE6" }}
              contentArrowStyle={{ borderRight: "7px solid #641AE6" }}
              date={item.date}
              iconStyle={{ background: "#641AE6" }}
              icon={<FaHistory />}
            >
              <h3 className="vertical-timeline-element-title text-md md:text-lg font-bold">
                {item.h3}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-md md:text-lg font-bold italic">
                {item.h4}
              </h4>
              <p className="text-sm md:text-md leading-relaxed text-justify">
                {item.p}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Gusdur;
