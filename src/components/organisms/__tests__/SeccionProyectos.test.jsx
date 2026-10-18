import { render, screen } from '@testing-library/react'
import { ProveedorTema } from '../../../context/ProveedorTema'
import { SeccionProyectos } from '../SeccionProyectos'

describe('SeccionProyectos - Organismo', () => {
  it('renderiza el título de la sección', () => {
    render(
      <ProveedorTema>
        <SeccionProyectos />
      </ProveedorTema>
    )
    
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renderiza los filtros de proyectos', () => {
    render(
      <ProveedorTema>
        <SeccionProyectos />
      </ProveedorTema>
    )
    
    expect(screen.getByRole('button', { name: /Todos/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Destacados/i })).toBeInTheDocument()
  })

  it('renderiza tarjetas de proyectos', () => {
    render(
      <ProveedorTema>
        <SeccionProyectos />
      </ProveedorTema>
    )
    
    // Verifica que al menos un proyecto se renderiza
    expect(screen.getByText(/Tienda Guau & Miau/i)).toBeInTheDocument()
    expect(screen.getByText(/DIMAC/i)).toBeInTheDocument()
    expect(screen.getByText(/PCer2/i)).toBeInTheDocument()
  })
})
