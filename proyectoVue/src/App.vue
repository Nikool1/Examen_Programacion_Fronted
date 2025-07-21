<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a class="navbar-brand" href="#">Programaci0n Front End</a>
      <ul class="navbar-nav ms-3">
        <li class="nav-item" @click="pagina = 'calculo'" :class="{ active: pagina === 'calculo' }">
          <a class="nav-link" href="#">Calculo de calificaciones</a>
        </li>
        <li class="nav-item" @click="pagina = 'registro'" :class="{ active: pagina === 'registro' }">
          <a class="nav-link" href="#">Formulario de Registro</a>
        </li>
      </ul>
    </nav>

    <div class="container mt-4">
      <CalculoNotas v-if="pagina === 'calculo'" />
      <FormularioRegistro v-if="pagina === 'registro'" />
    </div>
  </div>
</template>

<script>
import CalculoNotas from './components/CalculoNotas.vue';
import FormularioRegistro from './components/FormularioRegistro.vue';

export default {
  components: {
    CalculoNotas,
    FormularioRegistro
  },
  data() {
    return {
      pagina: 'calculo'
    };
  }
}
</script>

<style>
.nav-item.active .nav-link {
  font-weight: bold;
  color: #0d6efd !important;
}
</style>
