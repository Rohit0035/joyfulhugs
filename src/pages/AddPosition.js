import React, { useEffect, useState } from 'react';
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import {
    Card, CardBody, CardHeader, Container,
    Row, Col, Form, FormGroup, Label, Input,
    Button
} from 'reactstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chand2 from '../assets/images/coms/chand.png';
import { useNavigate } from 'react-router-dom';

const AddPosition = () => {
    const [jobPosition, setJobPosition] = useState('');

    const navigate = useNavigate();
    // Fetch job positions from API
    const fetchPosition = async () => {
        try {
            const response = await axios.get('https://joyfulhugs.com/api/job_positions.php');
            const positions = response.data.job_positions;
            console.log(positions)
            if (Array.isArray(positions)) {
                setJobPosition(positions.join(', ')); // Join array to comma-separated string
            } else {
                setJobPosition('');
            }

            toast.success('Positions loaded successfully!');
        } catch (error) {
            console.error('Fetch error:', error);
            toast.error('Failed to load job positions!');
        }
    };

    useEffect(() => {
        fetchPosition();
    }, []);

    // Submit updated job positions using form-data
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const jobArray = jobPosition
                .split(',')
                .map(item => item.trim())
                .filter(item => item !== '');

            // Prepare form-data format
            const formData = new FormData();

            if (jobArray.length === 0) {
                // toast.error('Please enter at least one job position.');
                // return;
                formData.append(`job_positions[1]`, '')
            } else {
                jobArray.forEach((job, index) => {
                    formData.append(`job_positions[${index}]`, job);
                });
            }

            // POST request with form-data
            await axios.post(
                'https://joyfulhugs.com/api/job_positions.php',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            toast.success('Job positions updated successfully!');
            fetchPosition(); // Refresh updated data
        } catch (error) {
            console.error('Post error:', error.response?.data || error.message);
            toast.error(
                error.response?.data?.message || 'Failed to update job positions!'
            );
        }
    };

    const handleExit = (e) => {
        localStorage.setItem('isLoggedIn', 'false');
        navigate('/');
    };

    return (
        <>
            <Header />
            <section style={{ paddingTop: '150px' }}>
                <Container>
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <div className='d-flex justify-content-between'>
                                        <h4 className='mb-0 mt-0'>Add Job Position</h4>
                                        <button className='btn btn-danger btn-sm' onClick={handleExit}>Exit</button>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={handleUpdate}>
                                        <FormGroup>
                                            <Label for="jobPosition">
                                                Job Positions (Add multiple positions separated by commas, e.g., Manager, Developer)
                                            </Label>                                            <Input
                                                type="text"
                                                id="job_positions"
                                                value={jobPosition}
                                                onChange={(e) => setJobPosition(e.target.value)}
                                                placeholder="Enter positions (e.g., Manager, Developer)"
                                                className='bg-light'
                                            />
                                        </FormGroup>
                                        <div className='text-end mt-4'>
                                            <Button className='btn-sub text-decoration-none' type="submit">
                                                Update
                                                <img src={Chand2} alt='joyful' className='sbm-chand' />
                                            </Button>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        </>
    );
};

export default AddPosition;
