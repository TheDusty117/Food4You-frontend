<template>
  <template v-if="loading === false">

    <div class="container p-4">
      <!-- carrello -->


      <div class="container py-4">

        <div class="restaurant-card ">
          <ul class=" list-unstyled m-0">
            <div class="d-flex align-items-start justify-content-between mb-4">
              <h1 class=" text-center d-none d-md-block">{{ restaurant.name }}</h1>
            </div>
            <h3 class="d-none d-md-block">Contatti</h3>
            <li class="d-flex align-items-center  mb-2">
              <span class="badge-contact">

                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
                </svg>
              </span>
              <div class="d-none d-md-block ms-2 restaurant-contacts">

                {{ restaurant.address }}
              </div>
            </li>
            <li class="d-flex align-items-center  mb-2">
              <span class="badge-contact">

                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </span>
              <div class="d-none d-md-block ms-2 restaurant-contacts">

                {{ restaurant.email }}
              </div>
            </li>
            <li class="d-flex align-items-center  mb-2">
              <span class="badge-contact">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                </svg>
              </span>
              <div class="d-none d-md-block ms-2 restaurant-contacts">
                {{ restaurant.telephone_number }}
              </div>
            </li>
            <!-- <li class="mb-2">

              {{ restaurant.vat }}
            </li> -->

          </ul>
          <figure class="image-card col col-lg-8">
            <img :src="restaurant.img_restaurant" alt="">
          </figure>
        </div>
      </div>


      <div class="container-menu p-4 d-flex">
        <ul class="grid-menu col-8 col-md-8 col-lg-8 col-xl-8 col"> <!-- Imposta la larghezza su 8/12 (2/3) -->
          <li v-for="food in restaurant.food" :key="food.id" class="my-3  card-food">
            <div class="food-image">
              <img :src="food.image" alt="">
              <div class="offcanvas-price">
                <p class="text-black food-item-price">€{{ food.price }}</p>
                <button @click="AddFoodToCart(food)" class="add-food btn btn-success">
                  AGGIUNGI
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
        <Cart class="col-4 col-md-4 col-lg-4 col-xl-4 ms-4" /> <!-- Imposta la larghezza su 4/12 (1/3) -->
      </div>


    </div>
  </template>
</template>

<script>
import axios from 'axios';
import RestaurantsCard from '../components/RestaurantsCard.vue';
import store from '../store'
import Cart from '../pages/Cart.vue'

export default {
  components: {
    RestaurantsCard,
    Cart,

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
.restaurant-contacts {
  font-family: 'Baloo Bhaijaan 2 Variable', sans-serif;

}

.grid-menu {
  h4 {
    font-family: 'Fredoka One', 'sans-serif';
  }

  p {
    font-family: 'Baloo Bhaijaan 2 Variable', sans-serif;
  }
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

  &:hover {
    background-color: #44B925;
    transition: linear 0.1s;
    transform: scale(1.1, 1.1);
  }


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

  h3 {
    font-family: 'Fredoka One', 'sans-serif';
  }


  // background-image: url("/images/NONNO.png");
  // background-repeat: no-repeat;
  // background-size: contain;
  .list-unstyled {
    padding: 1rem;

    li {
      padding: 10px;

      &:hover {
        background-color: #b1eca0;
        transition: linear 0.2s;
        border-radius: 8px;
        font-weight: 600;
        color: white;
        text-shadow: rgb(0, 0, 0) 1px 0 10px;
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
  line-height: 20px;

  svg {
    aspect-ratio: 2/3;
  }
}

.card-food {
  flex-basis: 46%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  &:hover {
    background-color: hwb(107 15% 27%);
    transform: scale(1.1, 1.1);
    transition: transform ease-in-out 0.5s;

    // transform: scale(1.1, 1.1);
    h4 {
      color: white;
      text-shadow: rgb(0, 0, 0) 1px 0 10px;
    }

    h3 {
      color: white;
      text-shadow: rgb(0, 0, 0) 1px 0 10px;
    }

    p {
      color: white;
      text-shadow: rgb(0, 0, 0) 1px 0 10px;
    }

    ul {
      color: white;
      text-shadow: rgb(0, 0, 0) 1px 0 10px;
    }
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
    background-color: rgb(255, 255, 255, 0.7);

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
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
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
