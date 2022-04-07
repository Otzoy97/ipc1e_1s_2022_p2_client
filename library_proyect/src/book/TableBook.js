import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useUrl } from '../hooks/useUrl'

export default function TableBook() {
  const url = useUrl();
  const [data, setData] = useState([])
  const [author, setAuthor] = useState()
  const [title, setTitle] = useState()
  const [year_from, setYearFrom] = useState()
  const [year_to, setYearTo] = useState()

  // useEffect(() => {
  //   axios.get(url.url + '/book')
  //     .then((value) => {
  //       if (value.status === 200) {
  //         setData(value.data)
  //       }
  //     }).catch((e) => {
  //       alert(e.response.data.msg)
  //     })
  // }, [url.url])

  const handleClick = (e) => {
    e.preventDefault()
    let config_params = {}
    if (title) {
      config_params.title = title
    }
    if (author) {
      config_params.author = author
    }
    if (year_from) {
      config_params.year_from = year_from
    }
    if (year_to) {
      config_params.year_to = year_to
    }

    axios.get(url.url + '/book', { params: config_params })
      .then((value) => {
        if (value.status === 200) {
          setData(value.data)
        }
      }).catch((e) => {
        alert(e.response.data.msg)
      })
  }

  return (
    <>
      <hr></hr>
      <Row className="mt-2">
        <Col>
          <FormControl type="text" placeholder="autor" onChange={e => setAuthor(e.target.value)}></FormControl>
        </Col>
        <Col>
          <FormControl type="text" placeholder="titulo" onChange={e => setTitle(e.target.value)}></FormControl>
        </Col>
        <Col>
          <FormControl type="number" placeholder="desde" onChange={e => setYearFrom(parseInt(e.target.value))}></FormControl>
        </Col>
        <Col>
          <FormControl type="number" placeholder='hasta' onChange={e => setYearTo(parseInt(e.target.value))}></FormControl>
        </Col>
        <Col>
          <Button type="button" onClick={handleClick}>Filtrar</Button>
        </Col>
      </Row>
      <Table stripped bordered hover className='mt-2'>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Edición</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? data.map((e) => {
            return (
              <tr key={e.isbn}>
                <td>{e.isbn}</td>
                <td>{e.title}</td>
                <td>{e.author}</td>
                <td>{e.edition}</td>
                <td>{e.year}</td>
              </tr>)
          }) : ""}
        </tbody>
      </Table>
    </>
  )
}