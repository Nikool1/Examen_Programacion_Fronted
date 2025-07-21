<template>
  <div class="container mt-4">
    <h2 class="mb-4">Formulario de Registro</h2>

    <form @submit.prevent="validarFormulario">
      <div class="mb-3">
        <label>Nombre:</label>
        <input type="text" v-model="nombre" class="form-control" />
      </div>

      <div class="mb-3">
        <label>Correo:</label>
        <input type="email" v-model="correo" class="form-control" />
        <small class="text-danger" v-if="errores.correo">{{ errores.correo }}</small>
      </div>

      <div class="mb-3">
        <label>Contraseña:</label>
        <input type="password" v-model="password" class="form-control" />
        <small class="text-danger" v-if="errores.password">{{ errores.password }}</small>
      </div>

      <div class="mb-3">
        <label>Repetir Contraseña:</label>
        <input type="password" v-model="repetirPassword" class="form-control" />
        <small class="text-danger" v-if="errores.repetirPassword">{{ errores.repetirPassword }}</small>
      </div>

      <button type="submit" class="btn btn-success">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      correo: '',
      password: '',
      repetirPassword: '',
      errores: {}
    };
  },
  methods: {
    validarFormulario() {
      this.errores = {};

      // Validar correo
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.correo)) {
        this.errores.correo = 'Correo inválido';
      }

      // Validar password
      if (!this.password) {
        this.errores.password = 'El campo contraseña es requerido';
      }

      if (!this.repetirPassword) {
        this.errores.repetirPassword = 'El campo repetir contraseña es requerido';
      } else if (this.password && this.repetirPassword !== this.password) {
        this.errores.repetirPassword = 'Las contraseñas no coinciden';
      }

      if (Object.keys(this.errores).length === 0) {
        alert("El registro se ha realizado correctamente");
        this.resetForm();
      }
    },
    resetForm() {
      this.nombre = '';
      this.correo = '';
      this.password = '';
      this.repetirPassword = '';
    }
  }
};
</script>
