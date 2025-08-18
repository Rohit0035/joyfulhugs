import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import "../assets/css/job.css";
import { Button, Col, Container, Form, Input, Label, Row, Spinner } from 'reactstrap';
import Chand from '../assets/images/coms/ch-j.png';
import Chand2 from '../assets/images/coms/chand.png';
import AOS from "aos";
import "aos/dist/aos.css";

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from './firebaseConfig'; // Your Firebase app initialization

const storage = getStorage(app);
const db = getFirestore(app);
const Job = () => {
    const [loading, setLoading] = useState(false);
    const [uploadOption, setUploadOption] = useState('link');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const [formData, setFormData] = useState({
        position: '',
        name: '',
        email: '',
        q1: '',
        q2: '',
        q3: '',
        resume_link: '',
        resume_file_url: '',
    });

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData((prev) => ({ ...prev, resumeFile: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleUploadOptionChange = (e) => {
        setUploadOption(e.target.value);
        setFormData((prev) => ({ ...prev, resumeLink: '', resumeFile: null }));
    };

    const uploadResumeToFirebase = async (file) => {
        if (!file) return null;
        const fileRef = ref(storage, `resumes/${Date.now()}-${file.name}`);
        const snapshot = await uploadBytes(fileRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. Upload the file to Firebase Storage
            let downloadURL = null;
            if (file) {
                const storageRef = ref(storage, `attachments/${file.name}`);
                await uploadBytes(storageRef, file);
                downloadURL = await getDownloadURL(storageRef);
            }

            // 2. Add a new document to a Firestore collection
            await addDoc(collection(db, 'mail'), {
                to: 'narendraazsm@gmail.com', // The email address to send to
                subject: `New message from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                attachments: downloadURL ? [{ path: downloadURL }] : [],
                createdAt: new Date(),
            });

            alert('Email sent successfully!');
            // Reset form
            setName('');
            setEmail('');
            setMessage('');
            setFile(null);
            // let uploadedFileURL = '';
            // if (formData.resumeFile) {
            //     uploadedFileURL = await uploadResumeToFirebase(formData.resumeFile);
            // }

            // const templateParams = {
            //     position: formData.position,
            //     name: formData.name,
            //     email: formData.email,
            //     q1: formData.q1,
            //     q2: formData.q2,
            //     q3: formData.q3,
            //     resume_link: formData.resume_link,
            //     resume_file_url: uploadedFileURL,
            // };

            // await emailjs.send('service_wwvospw', 'template_th4fasb', templateParams, 'pCvCzDycsADCQ9ryA');

            // alert('Application submitted successfully!');
            // setFormData({
            //     position: '',
            //     name: '',
            //     email: '',
            //     resume_link: '',
            //     resume_file_url: null,
            //     q1: '',
            //     q2: '',
            //     q3: '',
            // });

        } catch (err) {
            console.error("Error submitting form:", err);
            alert("Error submitting form. Please try again.");
        } finally {
            setLoading(false);
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
                                    Don't Just Apply <br /> Respond.
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
                                If you’re the kind of person who sees learning as a lifelong habit, who doesn’t wait to be told what to do, and who enjoys being a beginner again and again we want to hear from you. Not in a resume. In your own words.
                            </p>
                        </Col>
                    </Row>

                    <div className="mt-5 job-form" data-aos="zoom-in">
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md='12' className='mb-3'>
                                    <Label className='int-lbl'>POSITION :</Label>
                                    <Input type="text" name="position" className='int-bg' value={formData.position} onChange={handleChange}  />
                                </Col>

                                <Col md='12' className='mb-3'>
                                    <Label className='int-lbl'>NAME :</Label>
                                    <Input type="text" name="name" className='int-bg' value={formData.name} onChange={handleChange}  />
                                </Col>

                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>EMAIL ID :</Label>
                                    <Input type="email" name="email" className='int-bg' value={formData.email} onChange={handleChange}  />
                                </Col>

                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>When did you last change your mind about something important?</Label>
                                    <Input name="q1" type="textarea" className='int-bg' style={{ height: '172px' }} value={formData.q1} onChange={handleChange}  />
                                </Col>

                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>What’s something unusual you’ve learned recently?</Label>
                                    <Input name="q2" type="textarea" className='int-bg' style={{ height: '172px' }} value={formData.q2} onChange={handleChange}  />
                                </Col>

                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>Tell us about a time you worked on something you didn’t know how to do it</Label>
                                    <Input name="q3" type="textarea" className='int-bg' style={{ height: '172px' }} value={formData.q3} onChange={handleChange}  />
                                </Col>

                                <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>Paste Link</Label>
                                    <Input
                                        type="text"
                                        name="resume_link"
                                        className='int-bg'
                                        value={formData.resume_link}
                                        onChange={handleChange}
                                        placeholder="https://example.com/resume.pdf"
                                    />
                                </Col>

                                 {/* <Col md='12' className='mb-5'>
                                    <Label className='int-lbl'>Upload Resume File</Label>
                                    <Input
                                         type="file"
                                        name="resumeFile"
                                        className='int-bg'
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleChange}
                                    />
                                </Col> */}

                                <Col md='12' className='mb-5 text-end'>
                                    <Button type="submit" className="btn-sub text-decoration-none me-0" disabled={loading}>
                                        {loading ? (
                                            <Spinner size="sm" color="dark" />
                                        ) : (
                                            <>
                                                submit
                                                <span style={{ position: 'relative' }}>
                                                    <img src={Chand2} alt='joyful' className='btm-arc' />
                                                </span>
                                            </>
                                        )}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Container>
            </section>

            <Footer />
        </>
    );
};

export default Job;

