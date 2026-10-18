# Portafolio Personal

Portafolio web desarrollado con React, Vite y Material UI. Sigue la metodología **Atomic Design** y cuenta con modo claro/oscuro, navegación por secciones y formulario de contacto con validación.

## Tecnologías

- [React](https://react.dev/) - Biblioteca para interfaces de usuario
- [Vite](https://vitejs.dev/) - Bundler y entorno de desarrollo
- [Material UI (MUI)](https://mui.com/) - Sistema de componentes
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) - Testing

## Estructura del proyecto

El proyecto sigue **Atomic Design**:

```
src/
├── atoms/      # Componentes más pequeños y reutilizables
├── molecules/  # Combinación de átomos
├── organisms/  # Secciones completas
├── templates/  # Plantillas/layouts
├── pages/      # Páginas
├── context/    # Context API (tema)
├── hooks/      # Custom hooks
├── data/       # Datos del portafolio
├── themes/     # Configuración de tema MUI
└── utils/      # Utilidades
```

## Instalación y ejecución

### Requisitos

- Node.js 18+ 
- npm

### Pasos

1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd portafolio
```

2. Instalar dependencias
```bash
npm install
```

3. Ejecutar en modo desarrollo
```bash
npm run dev
```

4. Abrir en el navegador: `http://localhost:5173`

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run preview` | Previsualiza build de producción |
| `npm run lint` | Ejecuta ESLint |
| `npm run test` | Ejecuta tests |
| `npm run test:watch` | Ejecuta tests en modo watch |

## Testing

El proyecto cuenta con pruebas automatizadas que validan:

- Renderizado correcto de los **organismos principales** (EncabezadoNavegacion, SeccionPersonal, SeccionProyectos, SeccionContacto)
- Comportamiento del **formulario de contacto** (validación de campos, formato de email, manejo de errores)

Ejecutar tests:
```bash
npm run test
```

## Características

- **Single Page Application (SPA)** con navegación suave
- **Modo claro/oscuro** con persistencia en localStorage
- **Navegación activa** con IntersectionObserver
- **Formulario de contacto validado** en lado cliente
- **Diseño responsive** (Mobile First)
- **Accesibilidad básica** (ARIA, roles semánticos)
- **Código limpio** siguiendo estándares ES6+

## Autor

**Felipe Moya Molina** - [LinkedIn](https://www.linkedin.com/in/felmoyam/) | [GitHub](https://github.com/fmoyam)
