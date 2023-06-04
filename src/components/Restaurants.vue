<template>
  <div class="container cat-rest-container restaurants-list">
    <div class="row">
      <div class="aside col-sm-2">
        <div class="card-body container">
          <h5 class="card-title">Filtri</h5>
          <div class="row justify-content-evenly">
            <div
              class="selected col-12 category-item"
              v-for="category in categoriesArr"
              :key="category.id"
            >
              <div
                class="form-check d-flex flex-column justify-content-start"
                :class="{ 'checked': selectedCategories.includes(category.id) }"
              >
                <label class="form-check-label mb-2" :for="category.id">
                  <img
                    class="logo-categoria"
                    :src="category.category_img"
                    alt=""
                  />
                  <input
                    class="form-check-input"
                    type="checkbox"
                    @change="selectCategory(category)"
                    :id="category.id"
                  />
                  {{ category.name }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content col-sm-10">
        <div class="row mt-3">
          <div
            class="col-lg-6 p-0"
            v-for="restaurant in filteredRestaurants"
            :key="restaurant.id"
          >
            <RestaurantsCard :restaurant="restaurant" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Hero from './Hero.vue';
import RestaurantsCard from './RestaurantsCard.vue';

export default {
  components: {
    RestaurantsCard,
    Hero,
  },
  data() {
    return {
      categoriesArr: [],
      restaurants: [],
      selectedCategories: [],
    };
  },
  computed: {
    filteredRestaurants() {
      if (this.selectedCategories.length > 0) {
        return this.restaurants.filter((restaurant) => {
          return this.selectedCategories.every((catId) => {
            return restaurant.categories.some((cat) => cat.id === catId);
          });
        });
      }
      return this.restaurants;
    },
  },
  methods: {
    selectCategory(cat) {
      const isSelected = this.selectedCategories.includes(cat.id);
      if (isSelected) {
        this.selectedCategories = this.selectedCategories.filter(
          (category) => category !== cat.id
        );
      } else {
        this.selectedCategories.push(cat.id);
      }
    },
    fetchCategories() {
      axios
        .get('http://127.0.0.1:8000/api/categories')
        .then((res) => {
          const { results } = res.data;
          this.categoriesArr = results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchRestaurants() {
      axios
        .get(
          `http://127.0.0.1:8000/api/restaurants/categories/${this.categoryid}`
        )
        .then((res) => {
          const { results } = res.data;
          this.restaurants = results.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchAllRestaurants() {
      axios
        .get('http://127.0.0.1:8000/api/restaurants')
        .then((res) => {
          const { results } = res.data;
          this.restaurants = results.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.fetchAllRestaurants();
    this.fetchCategories();
  },
};
</script>

<style lang="scss" scoped>
/* Stili per la checkbox */
.form-check-input {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  //nascondi quadratino
  display: none;
}

.form-check-input:checked + .form-check-label {
  color: red;
}

.form-check-input:checked + .form-check-label .logo-categoria {
  background-color: red;
  border-color: red;
}

.checked .form-check-label .logo-categoria {
  background-color: red;
  border-color: red;
}

/* Stili per il testo delle categorie */
.form-check-label {
  font-weight: bold;
}

.logo-categoria {
  width: 50px;
  transition: background-color 0.3s, border-color 0.3s;
}

/* Altri stili */

// ...

</style>
