<template>
  <div>
    <h3>Pressupostos guardats</h3>

    <p v-if="llista.length === 0">
      No hi ha cap pressupost guardat.
    </p>

    <div class="my-3 p-3 rounded-3 bg-warning bg-opacity-25 " v-else v-for="(pressupost, indexPressupost) in llista"
      :key="indexPressupost">
      <h4>{{ pressupost.nomPressupost }} de {{ pressupost.nomClient }}</h4>
      <ul class="outer-list ps-0 mb-0">
        <li>
          <strong>Serveis:</strong>
          <ul class="inner-list">
            <li class="ps-0" v-for="(servei, indexServei) in pressupost.serveisSeleccionats" :key="indexServei">
              {{ servei.nomServei }} = {{ servei.preuServei }}€
              <span v-if="checkIfServeiEsPaginaWeb(servei)">+{{ pressupost.preuExtresWeb }}€ (núm. de pàgines: {{
                pressupost.numPagines }}, núm.
                d'idiomes:
                {{ pressupost.numIdiomes }}) = {{ pressupost.preuTotalWeb }}€</span>
            </li>
          </ul>
        </li>

        <li class="mt-3"><strong>TOTAL:</strong> {{ pressupost.preuTotal }}€</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "PressupostList",
  props: {
    llista: {
      type: Array,
      required: true
    }
  },
  methods: {
    checkIfServeiEsPaginaWeb(servei) {
      return servei.nomServei === "Pàgina web"
    }
  }
}
</script>
<style>
h3 {
  font-size: 1.3em;
}

h4 {
  font-size: 1.1em;
}

.outer-list>li {
  list-style-type: none;
}

.inner-list>li {
  list-style-type: square;
}
</style>