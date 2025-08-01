import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import { Button, Card, CardBody, Container, Form, Input, Row, Col } from 'reactstrap';

const AddPositions = ({ positions, addPosition, deletePosition }) => {
  const [positionNo, setPositionNo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (positionNo.trim() !== '') {
      addPosition(positionNo);
      setPositionNo('');
    }
  };

  return (
    <>
      <Header />
      <section className='pt-120'>
        <Container>
          <Row>
            <Col md="12">
              <Card className="mb-4">
                <CardBody>
                  <h4>Add Position</h4>
                  <Form onSubmit={handleSubmit}>
                    <label>Position No.</label>
                    <Input 
                      type="text" 
                      value={positionNo}
                      onChange={(e) => setPositionNo(e.target.value)} 
                    />
                    <Button type="submit" color="primary" className="mt-2">Add</Button>
                    <Button type="button" color="secondary" className="mt-2 ms-2" onClick={() => navigate('/job')}>
                      View Job Page
                    </Button>
                  </Form>
                </CardBody>
              </Card>

              <h5>Added Positions:</h5>
              {positions.length === 0 ? (
                <p>No positions added.</p>
              ) : (
                positions.map((pos, index) => (
                  <Card key={index} className="mb-2">
                    <CardBody className="d-flex justify-content-between align-items-center">
                      <span>{pos}</span>
                      <Button color="danger" size="sm" onClick={() => deletePosition(index)}>Delete</Button>
                    </CardBody>
                  </Card>
                ))
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default AddPositions;
