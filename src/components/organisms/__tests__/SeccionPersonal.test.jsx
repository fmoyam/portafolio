import { render, screen } from '@testing-library/react'
import { ProveedorTema } from '../../../context/ProveedorTema'
import { SeccionPersonal } from '../SeccionPersonal'

describe('SeccionPersonal - Organismo', () => {
  it('renderiza el nombre del perfil', () => {
    render(
      <ProveedorTema>
        <SeccionPersonal />
      </ProveedorTema>
    )
    
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renderiza el rol profesional', () => {
    render(
      <ProveedorTema>
        <SeccionPersonal />
      </ProveedorTema>
    )
    
    expect(screen.getByText(/Analista Programador/i)).toBeInTheDocument()
  })

  it('renderiza la fotografía de perfil', () => {
    render(
      <ProveedorTema>
        <SeccionPersonal />
      </ProveedorTema>
    )
    
    const foto = screen.getByRole('img')
    expect(foto).toBeInTheDocument()
  })

  it('renderiza botones de acción', () => {
    render(
      <ProveedorTema>
        <SeccionPersonal />
      </ProveedorTema>
    )
    
    expect(screen.getByRole('button', { name: /Hablemos/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Descargar CV/i })).toBeInTheDocument()
  })
})
