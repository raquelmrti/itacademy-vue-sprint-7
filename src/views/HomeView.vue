<template>
  <div class="container">
    <form>
      <p>Què vols fer?</p>

      <div class="form-check d-flex">
        <input class="form-check-input me-2" type="checkbox" :value="{ nom: 'paginaWeb', price: 500 }"
          v-model="serveisSeleccionats">
        <label class="form-check-label" for="paginaWeb">
          Una pàgina web (500€)
        </label>
      </div>
      <div class="form-check d-flex">
        <input class="form-check-input me-2" type="checkbox" :value="{ nom: 'consultoriaSeo', price: 300 }"
          v-model="serveisSeleccionats">
        <label class="form-check-label" for="consultoriaSEO">
          Una consultoria SEO (300€)
        </label>
      </div>
      <div class="form-check d-flex">
        <input class="form-check-input me-2" type="checkbox" :value="{ nom: 'campanyaGoogleAds', price: 200 }"
          v-model="serveisSeleccionats">
        <label class="form-check-label" for="campanyaGoogleAds">
          Una campanya de Google Ads (200€)
        </label>
      </div>

      <p>Preu: {{ calculaPreuTotal }}€</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      serveisSeleccionats: [],
    }
  },
  computed: {
    calculaPreuTotal() {
      return this.serveisSeleccionats.reduce((p1, p2) => p1 + p2.price, 0)
    }
  },
  methods: {
    show() {
      console.log(this.serivicis)
    }
  }
}
</script>
