<template>
    <div class="">
      <h3>{{ restaurant.name }}</h3>
      <p>{{ restaurant.address }}</p>
      <!-- se piu' di 0 categorie, allora stampa tot categorie in base alla lunghezza -->
      <h4>Categoria</h4>
      <ul v-if="restaurant.categories && restaurant.categories.length > 0">
        <li v-for="cat in restaurant.categories" :key="cat.id" >{{ cat.name }}</li>
      </ul>
  
    </div>
  </template>
  
  <script>
    export default {
      props:{
        restaurant: {
          type: Object,
          required: true,
        }
      },
      mounted(){
        console.log(this.restaurant.categories)
      },
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>