import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import titleback from '../images/title-back.png';
import ControlledCarousel from './layout/Carousel';

function Home() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Card className='bg-dark text-white'>
              <Card.Img src={titleback} alt='spencer edm' />
              <Card.ImgOverlay className='text-center'>
                <Card.Text as='h2'>Spencer Corporation</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className='text-center'>
              <Card.Header as='h3' className='text-primary bg-light'>
                Need EDM Machining Services?
              </Card.Header>
              <Card.Body>
                <Card.Text as='h5'>
                  Call (669) 242-7902 or email us at quotes@spenceredm.com for a
                  quote!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
