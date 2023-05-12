<template>
  <label for="search-input" class="form-label">Cerca pressupost per nom</label>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      id="search-input"
      placeholder="Buscar pressupost"
      v-model="buscaQuery"
      @keyup="$emit('llistaFiltrada', llistaFiltrada)"
    />
  </div>
</template>

<script>
export default {
  name: "PressupostosBuscar",
  props: {
    llista: {
      type: Array,
      required: true,
    },
  },
  emits: ["llistaFiltrada"],
  data() {
    return {
      buscaQuery: "",
    };
  },
  computed: {
    llistaFiltrada() {
      return this.llista.filter((pressupost) =>
        pressupost.nomPressupost
          .toUpperCase()
          .includes(this.buscaQuery.trim().toUpperCase())
      );
    },
  },
};
</script>
