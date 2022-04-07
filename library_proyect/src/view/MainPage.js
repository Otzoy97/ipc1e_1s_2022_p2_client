import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import FormControl from 'react-bootstrap/FormControl'

export default function MainPage({ children }) {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className='mb-2'>
        <Container fluid>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey="/book" className="me-auto">
              <Nav.Link href="/book">Libro</Nav.Link>
            </Nav>
            <Form className='d-flex'>
              <FormControl placeholder='Url de la API' className="me-2"></FormControl>
              <Button variant="outline-light">Establecer</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {children}
      </Container>
    </>
  )
}