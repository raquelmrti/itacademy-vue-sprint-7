<template>
  <button type="button" class="btn btn-outline-dark mb-5" @click="$router.go(-1)">← Torna enrere</button>
  <div class="wrapper d-flex flex-wrap">
    <form class="col-12 col-sm-11 col-md-8 col-lg-5 me-lg-3">
      <h3>Què vols fer?</h3>

      <div class="form-group mt-3">
        <div class="form-check">
          <input class="form-check-input" id="paginaWeb" type="checkbox"
            :value="{ nomServei: 'Pàgina web', preuServei: 500 }" v-model="serveisSeleccionats"
            @change="calculaPreuTotal">
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

        <div class="form-check">
          <input class="form-check-input" id="consultoriaSEO" type="checkbox"
            :value="{ nomServei: 'Consultoria SEO', preuServei: 300 }" v-model="serveisSeleccionats"
            @change="calculaPreuTotal">
          <label class="form-check-label" for="consultoriaSEO">
            Una consultoria SEO (300€)
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" id="campanyaGoogleAds" type="checkbox"
            :value="{ nomServei: 'Campanya de GoogleAds', preuServei: 200 }" v-model="serveisSeleccionats"
            @change="calculaPreuTotal">
          <label class="form-check-label" for="campanyaGoogleAds">
            Una campanya de Google Ads (200€)
          </label>
        </div>
      </div>

      <div class="mt-3">
        <strong>Preu:</strong> {{ preuTotal }}€
      </div>

      <div v-if="clientHaSeleccionatServei">
        <div class="form-group mt-3">
          <label for="nom-client">Nom del client</label>
          <input type="text" class="form-control" id="nom-client" name="nom-client" v-model="nomClient">
        </div>
        <div class="form-group mt-3">
          <label for="nom-pressupost">Nom del pressupost</label>
          <input type="text" class="form-control" id="nom-pressupost" name="nom-pressupost" v-model="nomPressupost">
        </div>

        <button type="button" class="btn btn-primary mt-3" @click="guardaPressupost">Guardar pressupost</button>
      </div>

    </form>

    <PressupostList :llista="llistaPressupostos" />
  </div>
</template>

<script>
import Panell from "../components/Panell"
import PressupostList from "../components/PressupostList.vue"

export default {
  name: 'HomeView',
  components: {
    Panell,
    PressupostList
  },
  data() {
    return {
      serveisSeleccionats: [],
      numPagines: 0,
      numIdiomes: 0,
      preuTotal: 0,
      nomClient: "",
      nomPressupost: "",
      llistaPressupostos: []
    }
  },
  computed: {
    wasPaginaWebSeleccionada() {
      return this.serveisSeleccionats.find(servei => servei.nomServei === "Pàgina web") ? true : false
    },
    clientHaSeleccionatServei() {
      return this.serveisSeleccionats.length > 0
    },
    preuExtresWeb() {
      return (this.numPagines > 1 || this.numIdiomes > 1) ? this.numPagines * this.numIdiomes * 30 : 0
    },
    preuTotalWeb() {
      return 500 + this.preuExtresWeb
    }
  },
  methods: {
    calculaPreuTotal() {
      this.preuTotal = this.serveisSeleccionats.reduce((s1, s2) => s1 + s2.preuServei, 0) + this.preuExtresWeb
    },
    addPagina(numPagines) {
      this.numPagines = numPagines
    },
    addIdioma(numIdiomes) {
      this.numIdiomes = numIdiomes
    },
    guardaPressupost() {
      this.llistaPressupostos.push({
        "nomClient": this.nomClient,
        "nomPressupost": this.nomPressupost,
        "serveisSeleccionats": this.serveisSeleccionats,
        "numPagines": this.numPagines,
        "numIdiomes": this.numIdiomes,
        "preuExtresWeb": this.preuExtresWeb,
        "preuTotalWeb": this.preuTotalWeb,
        "preuTotal": this.preuTotal
      })
      this.resetFormulari()
    },
    resetFormulari() {
      this.serveisSeleccionats = []
      this.numPagines = 0
      this.numIdiomes = 0
      this.preuTotal = 0
      this.nomClient = ""
      this.nomPressupost = ""
    }
  },
  watch: {
    wasPaginaWebSeleccionada() {
      if (this.wasPaginaWebSeleccionada) {
        this.numPagines = 1
        this.numIdiomes = 1
      }
    },
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
/* form {
  min-width: 500px;
} */

input[type=text] {
  max-width: 300px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
