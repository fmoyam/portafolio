export const desplazarASeccion = (id) => {
  const seccion = document.getElementById(id)
  if (seccion) {
    seccion.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export const obtenerAnioActual = () => new Date().getFullYear()
