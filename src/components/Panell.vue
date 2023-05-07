<template>
  <div class="panell my-3 border border-dark border-4 p-4 rounded-4">

    <div class="g-3">

      <div class="col-auto d-flex mb-3">
        <label for="numPagines" class="col-form-label me-3">Nùmero de pàgines</label>
        <Botons :wasPaginaWebSeleccionada="wasPaginaWebSeleccionada" @num-input="enviaNumPagines" />
      </div>

      <div class="col-auto d-flex">
        <label for="numIdiomes" class="col-form-label me-3">Nùmero de idiomes</label>
        <Botons :wasPaginaWebSeleccionada="wasPaginaWebSeleccionada" @num-input="enviaNumIdiomes" />
      </div>

    </div>

  </div>
</template>

<script>
import Botons from "../components/Botons.vue"

export default {
  name: "Panell",
  components: {
    Botons
  },
  props: {
    wasPaginaWebSeleccionada: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    enviaNumPagines(numPagines) {
      this.$emit("numPagines", numPagines)
    },
    enviaNumIdiomes(numIdiomes) {
      this.$emit("numIdiomes", numIdiomes)
    }
  }
}
</script>

<style scoped>
.panell {
  max-width: 450px;
}
</style>