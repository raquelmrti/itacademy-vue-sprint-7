<template>
  <label for="list-order-input" class="form-label">Ordre</label>
  <div class="input-group">
    <select class="form-select" id="list-order-input" v-model="seleccioOrdre">
      <option value="1" selected>Sense ordre</option>
      <option value="2">Alfabèticament</option>
      <option value="3">Per data</option>
    </select>
    <button
      class="btn btn-dark"
      type="button"
      @click="$emit('ordreSeleccionat', seleccioOrdre)"
    >
      Ordenar
    </button>
  </div>
</template>

<script>
export default {
  name: "PressupostosOrdenar",
  emits: ["ordreSeleccionat"],
  data() {
    return {
      seleccioOrdre: "1",
    };
  },
};
</script>
