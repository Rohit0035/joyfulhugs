import React, { useState } from "react";
import {
  Card,
  CardBody,
  Collapse,
  Button,
} from "reactstrap";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaInfoCircle,
  FaChevronDown,
  FaPaperPlane
} from "react-icons/fa";
import Chand2 from '../assets/images/coms/chand.png';

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechSpark Solutions",
    location: "Bangalore, India",
    salary: "₹6–8 LPA",
    description:
      "We are looking for a skilled Frontend Developer proficient in React, JavaScript, and modern UI frameworks. The role involves creating responsive web apps with seamless user experience."
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "NextGen Systems",
    location: "Hyderabad, India",
    salary: "₹8–10 LPA",
    description:
      "As a Backend Engineer, you will design scalable APIs, optimize databases, and work with Node.js, Express, and MongoDB. Strong problem-solving skills are a must."
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "PixelCraft Studios",
    location: "Remote",
    salary: "₹5–7 LPA",
    description:
      "We need a creative UI/UX Designer to craft intuitive interfaces, conduct user research, and build wireframes & prototypes. Experience with Figma or Adobe XD is required."
  }
];

const JobsList = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold text-black" style={{ color: "#333" }}>
        Available Jobs
      </h2>

      <div className="row">
        {jobsData.map((job) => (
          <div key={job.id} className="col-md-6">
            <Card
              className="shadow-sm border-0 rounded-4 job-card mb-3"
              style={{ backgroundColor: "#fff", color: "#333" }}
            >
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="fw-bold mb-1 text-black" style={{ color: "#000" }}>
                      <FaBriefcase className="me-2 text-warning icon-wd" />
                      {job.title}
                    </h5>
                  </div>
                  <Button
                    color="link"
                    className="text-dark p-0"
                    onClick={() => toggle(job.id)}
                  >
                    <FaChevronDown
                      className={`transition icon-wd ${openId === job.id ? "rotate" : ""}`}

                    />
                  </Button>
                </div>

                <Collapse isOpen={openId === job.id}>
                  <div className="mt-3 p-3 rounded-3 job-details">
                    <p className="text-black">
                      <FaMapMarkerAlt className="me-2 text-warning icon-wd" />
                      <strong>Location:</strong> <small>{job.location}</small>
                    </p>
                    <p className="text-black">
                      <FaMoneyBillWave className="me-2 text-warning icon-wd" />
                      <strong>Salary:</strong> <small>{job.salary}</small>
                    </p>
                    <p className="text-black">
                      <FaInfoCircle className="me-2 text-warning icon-wd" />
                      <strong>Description:</strong> <small>{job.description}</small>
                    </p>
                    <Button type="submit" className='btn-sub'>
                       Apply
                      <img src={Chand2} alt='joyful' className='sbm-chand' />
                    </Button>
                  </div>
                </Collapse>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

    </div>
  );
};

export default JobsList;
