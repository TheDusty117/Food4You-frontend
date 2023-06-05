<template>
  <template v-if="loading === false">

    <div class="container p-4">
      <!-- carrello -->
      <button type="button" class="mb-3 btn-cart btn btn-primary position-relative">
        <router-link class="text-decoration-none text-uppercase text-white" :to="{ name: 'cart' }"> <svg
            xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </router-link>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {{ totalQuantity }}
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>

      <div class="container py-4">

        <div class="restaurant-card ">
          <ul class="d-none d-md-block list-unstyled m-0">
            <h1 class="mb-4 text-center">{{ restaurant.name }}</h1>
            <h3>Contatti</h3>
            <li class="mb-2">
              <span class="badge-contact">

                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
                </svg>
              </span>
              {{ restaurant.address }}
            </li>
            <li class="mb-2">
              <span class="badge-contact">

                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </span>
              {{ restaurant.email }}
            </li>
            <li class="mb-2">
              <span class="badge-contact">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                </svg>
              </span>
              {{ restaurant.telephone_number }}
            </li>
            <!-- <li class="mb-2">

              {{ restaurant.vat }}
            </li> -->

          </ul>
          <figure class="image-card col col-lg-6"><img :src="restaurant.img_restaurant" alt=""></figure>
        </div>
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
          <li v-for="food in restaurant.food" :key="food.id" class="my-3 col col-md-6 col-lg-6 col-xl-6 card-food">
            <div class="food-image">
              <img :src="food.image" alt="">
              <div class="offcanvas-price">
                <p class="food-item-price">€{{ food.price }}</p>
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

  img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
  }
}

.btn-cart {
  background-color: #44B925;
  border: 0;
  font-size: 18px;
}

.grid-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
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
  border-radius: 8px;
  background-color: #f7f7f7;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;



  // background-image: url("/images/NONNO.png");
  // background-repeat: no-repeat;
  // background-size: contain;
  .list-unstyled {
    padding: 1rem;

    li {
      padding: 8px;

      &:hover {
        background-color: #b1eca0;
        transition: linear 0.5s;
        border-radius: 8px;
        // transform: scale(1.1, 1.1);
      }
    }

    h1 {

      font-family: 'Fredoka One', sans-serif;
      font-size: 2rem;
      font-weight: bold;
    }
  }
}

.badge-contact {
  background-color: #44B925;
  padding: 0px 7px 5px;
  border-radius: 50px;

  &:hover {}

  svg {
    aspect-ratio: 2/3;
  }
}

.card-food {
  flex-basis: 46%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  &:hover {
    background-color: #44B925;
    transform: scale(1.1, 1.1);
    transition: transform ease-in-out 0.5s;
    // transform: scale(1.1, 1.1);
  }

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
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

}

.food-item-name {
  color: #333;
  font-weight: 800;
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
