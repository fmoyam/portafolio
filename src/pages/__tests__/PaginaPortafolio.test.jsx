import { render, screen } from '@testing-library/react'
import { ProveedorTema } from '../../context/ProveedorTema'
import { PaginaPortafolio } from '../PaginaPortafolio'

vi.mock('../../hooks/useSeccionActiva', () => ({
  useSeccionActiva: () => 'personal',
}))

describe('PaginaPortafolio - Página', () => {
  it('renderiza todas las secciones principales', () => {
    render(
      <ProveedorTema>
        <PaginaPortafolio />
      </ProveedorTema>
    )
    
    // Sección Personal
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    
    // Verifica que hay múltiples headings de nivel 2 (secciones)
    const headingsH2 = screen.getAllByRole('heading', { level: 2 })
    expect(headingsH2.length).toBeGreaterThanOrEqual(4) // Experiencia, Estudios, Proyectos, Contacto + otros
  })
})
