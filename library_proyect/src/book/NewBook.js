import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function NewBook() {

  const [show, setShow] = useState(false)
  const [isbn, setIsbn] = useState(0)
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [edition, setEdition] = useState(0)
  const [year, setYear] = useState(0)
  const [no_copies, setNoCopies] = useState(0)
  const [no_available_copies, setNoAvailableCopies] = useState(0)
  const [no_bookshelf, setNoBookshelf] = useState(0)
  const [no_bookshelf_row, setBookshelfRow] = useState(0)


  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    console.log({ isbn });
  }

  return (
    <>
      <Button variante="success" onClick={handleShow}>
        Nuevo libro
      </Button>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>Crear nuevo libro</Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-2">
              <Col>
                <Form.Control required type="number" placeholder="isbn" onChange={e => setIsbn(parseInt(e.target.value))}></Form.Control>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <Form.Control required type="text" placeholder="título" onChange={e => setTitle(e.target.value)}></Form.Control>
              </Col>
              <Col>
                <Form.Control required type="text" placeholder="autor" onChange={e => setAuthor(e.target.value)}></Form.Control>
              </Col>
              <Col>
                <Form.Control required type="number" placeholder="edición" onChange={e => setEdition(parseInt(e.target.value))}></Form.Control>
              </Col>
              <Col>
                <Form.Control required type="number" placeholder="año" onChange={e => setYear(parseInt(e.target.value))}></Form.Control>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <Form.Control required type="number" placeholder="cantidad de copias" onChange={e => setNoCopies(parseInt(e.target.value))}></Form.Control>
              </Col>
              <Col>
                <Form.Control required type="number" placeholder="cantidad de copias disponibles" onChange={e => setNoAvailableCopies(parseInt(e.target.value))}></Form.Control>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <Form.Control required type="number" placeholder="no. de estantería" onChange={e => setNoBookshelf(parseInt(e.target.value))}></Form.Control>
              </Col>
              <Col>
                <Form.Control required type="number" placeholder="no. de fila en estantería" onChange={e => setBookshelfRow(parseInt(e.target.value))}></Form.Control>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Crear libro
          </Button>
          <Button variant="secondary" type="button" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}