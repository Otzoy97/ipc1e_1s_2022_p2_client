import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import FormControl from 'react-bootstrap/FormControl'
import { useUrl } from '../hooks/useUrl'

export default function MainPage({ children }) {
  const url = useUrl()
  const [urlapi, setUrlapi] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    if(urlapi) {
      url.setApiUrl(urlapi)
    }
  }

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
              <FormControl placeholder='Url de la API' className="me-2" onChange={e => setUrlapi(e.target.value)}></FormControl>
              <Button variant="outline-light" onClick={handleClick}>Establecer</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <p>{url.url ? `usando ${url.url}`: "API indefinida"}</p>
        {children}
      </Container>
    </>
  )
}