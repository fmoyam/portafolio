import { useEffect, useState } from 'react'

export const useSeccionActiva = (identificadores) => {
  const [seccionActiva, setSeccionActiva] = useState(identificadores[0] ?? '')

  useEffect(() => {
    const nodos = identificadores
      .map((id) => document.getElementById(id))
      .filter((nodo) => nodo !== null)

    if (nodos.length === 0) return undefined

    const observador = new IntersectionObserver(
      (entradas) => {
        const visibles = entradas
          .filter((entrada) => entrada.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibles.length > 0) {
          setSeccionActiva(visibles[0].target.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    nodos.forEach((nodo) => observador.observe(nodo))

    return () => observador.disconnect()
  }, [identificadores])

  return seccionActiva
}
