import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { useUrl } from '../hooks/useUrl'

export default function TableBook() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get()
  })

  return (
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

      </tbody>
    </Table>
  )
}