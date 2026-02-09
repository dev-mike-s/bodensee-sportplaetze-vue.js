
<template>

  <table class="table-fixed">
    <thead>
    <tr>
      <th>Platzart</th>
      <th>Adresse</th>
    </tr>
    </thead>
    <tfoot>
    <tr>
      <th>Th Foot</th>
      <th>Th Foot 2</th>
    </tr>
    </tfoot>
    <tbody>
    <tr>
      <td>John Lennon</td>
      <td>Rhythm Guitar</td>
    </tr>
    </tbody>
  </table>

</template>

<script setup>

  import {ref} from "vue";

  import FacilitiesConstance from "../data/FacilitiesConstance.json";

  const data = ref(FacilitiesConstance);

  /**
   * Location properties:
   * id: int,
   * address: String
   */
  const posts = ref([
    { id: 1, address: 'Gustav-Schwab-Straße 14, 78467 Konstanz' },
    { id: 2, address: 'Weiherhofstraße 12, 78467 Konstanz' },
  ])


</script>

<style scoped>
  table {
    margin: 20px;
    padding: 20px;
  }
</style>

<!--
todo v2 dynamic asynchron data:

// In deiner Home.vue
const locations = ref([])

onMounted(async () => {
  // Simuliere Netzwerk-Verzögerung
  const response = await fetch('/src/data/places.json')
  const data = await response.json()
  locations.value = data
})
-->