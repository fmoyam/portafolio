import { PlantillaPortafolio } from '../components/templates/PlantillaPortafolio'
import { SeccionContacto } from '../components/organisms/SeccionContacto'
import { SeccionEstudios } from '../components/organisms/SeccionEstudios'
import { SeccionExperiencia } from '../components/organisms/SeccionExperiencia'
import { SeccionPersonal } from '../components/organisms/SeccionPersonal'
import { SeccionProyectos } from '../components/organisms/SeccionProyectos'

export const PaginaPortafolio = () => (
  <PlantillaPortafolio>
    <SeccionPersonal />
    <SeccionExperiencia />
    <SeccionEstudios />
    <SeccionProyectos />
    <SeccionContacto />
  </PlantillaPortafolio>
)
