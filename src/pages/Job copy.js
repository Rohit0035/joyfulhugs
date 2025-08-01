import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import "../assets/css/job.css";
import { Button, Col, Container, Form, Input, Label, Row } from 'reactstrap';
import Chand from '../assets/images/coms/ch-j.png';
import Chand2 from '../assets/images/coms/chand.png';
import AOS from "aos";
import "aos/dist/aos.css";

const Job = () => {
  const [formData, setFormData] = useState({
    position: '',
    name: '',
    email: '',
    resumeLink: '',
    resumeFile: null,
    q1: '',
    q2: '',
    q3: '',
  });

  const [uploadOption, setUploadOption] = useState('link'); // 'upload' or 'link'

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to send via EmailJS
    const templateParams = {
      position: formData.position,
      name: formData.name,
      email: formData.email,
      q1: formData.q1,
      q2: formData.q2,
      q3: formData.q3,
      resume_link: uploadOption === 'link' ? formData.resumeLink : '',
      resume_file_name: uploadOption === 'upload' && formData.resumeFile ? formData.resumeFile.name : '',
      upload_option: uploadOption,
    };

    // Replace these with your EmailJS actual service/template/user IDs
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Application submitted successfully!');
        setFormData({
          position: '',
          name: '',
          email: '',
          resumeLink: '',
          resumeFile: null,
          q1: '',
          q2: '',
          q3: '',
        });
        setUploadOption('link'); // reset option
      }, (err) => {
        console.error('FAILED...', err);
        alert('Failed to submit application. Please try again.');
      });
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
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md='12' className='mb-3'>
                <Label className='int-lbl'>POSITION :</Label>
                <Input
                  type="text"
                  name="position"
                  className='int-bg'
                  value={formData.position}
                  onChange={handleChange}
                  required
                />
              </Col>

              <Col md='12' className='mb-3'>
                <Label className='int-lbl'>NAME :</Label>
                <Input
                  type="text"
                  name="name"
                  className='int-bg'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Col>

              <Col md='12' className='mb-5'>
                <Label className='int-lbl'>EMAIL ID :</Label>
                <Input
                  type="email"
                  name="email"
                  className='int-bg'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Col>

              <Col md='12' className='mb-5'>
                <Label className='int-lbl'>When did you last change your mind about something important? :</Label>
                <Input
                  name="q1"
                  type="textarea"
                  className='int-bg'
                  style={{ height: '172px' }}
                  value={formData.q1}
                  onChange={handleChange}
                  required
                />
              </Col>

              <Col md='12' className='mb-5'>
                <Label className='int-lbl'>What’s something unusual you’ve learned recently?</Label>
                <Input
                  name="q2"
                  type="textarea"
                  className='int-bg'
                  style={{ height: '172px' }}
                  value={formData.q2}
                  onChange={handleChange}
                  required
                />
              </Col>

              <Col md='12' className='mb-5'>
                <Label className='int-lbl'>Tell us about a time you worked on something you didn’t know how to do it</Label>
                <Input
                  name="q3"
                  type="textarea"
                  className='int-bg'
                  style={{ height: '172px' }}
                  value={formData.q3}
                  onChange={handleChange}
                  required
                />
              </Col>

              {/* Upload Option Toggle */}
              <Col md='12' className='mb-3'>
                <Label className='int-lbl d-block mb-2'>How would you like to provide your resume?</Label>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="optionLink"
                    name="uploadOption"
                    value="link"
                    checked={uploadOption === 'link'}
                    onChange={handleUploadOptionChange}
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="optionLink">Paste Link</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="optionUpload"
                    name="uploadOption"
                    value="upload"
                    checked={uploadOption === 'upload'}
                    onChange={handleUploadOptionChange}
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="optionUpload">Upload File</label>
                </div>
              </Col>

              {/* Show inputs conditionally */}
              {uploadOption === 'link' && (
                <Col md='12' className='mb-5'>
                  <Label className='int-lbl'>Paste resume link :</Label>
                  <Input
                    type="url"
                    name="resumeLink"
                    className='int-bg'
                    value={formData.resumeLink}
                    onChange={handleChange}
                    placeholder="https://example.com/resume.pdf"
                    required
                  />
                </Col>
              )}

              {uploadOption === 'upload' && (
                <Col md='12' className='mb-5'>
                  <Label className='int-lbl'>Upload resume file :</Label>
                  <Input
                    type="file"
                    name="resumeFile"
                    className='int-bg'
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    required
                  />
                </Col>
              )}

              <Col md='12' className='mb-5 text-end'>
                <Button type="submit" color="primary">
                  Submit
                  <img src={Chand2} alt='joyful' className='sbm-chand' />
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Job;

