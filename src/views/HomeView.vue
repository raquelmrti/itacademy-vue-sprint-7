<template>
  <div class="container pt-4">
    <form>
      <p>Què vols fer?</p>

      <div class="form-check d-flex">
        <input class="form-check-input me-2" type="checkbox" :value="{ nom: 'paginaWeb', price: 500 }"
          v-model="serveisSeleccionats" @change="calculaPreuTotal">
        <label class="form-check-label" for="paginaWeb">
          Una pàgina web (500€)
        </label>
      </div>

      <Transition>
        <div v-show="wasPaginaWebSeleccionada">
          <Panell :wasPaginaWebSeleccionada="wasPaginaWebSeleccionada" @num-pagines="addPagina"
            @num-idiomes="addIdioma" />
        </div>
      </Transition>

      <div class="form-check d-flex">
        <input class="form-check-input me-2" type="checkbox" :value="{ nom: 'consultoriaSeo', price: 300 }"
          v-model="serveisSeleccionats" @change="calculaPreuTotal">
        <label class="form-check-label" for="consultoriaSEO">
          Una consultoria SEO (300€)
        </label>
      </div>

      <div class="form-check d-flex">
        <input class="form-check-input me-2" type="checkbox" :value="{ nom: 'campanyaGoogleAds', price: 200 }"
          v-model="serveisSeleccionats" @change="calculaPreuTotal">
        <label class="form-check-label" for="campanyaGoogleAds">
          Una campanya de Google Ads (200€)
        </label>
      </div>

      <p class="mt-3"><strong>Preu:</strong> {{ preuTotal }}€</p>

    </form>
  </div>
</template>

<script>
import Panell from "../components/Panell"

export default {
  name: 'HomeView',
  components: {
    Panell
  },
  data() {
    return {
      serveisSeleccionats: [],
      numPagines: 1,
      numIdiomes: 1,
      preuTotal: 0
    }
  },
  computed: {
    wasPaginaWebSeleccionada() {
      return this.serveisSeleccionats.find(servei => servei.nom === "paginaWeb") ? true : false
    }
  },
  methods: {
    calculaPreuTotal() {
      this.preuTotal = this.serveisSeleccionats.reduce((s1, s2) => s1 + s2.price, 0)
      if (this.numPagines > 1 || this.numIdiomes > 1) {
        this.preuTotal += this.numPagines * this.numIdiomes * 30
      }
    },
    addPagina(num) {
      this.numPagines = num
    },
    addIdioma(numIdiomes) {
      this.numIdiomes = numIdiomes
    }
  },
  watch: {
    numPagines() {
      this.calculaPreuTotal()
    },
    numIdiomes() {
      this.calculaPreuTotal()
    }
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
