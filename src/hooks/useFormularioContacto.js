import { useCallback, useEffect, useRef, useState } from 'react'
import { validarCampo, validarFormulario } from '../utils/validaciones'

const VALORES_INICIALES = { nombre: '', correo: '', asunto: '', mensaje: '' }
const TIEMPO_ENVIO_SIMULADO = 1200

const sinCampo = (objeto, campo) => {
  const copia = { ...objeto }
  delete copia[campo]
  return copia
}

export const useFormularioContacto = () => {
  const [valores, setValores] = useState(VALORES_INICIALES)
  const [errores, setErrores] = useState({})
  const [camposTocados, setCamposTocados] = useState({})
  const [enviando, setEnviando] = useState(false)
  const [notificacion, setNotificacion] = useState({ abierta: false, mensaje: '' })
  const temporizador = useRef(null)

  useEffect(() => () => clearTimeout(temporizador.current), [])

  const manejarCambio = useCallback((evento) => {
    const { name, value } = evento.target

    setValores((actuales) => ({ ...actuales, [name]: value }))
    setErrores((actuales) => {
      if (!actuales[name]) return actuales
      const nuevoError = validarCampo(name, value)
      return nuevoError ? { ...actuales, [name]: nuevoError } : sinCampo(actuales, name)
    })
  }, [])

  const manejarBlur = useCallback((evento) => {
    const { name, value } = evento.target

    setCamposTocados((actuales) => ({ ...actuales, [name]: true }))
    const nuevoError = validarCampo(name, value)
    setErrores((actuales) =>
      nuevoError ? { ...actuales, [name]: nuevoError } : sinCampo(actuales, name),
    )
  }, [])

  const cerrarNotificacion = useCallback(() => {
    setNotificacion((actual) => ({ ...actual, abierta: false }))
  }, [])

  const manejarEnvio = useCallback(
    (evento) => {
      evento.preventDefault()

      const erroresValidacion = validarFormulario(valores)
      setErrores(erroresValidacion)
      setCamposTocados({ nombre: true, correo: true, asunto: true, mensaje: true })

      if (Object.keys(erroresValidacion).length > 0) return

      setEnviando(true)
      temporizador.current = setTimeout(() => {
        setEnviando(false)
        setValores(VALORES_INICIALES)
        setErrores({})
        setCamposTocados({})
        setNotificacion({
          abierta: true,
          mensaje: 'Tu mensaje fue enviado! en breve te contactaré :)',
        })
      }, TIEMPO_ENVIO_SIMULADO)
    },
    [valores],
  )

  return {
    valores,
    errores,
    camposTocados,
    enviando,
    notificacion,
    manejarCambio,
    manejarBlur,
    manejarEnvio,
    cerrarNotificacion,
  }
}
