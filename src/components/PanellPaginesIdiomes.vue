<template>
  <div class="panell my-3 border border-dark border-4 p-4 rounded-4">
    <div class="g-3">
      <div class="col-auto d-flex mb-3">
        <label for="numPagines" class="col-form-label me-3">Nùmero de pàgines</label>
        <PanellBotons
          :wasPaginaWebSeleccionada="wasPaginaWebSeleccionada"
          @num-input="enviaNumPagines"
        />

        <button
          type="button"
          class="d-flex align-items-center"
          @click="showModalPagines = true"
        >
          <img src="../../public/img/info-icon.svg" width="18" />
        </button>

        <PanellModal v-if="showModalPagines" @close="showModalPagines = false">
          En aquest component has d'indicar el número de pàgines que tindrà la teva pàgina
          web.
        </PanellModal>
      </div>

      <div class="col-auto d-flex">
        <label for="numIdiomes" class="col-form-label me-3">Nùmero de idiomes</label>
        <PanellBotons
          :wasPaginaWebSeleccionada="wasPaginaWebSeleccionada"
          @num-input="enviaNumIdiomes"
        />

        <button
          class="d-flex align-items-center"
          type="button"
          @click="showModalIdiomes = true"
        >
          <img src="../../public/img/info-icon.svg" width="18" />
        </button>

        <PanellModal v-if="showModalIdiomes" @close="showModalIdiomes = false">
          En aquest component has d'indicar el número d'idiomes que tindrà la teva pàgina
          web.
        </PanellModal>
      </div>
    </div>
  </div>
</template>

<script>
import PanellBotons from "@/components/PanellBotons";
import PanellModal from "@/components/PanellModal";

export default {
  name: "PanellPaginesIdiomes",
  components: {
    PanellBotons,
    PanellModal,
  },
  data() {
    return {
      showModalPagines: false,
      showModalIdiomes: false,
    };
  },
  props: {
    wasPaginaWebSeleccionada: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    enviaNumPagines(numPagines) {
      this.$emit("numPagines", numPagines);
    },
    enviaNumIdiomes(numIdiomes) {
      this.$emit("numIdiomes", numIdiomes);
    },
  },
};
</script>

<style scoped>
.panell {
  max-width: 450px;
}

button {
  border: none;
  background-color: transparent;
}
</style>
