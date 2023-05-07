<template>
  <div class="d-flex">
    <button type="button" class="btn btn-primary me-2" @click="decreix">-</button>
    <input type="number" class="form-control" @change="enviaNum" v-model.number="num">
    <button type="button" class="btn btn-primary ms-2" @click="augmenta">+</button>
  </div>
</template>

<script>
export default {
  name: "Botons",
  emits: ["numInput"],
  data() {
    return {
      num: 1
    }
  },
  props: {
    wasPaginaWebSeleccionada: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    decreix() {
      if (this.num === 1) return
      this.num--
    },
    augmenta() {
      this.num++
    }
  },
  watch: {
    num() {
      this.$emit("numInput", this.num)
    },
    wasPaginaWebSeleccionada(seleccio) {
      if (!seleccio) {
        this.num = 1
      }
    }
  }
}
</script>

<style scoped>
button {
  width: 40px;
  background-color: #ec3636;
  border: 1px solid #c52459;
}

button:hover {
  background-color: #da1414;
  border: 1px solid #c52459;
}

button:active {
  background-color: #f85858 !important;
  border: 1px solid #c52459 !important;
}

input {
  max-width: 50px;
}
</style>