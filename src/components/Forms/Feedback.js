import React, { useState, useEffect } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { db } from '../../firebase';

const Feedback = () => {
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quality, setQuality] = useState('');
  const [price, setPrice] = useState('');
  const [delivery, setDelivery] = useState('');
  const [overall, setOverall] = useState('');
  const [message, setMessage] = useState('');

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection('feedback')
      .add({
        company: company,
        name: name,
        email: email,
        quality: quality,
        price: price,
        delivery: delivery,
        overall: overall,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert('Your message has been submitted👍');
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setCompany('');
    setName('');
    setEmail('');
    setQuality('');
    setPrice('');
    setDelivery('');
    setOverall('');
    setMessage('');
  };

  return (
    <Container>
      <Form className='form' onSubmit={handleSubmit}>
        <h1>Customer Feedback Form</h1>

        <Form.Group className='mb-3'>
          <Form.Label>Company</Form.Label>
          <Form.Control
            placeholder='Company'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Spencer provides you a high quality product</Form.Label>
          <Form.Control
            as='select'
            value={quality}
            onChange={(e) => {
              console.log('e.target.value', e.target.value);
              setQuality(e.target.value);
            }}
            required>
            <option>Please select the most suitable option</option>
            <option value='Strongly Agree'>Strongly Agree</option>
            <option value='Somewhat Agree'>Somewhat Agree</option>
            <option value='Neither Agree or Disagree'>
              Neither Agree or Disagree
            </option>
            <option value='Somewhat Disagree'>Somewhat Disagree</option>
            <option value='Strongly Disagree'>Strongly Disagree</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Spencer products are fairly priced</Form.Label>
          <Form.Control
            as='select'
            value={price}
            onChange={(e) => {
              console.log('e.target.value', e.target.value);
              setPrice(e.target.value);
            }}
            required>
            <option>Please select the most suitable option</option>
            <option value='Strongly Agree'>Strongly Agree</option>
            <option value='Somewhat Agree'>Somewhat Agree</option>
            <option value='Neither Agree or Disagree'>
              Neither Agree or Disagree
            </option>
            <option value='Somewhat Disagree'>Somewhat Disagree</option>
            <option value='Strongly Disagree'>Strongly Disagree</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>
            Spencer products are delivered in a timeley fashion
          </Form.Label>
          <Form.Control
            as='select'
            value={delivery}
            onChange={(e) => {
              console.log('e.target.value', e.target.value);
              setDelivery(e.target.value);
            }}
            required>
            <option>Please select the most suitable option</option>
            <option value='Strongly Agree'>Strongly Agree</option>
            <option value='Somewhat Agree'>Somewhat Agree</option>
            <option value='Neither Agree or Disagree'>
              Neither Agree or Disagree
            </option>
            <option value='Somewhat Disagree'>Somewhat Disagree</option>
            <option value='Strongly Disagree'>Strongly Disagree</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>
            Overall value of Spencer products and services
          </Form.Label>
          <Form.Control
            as='select'
            value={overall}
            onChange={(e) => {
              console.log('e.target.value', e.target.value);
              setOverall(e.target.value);
            }}
            required>
            <option>Please select the most suitable option</option>
            <option value='Strongly Agree'>Strongly Agree</option>
            <option value='Somewhat Agree'>Somewhat Agree</option>
            <option value='Neither Agree or Disagree'>
              Neither Agree or Disagree
            </option>
            <option value='Somewhat Disagree'>Somewhat Disagree</option>
            <option value='Strongly Disagree'>Strongly Disagree</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Additional Comments</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Leave a comment here'
            style={{ height: '100px' }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button
          type='submit'
          style={{ background: loader ? '#ccc' : ' rgb(2, 2, 110)' }}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Feedback;
