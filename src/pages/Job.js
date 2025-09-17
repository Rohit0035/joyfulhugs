import React, { useEffect, useState } from "react";
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import "../assets/css/job.css";
import {
    Button, Col, Container, Form, Input, Label, Row
} from 'reactstrap';
import Chand from '../assets/images/coms/ch-j.png';
import Chand2 from '../assets/images/coms/chand.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import JobsList from "../comonent/JobsList";
import { API_BASE_URL } from "../utils/api-config";
import axios from "axios";

const Job = () => {
    const [formData, setFormData] = useState({
        job_id: "",
        name: "",
        email: "",
        answer1: "",
        answer2: "",
        answer3: "",
        file: null,
        link: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [positions, setPositions] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    const [loadingPositions, setLoadingPositions] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
    setLoadingPositions(true);
    axios
        .get(`${API_BASE_URL}/get-jobs`)
        .then((response) => {
            console.log(response);
            if (response.data.success) {
                // setPositions(response.job_positions); // ✅ Correct key if needed
                setJobs(response.data.data); // ✅ Correct key
            } else {
                setPositions([]);
                console.error("Invalid positions format:", response);
            }
        })
        .catch((error) => {
            console.error("Error fetching positions:", error);
            setPositions([]);
        })
        .finally(() => setLoadingPositions(false));
}, []);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append("job_id", selectedJob?.id);
    form.append("user_name", formData.name);
    form.append("user_email", formData.email);
    form.append("message", formData.position);
    form.append("answer1", formData.answer1);
    form.append("answer2", formData.answer2);
    form.append("answer3", formData.answer3);
    form.append("link", formData.link);
    if (formData.file) form.append("my_file", formData.file);

    try {
        const response = await axios.post(
            `${API_BASE_URL}/submit-job-application-form`,
            form,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        if (response.data.success) {
            // alert("Form submitted successfully!");
            setSelectedJob(null);
            setFormData({
                job_id: "",
                name: "",
                email: "",
                answer1: "",
                answer2: "",
                answer3: "",
                file: null,
                link: "",
            });
            navigate("/thankyou");
        } else {
            alert("Failed to submit the form. Please try again.");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
};

    return (
        <>
            <Header />
            <section className='job-sec'>
                <Container>
                    <Row>
                        <Col md="12">
                            <div className='position-relative' data-aos="zoom-in">
                                <h1 className='heading-bold'>
                                    Don't Just Apply <br />
                                    Respond.
                                </h1>
                                <span className="position-relative">
                                    <img src={Chand} alt='joyful' className='ch-j' />
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='job-sec2'>
                <Container>
                    <Row>
                        <Col md="12">
                            <p className='mt-0 mb-0' data-aos="zoom-in">
                                We’re not looking for perfect profiles.
                            </p>
                            <p className='mt-0 mb-0' data-aos="zoom-in">
                                We’re looking for thinkers who care.
                            </p>
                        </Col>
                        <Col md="12">
                            <p className='mt-5 mb-0' data-aos="zoom-in">
                                If you’re the kind of person who sees learning as a lifelong habit,
                                who doesn’t wait to be told what to do, and who enjoys being a beginner again and again —
                                we want to hear from you. Not in a resume. In your own words.
                            </p>
                        </Col>
                    </Row>
                    {
                    loadingPositions ? (
                            <div className="text-center my-5">
                                <h3 className="text-black">Loading job positions...</h3>
                            </div>
                            
                        ):
                        jobs.length > 0 ? (
                            
                            <JobsList jobs={jobs} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
                        ):(
                        <div className="text-center my-5">
                                <h3 className="text-black">No current positions available</h3>
                            </div> 
                        )
                    }

                    <div className='mt-5' data-aos="zoom-in">
                        {
                        selectedJob &&
                            <div className='mt-5 job-form'>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md='12' className='mb-3'>
                                            <Label className='int-lbl'>POSITION :</Label>
                                            <p className='text-black'>{selectedJob?.title}</p>
                                            {/* <Input
                                                type="text"
                                                className='int-bg'
                                                name="position"
                                                value={selectedJob?.title}
                                                // onChange={handleChange}
                                                // required
                                                readonly
                                            /> */}
                                        </Col>
                                        <Col md='12' className='mb-3'>
                                            <Label className='int-lbl'>NAME :</Label>
                                            <Input type="text" className='int-bg' name="name" value={formData.name} onChange={handleChange} required />
                                        </Col>
                                        <Col md='12' className='mb-5'>
                                            <Label className='int-lbl'>EMAIL ID :</Label>
                                            <Input type="email" className='int-bg' name="email" value={formData.email} onChange={handleChange} required />
                                        </Col>
                                        <Col md='12' className='mb-5'>
                                            <Label className='int-lbl'>When did you last change your mind about something important? :</Label>
                                            <Input
                                                name="answer1"
                                                type="textarea"
                                                className='int-bg'
                                                style={{ height: '172px' }}
                                                value={formData.answer1}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                        <Col md='12' className='mb-5'>
                                            <Label className='int-lbl'>What’s something unusual you’ve learned recently?</Label>
                                            <Input
                                                name="answer2"
                                                type="textarea"
                                                className='int-bg'
                                                style={{ height: '172px' }}
                                                value={formData.answer2}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                        <Col md='12' className='mb-5'>
                                            <Label className='int-lbl'>Tell us about a time you worked on something you didn’t know how to do</Label>
                                            <Input
                                                name="answer3"
                                                type="textarea"
                                                className='int-bg'
                                                style={{ height: '172px' }}
                                                value={formData.answer3}
                                                onChange={handleChange}
                                            />
                                        </Col>

                                        <Col md='12' className='my-5'>
                                            <h1 className='job-head'>Prefer structure? Sure, we get it.</h1>
                                            <h1 className='job-head'>If you’d like to attach a CV, portfolio, or LinkedIn profile, you can.</h1>
                                            <h1 className='job-head'>But it won’t be the reason we reach out to you. Your voice will.</h1>
                                        </Col>

                                        <Col md='12' className='mb-5'>
                                            <Label className='int-lbl'>Upload file :</Label>
                                            <Input type="file" className='int-bg' name="file" onChange={handleChange} required />
                                        </Col>
                                        <Col md='12' className='mb-5'>
                                            <Label className='int-lbl'>Paste link :</Label>
                                            <Input type="url" className='int-bg' name="link" value={formData.link} onChange={handleChange} />
                                        </Col>
                                        <Col md='12' className='mb-5 text-end'>
                                            <Button type="submit" disabled={isSubmitting} className='btn-sub'>
                                                {isSubmitting ? "Submitting..." : "Submit"}
                                                <img src={Chand2} alt='joyful' className='sbm-chand' />
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        }
                    </div>

                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Job;
