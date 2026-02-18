<template>
  <h1>
    Wie sind die Sportplätze am Bodensee? <br>
    Und treffe anonym andere zum Sport!
  </h1>

  <SearchBar/>
  <Spot
      v-for="location in Spot"
      :key="location.id"
      :title="location.address"
  />

  <!--
v-for="post in posts"
:key="post.id"
:title="post.title"
-->

</template>

<script setup>
import SearchBar from "../components/SearchBar.vue";
import Spot from "../components/Spot.vue";
</script>

<style scoped>

</style>