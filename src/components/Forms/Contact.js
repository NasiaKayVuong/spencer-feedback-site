import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { db } from '../../firebase';

const Contact = () => {
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection('contacts')
      .add({
        company: company,
        name: name,
        email: email,
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
    setMessage('');
  };
  return (
    <Container>
      <Form className='form' onSubmit={handleSubmit}>
        <h1>Contact Us</h1>

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
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Leave a message here'
            style={{ height: '100px' }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
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

export default Contact;
