import { Alert, Box, CircularProgress, Snackbar, Stack } from '@mui/material'
import { Boton } from '../atoms/Boton'
import { CampoTexto } from '../atoms/CampoTexto'
import { Icono } from '../atoms/Icono'
import { useFormularioContacto } from '../../hooks/useFormularioContacto'

export const FormularioContacto = () => {
  const {
    valores,
    errores,
    camposTocados,
    enviando,
    notificacion,
    manejarCambio,
    manejarBlur,
    manejarEnvio,
    cerrarNotificacion,
  } = useFormularioContacto()

  const errorVisible = (campo) => (camposTocados[campo] ? errores[campo] ?? '' : '')

  return (
    <Box component="form" noValidate onSubmit={manejarEnvio}>
      <Stack spacing={2.5}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
          <CampoTexto
            name="nombre"
            label="Nombre"
            placeholder="Lorem ipsum"
            autoComplete="name"
            value={valores.nombre}
            onChange={manejarCambio}
            onBlur={manejarBlur}
            error={Boolean(errorVisible('nombre'))}
            helperText={errorVisible('nombre')}
          />
          <CampoTexto
            name="correo"
            type="email"
            label="Correo electrónico"
            placeholder="lorem.ipsum@correo.com"
            autoComplete="email"
            value={valores.correo}
            onChange={manejarCambio}
            onBlur={manejarBlur}
            error={Boolean(errorVisible('correo'))}
            helperText={errorVisible('correo')}
          />
        </Stack>

        <CampoTexto
          name="asunto"
          label="Asunto"
          placeholder="Dolor sit amet"
          value={valores.asunto}
          onChange={manejarCambio}
          onBlur={manejarBlur}
          error={Boolean(errorVisible('asunto'))}
          helperText={errorVisible('asunto')}
        />

        <CampoTexto
          name="mensaje"
          label="Mensaje"
          placeholder="Consectetur adipiscing elit…"
          multiline
          minRows={5}
          value={valores.mensaje}
          onChange={manejarCambio}
          onBlur={manejarBlur}
          error={Boolean(errorVisible('mensaje'))}
          helperText={errorVisible('mensaje')}
        />

        <Boton
          type="submit"
          disabled={enviando}
          startIcon={
            enviando ? (
              <CircularProgress size={18} color="inherit" />
            ) : (
              <Icono nombre="enviar" fontSize="small" />
            )
          }
          sx={{ alignSelf: 'flex-start' }}
        >
          {enviando ? 'Enviando…' : 'Enviar mensaje'}
        </Boton>
      </Stack>

      <Snackbar
        open={notificacion.abierta}
        autoHideDuration={5000}
        onClose={cerrarNotificacion}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity="success"
          variant="filled"
          icon={<Icono nombre="exito" />}
          onClose={cerrarNotificacion}
          sx={{ width: '100%' }}
        >
          {notificacion.mensaje}
        </Alert>
      </Snackbar>
    </Box>
  )
}
