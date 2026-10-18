import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProveedorTema } from '../../../context/ProveedorTema'
import { SeccionContacto } from '../SeccionContacto'

describe('SeccionContacto - Organismo', () => {
  it('renderiza el título de la sección', () => {
    render(
      <ProveedorTema>
        <SeccionContacto />
      </ProveedorTema>
    )
    
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings.length).toBeGreaterThan(0)
  })

  it('renderiza todos los campos del formulario', () => {
    render(
      <ProveedorTema>
        <SeccionContacto />
      </ProveedorTema>
    )
    
    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Asunto/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument()
  })

  it('renderiza el botón de enviar', () => {
    render(
      <ProveedorTema>
        <SeccionContacto />
      </ProveedorTema>
    )
    
    expect(screen.getByRole('button', { name: /Enviar mensaje/i })).toBeInTheDocument()
  })

  it('renderiza enlaces a redes sociales', () => {
    render(
      <ProveedorTema>
        <SeccionContacto />
      </ProveedorTema>
    )
    
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Correo/i })).toBeInTheDocument()
  })

  it('muestra errores de validación al enviar formulario vacío', async () => {
    const user = userEvent.setup()
    render(
      <ProveedorTema>
        <SeccionContacto />
      </ProveedorTema>
    )
    
    const botonEnviar = screen.getByRole('button', { name: /Enviar mensaje/i })
    await user.click(botonEnviar)
    
    await waitFor(() => {
      expect(screen.getByText(/Ingresa tu nombre/i)).toBeInTheDocument()
      expect(screen.getByText(/Ingresa un correo electrónico válido/i)).toBeInTheDocument()
      expect(screen.getByText(/Ingresa un asunto/i)).toBeInTheDocument()
      expect(screen.getByText(/Escribe un mensaje/i)).toBeInTheDocument()
    })
  })

  it('valida formato de correo electrónico', async () => {
    const user = userEvent.setup()
    render(
      <ProveedorTema>
        <SeccionContacto />
      </ProveedorTema>
    )
    
    const campoCorreo = screen.getByLabelText(/Correo electrónico/i)
    await user.type(campoCorreo, 'correo-invalido')
    
    const botonEnviar = screen.getByRole('button', { name: /Enviar mensaje/i })
    await user.click(botonEnviar)
    
    await waitFor(() => {
      expect(screen.getByText(/correo electrónico válido/i)).toBeInTheDocument()
    })
  })

  it('limpia errores cuando el usuario escribe', async () => {
    const user = userEvent.setup()
    render(
      <ProveedorTema>
        <SeccionContacto />
      </ProveedorTema>
    )
    
    const botonEnviar = screen.getByRole('button', { name: /Enviar mensaje/i })
    await user.click(botonEnviar)
    
    await waitFor(() => {
      expect(screen.getByText(/Ingresa tu nombre/i)).toBeInTheDocument()
    })
    
    const campoNombre = screen.getByLabelText(/Nombre/i)
    await user.type(campoNombre, 'Juan')
    
    await waitFor(() => {
      expect(screen.queryByText(/Ingresa tu nombre/i)).not.toBeInTheDocument()
    })
  })
})
