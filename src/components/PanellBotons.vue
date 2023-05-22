<template>
  <div class="d-flex align-items-center">
    <button type="button" class="btn btn-primary me-2" @click="decreix">-</button>

    <input class="form-control" @change="enviaNum" v-model.number="num" />

    <button type="button" class="btn btn-primary ms-2" @click="augmenta">+</button>
  </div>
</template>

<script>
export default {
  name: "PanellBotons",
  props: {
    wasPaginaWebSeleccionada: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["numInput"],
  data() {
    return {
      num: 1,
    };
  },
  watch: {
    num(newNum) {
      if (newNum && newNum < 0) {
        alert("La quantitat mínima es 1")
        this.num = 1
      } else {
        this.$emit("numInput", this.num);
      }
    },
    wasPaginaWebSeleccionada(seleccio) {
      if (!seleccio) {
        this.num = 0;
      }
    },
  },
  methods: {
    decreix() {
      if (this.num === 1) return;
      this.num--;
    },
    augmenta() {
      this.num++;
    },
  },
};
</script>

<style scoped>
button {
  width: 40px;
}

input {
  max-width: 50px;
}
</style>
