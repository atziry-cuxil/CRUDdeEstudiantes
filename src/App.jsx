import React from 'react';
import { ListaEstudiantes } from './ListaEstudiantes'
import './App.css'

function App() {

  function eliminarEstudiante(index) {
    let nuevoArray = [...estudiantes]
    nuevoArray = nuevoArray.filter(estudiante => estudiante.id != index)
    setEstudiantes(nuevoArray)
  }
  
  const [estudiantes, setEstudiantes] = React.useState([
    {
      id: 1,
      nombre: "Juan Guitz",
      correo: 'jg@mail.com',
      telefono: '12345678',
      curso: 'Desarrollo de Software',
      estado: 'Solvente',
      activo: true,
    },
    {
      id: 2,
      nombre: "Lorena",
      correo: 'lore@mail.com',
      telefono: '12345678',
      curso: 'Desarrollo de Software',
      estado: 'Solvente',
      activo: true,
    },
    {
      id: 3,
      nombre: "Maria",
      correo: 'maria@mail.com',
      telefono: '12345328',
      curso: 'Desarrollo de Software',
      estado: 'Solvente',
      activo: false,
    },
    {
      id: 4,
      nombre: "Sofia",
      correo: 'sofi@mail.com',
      telefono: '12345678',
      curso: 'Desarrollo de Software',
      estado: 'Solvente',
      activo: false,
    },
    {
      id: 5,
      nombre: "Alex",
      correo: 'alex@mail.com',
      telefono: '12345678',
      curso: 'Desarrollo de Software',
      estado: 'Solvente',
      activo: false,
    }

  ])

  return (
    <>
      <ListaEstudiantes estudiantes={estudiantes} onEliminar={eliminarEstudiante} />
    </>
  )
}

export default App
