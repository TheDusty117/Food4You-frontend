<template>
  <template v-if="loading === false">

    <div class="container py-4">
      <button><router-link :to="{ name: 'cart' }">Cart {{ this.store.Cart.length }}</router-link></button>

      <div class="restaurant-card">
        <h1 class="text-3xl font-bold mb-4">{{ restaurant.name }}</h1>
        <h3 class="mb-2">Tipologie</h3>
        <ul class="list-unstyled mb-4">
          <li v-for="category in restaurant.categories" :key="category.id" class="mb-2">{{ category.name }}</li>
        </ul>
      </div>





      <h3 class="mb-2">Menù</h3>
      <ul class="list-unstyled">
        <li v-for="food in restaurant.food" :key="food.id" class="mb-2">
          <div class="food-item">
            <div class="food-item-info">
              <h4 class="food-item-name">{{ food.name }}</h4>
              <p class="food-item-price">Price: {{ food.price }}</p>
            </div>
            <p class="food-item-description">{{ food.description }}</p>
            <button @click="AddFoodToCart(food)" class="btn btn-success">
              ADD
            </button>
          </div>
        </li>
      </ul>
    </div>
  </template>
</template>

<script>
import axios from 'axios';
import RestaurantsCard from '../components/RestaurantsCard.vue';
import store from '../store'

export default {
  components: {
    RestaurantsCard,

  },
  data() {
    return {
      restaurant: null,
      loading: true,
      store
    };
  },
  props: ['slug'],
  methods: {
    fetchRestaurant(slug) {
      this.loading = true;

      axios
        .get(`http://127.0.0.1:8000/api/restaurants/${this.slug}`)
        .then((res) => {
          const { success, restaurant } = res.data;

          if (success) {
            this.restaurant = restaurant;
          } else {
            this.$router.replace({ name: '404' });
          }
        })
        .catch((err) => {
          this.$router.replace({ name: '404' });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    AddFoodToCart(food) {
      console.log(food)
      //if()
      this.store.Cart.push(food)
      localStorage.setItem('foods', JSON.stringify(this.store.Cart))
    }
  },
  created() {
    this.fetchRestaurant(this.slug);

  },
  beforeRouteUpdate(to, from) {
    const newSlug = to.params.slug;
    this.fetchRestaurant(newSlug);
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

h4 {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.1rem;
}

ul {
  list-style-type: none;
}

.restaurant-card {
  margin: 1rem 0;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
  background-color: #f7f7f7;
}

.food-item {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
  background-color: #f7f7f7;
}

.food-item-info {
  flex: 1;
  margin-right: 1rem;
}

.food-item-name {
  color: #333;
}

.food-item-price {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.food-item-description {
  color: #666;
}
</style>
