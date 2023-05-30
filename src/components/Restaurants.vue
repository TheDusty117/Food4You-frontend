<template>
  <div>

    <!-- CICLARE CATEGORIE PER FARE BOTTONI RICERCA FILTRO -->
    <RestaurantsCard v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant" />
  </div>
</template>

<script>
import axios from 'axios'
import RestaurantsCard from './RestaurantsCard.vue'

  export default {
    components:{
      RestaurantsCard,
    },
    data(){
      return {
        restaurants: [],
        filteredRestaurants: []

      }
    },
    methods: {
      fetchCategories(){
        
      },
      computed: {
        filterRestoruants(){
          return this.restaurants.filter()
        }
      },

      fetchRestaurants() {
        axios.get('http://127.0.0.1:8000/api/restaurants')
        .then(res=> {
          console.log(res)
          const { results } = res.data
          this.restaurants = results.data
        })
        .catch(err=> {
          console.log(err)
        })
      },
    },
    mounted(){
      this.fetchRestaurants(1)
    },
  }
</script>

<style lang="scss" scoped>

</style>