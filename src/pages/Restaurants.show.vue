<template>
  <template v-if="loading === false">

    <div class="container p-4">
      <!-- carrello -->
      <button type="button" class="mb-3 btn btn-primary position-relative">
        <router-link class="text-decoration-none text-uppercase text-white" :to="{ name: 'cart' }"> Cart
        </router-link>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {{ totalQuantity }}
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>

      <div class="restaurant-card ">
        <ul class="list-unstyled mb-4">
          <h1 class="mb-4 text-center">{{ restaurant.name }}</h1>
          <h3>Contatti</h3>
          <li class="mb-2">
            <FontAwesomeIcon icon="fa-solid fa-location-pin" />{{ restaurant.address }}
          </li>
          <li class="mb-2">{{ restaurant.email }}</li>
          <li class="mb-2">{{ restaurant.telephone_number }}</li>
          <li class="mb-2">{{ restaurant.vat }}</li>

        </ul>
        <figure class="image-card col col-lg-6"><img :src="restaurant.img_restaurant" alt=""></figure>
      </div>

      <!-- <ul class="list-unstyled mb-4">
        <div class="category-card">
          <div class="title-type">
            <h3 class="mb-2">Categorie</h3>
          </div>
          <div class="type">
            <li v-for="category in restaurant.categories" :key="category.id" class="">{{ category.name }}</li>
          </div>
        </div>
      </ul> -->

      <div class="container-menu p-4">

        <ul class="grid-menu">
          <li v-for="food in restaurant.food" :key="food.id"
            class="my-3 mx-5 mx-sm-0 col col-md-6 col-lg-6 col-xl-6 card-food">
            <div class="food-image">
              <img :src="food.image" alt="">
              <div class="offcanvas-price">
                <p class="food-item-price">${{ food.price }}</p>
                <button @click="AddFoodToCart(food)" class="add-food btn btn-success">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div class="food-item">
              <div class="food-item-info">
                <h4 class="food-item-name">{{ food.name }}</h4>
              </div>
              <p class="food-item-description">{{ food.description }}</p>
            </div>
          </li>
        </ul>
      </div>
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
      const newRestaurantId = food.restaurant_id;
      const existingFoodIndex = this.store.Cart.findIndex(
        (item) => item.restaurant_id !== newRestaurantId
      );

      if (existingFoodIndex !== -1) {
        // Rimuovi tutti gli elementi dal carrello con restaurant_id diverso
        this.store.Cart.splice(existingFoodIndex);
      }

      const existingFood = this.store.Cart.find((item) => item.name === food.name);
      if (existingFood) {
        existingFood.quantity += 1;
      } else {
        food.quantity = 1;
        this.store.Cart.push(food);
      }

      console.log(this.restaurant)
      localStorage.setItem('foods', JSON.stringify(this.store.Cart));
    },
  },
  created() {
    this.fetchRestaurant(this.slug);

  },
  computed: {
    totalQuantity() {
      let quantity = 0;
      this.store.Cart.forEach((food) => {
        quantity += food.quantity;
      });
      return quantity;
    },
  },
  beforeRouteUpdate(to, from) {
    const newSlug = to.params.slug;
    this.fetchRestaurant(newSlug);
  },
};
</script>

<style lang="scss" scoped>
.container-menu {

  max-width: 900px;
  margin: 0 auto;
}

.grid-restaurant {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}

.food-image {
  position: relative;
  z-index: -5;

  img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
  }
}

.grid-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}

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
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f7f7f7;


  // background-image: url("/images/NONNO.png");
  // background-repeat: no-repeat;
  // background-size: contain;
  .list-unstyled {
    padding: 1rem;
    flex-basis: 0;

    h1 {

      font-family: 'Fredoka One', sans-serif;
      font-size: 2rem;
      font-weight: bold;
    }
  }
}

.card-food {
  flex-basis: 46%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  &:hover .offcanvas-price {
    width: 100%;
    bottom: 0%;
    display: flex;
    background-color: white;
    padding: 1rem;
    justify-content: space-evenly;
    align-items: center;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    opacity: 1;
    position: absolute;

    p {
      margin: 0;
    }
  }
}

.offcanvas-price {
  opacity: 0;
  position: absolute;
}

.category-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f7f7f7;
  margin-top: 1rem;

  .title-type {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .type {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 0.5rem;
  }

}

.image-card {
  margin: 0;
  padding: 0;
  flex-grow: 1;

  img {
    width: 100%;
    border-radius: 8px;
    aspect-ratio: 12/5;
    object-position: center;
    object-fit: cover;
    height: 100%;
  }

}



.food-item {
  min-height: 45%;
  padding: 0.8rem;
  background-color: #f7f7f7;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

}

.food-item-name {
  color: #333;
}

.food-item-price {
  font-size: 0.9rem;
  color: black;
  bottom: 105px;
  font-size: larger;
  font-weight: 700;
}

.food-item-description {
  color: #666;
  margin: 0;
}
</style>
