import './ListaEstudiantes.css'
import { useContext, useState } from 'react'
import { Estudiante } from '../Estudiante'
import { Modal } from '../Modal'
import { Form } from '../Estudiante/Form'
import { EstudianteContext } from '../EstudianteContext'
import React from 'react';
function ListaEstudiantes() {
    const {estudiantes, isModalOpen, estudianteEnEdicion, cerrarModal, abrirCrear} = React.useContext(EstudianteContext)
    return (
        <section className='tabla-estudiantes' aria-labelledby='titulo-estudiantes'>
            <Modal
                isOpen={isModalOpen}
                title={estudianteEnEdicion ? 'Editar alumno' : 'Nuevo alumno'}
                description="Aqui puede crear o editar los campos del alumno."
                onClose={cerrarModal}
                showActions={false}
            >
                <Form
                    key={estudianteEnEdicion?.id ?? 'nuevo'}
                    initialValues={estudianteEnEdicion}
                    // onSubmit={guardarDesdeFormulario}
                    // onCancel={cerrarModal}
                />
            </Modal>
            <header className='tabla-estudiantes__encabezado'>
                <h2 id='titulo-estudiantes'>Lista de estudiantes</h2>
                <p>control y visualizacion general del grupo</p>
                <button type="button" className="btn-nuevo" onClick={abrirCrear}>Nuevo alumno</button>
            </header>

            <div className='tabla-estudiantes__contentedor'>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'> Nombre </th>
                            <th scope='col'> Correo </th>
                            <th scope='col'> Telefono </th>
                            <th scope='col'> Curso </th>
                            <th scope='col'> Estado </th>
                            <th scope='col'> Activo </th>
                            <th scope='col'> Acciones </th>
                        </tr>
                    </thead>

                    <tbody>
                        {estudiantes.map((estudiante) => (
                            <Estudiante
                                key={estudiante.id}
                                {...estudiante}
                                // onEliminar={onEliminar}
                                //onEditar={abrirEditar}
                                //onActivar={onActivar}
                                 />
                        ))}
                    </tbody>
                </table>
            </div>

        </section>
    )
}

export { ListaEstudiantes }
