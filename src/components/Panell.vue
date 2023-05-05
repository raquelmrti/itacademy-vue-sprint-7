<template>
  <div class="panell my-3 border border-dark border-4 p-4 rounded-4">

    <div class="row g-3">
      <div class="col-auto">
        <label for="numPagines" class="col-form-label">Nùmero de pàgines</label>
      </div>
      <div class="col-auto">
        <input type="number" class="form-control" @change="enviaNumPagines" :value=1 min=1>
      </div>

      <div class="col-auto">
        <label for="numIdiomes" class="col-form-label">Nùmero de idiomes</label>
      </div>
      <div class="col-auto">
        <input type="number" class="form-control" @change="enviaNumIdiomes" :value=1 min=1>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Panell",
  methods: {
    enviaNumPagines(event) {
      this.$emit("numPagines", event.target.value)
    },
    enviaNumIdiomes(event) {
      this.$emit("numIdiomes", event.target.value)
    }
  }
}
</script>

<style scoped>
.panell {
  max-width: 450px;
}
</style>