import React, { useState } from 'react'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import { useUrl } from '../hooks/useUrl'

export default function NewBook() {
  const url = useUrl();
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    const read = new FileReader()
    read.onload = async (e) => {
      const parseJSON = JSON.parse(e.target.result)
      parseJSON.forEach(element => {
        axios.post(url.url + '/book', element).then((value) => {
          if (value.status === 201) {
            alert(value.data.msg)
          }
        }).catch((e) => {
          alert(e.response.data.msg)
        });
      });
    }
    read.readAsText(file[0])
  }

  return (
    <Row>
      <Col sm={9} md={9}>
        <FormControl type="file" onChange={e => setFile(e.target.files)}></FormControl>
      </Col>
      <Col sm={3} md={3}>
        <div className='d-grid gap-2'>
          <Button variante="success" onClick={handleSubmit}>
            leer y cargar
          </Button>
        </div>
      </Col>
    </Row>
  )
}