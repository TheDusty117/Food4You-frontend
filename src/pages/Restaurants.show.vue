<template>

      <template v-if="loading === false">
        <div class="container py-4">
  
          <h1 class="text-3xl font-bold">
            {{ restaurant.name }}
          </h1>
          
          <h3>Tipologie</h3>
          <li v-for="category in restaurant.categories" :key="category.id" :category="category">
                {{ category.name }}
          </li>
          
          <h3>menù</h3>
          
          <li v-for="food in restaurant.food" :key="food.id" :food="food">
                {{ food.name }} 
          </li> 
          
          
         

          

        </div>
      </template>


  </template>

<script>

import axios from 'axios'
import RestaurantsCard from '../components/RestaurantsCard.vue';
    export default {
        components: {

      RestaurantsCard,
    },
    data() {
      return {
        restaurant: null,
        loading: true
      }
    },
    props: ['slug'],
    methods: {
      fetchRestaurant(slug) {

        this.loading = true

        axios.get(`http://127.0.0.1:8000/api/restaurants/${ this.slug }`) //this.$route.params.slug
        .then(res => {
          const { success, restaurant } = res.data

          if(success) {
            this.restaurant = restaurant
          } else {
            // this.$router.push({ name: '404' })
            this.$router.replace({ name: '404' })
          }

        })
        .catch(err => {
          // console.log(err)
          this.$router.replace({ name: '404' })
        })
        .finally(() => {
          
          this.loading = false

        }) 
      }

    },
    created() {
      this.fetchRestaurant(this.slug)
      
      
    },
    mounted(){
      console.log('mounted:')
    },
    beforeRouteUpdate(to,from) {
      // console.log('to route:',to)
      // console.log('from route:',from)
      const newSlug = to.params.slug
      console.log(newSlug)
      
      this.fetchRestaurant(newSlug)

    }
    }
</script>

<style lang="scss" scoped>

</style>