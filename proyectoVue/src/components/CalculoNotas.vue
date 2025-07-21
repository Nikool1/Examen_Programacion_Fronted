<template>
  <div class="col-md-6 mx-auto">
    <div class="mb-3">
      <label>Nota 1</label>
      <input type="number" class="form-control" v-model.number="nota1" min="10" max="70" required/>
    </div>
    <div class="mb-3">
      <label>Nota 2</label>
      <input type="number" class="form-control" v-model.number="nota2" min="10" max="70" required/>
    </div>
    <div class="mb-3">
      <label>Nota 3</label>
      <input type="number" class="form-control" v-model.number="nota3" min="10" max="70" required/>
    </div>
    <div class="mb-3">
      <label>Asistencia %</label>
      <input type="number" class="form-control" v-model.number="asistencia" />
    </div>
    <button class="btn btn-primary" @click="calcular">Calcular</button>

    <div v-if="mensaje" class="mt-3">
      <p>El promedio es: {{ promedio }}</p>
      <p>Tu estado es: {{ mensaje }}</p>
    </div>

    <div v-if="error" class="text-danger mt-2">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nota1: null,
      nota2: null,
      nota3: null,
      asistencia: null,
      promedio: null,
      mensaje: '',
      error: ''
    }
  },
  methods: {
    calcular() {
      this.error = ''
      this.mensaje = ''

      if (
        this.nota1 < 10 || this.nota1 > 70 ||
        this.nota2 < 10 || this.nota2 > 70 ||
        this.nota3 < 10 || this.nota3 > 70 ||
        this.asistencia < 0 || this.asistencia > 100
      ) {
        this.error = 'Por favor, ingrese valores válidos para las notas y la asistencia'
        return
      }

      this.promedio = (
        this.nota1 * 0.35 +
        this.nota2 * 0.35 +
        this.nota3 * 0.30
      ).toFixed(2)

      this.mensaje = (this.promedio >= 40 && this.asistencia >= 80) ? 'Aprobado' : 'Reprobado'
    }
  }
}
</script>

