import { render, screen } from '@testing-library/react'
import { ProveedorTema } from '../../../context/ProveedorTema'
import { EncabezadoNavegacion } from '../EncabezadoNavegacion'

vi.mock('../../../hooks/useSeccionActiva', () => ({
  useSeccionActiva: () => 'personal',
}))

vi.mock('../../../data/datosPortafolio', () => ({
  datosPerfil: {
    nombre: 'Felipe Moya Molina',
  },
  enlacesNavegacion: [
    { id: 'personal', etiqueta: 'Personal' },
    { id: 'experiencia', etiqueta: 'Experiencia' },
    { id: 'proyectos', etiqueta: 'Proyectos' },
    { id: 'contacto', etiqueta: 'Contacto' },
  ],
}))

describe('EncabezadoNavegacion - Organismo', () => {
  it('renderiza correctamente el nombre del perfil', () => {
    render(
      <ProveedorTema>
        <EncabezadoNavegacion />
      </ProveedorTema>
    )
    
    expect(screen.getByText('Felipe Moya Molina')).toBeInTheDocument()
  })

  it('renderiza los enlaces de navegación principales', () => {
    render(
      <ProveedorTema>
        <EncabezadoNavegacion />
      </ProveedorTema>
    )
    
    expect(screen.getByRole('link', { name: /Personal/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Experiencia/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Proyectos/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contacto/i })).toBeInTheDocument()
  })

  it('tiene botón para cambiar tema', () => {
    render(
      <ProveedorTema>
        <EncabezadoNavegacion />
      </ProveedorTema>
    )
    
    const botonTema = screen.getByLabelText(/Cambiar tema/i)
    expect(botonTema).toBeInTheDocument()
  })
})
