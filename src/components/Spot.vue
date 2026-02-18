<template>
  <h1>Sportanlagen / Plätze:</h1>
  <table class="table-fixed" id="spots-table">
    <thead>
    <tr>
      <th> {{}} </th>
      <th> {{ }} </th>
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
  import { defineProps, onMounted, reactive, ref } from 'vue';
  import axios from 'axios';
  import spots from "@/../db.json";
  import Spot from "@/types/Spot.js";

  const props = defineProps({
    spot: Spot
  })

  console.log(spots);

  const state = reactive({ facilities: [] })

  //const Facilities = ref(null);



  //const { locations, getLocations } = useLocations()
  //onMounted(() => {
    //getLocations()
  //});

  // https://de.vuejs.org/guide/essentials/computed.html denk hier ist die lö

  // https://medium.com/@crisnaxtha/crud-operation-with-vue-js-composite-api-vue-router-and-a-json-server-for-beginner-822cb47693b2

  // try 1
  //import FacilitiesConstance from "../data/FacilitiesConstance.json";
  //const data = ref(FacilitiesConstance);

  // try 2
  //const Data = function() {
    //return import("../data/FacilitiesConstance");
  //}

  onMounted(async () =>
  {
    try {
      const response = await axios.get('http://localhost:8080/Facilities');
      state.facilities = response.data;
    } catch (error) {
      console.log(error);
    }
  })


  console.log(facilities);

</script>

<style scoped>
  table {
    margin: 20px;
    padding: 20px;
  }
</style>


<!-- main src:

https://medium.com/@crisnaxtha/crud-operation-with-vue-js-composite-api-vue-router-and-a-json-server-for-beginner-822cb47693b2
-

-->
