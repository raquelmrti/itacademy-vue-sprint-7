<template>
  <router-link to="/">
    <button type="button" class="btn btn-outline-dark mb-5">← Torna enrere</button>
  </router-link>

  <div class="wrapper row">
    <form class="col-12 col-sm-11 col-lg-5 me-lg-3 mb-4">
      <h3>Què vols fer?</h3>

      <div class="form-group mt-3">
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="paginaWeb"
            :value="{ nomServei: 'Pàgina web', preuServei: 500 }"
            v-model="serveisSeleccionats"
            @change="calculaPreuTotal"
          />

          <label class="form-check-label" for="paginaWeb"> Una pàgina web (500€) </label>
        </div>

        <Transition>
          <div v-if="wasPaginaWebSeleccionada">
            <PanellPaginesIdiomes
              :wasPaginaWebSeleccionada="wasPaginaWebSeleccionada"
              @num-pagines="addPagina"
              @num-idiomes="addIdioma"
            />
          </div>
        </Transition>

        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="consultoriaSEO"
            :value="{ nomServei: 'Consultoria SEO', preuServei: 300 }"
            v-model="serveisSeleccionats"
            @change="calculaPreuTotal"
          />

          <label class="form-check-label" for="consultoriaSEO">
            Una consultoria SEO (300€)
          </label>
        </div>

        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="campanyaGoogleAds"
            :value="{ nomServei: 'Campanya de GoogleAds', preuServei: 200 }"
            v-model="serveisSeleccionats"
            @change="calculaPreuTotal"
          />

          <label class="form-check-label" for="campanyaGoogleAds">
            Una campanya de Google Ads (200€)
          </label>
        </div>
      </div>

      <div class="mt-3"><strong>Preu:</strong> {{ preuTotal }}€</div>

      <Transition>
        <div v-if="clientHaSeleccionatServei">
          <PressupostosGuardar @guardaPressupost="guardaPressupost" />
        </div>
      </Transition>
    </form>

    <PressupostosLlista :llista="llistaPressupostos" class="col mt-2 mt-md-0" />
  </div>
</template>

<script>
import PanellPaginesIdiomes from "@/components/PanellPaginesIdiomes";
import PressupostosGuardar from "@/components/PressupostosGuardar";
import PressupostosLlista from "@/components/PressupostosLlista";

export default {
  name: "HomeView",
  components: {
    PanellPaginesIdiomes,
    PressupostosGuardar,
    PressupostosLlista,
  },
  data() {
    return {
      serveisSeleccionats: [],
      numPagines: 0,
      numIdiomes: 0,
      preuTotal: 0,
      nomClient: "",
      numPressupost: 1,
      llistaPressupostos: [],
    };
  },
  computed: {
    wasPaginaWebSeleccionada() {
      return this.serveisSeleccionats.find((servei) => servei.nomServei === "Pàgina web")
        ? true
        : false;
    },
    clientHaSeleccionatServei() {
      return this.serveisSeleccionats.length > 0;
    },
    preuExtresWeb() {
      return this.numPagines > 1 || this.numIdiomes > 1
        ? this.numPagines * this.numIdiomes * 30
        : 0;
    },
    preuTotalWeb() {
      if (this.wasPaginaWebSeleccionada) return 500 + this.preuExtresWeb;
      return 0;
    },
  },
  watch: {
    wasPaginaWebSeleccionada() {
      if (this.wasPaginaWebSeleccionada) {
        this.numPagines = 1;
        this.numIdiomes = 1;
      }
    },
    numPagines() {
      this.calculaPreuTotal();
    },
    numIdiomes() {
      this.calculaPreuTotal();
    },
  },
  methods: {
    calculaPreuTotal() {
      this.preuTotal =
        this.serveisSeleccionats.reduce((s1, s2) => s1 + s2.preuServei, 0) +
        this.preuExtresWeb;
    },
    addPagina(numPagines) {
      this.numPagines = numPagines;
    },
    addIdioma(numIdiomes) {
      this.numIdiomes = numIdiomes;
    },
    guardaPressupost({ nomClient, nomPressupost }) {
      this.llistaPressupostos.push({
        nomClient: nomClient,
        nomPressupost: nomPressupost,
        serveisSeleccionats: this.serveisSeleccionats,
        numPagines: this.numPagines,
        numIdiomes: this.numIdiomes,
        preuExtresWeb: this.preuExtresWeb,
        preuTotalWeb: this.preuTotalWeb,
        preuTotal: this.preuTotal,
        dataPressupost: new Date().toLocaleString(),
      });
      this.resetFormulari();
    },
    resetFormulari() {
      this.serveisSeleccionats = [];
      this.numPagines = 0;
      this.numIdiomes = 0;
      this.preuTotal = 0;
      this.nomClient = "";
      this.nomPressupost = "";
    },
  },
};
</script>

<style scoped>
input[type="text"] {
  max-width: 300px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
