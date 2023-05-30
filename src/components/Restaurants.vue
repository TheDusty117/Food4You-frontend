<template>
  <div>
    <!-- CREA UNA checkbox
    LA CHECKBOX ON CHANGE -- VA A CAMBIARE categoryid
    E RILANCIA FETCHRESTAURANT -->
    <div v-for="category in categoriesArr">
      <label for="">{{ category.name }}</label>
      <input type="checkbox" @click="selectCategory(category)" name="" id="">
    </div>
    
    <!-- CICLARE CATEGORIE PER FARE BOTTONI RICERCA FILTRO -->
    <RestaurantsCard v-for="restaurant in filteredRestaurants" :key="restaurant.id" :restaurant="restaurant" />
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
        categoriesArr: [],

        restaurants: [],
        // categoryid: 2 //passo a category giu null,(gli dico se non passa category dammi tutti i restaurants)
        selectedCategories: []

      }
    },
    computed: {
        filteredRestaurants(){
        console.log(this.selectedCategories)

          if(this.selectedCategories.length>0){
            return this.restaurants.filter(restaurant=>restaurant.categories.some(cat=>this.selectedCategories.includes(cat.id)))
          }
          return this.restaurants
        }
      },
    methods: {
      swapCat(cat){
        this.categoryid = cat
        this.fetchRestaurants()
      },

      selectCategory(cat){
        const isselected=this.selectedCategories.some(category=>category===cat.id)
        if(isselected){
          this.selectedCategories=this.selectedCategories.filter(category=>category!=cat.id)
        } else {
          this.selectedCategories.push(cat.id)
        }
        // console.log(this.selectedCategories)
      },

      fetchCategories(){
        axios.get(`http://127.0.0.1:8000/api/categories`)
        .then(res=> {
          console.log(res)
          const { results } = res.data
          this.categoriesArr = results
        })
        .catch(err=> {
          console.log(err)
        })
      },
      

      fetchRestaurants() {
        axios.get(`http://127.0.0.1:8000/api/restaurants/categories/${this.categoryid}`)
        .then(res=> {
          console.log(res)
          const { results } = res.data
          this.restaurants = results.data
        })
        .catch(err=> {
          console.log(err)
        })
      },

      fetchAllRestaurants() {
        axios.get(`http://127.0.0.1:8000/api/restaurants`)
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
      // this.fetchRestaurants(1)
      this.fetchAllRestaurants(1)
      this.fetchCategories()


    },
  }
</script>

<style lang="scss" scoped>

</style>