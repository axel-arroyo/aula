import React from 'react'
import { Table } from '@mantine/core';

const UVA3 = () => {

  const elements = [
  {
    id: "1",
    name: "String reverso",
    tags: "strings, ciclos",
    rating: "600",
    recommended: "Recomendado",
    done: "No"
  },
  {
    id: "0",
    name: "Hello World",
    tags: "strings",
    rating: "200",
    recommended: "Fácil",
    done: "No"
  },
  
]

  const rows = elements.map((element) => (
    <tr key={element.id}>
      <a href={"/PySano/UVA1" + element.id}>
        <td className='table-name-tag'>
        <span className='table-name'>{element.name}</span>
        <span className='table-tags'>tags: {element.tags}</span>
        </td>
      </a>
      <td className={element.rating <= 200 ? "table-rating-easy": "table-rating-medium"}>{element.rating}</td>
      <td>{element.recommended}</td>
      <td> {element.done}</td>
    </tr>
  ));

  return (
    <>
   
    <nav class="navbar-pysano">
        <div class="logo">
            <h2>PySano</h2>
        </div>
        <a className='uva-link' href='/PySano/UVA1'>UVA 1</a>
        <a className='uva-link' href='UVA2'>UVA 2</a>
        <a className='uva-link' href='UVA3'>UVA 3</a>
        <a className='uva-link' href='UVA4'>UVA 4</a>
        <a className='uva-link' href='UVA5'>UVA 5</a>
        <a className='uva-link' href='UVA6'>UVA 6</a>
        <a className='uva-link' href='UVA7'>UVA 7</a>
        <a className='uva-link' href='UVA8'>UVA 8</a>
        <a className='uva-link' href='UVA9'>UVA 9</a>
        <a className='uva-link' href='UVA10'>UVA 10</a> 
    </nav>
    <main className='table-content'>
    <h1 className='table-header'>Lista de ejercicios</h1>
    <Table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Rating</th>
          <th>Sugerencia</th>
          <th>Realizado</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    </main>
    </>
  )
}

export default UVA3