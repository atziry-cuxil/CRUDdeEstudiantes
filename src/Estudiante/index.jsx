import React from 'react';
import { useContext } from 'react';
import { EstudianteContext } from "../EstudianteContext"

function Estudiante({ id, nombre, correo, telefono, curso, estado, activo }) {
    const { eliminarEstudiante, editarEstado, abrirEditar } = React.useContext(EstudianteContext)
    return (
        <tr>
            <td>{nombre}</td>
            <td> {correo} </td>
            <td> {telefono} </td>
            <td> {curso} </td>
            <td> {estado} </td>
            <td> {activo ? 'Si' : 'No'} </td>
            <td>
                <button className="btn-editar"
                    type="button"
                    onClick={() => abrirEditar({ id, nombre, correo, telefono, curso, estado, activo })}
                >Editar</button>
                <button className="btn-eliminar"
                    onClick={() => eliminarEstudiante(id)}
                >Eliminar</button>
                <button className="btn-editar"
                    onClick={() => editarEstado(id)}
                > {activo ? 'Inactivar' : 'Activar'} </button>
            </td>
        </tr>
    )
}

export { Estudiante }
