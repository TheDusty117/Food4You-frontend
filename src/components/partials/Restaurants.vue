<template>
  <div>
    <p v-for="restaurant in restaurants" :key="restaurant.id">{{ restaurant.name }}</p>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data(){
      return {
        restaurants: []
      }
    },
    methods: {
      fetchRestaurants() {
        axios.get('http://127.0.0.1:8000/api/restaurants')
        .then(res=> {
          console.log(res)
          const { results } = res.data
          this.restaurants = results
        })
        .catch(err=> {
          console.log(err)
        })
      }
    },
    mounted(){
      this.fetchRestaurants()
    },
  }
</script>

<style lang="scss" scoped>

</style>