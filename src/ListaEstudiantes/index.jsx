import './ListaEstudiantes.css'
import { Estudiante } from '../Estudiante'

function ListaEstudiantes({estudiantes , onEliminar}) {
    
    return (
        <section className='tabla-estudiantes' aria-labelledby='titulo-estudiantes'>
            <header className='tabla-estudiantes__encabezado'>
                <h2 id='titulo-estudiantes'>Lista de estudiantes</h2>
                <p>control y visualizacion general del grupo</p>
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
                            <Estudiante key={estudiante.id} {...estudiante} onEliminar={onEliminar} />
                        ))}
                    </tbody>
                </table>
            </div>

        </section>
    )
}

export { ListaEstudiantes }