function Estudiante({ id, nombre, correo, telefono, curso, estado, activo ,onEliminar}) {
    return (
        <tr>
            <td>{nombre}</td>
            <td> {correo} </td>
            <td> {telefono} </td>
            <td> {curso} </td>
            <td> {estado} </td>
            <td> {activo ? 'Si' : 'No'} </td>
            <td>
                <button className="btn-editar">Editar</button>
                <button className="btn-eliminar"
                    onClick={() => onEliminar(id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}

export { Estudiante }