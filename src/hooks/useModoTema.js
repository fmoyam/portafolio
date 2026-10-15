import { useCallback, useEffect, useState } from 'react'

const CLAVE_ALMACENAMIENTO = 'portafolio-modo-tema'

const leerModoGuardado = () => {
  if (typeof window === 'undefined') return 'claro'
  const guardado = window.localStorage.getItem(CLAVE_ALMACENAMIENTO)
  if (guardado === 'claro' || guardado === 'oscuro') return guardado
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro'
}

export const useModoTema = () => {
  const [modo, setModo] = useState(leerModoGuardado)

  useEffect(() => {
    window.localStorage.setItem(CLAVE_ALMACENAMIENTO, modo)
  }, [modo])

  const alternarModo = useCallback(() => {
    setModo((modoActual) => (modoActual === 'claro' ? 'oscuro' : 'claro'))
  }, [])

  return { modo, alternarModo }
}
