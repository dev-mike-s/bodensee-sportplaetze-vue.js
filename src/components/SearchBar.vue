
<template>
  <input
      type="text"
      v-model="address"
      placeholder="Adresse angeben"
  />
  <button @click="">Suche</button>

</template>

<script setup>
  import { ref } from "vue";
  let address = ref("");

  /*
  const addresses = [
      "Gustav-Schwab-Straße 14, 78467 Konstanz",
      "Weiherhofstraße 12, 78467 Konstanz"
  ];
  */

</script>

<style scoped>

</style>

<!--
Datenmodell: Cards-AWQXPreview: Straße, Ort, Anlage(n), Minibilder,
-->