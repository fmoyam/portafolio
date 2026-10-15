import { createContext, useContext } from 'react'

export const ContextoTema = createContext(null)

export const useTema = () => {
  const contexto = useContext(ContextoTema)

  if (!contexto) {
    throw new Error('useTema debe usarse dentro de ProveedorTema.')
  }

  return contexto
}
