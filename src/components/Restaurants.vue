<template>

  <section class="hero-section">
    <!-- <Hero/> -->
  </section>




  <div class="container cat-rest-container restaurants-list">
      <div class="card-body container">
        <h5 class="card-title">Oggi ho voglia di...</h5>
        <div class="row justify-content-evenly">
          <div class="col-2 category-item" v-for="category in categoriesArr" :key="category.id">
            <div class="form-check d-flex justify-content-center">
              <input class="form-check-input" type="checkbox" @change="selectCategory(category)" :id="category.id" >
              <label class="form-check-label mb-2" :for="category.id">{{ category.name }}</label>
            </div>
          </div>
        </div>
      </div>

    <div class="row mt-3">
      <div class="col-lg-6" v-for="restaurant in filteredRestaurants" :key="restaurant.id">
        <RestaurantsCard :restaurant="restaurant" />
      </div>
    </div>
  </div>

  
</template>


<script>
import axios from 'axios'

import Hero from './Hero.vue';

import RestaurantsCard from './RestaurantsCard.vue'

export default {
  components: {
    RestaurantsCard,
    Hero,
  },
  data() {
    return {
      categoriesArr: [],
      restaurants: [],
      selectedCategories: []
    }
  },
  computed: {
    filteredRestaurants() {
      if (this.selectedCategories.length > 0) {
        return this.restaurants.filter(restaurant => {
        return this.selectedCategories.every(catId => {
        return restaurant.categories.some(cat => cat.id === catId);
      });
    });
  }
  return this.restaurants;
    }
  },
  methods: {
    selectCategory(cat) {
      const isSelected = this.selectedCategories.includes(cat.id)
      if (isSelected) {
        this.selectedCategories = this.selectedCategories.filter(category => category !== cat.id)
      } else {
        this.selectedCategories.push(cat.id)
      }
    },
    fetchCategories() {
      axios.get(`http://127.0.0.1:8000/api/categories`)
        .then(res => {
          const { results } = res.data
          this.categoriesArr = results
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchRestaurants() {
      axios.get(`http://127.0.0.1:8000/api/restaurants/categories/${this.categoryid}`)
        .then(res => {
          const { results } = res.data
          this.restaurants = results.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchAllRestaurants() {
      axios.get(`http://127.0.0.1:8000/api/restaurants`)
        .then(res => {
          const { results } = res.data
          this.restaurants = results.data
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  mounted() {
    this.fetchAllRestaurants()
    this.fetchCategories()
  },
}
</script>

<style lang="scss" scoped>


//qui gestisci sia cat che restaurants
.cat-rest-container{
  color: black;
}

.active{
  color: #F7A42C;
}

.inactive{
  color: gray;
}

/* Stili per la checkbox */
.form-check-input {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  //nascondi quadratino
  // display: none;
}

.form-check-input:checked {
  background-color: #007bff;
  border-color: #007bff;
}

/* Stili per il testo delle categorie */
.form-check-label {
  font-weight: bold;
}

/* Stili per la card */

.card-title{
    text-transform: uppercase;
    text-align: center;
    font-family: 'Fredoka One', sans-serif;
    color: #F7A42C;
    font-size: 40px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
  }
.card {
  // background-image: url(../../public/img/black-n-white-bg-filters.png);
  background-color: #F7A42C;
  background-size: cover;
  // height: 00px;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100vw;
  
  .form-check{
    font-family: 'Fredoka One', sans-serif;
    color: black;
    font-size: 24px;
    background-color: white;
    border-radius: 999px;
    cursor: pointer;
    opacity: 0;
    position: absolute;
  }
}


</style>
