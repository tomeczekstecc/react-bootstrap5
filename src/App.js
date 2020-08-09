import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <header className='App-header'>
      <Container>
        <Form mb='5'>
          <Row>
            <Col md>
              {' '}
              <Form.Group controlId='formEmail'>
                <Form.Label>Email adresss</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='przykladowy@email.com'
                ></Form.Control>
                <Form.Text className='text-muted'>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Form.Text>
              </Form.Group>
            </Col>

            <Col md>
              <Form.Group controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='twoje hasło'
                ></Form.Control>
                <Form.Text className='text-muted'>
                  {' '}
                  Lorem ipsum dolor amet consectetur adipisicing elit.
                </Form.Text>
                <Button variant='info' type='submit'>
                  submit
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Card className='mb-3' style={{ color: '#555' }}>
          <Card.Img src='https://picsum.photos/800/400' />
          <Card.Body>
            <Card.Title>Card example</Card.Title>
            <Card.Text>
              This is a card example Lorem ipsum dolor sit amet.
            </Card.Text>
            <Button variant='success'>Next card</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>test2</Breadcrumb.Item>
          <Breadcrumb.Item active>test3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant='success'>This is a button</Alert>
        <Button>Test Button</Button>
      </Container>
    </header>
  );
}

export default App;
