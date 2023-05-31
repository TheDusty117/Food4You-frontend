<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Seleziona le categorie</h5>
        <div class="form-check" v-for="category in categoriesArr" :key="category.id">
          <input class="form-check-input" type="checkbox" @change="selectCategory(category)" :id="category.id">
          <label class="form-check-label" :for="category.id">{{ category.name }}</label>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col" v-for="restaurant in filteredRestaurants" :key="restaurant.id">
        <RestaurantsCard :restaurant="restaurant" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import RestaurantsCard from './RestaurantsCard.vue'

export default {
  components: {
    RestaurantsCard,
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
        return this.restaurants.filter(restaurant => restaurant.categories.some(cat => this.selectedCategories.includes(cat.id)))
      }
      return this.restaurants
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
/* Stili per la checkbox */
.form-check-input {
  width: 20px;
  height: 20px;
  margin-right: 10px;
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
.card {
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 1rem;
}
</style>
