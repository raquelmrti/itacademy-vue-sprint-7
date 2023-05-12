<template>
  <div>
    <h3>Pressupostos guardats</h3>

    <p v-if="!hiHaAlgunPressupostGuardat">No hi ha cap pressupost guardat.</p>

    <div v-else>
      <div class="row g-3 mt-2 mb-4">
        <div class="col-md-6">
          <div class="mt-md-0">
            <PressupostosBuscar :llista="this.llista" @llistaFiltrada="filtraLlista" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mt-md-0">
            <PressupostosOrdenar @ordreSeleccionat="setSeleccio" />
          </div>
        </div>
      </div>

      <table class="table table-hover">
        <thead>
          <tr>
            <th>Client</th>
            <th>Nom del pressupost</th>
            <th>Serveis</th>
            <th>Total</th>
            <th>Data de creació</th>
          </tr>
        </thead>

        <tbody class="table-group-divider">
          <tr
            v-for="(
              {
                nomClient,
                nomPressupost,
                serveisSeleccionats,
                numPagines,
                numIdiomes,
                preuExtresWeb,
                preuTotalWeb,
                preuTotal,
                dataPressupost,
              },
              indexPressupost
            ) in llistaMostrada"
            :key="indexPressupost"
          >
            <td>{{ nomClient }}</td>
            <td>{{ nomPressupost }}</td>
            <td>
              <ul>
                <li
                  v-for="({ nomServei, preuServei }, indexServei) in serveisSeleccionats"
                  :key="indexServei"
                >
                  {{ nomServei }} = {{ preuServei }}€
                  <span v-if="hiHaExtresWeb(numPagines, numIdiomes)">
                    +{{ preuExtresWeb }}€ ({{ numPagines }} pàgines,
                    {{ numIdiomes }} idiomes) = {{ preuTotalWeb }}€
                  </span>
                </li>
              </ul>
            </td>
            <td>{{ preuTotal }}€</td>
            <td>{{ dataPressupost }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import PressupostosOrdenar from "@/components/PressupostosOrdenar";
import PressupostosBuscar from "@/components/PressupostosBuscar";

export default {
  name: "PressupostosLlista",
  components: {
    PressupostosOrdenar,
    PressupostosBuscar,
  },
  props: {
    llista: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      seleccioOrdre: "1",
      llistaMostrada: [...this.llista],
    };
  },
  computed: {
    hiHaAlgunPressupostGuardat() {
      return this.llista.length > 0;
    },
  },
  watch: {
    llista: {
      // Amb un deep watcher podem estar al tant de qualsevol canvi
      // que ocurreixi DINTRE de l'array llista. Si no es deep, no se'n adona.
      handler: "ordenaLlista",
      deep: true,
    },
    seleccioOrdre() {
      this.ordenaLlista(this.llista);
    },
  },
  methods: {
    hiHaExtresWeb(pagines, idiomes) {
      return pagines > 1 || idiomes > 1;
    },
    setSeleccio(seleccio) {
      this.seleccioOrdre = seleccio;
      this.ordenaLlista(this.llistaMostrada);
    },
    ordenaLlista(llista) {
      if (this.seleccioOrdre === "1") {
        this.llistaMostrada = [...this.llista];
      } else if (this.seleccioOrdre === "2") {
        this.llistaMostrada = this.sortPerPropietat(llista, "nomPressupost");
      } else {
        this.llistaMostrada = this.sortPerPropietat(llista, "dataPressupost");
      }
    },
    sortPerPropietat(llista, propietat) {
      return [...llista].sort((a, b) => {
        if (a[propietat].toUpperCase() < b[propietat].toUpperCase()) return -1;
        if (a[propietat].toUpperCase() > b[propietat].toUpperCase()) return 1;
        return 0;
      });
    },
    filtraLlista(llistaFiltrada) {
      this.llistaMostrada = llistaFiltrada;
      this.ordenaLlista(this.llistaMostrada);
    },
  },
};
</script>

<style>
h3 {
  font-size: 1.3em;
}

h4 {
  font-size: 1.1em;
}

ul {
  padding-left: 0;
}

li {
  list-style-type: none;
}
</style>
