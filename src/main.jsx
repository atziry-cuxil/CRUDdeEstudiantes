import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EstudianteProvider } from './EstudianteContext'
import { ListaEstudiantes } from './ListaEstudiantes/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EstudianteProvider>
      <ListaEstudiantes />
    </EstudianteProvider>
  </StrictMode>,
)
