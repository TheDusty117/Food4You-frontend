<template>
    <DefaultLayout>
      <div class="container">
        <h1>Ristoranti</h1>
      </div>
      <div class="container">
        <Restaurants />
      </div>
  
    </DefaultLayout>
  </template>
  
  <script>

  import Restaurants from '../components/Restaurants.vue';
    export default {
      components: {
        Restaurants,
   
      }
      
    }
  </script>
  
  <style scoped>
  
  </style>