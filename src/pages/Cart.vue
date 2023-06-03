<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card-deck">
          <div v-for="(food, index) in store.Cart" :key="index" class="card mt-3">
            <div class="card-body">
              <h5 class="card-title">{{ food.name }} ({{ food.quantity }} unità)</h5>
              <p class="card-text">€ {{ food.price }}</p>
              <button @click="RemoveFoodToCart(index, food)" class="btn btn-danger m-2">Cancella cibo</button>
              <button @click="RemoveOneFoodFromCart(index, food)" class="btn btn-primary m-2">Rimuovi quantità</button>
            </div>
          </div>
        </div>
        <div v-if="isCartEmpty" class="alert alert-info mt-3">
          Il carrello è vuoto.
        </div>
        <div class="card mt-3">
          <div class="card-body">
            <h5 class="card-title">Totale da pagare</h5>
            <p class="card-text">€ {{ totalToPay }}</p>
          </div>
        </div>
        <button @click="ClearCart" class="btn btn-secondary mt-3">Svuota il carrello</button>
        <PaymentForm />
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import PaymentForm from '../components/PaymentForm.vue'

export default {
  components: {
    PaymentForm
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.initializeCart();
  },
  created() {
    this.initializeCart();
  },
  methods: {
    RemoveFoodToCart(index, food) {
      this.store.Cart.splice(index, 1);
      localStorage.setItem('foods', JSON.stringify(this.store.Cart));
    },
    RemoveOneFoodFromCart(index, food) {
      if (food.quantity > 1) {
        food.quantity -= 1;
      } else {
        this.store.Cart.splice(index, 1);
      }
      localStorage.setItem('foods', JSON.stringify(this.store.Cart));
    },
    ClearCart() {
      this.store.Cart = [];
      localStorage.removeItem('foods');
    },
    initializeCart() {
      const storedData = localStorage.getItem('foods');
      if (storedData) {
        this.store.Cart = JSON.parse(storedData);
      }
    },
  },
  computed: {
    isCartEmpty() {
      return this.store.Cart.length === 0;
    },
    uniqueCart() {
      const uniqueItems = [];
      this.store.Cart.forEach((food) => {
        const existingItem = uniqueItems.find((item) => item.name === food.name);
        if (!existingItem) {
          uniqueItems.push(food);
        }
      });
      return uniqueItems;
    },
    totalToPay() {
      let total = 0;
      this.store.Cart.forEach((food) => {
        total += parseFloat(food.price);
      });
      return total.toFixed(2);
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  border: 3px solid;
}
</style>
