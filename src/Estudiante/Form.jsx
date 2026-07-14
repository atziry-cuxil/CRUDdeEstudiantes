import { useState } from "react";
import { useContext } from "react";
import { EstudianteContext } from "../EstudianteContext";
import React from 'react';

const VALORES_INICIALES = {
    nombre: '',
    correo: '',
    telefono: '',
    curso: '',
    estado: 'Solvente',
    activo: true,
}

function Form({ initialValues }) {
    const {guardarDesdeFormulario: onSubmit, cerrarModal: onCancel} = React.useContext(EstudianteContext)

    const [formData, setFormData] = useState(() => {
        if (!initialValues) {
            return VALORES_INICIALES
        }

        return {
            nombre: initialValues.nombre ?? '',
            correo: initialValues.correo ?? '',
            telefono: initialValues.telefono ?? '',
            curso: initialValues.curso ?? '',
            estado: initialValues.estado ?? 'Solvente',
            activo: Boolean(initialValues.activo),
        }
    })

    const actualizarCampo = (event) => {
        const { name, type, value, checked } = event.target
                    //valor previo del estado
        setFormData((prev) => ({
            ...prev, //trae las propiedades del objeto, destructuracion, prev es el estado fromdAta
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const enviarFormulario = (event) => {
        event.preventDefault()

        onSubmit?.({
            id: initialValues?.id,
            nombre: formData.nombre.trim(),
            correo: formData.correo.trim(),
            telefono: formData.telefono.trim(),
            curso: formData.curso.trim(),
            estado: formData.estado,
            activo: formData.activo,
        })
    }

    return (
        <form className="form-estudiante" onSubmit={enviarFormulario}>
            <div className="form-estudiante__grid">
                <label>
                    Nombre
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={actualizarCampo}
                        required
                    />
                </label>

                <label>
                    Correo
                    <input
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={actualizarCampo}
                        required
                    />
                </label>

                <label>
                    Telefono
                    <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={actualizarCampo}
                        required
                    />
                </label>

                <label>
                    Curso
                    <input
                        type="text"
                        name="curso"
                        value={formData.curso}
                        onChange={actualizarCampo}
                        required
                    />
                </label>

                <label>
                    Estado
                    <select
                        name="estado"
                        value={formData.estado}
                        onChange={actualizarCampo}
                        required
                    >
                        <option value="Insolvente">Insolvente</option>
                        <option value="Solvente">Solvente</option>
                        <option value="Expulsado">Expulsado</option>
                    </select>
                </label>

                <label className="form-estudiante__activo">
                    <input
                        type="checkbox"
                        name="activo"
                        checked={formData.activo}
                        onChange={actualizarCampo}
                    />
                    Activo
                </label>
            </div>

            <div className="form-estudiante__acciones">
                <button type="button" className="btn btn--ghost" onClick={onCancel}>
                    Cancelar
                </button>
                <button type="submit" className="btn btn--solid">
                    Guardar
                </button>
            </div>
        </form>
    )
}

export { Form }
