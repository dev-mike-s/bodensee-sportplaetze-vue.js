<template>
  <h1>
    Wie sind die Sportplätze am Bodensee? <br>
    Und treffe anonym andere zum Sport!
  </h1>

  <SearchBar/>
  <Location
      v-for="location in Location"
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
import Location from "../components/Location.vue";
</script>

<style scoped>

</style>