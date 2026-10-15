export const MENSAJES_VALIDACION = {
  nombre: 'Ingresa tu nombre (mínimo 3 caracteres).',
  correo: 'Ingresa un correo electrónico válido.',
  asunto: 'Ingresa un asunto (mínimo 4 caracteres).',
  mensaje: 'Escribe un mensaje de al menos 10 caracteres.',
}

const PATRON_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validarCampo = (campo, valor) => {
  const contenido = valor.trim()

  if (campo === 'nombre') {
    return contenido.length >= 3 ? '' : MENSAJES_VALIDACION.nombre
  }

  if (campo === 'correo') {
    return PATRON_CORREO.test(contenido) ? '' : MENSAJES_VALIDACION.correo
  }

  if (campo === 'asunto') {
    return contenido.length >= 4 ? '' : MENSAJES_VALIDACION.asunto
  }

  if (campo === 'mensaje') {
    return contenido.length >= 10 ? '' : MENSAJES_VALIDACION.mensaje
  }

  return ''
}

export const validarFormulario = (valores) =>
  Object.keys(valores).reduce((errores, campo) => {
    const error = validarCampo(campo, valores[campo])
    return error ? { ...errores, [campo]: error } : errores
  }, {})
