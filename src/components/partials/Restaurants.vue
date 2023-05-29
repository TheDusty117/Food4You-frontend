<template>
  <div class="d-flex gap-4">
    
    <!-- CICLARE CATEGORIE PER FARE BOTTONI RICERCA FILTRO -->

    <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant" />
  </div>
</template>

<script>
import axios from 'axios'
import RestaurantCard from './RestaurantCard.vue'

  export default {
    components:{
      RestaurantCard,
    },
    data(){
      return {
        restaurants: []
      }
    },
    methods: {
      // fetchCategories() {
      //   axios.get('http://127.0.0.1:8000/api/restaurants')
      //   .then(res=> {
      //     console.log(res)
      //     const { results } = res.data
      //     this.categories = results.data
      //   })
      //   .catch(err=> {
      //     console.log(err)
      //   })
      // },

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
      }
    },
    mounted(){
      this.fetchRestaurants(1)
    },
  }
</script>

<style lang="scss" scoped>

</style>