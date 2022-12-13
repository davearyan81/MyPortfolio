import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Shree Narayan Guru Vidyalaya
          </h3>
          <p> SSC</p>
          <p>70%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Shree Narayan Guru Vidyalaya
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            HSC
          </h4>
          <p>55%</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Silver Oak College of Engineering and Technology
          </h3>

          <p> Computer Science</p>
          <p>7.35 CGPA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" 15 Days"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Education Internship in React.Js - Vnurture Technologies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ahmedabad, Gujarat
          </h4>
          <p>Developed the Portfolio.</p>
        </VerticalTimelineElement>

       
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
