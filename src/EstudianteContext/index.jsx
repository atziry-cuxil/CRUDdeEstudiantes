import React from 'react';
import { useState } from 'react';

const EstudianteContext = React.createContext()

const EstudianteProvider = ({ children }) => {

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

    function eliminarEstudiante(index) {
        let nuevoArray = [...estudiantes]
        nuevoArray = nuevoArray.filter(estudiante => estudiante.id != index)
        setEstudiantes(nuevoArray)
    }

    // function cambiarActividad(index) {
    //   let arrayEstudiantes = estudiantes.map((estudiante) => estudiante.id == index ?
    //     (estudiante.activo ? estudiante.activo = false : estudiante.activo = true) : estudiante)
    //   console.log(arrayEstudiantes)
    //   setEstudiantes(arrayEstudiantes)
    // }

    const editarEstado = (estudianteId) => {
        const estudiantesActualizados = estudiantes.map((estudiante) => (
            estudiante.id === estudianteId ? { ...estudiante, activo: !estudiante.activo } : estudiante
        ))
        setEstudiantes(estudiantesActualizados)
    }
    const guardarEstudiante = (estudianteForm) => {
        if (estudianteForm.id) {
            const estudiantesActualizados = estudiantes.map((estudiante) => (
                estudiante.id === estudianteForm.id ? { ...estudiante, ...estudianteForm } : estudiante
            ))

            setEstudiantes(estudiantesActualizados)
            return
        }

        const ultimoId = estudiantes.length > 0 ? Math.max(...estudiantes.map((estudiante) => estudiante.id)) : 0
        const nuevoEstudiante = {
            ...estudianteForm,
            id: ultimoId + 1,
        }

        setEstudiantes((prev) => [...prev, nuevoEstudiante])
        
    }


    const [isModalOpen, setIsModalOpen] = useState(false)
    const [estudianteEnEdicion, setEstudianteEnEdicion] = useState(null)

    const abrirCrear = () => {
        setEstudianteEnEdicion(null)
        setIsModalOpen(true)
    }

    const abrirEditar = (estudiante) => {
        setEstudianteEnEdicion(estudiante)
        setIsModalOpen(true)
    }

    const cerrarModal = () => {
        setIsModalOpen(false)
        setEstudianteEnEdicion(null)
    }

    const guardarDesdeFormulario = (estudianteForm) => {
        guardarEstudiante(estudianteForm)
        cerrarModal()
    }
    return (
        <>
            <EstudianteContext.Provider value={{
                estudiantes,
                eliminarEstudiante,
                editarEstado,
                guardarEstudiante,
                guardarDesdeFormulario,
                estudianteEnEdicion,
                cerrarModal,
                isModalOpen, 
                abrirEditar,
                abrirCrear,
            }}>
                {children}
            </EstudianteContext.Provider>
        </>
    );
}

export { EstudianteProvider, EstudianteContext }