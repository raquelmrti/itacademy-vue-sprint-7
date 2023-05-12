<template>
  <form
    class="needs-validation"
    @submit.prevent="
      $emit('guardaPressupost', {
        nomClient: nomClient,
        nomPressupost: nomPressupost,
      })
    ">
    <div class="form-group mt-3">
      <label for="nom-client">Nom del client</label>
      <input
        type="text"
        class="form-control"
        id="nom-client"
        name="nom-client"
        placeholder="Introdueix nom"
        v-model="nomClient"
        required />
    </div>

    <div class="form-group mt-3">
      <label for="nom-pressupost">Nom del pressupost</label>
      <input
        type="text"
        class="form-control"
        id="nom-pressupost"
        name="nom-pressupost"
        placeholder="Introdueix nom"
        v-model="nomPressupost"
        required />
    </div>

    <button type="submit" class="btn btn-primary mt-3">
      Guardar pressupost
    </button>
  </form>
</template>

<script>
export default {
  name: "PressupostosGuardar",
  emits: ["guardaPressupost"],
  data() {
    return {
      nomClient: "",
      nomPressupost: "",
    }
  },
}
</script>

<style scoped>
input[type="text"] {
  max-width: 450px;
}
</style>
